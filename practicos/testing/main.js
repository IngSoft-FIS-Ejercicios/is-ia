import Mission from './domain/mission.js';
import MissionLog from './domain/mission_log.js';

const initialMissions = [
  new Mission({ code: 'MC-01', commander: 'Nora Vega', destination: 'Europa', durationDays: 8, status: 'ready', crew: ['Nora Vega', 'Leo Cruz', 'Mina Soto'] }),
  new Mission({ code: 'MC-02', commander: 'Ilan Torres', destination: 'Titan', durationDays: 14, status: 'planned', crew: ['Ilan Torres', 'Sara Lima'] }),
  new Mission({ code: 'MC-03', commander: 'Nora Vega', destination: 'Mars Orbit', durationDays: 21, status: 'delayed', crew: ['Nora Vega', 'Ema Ruiz', 'Paz Gil'] })
];

const missionLog = new MissionLog(initialMissions);

function renderMissionCards(missions) {
  const container = document.getElementById('mission-list');

  if (!container) {
    return;
  }

  container.replaceChildren(
    ...missions.map(mission => {
      const card = document.createElement('article');
      card.className = 'card';

      const title = document.createElement('h3');
      title.textContent = mission.getMissionCode();

      const text = document.createElement('p');
      text.textContent = mission.getSummary();

      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = `Crew: ${mission.getCrewCount()} | Ready: ${mission.isLaunchReady() ? 'yes' : 'no'}`;

      card.append(title, text, meta);
      return card;
    })
  );
}

function renderSummary(log) {
  const container = document.getElementById('summary');

  if (!container) {
    return;
  }

  const planned = document.createElement('div');
  planned.className = 'summary-box';
  planned.textContent = `Planned missions: ${log.countByStatus('planned')}`;

  const ready = document.createElement('div');
  ready.className = 'summary-box';
  ready.textContent = `Ready missions: ${log.countByStatus('ready')}`;

  const delayed = document.createElement('div');
  delayed.className = 'summary-box';
  delayed.textContent = `Delayed missions: ${log.countByStatus('delayed')}`;

  const longest = document.createElement('div');
  longest.className = 'summary-box';
  const longestMission = log.getLongestMission();
  longest.textContent = longestMission ? `Longest mission: ${longestMission.getMissionCode()}` : 'No missions loaded';

  container.replaceChildren(planned, ready, delayed, longest);
}

function renderDashboard() {
  renderMissionCards(missionLog.missions);
  renderSummary(missionLog);
}

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();

  const form = document.getElementById('mission-form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const code = document.getElementById('code').value.trim();
    const commander = document.getElementById('commander').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const durationDays = document.getElementById('durationDays').value.trim();
    const status = document.getElementById('status').value;

    if (!code || !commander || !destination || !durationDays) {
      return;
    }

    const mission = new Mission({ code, commander, destination, durationDays, status });
    missionLog.addMission(mission);
    renderDashboard();
    form.reset();
  });
});

export { renderDashboard };