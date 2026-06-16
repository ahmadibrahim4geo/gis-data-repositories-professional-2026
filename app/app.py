import sys
from pathlib import Path
from flask import Flask, jsonify, render_template, request

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
JSON_PATH = DATA_DIR / "master_index.json"

app = Flask(__name__)


def load_data():
    if not JSON_PATH.exists():
        print(f"Data file not found: {JSON_PATH}", file=sys.stderr)
        return [], [], [], []

    try:
        import json
        with open(JSON_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        print(f"Error loading data: {e}", file=sys.stderr)
        return [], [], [], []

    categories = sorted(set(
        d.get("Category", "") or d.get("category", "") for d in data
        if d.get("Category") or d.get("category")
    ))
    statuses = sorted(set(
        d.get("Link Status", "") or d.get("status", "") for d in data
        if d.get("Link Status") or d.get("status")
    ))
    data_types = sorted(set(
        d.get("Data Type", "") or d.get("data_type", "") for d in data
        if d.get("Data Type") or d.get("data_type")
    ))

    return data, categories, statuses, data_types


def get_val(d, *keys):
    for k in keys:
        v = d.get(k)
        if v:
            return v
    return ""


DATA, CATEGORIES, STATUSES, DATA_TYPES = load_data()


@app.route("/")
def index():
    total = len(DATA)
    working = sum(1 for d in DATA if get_val(d, "Link Status", "status") == "Working")
    redirected = sum(1 for d in DATA if get_val(d, "Link Status", "status") == "Redirected")
    broken = total - working - redirected

    return render_template(
        "index.html",
        total=total,
        working=working,
        redirected=redirected,
        broken=broken,
        num_categories=len(CATEGORIES),
        categories=CATEGORIES,
        statuses=STATUSES,
        data_types=DATA_TYPES,
        data=DATA,
    )


@app.route("/api/search")
def api_search():
    q = request.args.get("q", "").lower()
    cat = request.args.get("category", "")
    st = request.args.get("status", "")
    dt = request.args.get("data_type", "")

    results = []
    for d in DATA:
        name = get_val(d, "Source Name", "name").lower()
        desc = get_val(d, "Description", "description").lower()
        url = get_val(d, "Updated URL", "Original URL", "URL", "url").lower()
        domain = get_val(d, "Domain", "domain").lower()
        category = get_val(d, "Category", "category")
        status = get_val(d, "Link Status", "status")
        dtype = get_val(d, "Data Type", "data_type")
        notes = get_val(d, "Notes", "notes").lower()

        if q and q not in name and q not in desc and q not in url and q not in domain and q not in notes:
            continue
        if cat and category != cat:
            continue
        if st and status != st:
            continue
        if dt and dtype != dt:
            continue
        results.append(d)

    return jsonify(results[:200])


if __name__ == "__main__":
    if not DATA:
        print("No data loaded. Make sure data/master_index.json exists.")
        print("Run: python scripts/export_excel_to_csv_json.py")
        sys.exit(1)
    print(f"GIS Data Repositories — Flask App")
    print(f"Loaded {len(DATA):,} entries, {len(CATEGORIES)} categories")
    print(f"Open http://127.0.0.1:5000")
    app.run(debug=False, port=5000)
