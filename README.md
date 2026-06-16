# GIS Data Repositories Professional 2026

A curated professional catalog of free and open GIS data repositories, geospatial portals, satellite imagery sources, DEM/elevation datasets, administrative boundaries, humanitarian data, and GIS software resources.

## Features

- **2,660+ curated GIS data sources** across 40+ categories
- **Bilingual interface** (English / العربية)
- **Interactive web app** (Flask) with search, filter, and status badges
- **Static GitHub Pages demo** — no backend required
- **Link audit system** to track URL health
- **CSV / JSON exports** for integration with other tools
- **GeoJSON map** of GIS data sources
- **Excel workbook** with Dashboard, Master Index, Data Dictionary, and more

## Dataset Contents

| Sheet | Records | Description |
|-------|---------|-------------|
| Master_Index | 2,660 | All GIS data sources with status, category, URL, and metadata |
| Free_GIS_Data | 441 | Sources from freegisdata.rtwilson.com |
| Recommended_2026 | 25 | Top curated picks for 2026 |
| Link_Audit | 1,387 | URL health check results |
| Dashboard | — | Summary statistics and KPIs |
| 30+ category sheets | Various | Resources grouped by theme |

## Folder Structure

```
GIS_Data_Repositories_Professional_2026/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── .gitignore
├── requirements.txt
├── data/
│   ├── GIS_Data_Repositories_Professional_2026.xlsx
│   ├── master_index.csv / .json
│   ├── free_gis_data.csv / .json
│   └── gis_sources_map.geojson
├── app/
│   ├── app.py
│   ├── templates/index.html
│   └── static/style.css, app.js
├── scripts/
│   ├── export_excel_to_csv_json.py
│   ├── check_urls.py
│   ├── update_free_gis_data.py
│   ├── rebuild_dashboard_stats.py
│   └── prepare_release.py
├── docs/
│   ├── index.html (GitHub Pages demo)
│   ├── data/ (static JSON for GitHub Pages)
│   ├── methodology.md
│   ├── data_dictionary.md
│   ├── github_pages_notes.md
│   └── screenshots/
├── assets/
│   └── logo.png (optional — add your own)
└── release/
    └── GIS_Data_Repositories_Professional_2026_v1.0.0.zip
```

## How to Use the Excel Workbook

Open `data/GIS_Data_Repositories_Professional_2026.xlsx` in Excel or LibreOffice.

- **Master_Index** — the primary data sheet with filters enabled
- **Dashboard** — auto-calculated summary statistics
- **Link_Audit** — results from URL health checks
- **Free_GIS_Data** — automatically maintained free sources

## How to Run the Local Flask App

```bash
cd app
pip install -r ../requirements.txt
python app.py
```

Then open http://127.0.0.1:5000

## How to Use the Static GitHub Pages Version

Open `docs/index.html` in a browser, or visit the GitHub Pages URL for this repository.

The static version loads JSON data directly with no backend required.

## How to Run Scripts

```bash
# Export Excel data to CSV and JSON
python scripts/export_excel_to_csv_json.py

# Check URL health (limit to first 50)
python scripts/check_urls.py --limit 50

# Update Free GIS Data sheet (if source available)
python scripts/update_free_gis_data.py

# Prepare release ZIP
python scripts/prepare_release.py
```

## How to Check Links

```bash
python scripts/check_urls.py --limit 100
```

Results are saved to `data/link_audit_results.csv` and `data/link_audit_results.json`.

## Screenshots

*Screenshots can be added to `docs/screenshots/`*

## Data License Notice

**Code:** MIT License (see LICENSE file).

**Curated Index / Catalog:** Licensed under CC BY 4.0. You may share and adapt with attribution.

**Original Datasets and Portals:** Remain under their own licenses (Public Domain, CC BY, ODbL, etc.). This project does not rehost any third-party data — it catalogs links to original sources.

## Suggested Citation

```
Ahmad Ibrahim. (2026). GIS Data Repositories Professional 2026.
https://github.com/ahmadibrahim4geo/gis-data-repositories-professional-2026
```

## Maintainer

**Ahmad Ibrahim** – GIS Specialist

## GitHub Topics

`gis` `geospatial` `open-data` `qgis` `arcgis` `geojson` `remote-sensing` `spatial-data` `maps` `gis-data`
