import Mission from '../mission.js';
import MissionLog from '../mission_log.js';

describe('MissionLog', () => {
  test('keeps only mission instances on construction', () => {
    const log = new MissionLog([
      new Mission({ code: 'A', commander: 'Nora', destination: 'Mars' }),
      { code: 'B' }
    ]);

    expect(log.missions).toHaveLength(1);
  });

  test('adds a valid mission', () => {
    const log = new MissionLog();
    const mission = new Mission({ code: 'A', commander: 'Nora', destination: 'Mars' });

    expect(log.addMission(mission)).toBe(1);
  });

  test('rejects a non mission value', () => {
    const log = new MissionLog();

    expect(() => log.addMission({})).toThrow('Mission must be an instance of Mission');
  });

  test('counts missions by status', () => {
    const log = new MissionLog([
      new Mission({ status: 'planned' }),
      new Mission({ status: 'ready' }),
      new Mission({ status: 'ready' })
    ]);

    expect(log.countByStatus('ready')).toBe(2);
    expect(log.countByStatus('planned')).toBe(1);
  });

  test('finds missions by commander and ignores blank search', () => {
    const log = new MissionLog([
      new Mission({ commander: 'Nora Vega' }),
      new Mission({ commander: 'Ilan Torres' }),
      new Mission({ commander: 'Nora Vega' })
    ]);

    expect(log.findByCommander(' Nora Vega ')).toHaveLength(2);
    expect(log.findByCommander('')).toEqual([]);
  });

  test('returns the missions ready to launch', () => {
    const readyMission = new Mission({ status: 'ready', durationDays: 5, crew: ['A', 'B', 'C'] });
    const plannedMission = new Mission({ status: 'planned', durationDays: 5, crew: ['A', 'B', 'C'] });
    const log = new MissionLog([readyMission, plannedMission]);

    expect(log.getReadyMissions()).toEqual([readyMission]);
  });

  test('returns null when there are no missions', () => {
    const log = new MissionLog();

    expect(log.getLongestMission()).toBeNull();
  });

  test('returns the longest mission', () => {
    const shortMission = new Mission({ code: 'A', durationDays: 5 });
    const longMission = new Mission({ code: 'B', durationDays: 12 });
    const log = new MissionLog([shortMission, longMission]);

    expect(log.getLongestMission()).toBe(longMission);
  });
});