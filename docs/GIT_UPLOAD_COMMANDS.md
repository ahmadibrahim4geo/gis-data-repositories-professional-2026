# Git Upload Commands

## Prerequisites

- Git installed
- GitHub account
- GitHub CLI (`gh`) installed (recommended)

## Initialize and Commit

```bash
cd "C:\Users\ahmad\Desktop\GIS_Data_Repositories_Professional_2026"

git init -b main
git add .
git commit -m "Initial release: GIS Data Repositories Professional 2026"
```

## Create GitHub Repository and Push

### Method 1: Using GitHub CLI (recommended)

```bash
gh repo create gis-data-repositories-professional-2026 --public --source=. --remote=origin --push
```

### Method 2: Manual Remote

```bash
git remote add origin https://github.com/ahmadibrahim4geo/gis-data-repositories-professional-2026.git
git branch -M main
git push -u origin main
```

## Create a GitHub Release

After pushing, create a release for version 1.0.0:

### Method 1: Using GitHub CLI

```bash
gh release create v1.0.0 \
  --title "GIS Data Repositories Professional 2026 v1.0.0" \
  --notes-file release/RELEASE_NOTES_v1.0.0.md \
  "release/GIS_Data_Repositories_Professional_2026_v1.0.0.zip" \
  "release/GIS_Data_Repositories_Professional_2026_v1.0.0_SHA256.txt"
```

### Method 2: Manual via GitHub Website

1. Go to https://github.com/ahmadibrahim4geo/gis-data-repositories-professional-2026/releases
2. Click "Create a new release"
3. Tag: `v1.0.0`
4. Title: `GIS Data Repositories Professional 2026 v1.0.0`
5. Description: Paste contents of `release/RELEASE_NOTES_v1.0.0.md`
6. Upload the ZIP and SHA256 files from `release/`
7. Click "Publish release"

## Enable GitHub Pages

1. Go to repository **Settings > Pages**
2. Source: **Deploy from branch**
3. Branch: `main`, folder: `/docs`
4. Click **Save**
5. Your site will be published at:
   `https://ahmadibrahim4geo.github.io/gis-data-repositories-professional-2026/`
