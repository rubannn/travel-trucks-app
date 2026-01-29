# travel-trucks-app

A minimal SPA built with React + Vite (SWC). An application for browsing truck cards with details, a gallery, specifications, and reviews.

## Quick Start

Requirements:
- Node.js (recommended 16+)

Install and run:
```bash
npm install
npm run dev
```

Build and preview:
```bash
npm run build
npm run preview
```

Lint check:
```bash
npm run lint
```

## About the Project

- Technologies: React, Vite, @vitejs/plugin-react-swc, React Router, Redux.
- Entry points: `src/main.jsx`, `src/App.jsx`.
- Routing: routes are configured in `src/App.jsx`:
  - `/` — home
  - `/catalog` — list
  - `/catalog/:id` — details (nested routes `features` and `reviews`, with a default redirect to `features`)
  - `/favourites`
  - `*` — 404

## Structure (key directories)

- `src/` — React source code (components, pages, redux, assets)
  - `src/components` — UI components
  - `src/pages` — application pages
  - `src/assets` — images and SVGs (imported as modules)
- `public/` — static files available from the root (`/`)

## Conventions

- Use ESM imports/exports.
- Static files that must remain unchanged and be directly accessible should be placed in `public/` and referenced via `/name`.
- Component-level CSS should be placed next to the component.
- After changes, run `npm run dev` and check HMR and the console.

## Useful Files

- `vite.config.js` — Vite configuration (SWC React plugin).
- `eslint.config.js` — ESLint rules.
- `package.json` — scripts and dependencies.

## Notes for Developers

- By default, on the details page (route `/catalog/:id`), the index nested route performs a Navigate to `features` — see `src/App.jsx`.
- When adding images/assets, place them in `src/assets` so they are processed by the bundler.
- Before committing: use short and clear commit messages (for example: `feat(details): add gallery preview`).
