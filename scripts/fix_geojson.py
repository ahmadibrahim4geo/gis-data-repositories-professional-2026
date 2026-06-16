import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
GEOJSON_PATH = PROJECT_ROOT / "data" / "gis_sources_map.geojson"

SYMBOLIC_COORDS = {
    (0, 0), (15, 15), (18, -1), (15, -1), (0, 75),
    (100, 34), (-77, 18), (-60, -15), (10, 50), (-100, 40),
}

with open(GEOJSON_PATH, "r", encoding="utf-8") as f:
    geojson = json.load(f)

count = 0
for feat in geojson.get("features", []):
    coords = feat.get("geometry", {}).get("coordinates", [0, 0])
    props = feat.setdefault("properties", {})
    key = (int(coords[0]), int(coords[1]))
    if key in SYMBOLIC_COORDS:
        if "coordinate_status" not in props:
            props["coordinate_status"] = "symbolic_or_placeholder"
            count += 1
    elif "coordinate_status" not in props:
        props["coordinate_status"] = "unverified"

with open(GEOJSON_PATH, "w", encoding="utf-8") as f:
    json.dump(geojson, f, ensure_ascii=False, indent=2)

print(f"Updated {count} features with coordinate_status=symbolic_or_placeholder")
print(f"Total features: {len(geojson.get('features', []))}")
