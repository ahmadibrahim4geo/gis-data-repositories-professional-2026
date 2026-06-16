# Contributing to GIS Data Repositories Professional 2026

Thank you for your interest in improving this GIS data catalog!

## How to Suggest New GIS Sources

1. Open an issue with the **New Source** template.
2. Include:
   - Source Name
   - URL
   - Category (e.g., Satellite Imagery, DEM/Elevation, Administrative Boundaries)
   - Coverage (Global, Regional, Country-specific)
   - Data Type (Vector, Raster, Tile, API, CSV)
   - Access Type (Free, Free with account, Open)
   - Any known license information

## How to Report Broken Links

1. Open an issue with the **Broken Link** label.
2. Include the source name and the URL that is broken.
3. If you know a working replacement URL, please share it.

## How to Improve Categories

- If a source is miscategorized, open an issue or pull request.
- Suggest new categories if existing ones do not fit.

## How to Submit Pull Requests

1. Fork the repository.
2. Create a feature branch: `git checkout -b my-improvement`
3. Make your changes.
4. Run `python scripts/export_excel_to_csv_json.py` to refresh exports.
5. Commit with a clear message.
6. Push and open a Pull Request.

## Required Fields for New Sources

| Field | Required | Description |
|-------|----------|-------------|
| Name | Yes | Source / portal name |
| URL | Yes | Working URL |
| Category | Yes | One of the existing categories or a new one |
| Coverage | Yes | Geographic coverage |
| Data Type | Yes | Vector, Raster, Tile, API, etc. |
| Access Type | Yes | Free, Free with account, etc. |
| License | If known | License of the source data |

## Code Style

- Python: Follow PEP 8.
- Use `pathlib` for paths — no hardcoded absolute paths.
- Use UTF-8 encoding for all text files.
