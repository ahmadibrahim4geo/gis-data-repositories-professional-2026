"""
Prepare release ZIP package with SHA256 checksum and release notes.

Usage:
    python scripts/prepare_release.py
"""

import sys
import zipfile
import hashlib
import shutil
from datetime import date
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
APP_DIR = PROJECT_ROOT / "app"
SCRIPTS_DIR = PROJECT_ROOT / "scripts"
DOCS_DIR = PROJECT_ROOT / "docs"
ASSETS_DIR = PROJECT_ROOT / "assets"
RELEASE_DIR = PROJECT_ROOT / "release"

VERSION = "1.0.0"
ZIP_NAME = f"GIS_Data_Repositories_Professional_2026_v{VERSION}.zip"
ZIP_PATH = RELEASE_DIR / ZIP_NAME
SHA_PATH = RELEASE_DIR / f"GIS_Data_Repositories_Professional_2026_v{VERSION}_SHA256.txt"
NOTES_PATH = RELEASE_DIR / f"RELEASE_NOTES_v{VERSION}.md"

EXCLUDE_DIRS = {
    ".git", "__pycache__", ".venv", "venv", "env",
    "_backup_before_github_cleanup", "node_modules",
}

EXCLUDE_FILES = {
    ".pyc", ".pyo", ".DS_Store", "Thumbs.db", ".tmp", ".log",
    ".bak", ".swp", ".swo",
}

EXCLUDE_PREFIXES = {
    "~$",
}

EXCLUDE_PATHS = {
    PROJECT_ROOT / ".gitignore" / "...",
}

INCLUDED_PATHS = [
    PROJECT_ROOT / "README.md",
    PROJECT_ROOT / "LICENSE",
    PROJECT_ROOT / "CHANGELOG.md",
    PROJECT_ROOT / "CONTRIBUTING.md",
    PROJECT_ROOT / "CODE_OF_CONDUCT.md",
    PROJECT_ROOT / "requirements.txt",
    PROJECT_ROOT / ".gitignore",
]


def should_include(path, rel_path_str):
    name = path.name

    if path.is_dir():
        if name in EXCLUDE_DIRS:
            return False
        return True

    if any(name.startswith(p) for p in EXCLUDE_PREFIXES):
        return False

    if name.endswith(tuple(EXCLUDE_FILES)):
        return False

    if ".zip" in name and "release" in str(path):
        return False

    return True


def collect_files():
    files = []
    for base in [PROJECT_ROOT / "data", PROJECT_ROOT / "app", PROJECT_ROOT / "scripts",
                  PROJECT_ROOT / "docs", PROJECT_ROOT / "assets"]:
        if base.exists():
            for item in base.rglob("*"):
                if should_include(item, str(item.relative_to(PROJECT_ROOT))):
                    files.append(item)

    for p in INCLUDED_PATHS:
        if p.exists():
            files.append(p)

    seen = set()
    unique = []
    for f in files:
        if f not in seen:
            seen.add(f)
            unique.append(f)

    unique.sort(key=lambda x: str(x))
    return unique


def create_release_notes():
    notes = f"""# Release Notes — GIS Data Repositories Professional 2026 v{VERSION}

## Overview

A curated professional catalog of free and open GIS data repositories, geospatial portals,
satellite imagery sources, DEM/elevation datasets, administrative boundaries, humanitarian data,
and GIS software resources.

## Contents

- **Excel Workbook** with 67 sheets including Master_Index (2,660+ records), Dashboard,
  Link_Audit, Recommended_2026, Free_GIS_Data, and 30+ thematic category sheets
- **Flask Web App** with search, filter, and status badge interface
- **Static GitHub Pages Demo** (docs/index.html) — no backend required
- **Python Scripts** for CSV/JSON export, URL link checking, and data updates
- **GeoJSON Map** of documented GIS data sources
- **CSV and JSON Exports** of master index and free GIS data

## How to Use the Excel Workbook

Open `data/GIS_Data_Repositories_Professional_2026.xlsx` in Excel or LibreOffice.
The Master_Index sheet contains all records with filters enabled.

## How to Run the Local App

```bash
cd app
pip install -r ../requirements.txt
python app.py
```

Then open http://127.0.0.1:5000

## How to Open the Static Docs Page

Open `docs/index.html` directly in a browser.

## How to Run the Link Checker

```bash
python scripts/check_urls.py --limit 100
```

## Known Limitations

- GeoJSON coordinates are symbolic placeholders — not suitable for spatial analysis
- Link status reflects the date of last check; URLs may change over time
- Free_GIS_Data sheet depends on availability of freegisdata.rtwilson.com
- Not all GIS data sources on the internet are cataloged

## License Notice

- **Code:** MIT License
- **Curated Index:** Recommended CC BY 4.0
- **Original Datasets:** Remain under their own licenses

---
Generated: {date.today().isoformat()}
"""
    with open(NOTES_PATH, "w", encoding="utf-8") as f:
        f.write(notes)
    print(f"  Release notes: {NOTES_PATH.name}")


def main():
    print(f"GIS Data Repositories — Release Builder v{VERSION}")
    print(f"Date: {date.today().isoformat()}")
    print()

    if not RELEASE_DIR.exists():
        RELEASE_DIR.mkdir(parents=True)

    files = collect_files()
    print(f"Files to include: {len(files)}")
    print()

    for f in files:
        rel = f.relative_to(PROJECT_ROOT)
        print(f"  {rel}")

    print()
    print(f"Creating ZIP: {ZIP_NAME}")

    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for file_path in files:
            rel_path = file_path.relative_to(PROJECT_ROOT)
            zf.write(file_path, arcname=rel_path)

    zip_size = ZIP_PATH.stat().st_size
    print(f"  ZIP size: {zip_size:,} bytes")
    print(f"  ZIP path: {ZIP_PATH}")

    print()
    print(f"Generating SHA256...")
    sha256 = hashlib.sha256()
    with open(ZIP_PATH, "rb") as f:
        for block in iter(lambda: f.read(65536), b""):
            sha256.update(block)

    checksum = sha256.hexdigest()
    with open(SHA_PATH, "w") as f:
        f.write(f"{checksum}  {ZIP_NAME}\n")
    print(f"  SHA256: {checksum}")
    print(f"  SHA file: {SHA_PATH}")

    print()
    print("Creating release notes...")
    create_release_notes()

    print()
    print("=" * 50)
    print("Release package created successfully:")
    print(f"  ZIP:  {ZIP_PATH}")
    print(f"  SHA:  {SHA_PATH}")
    print(f"  Notes: {NOTES_PATH}")


if __name__ == "__main__":
    main()
