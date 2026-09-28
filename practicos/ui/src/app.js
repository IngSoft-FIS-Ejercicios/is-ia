let findings = Array.isArray(window.initialFindings) ? window.initialFindings.slice() : [];
let selectedFindingId = findings[0]?.id ?? null;

function getSelectedFinding() {
  return findings.find(finding => finding.id === selectedFindingId) ?? null;
}

function refreshView() {
  renderFindings(findings);
  renderFindingCount(findings);
  renderFindingDetail(getSelectedFinding());
}

function selectFinding(id) {
  selectedFindingId = id;
  renderFindingDetail(getSelectedFinding());
}

document.addEventListener('DOMContentLoaded', () => {
  refreshView();

  const form = document.getElementById('finding-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const title = document.getElementById('title').value.trim();
      const summary = document.getElementById('summary').value.trim();
      const severity = document.getElementById('severity').value;

      if (!title) return;

      const finding = Finding.fromForm({ title, summary, severity });
      findings = [finding, ...findings];
      selectedFindingId = finding.id;

      refreshView();
      form.reset();
    });
  }

  const list = document.getElementById('findings-list');
  if (list) {
    list.addEventListener('click', event => {
      const button = event.target.closest('[data-finding-id]');
      if (!button) return;

      selectFinding(Number(button.dataset.findingId));
    });
  }
});