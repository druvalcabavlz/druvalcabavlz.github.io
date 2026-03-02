// ===== AGENTS PAGE =====

async function loadAgents() {
  const res = await fetch('../data/agents.json');
  const agents = await res.json();
  const grid = document.getElementById('agents-grid');

  grid.innerHTML = agents.map(agent => `
    <div class="card">
      <div class="card-icon">${agent.icon}</div>
      <div class="card-title">${agent.name}</div>
      <div class="card-desc">${agent.description}</div>
      <span class="card-tag">${agent.type}</span>
      <div class="agent-status ${agent.status}">${agent.status}</div>
    </div>
  `).join('');
}

loadAgents();
