# GitHub Pages Notes

## How This Works

GitHub Pages supports **static files only** (HTML, CSS, JavaScript, JSON). It **cannot** run Flask, Python, or any server-side code.

## GitHub Pages Demo

The file `docs/index.html` is the static GitHub Pages demo page.

It loads data from `docs/data/master_index.json` and `docs/data/free_gis_data.json` using JavaScript `fetch()`. Since both files are in the same repository, no CORS issues arise.

## Local Use vs. GitHub Pages

| Feature | Flask App (app/app.py) | Static Page (docs/index.html) |
|---------|----------------------|-------------------------------|
| Requires Python | Yes | No |
| Requires server | Yes (Flask) | No (browser only) |
| Data source | JSON or Excel | JSON only |
| Updates dynamically | Yes | No (static snapshot) |
| Search/filter | Yes (server + client) | Yes (client-side JS) |

## How to Serve Locally

To test the static page locally, open `docs/index.html` directly in a browser, or serve it:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/docs/

## How to Deploy to GitHub Pages

1. Go to your repository **Settings > Pages**.
2. Under "Source," select **Deploy from a branch**.
3. Choose branch `main` and folder `/docs`.
4. Click **Save**.

The page will be available at:
`https://<username>.github.io/gis-data-repositories-professional-2026/`

## Updating the Demo

When the Excel workbook is updated, re-run:

```bash
python scripts/export_excel_to_csv_json.py
cp data/master_index.json docs/data/
cp data/free_gis_data.json docs/data/
```

Or simply run `prepare_release.py` which also exports fresh data.
