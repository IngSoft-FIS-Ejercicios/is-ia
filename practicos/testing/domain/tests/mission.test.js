import Mission from '../mission.js';

describe('Mission', () => {
  test('creates a mission with trimmed values', () => {
    const mission = new Mission({
      code: ' mc-10 ',
      commander: ' Nora Vega ',
      destination: ' Mars ',
      durationDays: '12',
      crew: [' Nora Vega ', '', 'Leo Cruz']
    });

    expect(mission.code).toBe('mc-10');
    expect(mission.commander).toBe('Nora Vega');
    expect(mission.destination).toBe('Mars');
    expect(mission.durationDays).toBe(12);
    expect(mission.getCrewCount()).toBe(2);
  });

  test('returns the mission code in upper case', () => {
    const mission = new Mission({ code: 'mc-10', destination: 'mars' });

    expect(mission.getMissionCode()).toBe('MC-10-MARS');
  });

  test('counts crew members', () => {
    const mission = new Mission({ crew: ['A', 'B'] });

    expect(mission.getCrewCount()).toBe(2);
  });

  test('sets a valid status', () => {
    const mission = new Mission();

    expect(mission.setStatus('ready')).toBe('ready');
  });

  test('rejects an invalid status', () => {
    const mission = new Mission();

    expect(() => mission.setStatus('unknown')).toThrow('Invalid mission status');
  });

  test('adds a crew member and ignores duplicates', () => {
    const mission = new Mission({ crew: ['Nora'] });

    expect(mission.addCrewMember('Leo')).toBe(2);
    expect(mission.addCrewMember(' Leo ')).toBe(2);
  });

  test('rejects empty crew members', () => {
    const mission = new Mission();

    expect(() => mission.addCrewMember('')).toThrow('Crew member name is required');
  });

  test('detects whether a mission is launch ready', () => {
    const readyMission = new Mission({ status: 'ready', durationDays: 5, crew: ['A', 'B', 'C'] });
    const notReadyMission = new Mission({ status: 'planned', durationDays: 5, crew: ['A', 'B', 'C'] });

    expect(readyMission.isLaunchReady()).toBe(true);
    expect(notReadyMission.isLaunchReady()).toBe(false);
  });

  test('delays a mission and changes its status when it was ready', () => {
    const mission = new Mission({ status: 'ready', durationDays: 10 });

    expect(mission.delay(4)).toBe(14);
    expect(mission.status).toBe('delayed');
  });

  test('rejects an invalid delay amount', () => {
    const mission = new Mission();

    expect(() => mission.delay(0)).toThrow('Delay must be a positive integer');
  });

  test('builds a summary string', () => {
    const mission = new Mission({
      code: 'MC-01',
      commander: 'Nora Vega',
      destination: 'Europa',
      durationDays: 8,
      status: 'ready'
    });

    expect(mission.getSummary()).toBe('MC-01 | Nora Vega | Europa | 8 days | ready');
  });
});