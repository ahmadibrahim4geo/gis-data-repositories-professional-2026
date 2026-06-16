function getVal(d, ...keys) {
  for (const k of keys) {
    const v = d[k];
    if (v) return v;
  }
  return '';
}

function statusBadge(s) {
  const cls = ({
    'Working':'success',
    'Redirected':'warning text-dark',
    'Broken (404)':'danger',
    'Broken':'danger',
    'Dead Domain':'danger',
    'Timeout':'warning text-dark',
    'Access Restricted':'secondary',
    'SSL Error':'warning',
    'Server Error':'danger'
  })[s] || 'secondary';
  return `<span class="badge bg-${cls}">${s}</span>`;
}

function filterData() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const cat = document.getElementById('category').value;
  const st = document.getElementById('status').value;
  const dt = document.getElementById('dataType').value;

  const filtered = DATA.filter(d => {
    const name = getVal(d, 'Source Name', 'name').toLowerCase();
    const desc = getVal(d, 'Description', 'description').toLowerCase();
    const url = getVal(d, 'Updated URL', 'Original URL', 'URL', 'url').toLowerCase();
    const domain = getVal(d, 'Domain', 'domain').toLowerCase();
    const notes = getVal(d, 'Notes', 'notes').toLowerCase();
    const category = getVal(d, 'Category', 'category');
    const status = getVal(d, 'Link Status', 'status');
    const dtype = getVal(d, 'Data Type', 'data_type');

    if (q && !(name.includes(q) || desc.includes(q) || url.includes(q) || domain.includes(q) || notes.includes(q)))
      return false;
    if (cat && category !== cat) return false;
    if (st && status !== st) return false;
    if (dt && dtype !== dt) return false;
    return true;
  });

  render(filtered);
  document.getElementById('count').textContent = filtered.length;

  const stats = {Working:0,Redirected:0,Broken:0,Issues:0};
  filtered.forEach(d => {
    const s = getVal(d, 'Link Status', 'status');
    if (s === 'Working') stats.Working++;
    else if (s === 'Redirected') stats.Redirected++;
    else stats.Issues++;
  });
  document.getElementById('countWorking').textContent = stats.Working;
  document.getElementById('countRedirected').textContent = stats.Redirected;
  document.getElementById('countBroken').textContent = stats.Issues;
}

function render(data) {
  const c = document.getElementById('results');
  if (data.length === 0) {
    c.innerHTML = '<div class="col-12 text-center py-4 text-muted"><i class="bi bi-inbox fs-1"></i><p class="mt-2">No matching entries</p></div>';
    return;
  }
  c.innerHTML = data.map(d => {
    const name = getVal(d, 'Source Name', 'name') || '<em class="text-muted">Unnamed</em>';
    const desc = getVal(d, 'Description', 'description');
    const url = getVal(d, 'Updated URL', 'Original URL', 'URL', 'url');
    const domain = getVal(d, 'Domain', 'domain');
    const category = getVal(d, 'Category', 'category');
    const status = getVal(d, 'Link Status', 'status');
    const dtype = getVal(d, 'Data Type', 'data_type');
    const coverage = getVal(d, 'Coverage', 'coverage');
    const license = getVal(d, 'License Type', 'license');
    const notes = getVal(d, 'Notes', 'notes');

    return `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100">
        <div class="card-header py-1 d-flex justify-content-between align-items-center">
          <span class="small text-truncate me-1">${name}</span>
          <span class="badge badge-cat flex-shrink-0">${category || '—'}</span>
        </div>
        <div class="card-body py-2 small">
          <p class="mb-1">${desc || '<span class="text-muted">No description</span>'}</p>
          <div class="mb-1">${statusBadge(status)}</div>
          ${url ? `<div class="text-truncate mb-1"><i class="bi bi-link-45deg"></i> <a href="${url}" target="_blank" class="text-info link-offset-2" style="word-break:break-all">${url}</a></div>` : ''}
          <div class="text-muted"><i class="bi bi-building"></i> ${domain || '—'}</div>
          <div class="text-muted"><i class="bi bi-file-earmark-bar-graph"></i> ${dtype || '—'} ${coverage ? '| ' + coverage : ''}</div>
          ${license ? `<div class="text-muted small"><i class="bi bi-info-circle"></i> ${license}</div>` : ''}
          ${notes ? `<div class="text-muted small mt-1"><i class="bi bi-sticky"></i> ${notes}</div>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function clearFilters() {
  document.getElementById('search').value = '';
  document.getElementById('category').value = '';
  document.getElementById('status').value = '';
  document.getElementById('dataType').value = '';
  filterData();
}

filterData();
