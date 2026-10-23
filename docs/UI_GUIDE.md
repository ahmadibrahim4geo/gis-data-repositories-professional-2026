# GIS Data Explorer — User & Maintenance Guide / دليل الاستخدام والصيانة

## English

The published GitHub Pages interface is at [GIS Data Explorer](https://ahmadibrahim4geo.github.io/gis-data-repositories-professional-2026/). The primary page is docs/index.html; it loads docs/data/master_index.json as a **static snapshot**. It does not query original portals or recrawl links when a visitor searches.

**Finding datasets**
1. Search by source name, description, provider/domain, URL, category, region, or data format.
2. Combine category, type, last-recorded link status, geographical coverage and access-type filters.
3. Sort by name, last-audit working status, or catalogued quality score; use card or list view.
4. Open a source link in a new tab. An absent or invalid URL is shown as unavailable.
5. Save sources with the star button; favorites persist in this browser's local storage.
6. Export the *currently filtered and sorted* records to UTF-8 CSV with their original column names. CSV values that could be treated as spreadsheet formulas are prefixed for safety.
7. Results are paginated in batches of 24; search and filtering still cover the **entire loaded catalog**.

**Theme and language:** Use the top controls to switch English/Arabic and light/dark. Preferences are saved locally when permitted. Category names and source descriptions are shown as provided by the source data, mostly English; interface labels are translated.

**URL freshness:** Working and other statuses represent **the last stored audit**, not live verification. Timeout, Needs Review, and untested links are not treated as confirmed broken links.

**Data preservation:** The redesign changes HTML/CSS/JS, not the workbook, JSON or CSV dataset. Existing fields, original source names and links remain intact. No claimed precise geographic coordinates are shown because the GeoJSON contains regional placeholders.

### Updating sources

The canonical source is the workbook in data/GIS_Data_Repositories_Professional_2026.xlsx. Use existing repository export/release scripts to regenerate JSON and copy the current master_index.json to docs/data/master_index.json. Do not hand-edit published data unless you intentionally change the master catalog.

### Both front ends

- GitHub Pages: docs/index.html + docs/assets/catalog.css + docs/assets/catalog.js.
- Flask: app/templates/index.html + app/static/style.css + app/static/app.js.
- JavaScript and CSS copies are **intentionally identical**. Keep them synchronized when changing the design. Flask supplies the same data through Jinja's safe tojson output, while GitHub Pages fetches a file.
- Run: node tests/catalog_checks.js from repository root for source structure and data snapshot smoke checks.
- Run: python app/app.py for Flask after installing project requirements.

## العربية

صفحة **GIS Data Explorer** واجهة ثابتة لعرض الدليل المحفوظ في docs/data/master_index.json، ولا تقوم بفحص المواقع مباشرة عند البحث.

1. ابحث باسم المصدر أو وصفه أو نطاقه أو رابطه أو فئته أو التغطية الجغرافية.
2. ادمج مرشحات التصنيف ونوع البيانات وحالة الرابط في آخر فحص ونوع الوصول والمنطقة.
3. استخدم ترتيب النتائج والعرض الشبكي أو عرض القائمة.
4. اضغط النجمة لحفظ المصدر في مفضلة المتصفح محلياً.
5. صدّر كل النتائج **المفلترة** إلى CSV، مع الاحتفاظ بالأعمدة الأصلية.
6. تظهر 24 نتيجة في الصفحة الواحدة لتحسين الأداء، بينما يتم البحث داخل جميع السجلات.
7. استخدم أزرار أعلى الصفحة للتبديل بين العربية والإنجليزية والوضعين الداكن والفاتح.

**تنبيه:** حالة الرابط تعبّر عن **آخر فحص مسجل**، وليست ضماناً أنه يعمل لحظة الزيارة. التصنيفات والأسماء والوصف الأصلي للبيانات تُعرض غالباً باللغة الإنجليزية كما هي في الفهرس.

**للمطور:** يجب إبقاء نسختي ملفات JavaScript وCSS في docs/assets وapp/static متطابقتين، وتشغيل الاختبار عند التحديث. لم يُجرَ أي تغيير في بيانات Excel أو CSV أو JSON ضمن تطوير الواجهة.
