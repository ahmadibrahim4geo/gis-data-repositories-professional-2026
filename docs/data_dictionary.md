# Data Dictionary

## Master_Index Sheet

| Column | Description | Example |
|--------|-------------|---------|
| ID | Unique record identifier | 1, 2, 3 |
| Original Sheet | Source sheet from original file | Global, Country, Thematic |
| Category | Content category | Satellite Imagery, DEM/Elevation |
| Source Name | Name of the data source or portal | Natural Earth |
| Description | Brief description of available data | Raster and vector cultural/physical data |
| Original URL | Original URL as first recorded | http://naturalearthdata.com |
| Updated URL | Most recent working URL (if different) | https://naturalearthdata.com |
| Domain | Extracted domain | naturalearthdata.com |
| Data Type | Type of data available | Vector, Raster, Tile, API |
| Coverage | Geographic coverage | Global, Africa, Europe |
| Format | File formats available | Shapefile, GeoJSON, KML |
| Access Type | How to access | Free Access, Free with Account |
| Link Status | Current URL health | Working, Redirected, Broken |
| HTTP Status | HTTP status code | 200, 301, 404 |
| Risk Level | Assessed risk of link becoming stale | Low, Medium, High |
| Quality Score | Quality rating (1-5) | 4 |
| Last Checked | Date of last URL verification | 2026-06-16 |
| Action Taken | What action was performed | Upgraded to HTTPS |
| Notes | Additional information | |

## Link_Audit Sheet

| Column | Description |
|--------|-------------|
| URL | Checked URL |
| Final URL | Final URL after redirects |
| Domain | Domain of the URL |
| Status | Working / Redirected / Broken / Timeout / Needs Review |
| HTTP Code | HTTP status code |
| Redirected | Yes / No |
| Risk | Risk assessment |
| Issue | Error details if any |
| Recommended Action | Suggested next step |

## Free_GIS_Data Sheet

| Column | Description |
|--------|-------------|
| Source | Source name from freegisdata.rtwilson.com |
| URL | Domain-level URL |
| Category | Assigned GIS category |
| Coverage | Geographic scope |
| License | Data license if known |
| Notes | Additional context |
