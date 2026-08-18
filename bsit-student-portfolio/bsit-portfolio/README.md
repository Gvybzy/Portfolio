# BSIT Student Developer Portfolio

A modular React/Vite portfolio for a Bachelor of Science in Information Technology student who is learning, experimenting, and building projects.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- React Helmet Async

## Run locally

```bash
npm install
npm run dev
```

## Customize content

Edit the files in `src/data/`:

- `personal.js` — name, title, contact, links, location
- `skills.js` — technologies and learning status
- `education.js` — academic history
- `certifications.js` — certificates when available
- `experience.js` — internships, OJT, organizations, freelance work, etc.
- `projects.js` — projects, categories, technologies, images, links

Replace placeholder assets under `public/assets/` as needed.

## Theme

The accent and theme variables live near the top of `src/styles/index.css`. Dark/light mode uses a single class on `<html>` and persists the selected theme in `localStorage`. First visit falls back to the system color preference.

## Contact form

The form currently performs client-side validation and success-state handling. It does not send email yet. A production deployment can connect it to a service such as Formspree, Web3Forms, EmailJS, or a serverless/backend endpoint. Keep provider secrets out of frontend source code.

## Build

```bash
npm run build
npm run preview
```

## Deployment

Because this is a Vite SPA, deploy the generated `dist/` directory to a static host. Configure the host to return `index.html` for unknown routes so `/education`, `/experience`, `/projects`, and `/contact` continue to work on refresh.

## Structure

```text
src/
├── components/
├── pages/
├── data/
├── hooks/
├── styles/
├── App.jsx
└── main.jsx
```
