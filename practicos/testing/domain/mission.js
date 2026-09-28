const allowedStatuses = ['planned', 'ready', 'launched', 'completed', 'delayed'];

class Mission {
  constructor({ code, commander, destination, durationDays = 0, status = 'planned', crew = [] } = {}) {
    this.code = (code ?? '').trim();
    this.commander = (commander ?? '').trim();
    this.destination = (destination ?? '').trim();
    this.durationDays = Number.isFinite(Number(durationDays)) ? Number(durationDays) : 0;
    this.status = status;
    this.crew = Array.isArray(crew) ? crew.map(member => String(member).trim()).filter(Boolean) : [];
  }

  getMissionCode() {
    return `${this.code}-${this.destination}`.toUpperCase();
  }

  getCrewCount() {
    return this.crew.length;
  }

  setStatus(status) {
    if (!allowedStatuses.includes(status)) {
      throw new Error('Invalid mission status');
    }

    this.status = status;
    return this.status;
  }

  addCrewMember(member) {
    const name = member?.trim();

    if (!name) {
      throw new Error('Crew member name is required');
    }

    if (this.crew.includes(name)) {
      return this.getCrewCount();
    }

    this.crew.push(name);
    return this.getCrewCount();
  }

  isLaunchReady() {
    return this.status === 'ready' && this.durationDays > 0 && this.getCrewCount() >= 3;
  }

  delay(days) {
    const amount = Number(days);

    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error('Delay must be a positive integer');
    }

    this.durationDays += amount;

    if (this.status === 'ready') {
      this.status = 'delayed';
    }

    return this.durationDays;
  }

  getReadinessMessage() {
    // TODO: return a human friendly message based on status, duration and crew
  }

  getSummary() {
    return `${this.code} | ${this.commander} | ${this.destination} | ${this.durationDays} days | ${this.status}`;
  }
}

export default Mission;