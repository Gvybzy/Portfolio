import { initProtection } from "./protection.js";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { skillCategories, currentlyLearning } from "../data/skills.js";
import { journey, futureProjects } from "../data/journey.js";
import { githubConfig } from "../data/githubConfig.js";
import { renderSidebar } from "./modules/sidebar.js";
import { renderContent } from "./modules/content.js";
import { mountGithubRepos } from "./github.js";
import { initTheme } from "./theme.js";

function init(){
  const sidebar=document.getElementById('sidebar');
  const content=document.getElementById('content');
  sidebar.innerHTML=renderSidebar(profile);
  content.innerHTML=renderContent(profile,projects,skillCategories,currentlyLearning,journey,futureProjects,githubConfig);
  mountGithubRepos(document.getElementById('gh-auto-repos'));
  initTheme();
  const toggle=document.getElementById('sidebar-toggle');
  toggle?.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  sidebar.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>sidebar.classList.remove('open')));
}
document.addEventListener('DOMContentLoaded',init);


initProtection();
