function createFindingCard(finding) {
  const card = document.createElement('article');
  card.className = `finding-card finding-${finding.severity}`;
  card.dataset.findingId = String(finding.id);

  const title = document.createElement('h3');
  title.className = 'finding-title';
  title.textContent = finding.title;

  const summary = document.createElement('p');
  summary.className = 'finding-summary';
  summary.textContent = finding.summary;

  const meta = document.createElement('div');
  meta.className = 'finding-meta';

  const severity = document.createElement('span');
  severity.className = 'finding-tag';
  severity.textContent = finding.severity;

  const status = document.createElement('span');
  status.className = 'finding-status';
  status.textContent = finding.status;

  const action = document.createElement('button');
  action.type = 'button';
  action.className = 'finding-action';
  action.textContent = 'Ver detalle';
  action.dataset.findingId = String(finding.id);

  meta.append(severity, status);
  card.append(title, summary, meta, action);
  return card;
}

function createFindingDetail(finding) {
  if (!finding) {
    const empty = document.createElement('p');
    empty.className = 'detail-empty';
    empty.textContent = 'Seleccioná una actividad para ver la ficha.';
    return empty;
  }

  const wrapper = document.createElement('article');
  wrapper.className = 'detail-card';

  const title = document.createElement('h3');
  title.textContent = finding.title;

  const summary = document.createElement('p');
  summary.textContent = finding.summary;

  const list = document.createElement('dl');
  list.className = 'detail-meta';

  const severityLabel = document.createElement('dt');
  severityLabel.textContent = 'Categoría';
  const severityValue = document.createElement('dd');
  severityValue.textContent = finding.severity;

  const statusLabel = document.createElement('dt');
  statusLabel.textContent = 'Disponibilidad';
  const statusValue = document.createElement('dd');
  statusValue.textContent = finding.status;

  list.append(severityLabel, severityValue, statusLabel, statusValue);
  wrapper.append(title, summary, list);
  return wrapper;
}

function renderFindings(list, containerSelector = '#findings-list') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.replaceChildren(...list.map(createFindingCard));
}

function renderFindingDetail(finding, containerSelector = '#detail-view') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.replaceChildren(createFindingDetail(finding));
}

function renderFindingCount(list, containerSelector = '#finding-count') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.textContent = `${list.length} actividades`;
}

window.createFindingCard = createFindingCard;
window.createFindingDetail = createFindingDetail;
window.renderFindings = renderFindings;
window.renderFindingDetail = renderFindingDetail;
window.renderFindingCount = renderFindingCount;