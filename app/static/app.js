(function () {
  "use strict";
  var I18N = {
    en: {
      skip:"Skip to results",brandTag:"Professional GIS Data Directory",methodology:"Methodology",eyebrow:"OPEN GEOSPATIAL KNOWLEDGE · 2026 EDITION",
      heroTitle:"Discover geospatial data,",heroHighlight:"without the guesswork.",
      heroDesc:"Explore a curated directory of geospatial portals, satellite imagery, DEMs, climate data, boundaries and GIS resources. Filter by topic, access, region and last recorded link status.",
      auditNote:"Link statuses are from the last recorded audit, not live availability checks.",
      metricSources:"Catalogued sources",metricCategories:"Data categories",metricWorking:"Working at last audit",metricSaved:"Saved favorites",
      filterTitle:"Refine your search",reset:"Reset",category:"Category",allCategories:"All categories",dataType:"Data type",allTypes:"All types",
      linkStatus:"Last checked status",allStatuses:"All statuses",coverage:"Coverage / region",coveragePlaceholder:"e.g. Global, Africa, Egypt",
      access:"Access type",allAccess:"All access types",favoritesOnly:"Saved sources only",
      filtersHelp:"Filters work together. Original source records are not modified.",searchLabel:"Search all sources",
      searchPlaceholder:"Search names, descriptions, URLs and providers…",filters:"Filters",resultsTitle:"Explore resources",resultsOf:"of",resources:"resources",
      sortLabel:"Sort results",sortName:"Name A–Z",sortNameDesc:"Name Z–A",sortStatus:"Working first",sortQuality:"Quality score",export:"Export CSV",
      loading:"Loading the catalog…",previous:"← Previous",next:"Next →",
      footerText:"Curated by Ahmad Ibrahim. Dataset contents and third-party licenses remain with their respective providers.",
      dataDictionary:"Data dictionary",openPortal:"Visit source ↗",noLink:"No valid URL",unknown:"Not checked",
      working:"Working",redirected:"Redirected",issue:"Issue",unverified:"Unverified",
      dataTypeSmall:"Type",coverageSmall:"Coverage",accessSmall:"Access",formatSmall:"Format",domainSmall:"Domain",
      details:"Additional metadata",notes:"Notes",lastChecked:"Last checked",quality:"Quality score",risk:"Risk level",http:"HTTP status",license:"License",
      favoriteSave:"Save to favorites",favoriteRemove:"Remove from favorites",
      empty:"No sources match your filters",emptyDesc:"Try a different keyword or remove some filters.",page:"Page",ofPages:"of",
      loadError:"The catalog could not be loaded. If you opened a local HTML file, run a local web server, or use the published GitHub Pages link.",
      exportEmpty:"No results to export.",exportSuccess:"Filtered catalog exported as CSV.",
      chipSearch:"Search",chipCategory:"Category",chipType:"Type",chipStatus:"Status",chipCoverage:"Coverage",chipAccess:"Access",chipSaved:"Favorites",
      selectLanguage:"Switch to Arabic",selectTheme:"Toggle light or dark theme",layoutGrid:"Grid layout",layoutList:"List layout"
    },
    ar: {
      skip:"الانتقال إلى النتائج",brandTag:"الدليل الاحترافي لمصادر البيانات الجغرافية",methodology:"المنهجية",eyebrow:"مصادر المعرفة الجغرافية المفتوحة · إصدار 2026",
      heroTitle:"اكتشف مصادر البيانات الجغرافية،",heroHighlight:"بسهولة وثقة.",
      heroDesc:"تصفح دليلاً منظماً لبوابات البيانات الجغرافية وصور الأقمار الصناعية ونماذج الارتفاعات والبيانات المناخية والحدود والموارد المتخصصة. ابحث وصنّف حسب الموضوع ونوع الوصول والتغطية وآخر حالة مسجلة للرابط.",
      auditNote:"حالات الروابط ناتجة عن آخر فحص مسجل وليست فحصاً مباشراً لتوافر المواقع.",
      metricSources:"مصدر بيانات مفهرس",metricCategories:"تصنيف للبيانات",metricWorking:"يعمل وفق آخر فحص",metricSaved:"مصادر محفوظة",
      filterTitle:"تصفية نتائج البحث",reset:"مسح الفلاتر",category:"التصنيف",allCategories:"جميع التصنيفات",dataType:"نوع البيانات",allTypes:"جميع الأنواع",
      linkStatus:"حالة الرابط في آخر فحص",allStatuses:"جميع الحالات",coverage:"التغطية الجغرافية",coveragePlaceholder:"مثال: Global أو Africa أو Egypt",
      access:"نوع الوصول",allAccess:"جميع أنواع الوصول",favoritesOnly:"المصادر المحفوظة فقط",
      filtersHelp:"يمكن دمج الفلاتر معاً دون تعديل أي بيانات أصلية.",searchLabel:"البحث في جميع المصادر",
      searchPlaceholder:"ابحث بالاسم أو الوصف أو الرابط أو الجهة…",filters:"الفلاتر",resultsTitle:"استعرض المصادر",resultsOf:"من أصل",resources:"مصدر",
      sortLabel:"ترتيب النتائج",sortName:"الاسم أ–ي",sortNameDesc:"الاسم ي–أ",sortStatus:"الروابط العاملة أولاً",sortQuality:"تقييم الجودة",export:"تصدير CSV",
      loading:"جاري تحميل فهرس المصادر…",previous:"السابق →",next:"← التالي",
      footerText:"إعداد وتنظيم أحمد إبراهيم. تظل بيانات المصادر وتراخيص المحتوى الخارجي مملوكة للجهات الأصلية.",
      dataDictionary:"قاموس البيانات",openPortal:"زيارة المصدر ↗",noLink:"لا يوجد رابط صالح",unknown:"لم يُفحص",
      working:"يعمل",redirected:"يعيد التوجيه",issue:"مشكلة",unverified:"غير مؤكد",
      dataTypeSmall:"النوع",coverageSmall:"التغطية",accessSmall:"الوصول",formatSmall:"الصيغة",domainSmall:"النطاق",
      details:"بيانات إضافية",notes:"ملاحظات",lastChecked:"آخر فحص",quality:"تقييم الجودة",risk:"مستوى الخطورة",http:"حالة HTTP",license:"الترخيص",
      favoriteSave:"حفظ في المفضلة",favoriteRemove:"إزالة من المفضلة",
      empty:"لا توجد نتائج تطابق البحث",emptyDesc:"جرّب كلمة أخرى أو احذف بعض الفلاتر.",page:"صفحة",ofPages:"من",
      loadError:"تعذر تحميل بيانات المصادر. إذا فتحت ملف HTML محلياً، شغّل خادماً محلياً أو استخدم صفحة GitHub Pages المنشورة.",
      exportEmpty:"لا توجد نتائج لتصديرها.",exportSuccess:"تم تصدير نتائج البحث بصيغة CSV.",
      chipSearch:"بحث",chipCategory:"التصنيف",chipType:"النوع",chipStatus:"الحالة",chipCoverage:"التغطية",chipAccess:"الوصول",chipSaved:"المفضلة",
      selectLanguage:"التحويل إلى الإنجليزية",selectTheme:"التبديل بين الوضعين الفاتح والداكن",layoutGrid:"عرض شبكي",layoutList:"عرض قائمة"
    }
  };
  var DATA = [], filtered = [], favorites = new Set(), page = 1, pageSize = 24, lang = "en", view = "grid", debounceTimer;
  var $ = function (id) { return document.getElementById(id); };
  var cfg = window.CATALOG_CONFIG || {};
  var formatter = new Intl.NumberFormat("en-US");

  function localGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function localSet(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function t(k) { return (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k; }
  function val(o) {
    for (var i = 1; i < arguments.length; i++) {
      var k = arguments[i], v = o[k];
      if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
    }
    return "";
  }
  function norm(s) {
    return String(s || "").normalize("NFKD").toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").trim();
  }
  function safeUrl(s) {
    try {
      var u = new URL(String(s || "").trim());
      if (u.protocol === "https:" || u.protocol === "http:") return u.href;
    } catch (e) {}
    return "";
  }
  function sourceId(d) { return val(d, "ID", "id") ? "id:" + val(d,"ID","id") : "url:" + val(d,"Original URL","URL","url") + "|name:" + val(d,"Source Name","name"); }
  function getName(d) { return val(d,"Source Name","name") || "Unnamed source"; }
  function getStatus(d) { return val(d,"Link Status","status"); }
  function statusClass(s) {
    var v = norm(s);
    if (v === "working") return "working";
    if (v === "redirected") return "redirected";
    if (/broken|dead|404|server error|ssl error/.test(v)) return "issue";
    return "unknown";
  }
  function statusLabel(s) {
    var cl = statusClass(s);
    if (cl === "working") return t("working");
    if (cl === "redirected") return t("redirected");
    if (cl === "issue") return s || t("issue");
    return s || t("unknown");
  }
  function el(tag, klass, value) {
    var n = document.createElement(tag);
    if (klass) n.className = klass;
    if (value !== undefined && value !== null) n.textContent = String(value);
    return n;
  }
  function i18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.dataset.i18n); });
    document.querySelectorAll("[data-placeholder]").forEach(function (n) { n.placeholder = t(n.dataset.placeholder); });
    $("lang-toggle").textContent = lang === "en" ? "العربية" : "English";
    $("lang-toggle").setAttribute("aria-label",t("selectLanguage"));
    $("theme-toggle").setAttribute("aria-label",t("selectTheme"));
    $("grid-view").setAttribute("aria-label",t("layoutGrid"));
    $("list-view").setAttribute("aria-label",t("layoutList"));
    $("search").setAttribute("aria-label",t("searchLabel"));
    if (DATA.length) { showActiveFilters(); showPage(); }
  }
  function setTheme(th) {
    document.documentElement.dataset.theme = th === "light" ? "light" : "dark";
    $("theme-toggle").textContent = th === "light" ? "☾" : "☀";
    localSet("gisexplorer-theme",document.documentElement.dataset.theme);
  }
  function fillSelect(id, values) {
    var s = $(id);
    while (s.options.length > 1) s.remove(1);
    Array.from(new Set(values.filter(Boolean))).sort(function (a,b) { return a.localeCompare(b); }).forEach(function (v) {
      var opt = document.createElement("option"); opt.value = v; opt.textContent = v; s.appendChild(opt);
    });
  }
  function notice(message) {
    $("notice").hidden = !message;
    $("notice").textContent = message || "";
  }
  function loadFavorites() {
    try { var a = JSON.parse(localGet("gisexplorer-favorites") || "[]"); if (Array.isArray(a)) favorites = new Set(a.filter(function (x) { return typeof x === "string"; })); } catch (e) {}
  }
  function storeFavorites() { localSet("gisexplorer-favorites", JSON.stringify(Array.from(favorites))); updateSavedMetric(); }
  function updateSavedMetric() { $("metric-saved").textContent = formatter.format(favorites.size); }
  function initialStats() {
    var cat = new Set(DATA.map(function(d){return val(d,"Category","category");}).filter(Boolean));
    $("metric-total").textContent = formatter.format(DATA.length);
    $("metric-categories").textContent = formatter.format(cat.size);
    $("metric-working").textContent = formatter.format(DATA.filter(function(d){return statusClass(getStatus(d)) === "working";}).length);
    $("result-total").textContent = formatter.format(DATA.length);
    updateSavedMetric();
  }
  function populate() {
    fillSelect("filter-category", DATA.map(function(d){return val(d,"Category","category");}));
    fillSelect("filter-type", DATA.map(function(d){return val(d,"Data Type","data_type");}));
    fillSelect("filter-status", DATA.map(getStatus));
    fillSelect("filter-access", DATA.map(function(d){return val(d,"Access Type","access_type");}));
  }
  function filterAndSort() {
    var search = norm($("search").value), category = $("filter-category").value, type = $("filter-type").value;
    var status = $("filter-status").value, coverage = norm($("filter-coverage").value), access = $("filter-access").value;
    var favOnly = $("favorites-only").checked;
    filtered = DATA.filter(function(d) {
      if (category && val(d,"Category","category") !== category) return false;
      if (type && val(d,"Data Type","data_type") !== type) return false;
      if (status && getStatus(d) !== status) return false;
      if (access && val(d,"Access Type","access_type") !== access) return false;
      if (coverage && !norm(val(d,"Coverage","coverage")).includes(coverage)) return false;
      if (favOnly && !favorites.has(sourceId(d))) return false;
      if (search) {
        var haystack = ["Source Name","name","Description","description","Original URL","Updated URL","URL","url","Domain","domain","Category","category","Notes","notes","Coverage","coverage","Data Type","data_type","Format","format"].map(function(k){return val(d,k);}).join(" ");
        if (!norm(haystack).includes(search)) return false;
      }
      return true;
    });
    var order = $("sort").value;
    filtered.sort(function(a,b){
      if (order === "quality") return (Number(val(b,"Quality Score","quality_score")) || 0) - (Number(val(a,"Quality Score","quality_score")) || 0) || getName(a).localeCompare(getName(b));
      if (order === "status") {
        var rank = {working:0,redirected:1,unknown:2,issue:3};
        return rank[statusClass(getStatus(a))]-rank[statusClass(getStatus(b))] || getName(a).localeCompare(getName(b));
      }
      if (order === "nameDesc") return getName(b).localeCompare(getName(a));
      return getName(a).localeCompare(getName(b));
    });
    page = 1;
    $("result-count").textContent = formatter.format(filtered.length);
    showActiveFilters();
    showPage();
  }
  function showActiveFilters() {
    var fields = [
      ["search",t("chipSearch"),$("search").value],
      ["filter-category",t("chipCategory"),$("filter-category").value],
      ["filter-type",t("chipType"),$("filter-type").value],
      ["filter-status",t("chipStatus"),$("filter-status").value],
      ["filter-coverage",t("chipCoverage"),$("filter-coverage").value],
      ["filter-access",t("chipAccess"),$("filter-access").value]
    ];
    if ($("favorites-only").checked) fields.push(["favorites-only",t("chipSaved"),"★"]);
    var bar = $("active-filters"); bar.replaceChildren();
    fields.forEach(function(f) {
      if (!f[2]) return;
      var btn = el("button","",f[1]+": "+f[2]+" ×"); btn.type="button";
      btn.addEventListener("click",function() {
        if (f[0] === "favorites-only") $("favorites-only").checked = false;
        else $(f[0]).value = "";
        filterAndSort();
      });
      bar.appendChild(btn);
    });
  }
  function addInfo(where,label,value) {
    if (!value) return;
    var node = el("span","info-pair");
    node.appendChild(el("b","",label+": "));
    node.appendChild(document.createTextNode(value));
    where.appendChild(node);
  }
  function additional(d) {
    var meta = [
      [t("formatSmall"),val(d,"Format","format")],
      [t("accessSmall"),val(d,"Access Type","access_type")],
      [t("license"),val(d,"License Type","License","license")],
      [t("lastChecked"),val(d,"Last Checked","last_checked")],
      [t("http"),val(d,"HTTP Status","http_status")],
      [t("risk"),val(d,"Risk Level","risk_level")],
      [t("quality"),val(d,"Quality Score","quality_score")],
      [t("notes"),val(d,"Notes","notes")]];
    var present = meta.filter(function(p){return Boolean(p[1]);});
    if (!present.length) return null;
    var details = el("details","card-details");
    details.appendChild(el("summary","",t("details")));
    var dl = el("dl","detail-list");
    present.forEach(function(x){dl.appendChild(el("dt","",x[0]));dl.appendChild(el("dd","",x[1]));});
    details.appendChild(dl);
    return details;
  }
  function card(d) {
    var card = el("article","source-card");
    var top = el("div","card-top");
    top.appendChild(el("span","category-chip",val(d,"Category","category") || "GIS"));
    var key=sourceId(d), saved=favorites.has(key);
    var star = el("button","save-btn",saved?"★":"☆"); star.type="button";
    star.setAttribute("aria-pressed",String(saved));
    star.setAttribute("aria-label",saved?t("favoriteRemove"):t("favoriteSave"));
    star.title= saved?t("favoriteRemove"):t("favoriteSave");
    star.addEventListener("click",function() {
      if(favorites.has(key)) favorites.delete(key); else favorites.add(key);
      storeFavorites();
      if($("favorites-only").checked) { filterAndSort(); return; }
      var isSaved=favorites.has(key);
      star.textContent=isSaved?"★":"☆";
      star.setAttribute("aria-pressed",String(isSaved));
      star.setAttribute("aria-label",isSaved?t("favoriteRemove"):t("favoriteSave"));
      star.title=isSaved?t("favoriteRemove"):t("favoriteSave");
    });
    top.appendChild(star);card.appendChild(top);
    card.appendChild(el("h3","source-name",getName(d)));
    card.appendChild(el("p","source-description",val(d,"Description","description") || "—"));
    var row=el("div","source-status-row"), st=getStatus(d);
    row.appendChild(el("span","link-status "+statusClass(st),statusLabel(st)));
    var checked=val(d,"Last Checked","last_checked");
    if(checked) row.appendChild(el("span","last-check",t("lastChecked")+": "+checked));
    card.appendChild(row);
    var info=el("div","card-info");
    addInfo(info,t("dataTypeSmall"),val(d,"Data Type","data_type"));
    addInfo(info,t("coverageSmall"),val(d,"Coverage","coverage"));
    addInfo(info,t("accessSmall"),val(d,"Access Type","access_type"));
    card.appendChild(info);
    var more=additional(d);if(more)card.appendChild(more);
    var bottom=el("div","source-footer");
    var link=safeUrl(val(d,"Updated URL","Original URL","URL","url"));
    var domain=val(d,"Domain","domain");
    if(!domain && link){try{domain=new URL(link).hostname;}catch(e){}}
    bottom.appendChild(el("span","source-domain",domain));
    if (link) {
      var a=el("a","open-source",t("openPortal"));a.href=link;a.target="_blank";a.rel="noopener noreferrer";bottom.appendChild(a);
    } else {
      var no=el("span","open-source",t("noLink"));no.setAttribute("aria-disabled","true");bottom.appendChild(no);
    }
    card.appendChild(bottom);
    return card;
  }
  function showPage() {
    if (!DATA.length) return;
    var host=$("results");
    var totalPages=Math.max(1,Math.ceil(filtered.length/pageSize));
    if (page>totalPages) page=totalPages;
    var segment=filtered.slice((page-1)*pageSize,page*pageSize);
    var fragment=document.createDocumentFragment();
    if(!segment.length){
      var empty=el("div","empty-state");
      empty.appendChild(el("strong","",t("empty")));
      empty.appendChild(el("p","",t("emptyDesc")));
      fragment.appendChild(empty);
    } else segment.forEach(function(d){fragment.appendChild(card(d));});
    host.replaceChildren(fragment);
    host.className="results-grid"+(view==="list"?" list-view":"");
    host.setAttribute("aria-busy","false");
    $("pager").hidden=filtered.length<=pageSize;
    $("page-indicator").textContent=t("page")+" "+page+" "+t("ofPages")+" "+totalPages;
    $("prev-page").disabled=page<=1;$("next-page").disabled=page>=totalPages;
  }
  function clearFilters() {
    ["search","filter-coverage","filter-category","filter-type","filter-status","filter-access"].forEach(function(id){$(id).value="";});
    $("favorites-only").checked=false;$("sort").value="name";
    filterAndSort();
  }
  function exportCsv() {
    if (!filtered.length){notice(t("exportEmpty"));return;}
    var keys=Array.from(new Set(DATA.slice(0,1).flatMap(function(d){return Object.keys(d);}).concat(filtered.flatMap(function(d){return Object.keys(d); }))));
    function cell(raw) {
      var str=String(raw===null||raw===undefined?"":raw);
      if (/^[\s]*[=+\-@]/.test(str)) str="'"+str;
      return '"'+str.replace(/"/g,'""')+'"';
    }
    var csv="\ufeff"+keys.map(cell).join(",")+"\r\n"+filtered.map(function(d){return keys.map(function(k){return cell(d[k]);}).join(",");}).join("\r\n");
    var blob=new Blob([csv],{type:"text/csv;charset=utf-8"});
    var url=URL.createObjectURL(blob);
    var a=document.createElement("a");a.href=url;a.download="GIS_Data_Explorer_Filtered_2026.csv";
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},2000);
    notice(t("exportSuccess"));
  }
  function bind() {
    $("lang-toggle").addEventListener("click",function(){lang=lang==="en"?"ar":"en";localSet("gisexplorer-lang",lang);i18n();});
    $("theme-toggle").addEventListener("click",function(){setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");});
    $("search").addEventListener("input",function(){clearTimeout(debounceTimer);debounceTimer=setTimeout(filterAndSort,130);});
    $("filter-coverage").addEventListener("input",function(){clearTimeout(debounceTimer);debounceTimer=setTimeout(filterAndSort,130);});
    ["filter-category","filter-type","filter-status","filter-access","favorites-only","sort"].forEach(function(id){$(id).addEventListener("change",filterAndSort);});
    $("reset-side").addEventListener("click",clearFilters);
    $("export-csv").addEventListener("click",exportCsv);
    $("prev-page").addEventListener("click",function(){page--;showPage();$("results-heading").scrollIntoView({block:"start",behavior:"smooth"});});
    $("next-page").addEventListener("click",function(){page++;showPage();$("results-heading").scrollIntoView({block:"start",behavior:"smooth"});});
    $("grid-view").addEventListener("click",function(){view="grid";$("grid-view").setAttribute("aria-pressed","true");$("list-view").setAttribute("aria-pressed","false");showPage();});
    $("list-view").addEventListener("click",function(){view="list";$("grid-view").setAttribute("aria-pressed","false");$("list-view").setAttribute("aria-pressed","true");showPage();});
    $("mobile-filters").addEventListener("click",function(){
      var open=$("filters-panel").classList.toggle("is-open");
      $("mobile-filters").setAttribute("aria-expanded",String(open));
    });
    document.addEventListener("keydown",function(e){
      var active=document.activeElement;
      if (e.key==="/" && active && !/^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName)) {e.preventDefault();$("search").focus();}
    });
  }
  async function load() {
    try {
      var raw=cfg.initialData;
      if(!raw){
        var response=await fetch(cfg.dataUrl||"data/master_index.json",{cache:"default"});
        if(!response.ok)throw new Error("HTTP "+response.status);
        raw=await response.json();
      }
      if(!Array.isArray(raw))throw new Error("Expected an array of catalog records.");
      DATA=raw.filter(function(row){return row && typeof row==="object" && !Array.isArray(row);});
      populate();initialStats();filterAndSort();
    }catch(e){
      $("results").setAttribute("aria-busy","false");
      var error=el("div","empty-state",t("loadError"));
      $("results").replaceChildren(error);
      notice(t("loadError"));
    }
  }
  function init(){
    lang=localGet("gisexplorer-lang")==="ar"?"ar":"en";
    loadFavorites();
    setTheme(localGet("gisexplorer-theme")==="light"?"light":"dark");
    bind();i18n();load();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
