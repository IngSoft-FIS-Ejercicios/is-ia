import Mission from './mission.js';

class MissionLog {
  constructor(missions = []) {
    this.missions = missions.filter(mission => mission instanceof Mission);
  }

  addMission(mission) {
    if (!(mission instanceof Mission)) {
      throw new Error('Mission must be an instance of Mission');
    }

    this.missions.push(mission);
    return this.missions.length;
  }

  countByStatus(status) {
    return this.missions.filter(mission => mission.status === status).length;
  }

  findByCommander(commander) {
    const name = commander?.trim();

    if (!name) {
      return [];
    }

    return this.missions.filter(mission => mission.commander === name);
  }

  getReadyMissions() {
    return this.missions.filter(mission => mission.isLaunchReady());
  }

  getLongestMission() {
    if (this.missions.length === 0) {
      return null;
    }

    return this.missions.reduce((longest, mission) => (
      mission.durationDays > longest.durationDays ? mission : longest
    ));
  }

  getCriticalMissions() {
    // TODO: return the missions that need immediate attention
  }
}

export default MissionLog;