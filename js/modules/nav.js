export function renderNav(profile) {
  return `
    <nav class="navbar" aria-label="Primary navigation">
      <div class="container">
        <a href="#home" class="nav-logo" aria-label="Go to home">
          <span class="dot" aria-hidden="true"></span><span>${profile.name}</span>
        </a>
        <ul class="nav-links" id="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#github">GitHub</a></li>
        </ul>
        <div class="nav-cta">
          <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme">☀</button>
          <a class="btn btn-ghost nav-contact" href="#contact">Contact</a>
          <button class="nav-toggle" id="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>`;
}
