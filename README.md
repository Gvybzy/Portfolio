# Gvybzy Portfolio

A modular, responsive portfolio for a BSIT student deliberately moving toward cybersecurity.

## Structure

- `index.html` — single app shell
- `js/modules/` — independently maintained UI modules for Home, About, Education, Experience, Projects, Skills, Journey, GitHub, Contact, and Footer
- `js/theme.js` — dark/light mode
- `js/main.js` — application entry point and module composition
- `data/` — centralized profile, project, skill, journey, and GitHub configuration
- `css/main.css` — shared design system and responsive styles

## GitHub integration

The GitHub section requests public repositories from:

`https://api.github.com/users/Gvybzy/repos`

Featured repositories are controlled in `data/githubConfig.js`. Other public, non-fork repositories are loaded automatically. New public repositories appear after the portfolio is refreshed, with no project-card code change required.

## Local development

Because the site uses JavaScript modules, run it through a local web server instead of opening `index.html` directly with `file://`.

With Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This is a static site and can be deployed to GitHub Pages. Keep the repository structure intact so the relative module imports continue to work.

## Updating personal information

Edit:

- `data/profile.js` — name, education, direction, contact
- `data/projects.js` — curated project details
- `data/skills.js` — current skills and learning topics
- `data/journey.js` — journey and planned projects
- `data/githubConfig.js` — featured/excluded repositories
