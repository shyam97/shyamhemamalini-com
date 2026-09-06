# shyamhemamalini-com

React 18 + Vite 7 + Tailwind CSS 3 single-page app with three client-side routes.

## Stack

- **Vite** — dev server and build
- **@vitejs/plugin-react** — JSX transform + Fast Refresh
- **Tailwind CSS** — utility styling, dark mode via the `class` strategy
- **react-router-dom** — client-side routing (`BrowserRouter`)
- **lucide-react** — icon set

## Structure

```
src/
  pages/       one file per route: Home.jsx (/), CV.jsx (/cv), Photography.jsx (/photography)
  components/  shared UI — Layout (theme + per-page background shell + nav + footer),
               Nav, TimelineCard (accordion), ProjectCard, PhotoTile, Lightbox,
               SectionHeader, UnsplashIcon
  data/        content as plain JS objects/arrays — resume.js, projects.js, photos.js.
               Editing content never requires touching component code.
  lib/         small utilities (email.js)
public/        static assets served as-is — images, PDF, favicon, and _redirects
               (SPA fallback for static hosting)
```

## Routing & theming

- Routes are defined in `App.jsx`, rendered inside `Layout` via `BrowserRouter` (set up in `main.jsx`).
- Theme (dark/light) is a single piece of state in `Layout`, persisted to `localStorage`.
- Each route applies its own background/accent treatment on top of the shared toggle.
- `public/_redirects` rewrites all paths to `index.html` so client-side routes resolve on static hosting.

## Scripts

```
npm run dev       dev server
npm run build     production build → dist/
npm run preview   preview the production build locally
```

## Requirements

Node ≥20.19 (see `.nvmrc`) — required by Vite 7.

## Deployment

Static build (`dist/`) deployed via Cloudflare Pages, connected to this repo's `main` branch.

---

[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude-D97757?style=flat-square)](https://claude.com)

Built with Claude Sonnet 5 — Anthropic's model, January 2026 knowledge, infinite patience for revisions.

