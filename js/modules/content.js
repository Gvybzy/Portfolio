const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags = arr => (arr||[]).map(x=>`<span class="tag">${esc(x)}</span>`).join('');

export function renderContent(profile, projects, skillCategories, learning, journey, futureProjects, githubConfig){
  const featured = projects.filter(p => githubConfig.featuredRepositories.map(x=>x.toLowerCase()).includes(p.name.toLowerCase()));
  return `
  <section id="home" class="intro section-block">
    <div class="eyebrow mono">/ portfolio</div>
    <h1>BSIT Student.<br><span>Deliberately moving toward cybersecurity.</span></h1>
    <p class="lede">${esc(profile.heroSupport)}</p>
    <div class="quick-links"><a href="#projects">View projects ↓</a><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </section>

  <section id="about" class="section-block">
    <div class="section-heading"><span class="hash">#</span><div><h2>about</h2><p>Who I am and where I'm heading.</p></div></div>
    <div class="about-grid"><div>${profile.about.map(p=>`<p>${esc(p)}</p>`).join('')}</div><aside class="note"><span class="mono">current direction</span><strong>BSIT → Cybersecurity</strong><p>I'm building the technical foundation first, then deliberately moving deeper into security.</p></aside></div>
  </section>

  <section id="projects" class="section-block">
    <div class="section-heading"><span class="hash">#</span><div><h2>projects</h2><p>Things I've built while learning software, automation, and technology.</p></div></div>
    <div class="project-list">${featured.map(p=>`<article class="project-row"><div class="project-main"><div class="project-top"><h3>${esc(p.name)}</h3><span class="mono status-label">${esc(p.status)}</span></div><p>${esc(p.description)}</p><div class="tags">${tags(p.technologies)}</div></div><a class="repo-link" href="${p.github}" target="_blank" rel="noreferrer">GitHub ↗</a></article>`).join('')}</div>
  </section>

  <section id="skills" class="section-block">
    <div class="section-heading"><span class="hash">#</span><div><h2>skills</h2><p>My current technical foundation — no artificial percentages.</p></div></div>
    <div class="skill-grid">${skillCategories.map(c=>`<div class="skill-card"><h3>${esc(c.title)}</h3><div class="tags">${tags(c.items)}</div></div>`).join('')}</div>
    <div class="learning-box"><div><span class="mono">currently learning</span><h3>Building toward security.</h3></div><div class="tags">${tags(learning)}</div></div>
  </section>

  <section id="journey" class="section-block">
    <div class="section-heading"><span class="hash">#</span><div><h2>trajectory</h2><p>My path is intentional: build a foundation, then go deeper into security.</p></div></div>
    <div class="timeline">${journey.map(j=>`<div class="timeline-item ${esc(j.state)}"><div class="stage mono">${esc(j.stage)}</div><div><h3>${esc(j.title)}</h3><div class="tags">${tags(j.items)}</div></div></div>`).join('')}</div>
    <div class="future"><div class="section-heading small"><span class="hash">+</span><div><h2>future projects</h2><p>Planned learning projects, not completed work.</p></div></div>${futureProjects.map(p=>`<div class="future-row"><div><strong>${esc(p.name)}</strong><span>${esc(p.description)}</span></div><span class="mono">${esc(p.status)}</span></div>`).join('')}</div>
  </section>

  <section id="github" class="section-block">
    <div class="section-heading"><span class="hash">#</span><div><h2>github</h2><p>Featured work plus repositories pulled automatically from <a class="inline-link" href="${profile.github}" target="_blank" rel="noreferrer">@${profile.githubUsername}</a>.</p></div></div>
    <div class="github-featured"><div class="mini-label mono">featured</div><div class="repo-grid featured-grid">${featured.map(p=>`<a class="repo-card" href="${p.github}" target="_blank" rel="noreferrer"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><span>View repository ↗</span></a>`).join('')}</div></div>
    <div class="github-auto"><div class="mini-label mono">other public repositories</div><div id="gh-auto-repos"><div class="gh-state">loading repositories…</div></div></div>
  </section>

  <section id="contact" class="section-block contact-section">
    <div class="section-heading"><span class="hash">#</span><div><h2>contact</h2><p>For work, collaboration, or just to say hello.</p></div></div>
    <div class="contact-card"><p class="mono">github</p><a href="${profile.github}" target="_blank" rel="noreferrer">github.com/${profile.githubUsername} ↗</a><p class="contact-note">I'll add Email and LinkedIn later</code>.</p></div>
  </section>
  <footer class="footer"><span>${esc(profile.name)} — ${esc(profile.role)}</span><span class="mono">${esc(profile.philosophy)}</span></footer>`;
}
