export function renderFooter(profile) {
  return `
    <footer>
      <div class="container footer-inner">
        <p>${profile.name} — BSIT Student, ${profile.direction} © ${new Date().getFullYear()}</p>
        <a href="${profile.github}" target="_blank" rel="noopener noreferrer">github.com/${profile.githubUsername} ↗</a>
      </div>
    </footer>`;
}
