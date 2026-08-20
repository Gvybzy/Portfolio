export function renderAbout(profile) {
  return `
    <section id="about">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">About</div>
          <h2 class="section-title">Where I'm coming from</h2>
        </div>
        <div class="about-grid">
          <div class="about-copy reveal">
            ${profile.about.map(p => `<p>${p}</p>`).join("")}
          </div>
          <div>
            <div class="about-facts">
              <div class="fact-row"><span class="k">Role</span><span class="v">${profile.role}</span></div>
              <div class="fact-row"><span class="k">Education</span><span class="v">${profile.education}</span></div>
              <div class="fact-row"><span class="k">Direction</span><span class="v">${profile.direction}</span></div>
              <div class="fact-row"><span class="k">GitHub</span><span class="v">${profile.githubUsername}</span></div>
            </div>
            <div class="philosophy-block">
              <div class="label">Philosophy</div>
              <div class="value">${profile.philosophy}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
