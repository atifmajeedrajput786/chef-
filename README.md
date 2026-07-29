# Bright Chef — React App

This is a full React (Vite) conversion of the original static "Chef" HTML/CSS template. All pages, styling, and imagery from the original site have been rebuilt as a componentized, client-side-routed single-page app with working authentication, forms, and interactive dashboard features.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Routing** (`react-router-dom`) for Home, Login, Signup, Pricing, Search, History, and Settings, matching the original pages.
- **Authentication** (`src/context/AuthContext.jsx`) — real signup/login/logout backed by `localStorage`, with protected routes: Search/History/Settings redirect to `/login` if you're not signed in.
- **Interactive dashboard**
  - Search: recipe finder + weekly meal-planner tabs, token counter that decrements on each search, ingredient filters, day-by-day accordion.
  - History: expandable list of past recipe/meal-plan lookups.
  - Settings: editable account info (email/password/language/weekly email toggle), persisted per user.
  - Pricing: monthly/annual toggle; selecting a plan grants the matching token allowance.
- **Home page**: hero slider, cuisine-tab dish carousels, testimonial carousel, "how it works," newsletter/contact forms — all using `react-slick` for carousels (no jQuery required).
- All original CSS (`src/assets/css/style1.css`) and imagery (`src/assets/img`, `src/assets/fonts`) preserved for visual fidelity.

## Notable omissions

- `variable.html` from the original zip was a standalone CSS-variable test fixture unrelated to the app (not linked from any page), so it wasn't carried into the React app.
- Some originally hard-coded slider content (e.g., "more receipts" links) now route to `/search` since that page doesn't exist as a separate static target in the source template.

## Project structure

```
src/
  assets/         # original images, fonts, and stylesheet (style1.css)
  components/     # Navbar, Footer, DashSidebar, DashNav, Carousel
  context/        # AuthContext (signup/login/session/tokens)
  data/           # content extracted from the original HTML (recipes, pricing, history, meal plans, home page copy)
  pages/          # Home, Login, Signup, Pricing, Search, History, Setting
  App.jsx         # route definitions
  main.jsx        # app entry point, global CSS imports
```

## Note on this build

This project was assembled in a sandboxed environment without internet/npm-registry access, so dependencies could not be installed or the dev server test-run here. All JSX was validated for syntax correctness with the TypeScript compiler, and every image import was checked against the actual files on disk, but please run `npm install && npm run dev` on your machine as the first step and file an issue/report back if anything doesn't render as expected.
