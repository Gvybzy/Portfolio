function card(project) {
  const tech = project.technologies.map(t => `<span class="tag">${t}</span>`).join("");
  return `
    <article class="project-card">
      <div class="project-top">
        <h3>${project.name}</h3>
        <span class="project-status">${project.status}</span>
      </div>
      <p class="desc">${project.description}</p>
      <div class="project-tags">${tech}</div>
      <div class="project-foot">
        <span class="project-category mono">${project.category}</span>
        <a class="project-link" href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
      </div>
      <details class="project-details-native">
        <summary>Project notes</summary>
        <h4>What I Built</h4><p>${project.whatIBuilt}</p>
        <h4>What I Learned</h4><p>${project.whatILearned}</p>
      </details>
    </article>`;
}

export function renderProjects(projects) {
  return `
    <section id="projects" class="section-alt">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">Projects</div>
          <h2 class="section-title">Things I've actually built</h2>
          <p class="section-sub">A curated view of my current work. Security is a direction I'm moving toward, not a label I'm putting on every project.</p>
        </div>
        <div class="project-grid">${projects.map(card).join("")}</div>
      </div>
    </section>`;
}
