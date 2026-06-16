# Methodology

## How Sources Are Collected

GIS data sources in this catalog are collected from:

1. Professional GIS experience and domain knowledge
2. Public data portal registries (CKAN, GeoNetwork, data.gov)
3. Community-contributed lists (freegisdata.rtwilson.com, GIS StackExchange)
4. Academic and research institution geospatial portals
5. International organizations (UN, World Bank, FAO, NASA, USGS, ESA)
6. OpenStreetMap and related community projects
7. Commercial GIS software company resources

## How Categories Are Assigned

Each source is assigned to one or more categories based on:

- **Primary data type** (Satellite Imagery, DEM/Elevation, Vector, Raster, Tile)
- **Thematic focus** (Climate, Hydrology, Agriculture, Humanitarian)
- **Coverage** (Global, Regional, Country-specific)
- **Access model** (Free, Free with account, Open API)

Sources that do not fit clearly are marked "Unclassified — Needs Review."

## How Link Status Is Checked

Link checking is performed by `scripts/check_urls.py`:

1. Reads URLs from the Master_Index or its JSON/CSV export.
2. Sends HTTP HEAD requests (falling back to GET if HEAD is not allowed).
3. Classifies responses:
   - **Working** — HTTP 2xx
   - **Redirected** — HTTP 3xx
   - **Broken** — HTTP 4xx or 5xx
   - **Timeout** — No response within timeout window
   - **SSL Error** — Certificate issues
   - **Needs Review** — Could not be definitively classified
4. Results are saved to `data/link_audit_results.csv` and `.json`.

## How GeoJSON Coordinates Are Treated

The file `data/gis_sources_map.geojson` contains point features representing GIS data sources.

**Important:** Most coordinates are **symbolic or placeholder values**. For example:
- `[0, 0]` — used for global sources (no specific location)
- `[15, 15]` — generic Africa region marker
- `[10, 50]` — generic Europe marker
- `[100, 34]` — generic Asia marker

These coordinates represent approximate regional centroids, not precise source locations. They are suitable for thematic maps showing global distribution of GIS resources, but **not for spatial analysis or geocoding**.

Features with symbolic coordinates include the property:
```
"coordinate_status": "symbolic_or_placeholder"
```

Real coordinates are not invented. If you have verified coordinates for specific sources, please contribute them.

## Known Limitations

1. **Link freshness** — URLs may become stale between audit runs.
2. **Coordinate accuracy** — GeoJSON coordinates are approximate regional markers.
3. **Coverage completeness** — Not all GIS data sources on the internet are included.
4. **Free GIS Data sheet** — The `Free_GIS_Data` sheet is maintained from freegisdata.rtwilson.com. Updates depend on the source website's availability.
5. **Category overlap** — Some sources may fit multiple categories.
6. **Bi-lingual content** — The About and How_to_Search sheets are bilingual (English/Arabic), but the main index is primarily in English.
