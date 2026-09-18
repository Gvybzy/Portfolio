// Controls the automatic GitHub Repositories section.
// New public repos on this account will appear there automatically —
// no manual project card needed. Use the lists below to curate what shows.
export const githubConfig = {
  username: "Gvybzy",

  // Repos to hide from the automatic list (profile READMEs, this portfolio
  // repo itself, test/practice repos, etc). Leave empty to exclude nothing.
  excludedRepositories: ["Gvybzy", "Portfolio"],

  // Manually selected projects shown in the Featured Projects section above.
  // Full details for these live in data/projects.js.
  featuredRepositories: [
    "Log-analyzer",
    "ALICE-AI-Agent",
    "WinFix-Toolkit",
    "Web-Based-School-Project",
  ],
};
