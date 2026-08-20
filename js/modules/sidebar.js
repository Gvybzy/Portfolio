export function renderSidebar(profile) {
  return `<div class="side-inner">
    <div class="profile-mini">
      <div class="avatar">G</div>
      <div><div class="side-name">${profile.name}</div><div class="side-role">${profile.role}</div></div>
    </div>
    <div class="status"><span class="status-dot"></span><span>Learning</span></div>
    <div class="side-rule"></div>
    <div class="side-label">Links</div>
    <nav class="side-nav" aria-label="Sections">
      <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#journey">Journey</a><a href="#github">GitHub</a><a href="#contact">Contact</a>
    </nav>
    <div class="side-rule"></div>
    <div class="side-label">Currently learning</div>
    <div class="side-learning"><span>Networking</span><span>Linux</span><span>Cybersecurity</span></div>
    <div class="side-rule"></div>
    <div class="side-label">Direction</div>
    <div class="side-direction"><span>BSIT</span><b>→</b><span>Cybersecurity</span></div>
    <div class="side-rule"></div>
    <div class="theme-toggle-wrapper">
      <button id="theme-toggle" class="theme-toggle-btn" type="button" aria-label="Switch to light mode" title="Switch to light mode" aria-pressed="false">
        <span class="theme-toggle-track" aria-hidden="true">
          <span class="theme-option theme-sun">☀</span>
          <span class="theme-option theme-moon">☾</span>
          <span class="theme-toggle-thumb"></span>
        </span>
      </button>
    </div>
    <div class="side-rule"></div>
    <div class="side-label">GitHub</div>
    <a class="side-github mono" href="${profile.github}" target="_blank" rel="noreferrer">@${profile.githubUsername} ↗</a>
    <div class="side-bottom"><span class="mono">${profile.philosophy}</span></div>
  </div>`;
}