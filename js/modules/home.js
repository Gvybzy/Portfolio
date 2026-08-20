export function renderHome(profile) {
  return `
    <header class="hero" id="home">
      <div class="container hero-inner">
        <div>
          <div class="eyebrow">Portfolio / 2026</div>
          <h1>BSIT Student<br /><span class="accent">Deliberately moving toward cybersecurity.</span></h1>
          <p class="hero-sub">${profile.heroSupport}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="${profile.github}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Open GitHub ↗</a>
          </div>
        </div>
        <div class="status-panel" aria-label="Current status">
          <div class="panel-head"><span class="led" aria-hidden="true"></span>status</div>
          ${profile.statusBlock.map(row => `<div class="status-row"><span class="k">${row.label}</span><span class="v">${row.value}</span></div>`).join("")}
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true"><span>scroll</span><span class="line"></span></div>
    </header>`;
}
