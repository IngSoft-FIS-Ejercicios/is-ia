class Finding {
  constructor({ id, title, summary = '', severity = 'media', status = 'pendiente' } = {}) {
    this.id = id ?? Date.now();
    this.title = title?.trim() ?? '';
    this.summary = summary?.trim() ?? '';
    this.severity = severity;
    this.status = status;
  }

  static fromForm({ title, summary, severity }) {
    return new Finding({ title, summary, severity });
  }
}

window.Finding = Finding;