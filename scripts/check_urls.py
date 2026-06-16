"""
Cross-platform Python URL link checker for GIS Data Repositories.

Usage:
    python scripts/check_urls.py                  # Check all URLs
    python scripts/check_urls.py --limit 50       # Check first 50 only
"""

import sys
import json
import csv
import time
from datetime import datetime, timezone
from pathlib import Path

import urllib.request
import urllib.error
import ssl

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
JSON_PATH = DATA_DIR / "master_index.json"
CSV_OUT = DATA_DIR / "link_audit_results.csv"
JSON_OUT = DATA_DIR / "link_audit_results.json"

REQUEST_TIMEOUT = 12
MAX_RETRIES = 2
DELAY_BETWEEN_REQUESTS = 0.5


def check_url(url, timeout=REQUEST_TIMEOUT):
    if not url or not url.strip():
        return {"status_code": 0, "status": "Not Checked", "final_url": "", "error": "Empty URL"}

    url = url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    ctx = ssl.create_default_context()
    ctx.check_hostname = True
    ctx.verify_mode = ssl.CERT_REQUIRED

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            req = urllib.request.Request(url, method="HEAD")
            req.add_header("User-Agent", "Mozilla/5.0 GIS-Link-Checker/1.0")
            resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
            return {
                "status_code": resp.getcode(),
                "status": "Working",
                "final_url": resp.geturl(),
                "error": "",
            }
        except urllib.error.HTTPError as e:
            code = e.code
            if 300 <= code < 400:
                return {
                    "status_code": code,
                    "status": "Redirected",
                    "final_url": e.geturl() or "",
                    "error": "",
                }
            if code == 403:
                s = "Access Restricted"
            elif code == 404:
                s = "Broken (404)"
            elif code >= 500:
                s = "Server Error"
            else:
                s = f"Broken ({code})"
            return {"status_code": code, "status": s, "final_url": e.geturl() or "", "error": str(e)[:200]}
        except urllib.error.URLError as e:
            msg = str(e.reason) if hasattr(e, "reason") else str(e)
            if "NameResolutionFailure" in msg or "getaddrinfo" in msg:
                st = "Dead Domain"
            elif "timed out" in msg or "Timeout" in msg:
                st = "Timeout"
            elif "SSL" in msg or "certificate" in msg:
                st = "SSL Error"
            else:
                st = "Broken"
            if attempt < MAX_RETRIES:
                time.sleep(1)
                continue
            return {"status_code": 0, "status": st, "final_url": "", "error": msg[:200]}
        except Exception as e:
            if attempt < MAX_RETRIES:
                time.sleep(1)
                continue
            return {"status_code": 0, "status": "Error", "final_url": "", "error": str(e)[:200]}
        finally:
            time.sleep(DELAY_BETWEEN_REQUESTS)

    return {"status_code": 0, "status": "Error", "final_url": "", "error": "Max retries exceeded"}


def main():
    import argparse

    parser = argparse.ArgumentParser(description="Check GIS data source URLs")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of URLs to check")
    args = parser.parse_args()

    print(f"GIS Link Checker")
    print(f"Started: {datetime.now().isoformat()}")
    print()

    if not JSON_PATH.exists():
        print(f"ERROR: master_index.json not found at {JSON_PATH}")
        print("Run scripts/export_excel_to_csv_json.py first.")
        sys.exit(1)

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        records = json.load(f)

    print(f"Loaded {len(records):,} records from {JSON_PATH.name}")
    print()

    urls_to_check = []
    for rec in records:
        url = rec.get("Updated URL", "") or rec.get("Original URL", "") or rec.get("URL", "") or ""
        name = rec.get("Source Name", "") or rec.get("name", "") or rec.get("Name", "") or ""
        sid = rec.get("ID", "") or rec.get("id", "") or ""
        urls_to_check.append({"source_id": sid, "name": name, "url": url})

    if args.limit > 0:
        urls_to_check = urls_to_check[: args.limit]
        print(f"Limited to {len(urls_to_check)} URLs (--limit {args.limit})")

    checked_at = datetime.now(timezone.utc).isoformat()
    results = []
    total = len(urls_to_check)
    working = 0
    broken = 0
    redirected = 0

    for i, item in enumerate(urls_to_check):
        label = item["name"] or item["url"] or f"#{item['source_id']}"
        print(f"  [{i+1}/{total}] {label[:60]}...")

        result = check_url(item["url"])
        result["source_id"] = item["source_id"]
        result["name"] = item["name"]
        result["url"] = item["url"]
        result["checked_at"] = checked_at
        results.append(result)

        st = result["status"]
        if st == "Working":
            working += 1
        elif st == "Redirected":
            redirected += 1
        else:
            broken += 1

        status_symbol = {"Working": "[OK]", "Redirected": "[->]", "Broken": "[x]", "Timeout": "[T]", "SSL Error": "[S]"}.get(st, "[?]")
        detail = f"{result['status_code']} {st}"
        print(f"    {status_symbol} {detail}")

    if results:
        with open(CSV_OUT, "w", newline="", encoding="utf-8") as f:
            fieldnames = ["source_id", "name", "url", "status_code", "status", "final_url", "error", "checked_at"]
            writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
            writer.writeheader()
            writer.writerows(results)

        with open(JSON_OUT, "w", encoding="utf-8") as f:
            json.dump(results, f, ensure_ascii=False, indent=2)

    print()
    print("=" * 50)
    print(f"Results: {total} URLs checked")
    print(f"  Working    : {working}")
    print(f"  Redirected : {redirected}")
    print(f"  Broken/Err : {broken}")
    print(f"Saved to:")
    print(f"  CSV: {CSV_OUT.name}")
    print(f"  JSON: {JSON_OUT.name}")


if __name__ == "__main__":
    main()
