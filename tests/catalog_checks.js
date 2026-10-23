/* Zero-dependency smoke checks: node tests/catalog_checks.js */
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const html = read("docs/index.html");
const flask = read("app/templates/index.html");
const js = read("docs/assets/catalog.js");
const css = read("docs/assets/catalog.css");
assert.equal(js, read("app/static/app.js"), "Keep browser and Flask scripts synchronized");
assert.equal(css, read("app/static/style.css"), "Keep both design stylesheets synchronized");
assert.doesNotThrow(() => new vm.Script(js), "Browser JS must parse");
assert.match(html, /data\/master_index\.json/, "GitHub Pages must load its snapshot");
assert.match(flask, /\{\{ data \| tojson \}\}/, "Flask must safely encode source data");
assert.match(html, /assets\/catalog\.js/, "Static script reference");
assert.match(flask, /url_for\('static', filename='app\.js'\)/, "Flask script reference");
assert.doesNotMatch(js, /\.innerHTML\s*=/, "Do not inject external source strings into HTML");
assert.match(js, /new URL\(/, "Validate external source URLs");
assert.match(js, /pageSize = 24/, "Results should be paginated");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, "Duplicate IDs in static page");
for (const m of js.matchAll(/\$\("([^"]+)"\)/g)) {
  assert.ok(ids.includes(m[1]), "Missing HTML target ID: " + m[1]);
}
for (const id of ["search", "filter-category", "filter-type", "filter-status", "filter-coverage",
                   "filter-access", "favorites-only", "sort", "results", "pager", "export-csv"]) {
  assert.ok(ids.includes(id), "Missing essential UI element: " + id);
}
const records = JSON.parse(read("docs/data/master_index.json"));
assert.ok(Array.isArray(records) && records.length > 2000, "Catalog snapshot missing or unexpectedly small");
assert.ok(records.some(r => r["Source Name"] || r.name), "Catalog missing source names");
assert.ok(records.some(r => r["Category"] || r.category), "Catalog missing categories");
const flaskData = JSON.parse(read("data/master_index.json"));
assert.equal(records.length, flaskData.length, "Static and Flask catalog counts should agree");
console.log("GIS Data Explorer smoke checks passed:", records.length, "records,", ids.length, "unique UI IDs.");
