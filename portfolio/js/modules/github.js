function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value ?? "";
  return div.innerHTML;
}

function timeAgo(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "recently";
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

function repoCard(repo) {
  const language = repo.language ? `<span class="repo-lang"><span class="lang-dot"></span>${escapeHtml(repo.language)}</span>` : `<span class="repo-lang">No language listed</span>`;
  return `
    <a class="repo-card repo-card-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(repo.name)} on GitHub">
      <div class="repo-card-top"><h4>${escapeHtml(repo.name)}</h4><span class="repo-arrow" aria-hidden="true">↗</span></div>
      <p>${escapeHtml(repo.description) || "No description provided."}</p>
      <div class="repo-meta">${language}<span class="repo-updated">updated ${timeAgo(repo.updated_at)}</span></div>
    </a>`;
}

async function fetchRepos(username) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Unexpected GitHub API response.");
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

export function renderGithubSection(profile, projects, config) {
  const featuredNames = new Set(config.featuredRepositories.map(name => name.toLowerCase()));
  const featured = projects.filter(project => featuredNames.has(project.name.toLowerCase()));
  return `
    <section id="github">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">GitHub</div>
          <h2 class="section-title">My GitHub</h2>
          <p class="gh-intro">My GitHub is where I document the things I build, experiment with, and learn from. New public repositories can appear in the automatic list below.</p>
        </div>
        <div class="gh-subhead"><h3>Featured Projects</h3></div>
        <div class="repo-grid">${featured.map(project => `
          <a class="repo-card repo-card-link" href="${project.github}" target="_blank" rel="noopener noreferrer">
            <div class="repo-card-top"><h4>${escapeHtml(project.name)}</h4><span class="repo-arrow" aria-hidden="true">↗</span></div>
            <p>${escapeHtml(project.description)}</p>
            <div class="repo-meta"><span class="repo-lang"><span class="lang-dot"></span>${escapeHtml(project.technologies[0] || "Project")}</span><span class="repo-updated">featured</span></div>
          </a>`).join("")}</div>
        <div class="gh-subhead gh-subhead-spaced"><h3>Other Repositories</h3></div>
        <div id="gh-auto-repos"><div class="gh-state">loading repositories…</div></div>
        <div class="gh-cta"><a class="btn btn-primary" href="${profile.github}" target="_blank" rel="noopener noreferrer">View GitHub Profile ↗</a></div>
      </div>
    </section>`;
}

export async function mountGithubRepos(container, config) {
  if (!container) return;
  container.innerHTML = `<div class="gh-state">loading repositories…</div>`;
  try {
    const repos = await fetchRepos(config.username);
    const excluded = new Set(config.excludedRepositories.map(name => name.toLowerCase()));
    const featured = new Set(config.featuredRepositories.map(name => name.toLowerCase()));
    const visible = repos
      .filter(repo => !repo.fork)
      .filter(repo => !excluded.has(repo.name.toLowerCase()))
      .filter(repo => !featured.has(repo.name.toLowerCase()));

    if (!visible.length) {
      container.innerHTML = `<div class="gh-state">No additional public repositories available yet.</div>`;
      return;
    }

    container.innerHTML = `<div class="repo-grid">${visible.map(repoCard).join("")}</div>`;
  } catch (error) {
    console.error("[portfolio] GitHub repositories could not be loaded:", error);
    const message = error?.name === "AbortError" ? "GitHub took too long to respond." : "GitHub repositories are temporarily unavailable.";
    container.innerHTML = `<div class="gh-state error">${message} You can still view my profile directly.</div>`;
  }
}
