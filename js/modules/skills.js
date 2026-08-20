export function renderSkills(skillCategories, currentlyLearning) {
  return `
    <section id="skills">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">Skills</div>
          <h2 class="section-title">Technical foundation</h2>
          <p class="section-sub">What I currently work with — without invented proficiency percentages.</p>
        </div>
        <div class="skills-grid">
          ${skillCategories.map(cat => `<div class="skill-card"><h3>${cat.title}</h3><ul>${cat.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("")}
        </div>
        <div class="subsection-label">Currently learning</div>
        <p class="subsection-note">Areas I'm actively studying, not claiming as expertise.</p>
        <div class="learning-strip">${currentlyLearning.map(item => `<span class="learning-chip">${item}</span>`).join("")}</div>
      </div>
    </section>`;
}
