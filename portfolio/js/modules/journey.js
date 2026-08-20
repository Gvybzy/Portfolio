export function renderJourney(journey, futureProjects) {
  return `
    <section id="journey" class="section-alt">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">Cybersecurity Journey</div>
          <h2 class="section-title">My path toward cybersecurity</h2>
          <p class="section-sub">A progression from foundational software skills toward a security-focused direction.</p>
        </div>
        <div class="journey-track">
          <div class="journey-line" aria-hidden="true"></div>
          ${journey.map(stage => `
            <div class="journey-stage" data-state="${stage.state}">
              <div class="stage-node">${stage.stage}</div>
              <span class="stage-tag">${stage.state === "current" ? "in progress" : stage.state === "done" ? "complete" : stage.state === "next" ? "up next" : "future"}</span>
              <h3>${stage.title}</h3>
              <ul>${stage.items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>`).join("")}
        </div>
        <div class="subsection-label">What I want to build next</div>
        <p class="subsection-note">Planned cybersecurity learning projects — not presented as completed work.</p>
        <div class="future-grid">
          ${futureProjects.map(p => `<div class="future-card"><div class="future-top"><h4>${p.name}</h4><span class="future-status">${p.status}</span></div><div class="future-tech mono">${p.tech}</div><p class="desc">${p.description}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
}
