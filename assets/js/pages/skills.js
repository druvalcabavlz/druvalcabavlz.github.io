// ===== SKILLS PAGE =====

async function loadSkills() {
  const res = await fetch('../data/skills.json');
  const skills = await res.json();
  const grid = document.getElementById('skills-grid');

  grid.innerHTML = skills.map(skill => `
    <div class="card">
      <div class="card-icon">${skill.icon}</div>
      <div class="card-title">${skill.name}</div>
      <div class="card-desc">${skill.description}</div>
      <span class="card-tag">${skill.category}</span>
      <div class="skill-bar">
        <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

loadSkills();
