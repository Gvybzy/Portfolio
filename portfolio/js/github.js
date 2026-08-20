import { githubConfig } from "../data/githubConfig.js";

// In-memory cache only — no browser storage APIs are used.
let memoryCache = null;

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

async function fetchRepos() {
  // Simple in-memory cache so we don't refetch on every render within one
  // page session. No browser storage APIs are used.
  if (memoryCache) return memoryCache;

  const res = await fetch(
    `https://api.github.com/users/${githubConfig.username}/repos?per_page=100&sort=updated`,
    { headers: { Accept: "application/vnd.github+json" } }
  );

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = await res.json();
  memoryCache = data;
  return data;
}

function renderRepoCard(repo) {
  return `
    <a class="repo-card" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">
      <h3>${escapeHtml(repo.name)}</h3>
      <p>${escapeHtml(repo.description) || "No description provided."}</p>
      <div class="repo-meta">
        <span class="repo-lang">
          ${repo.language ? `<span class="lang-dot"></span>${escapeHtml(repo.language)}` : ""}
        </span>
        <span class="repo-updated">updated ${timeAgo(repo.updated_at)}</span>
      </div>
    </a>
  `;
}

export async function mountGithubRepos(containerEl) {
  if (!containerEl) {
    console.warn("[github.js] mountGithubRepos called without a container element — skipping.");
    return;
  }

  containerEl.innerHTML = `<div class="gh-state">loading repositories…</div>`;

  try {
    const repos = await fetchRepos();

    const excluded = new Set(githubConfig.excludedRepositories.map((r) => r.toLowerCase()));
    const featured = new Set(githubConfig.featuredRepositories.map((r) => r.toLowerCase()));

    const visible = repos
      .filter((r) => !r.fork)
      .filter((r) => !excluded.has(r.name.toLowerCase()))
      .filter((r) => !featured.has(r.name.toLowerCase()));

    if (visible.length === 0) {
      containerEl.innerHTML = `<div class="gh-state">No additional public repositories available yet.</div>`;
      return;
    }

    containerEl.innerHTML = `<div class="repo-grid">${visible.map(renderRepoCard).join("")}</div>`;
  } catch (err) {
    containerEl.innerHTML = `<div class="gh-state error">Unable to load GitHub repositories right now. You can still explore the featured projects above, or visit the GitHub profile directly.</div>`;
  }
}
