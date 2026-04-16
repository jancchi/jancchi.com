# Portfolio — CLAUDE.md

## Project Overview

Static single-page portfolio website for Jan Michalek. No build tools, no package manager, no framework — pure HTML/CSS/JS served directly from the filesystem.

## Running Locally

```bash
# Option 1: VS Code Live Server extension (configured for port 5501)
# Option 2: Python
python -m http.server 8000
# Then open http://localhost:8000
```

No build step required. Open `index.html` directly or serve over HTTP.

## File Structure

```
index.html        # Main single-page site (all sections live here)
omne.html         # Redirect → #contact
skola.html        # Redirect → #education
zaujmy.html       # Redirect → #interests
css/style.css     # All styles; uses CSS custom properties for theming
js/script.js      # Vanilla JS: tsParticles init, Intersection Observer (reveal + scrollspy)
obrazky/          # Image assets (ja.jpg, etc.)
```

## Tech Stack

- **HTML5** — semantic markup, ARIA attributes for accessibility
- **CSS3** — custom properties (design tokens), Grid, Flexbox, `clamp()` for fluid type/spacing
- **Vanilla JS (ES6)** — Intersection Observer for scroll animations and nav scrollspy
- **CDN dependencies** (no local install):
  - `tsParticles` v2.12.0 — animated particle background
  - Google Fonts: Space Grotesk, IBM Plex Mono

## CSS Design System

Design tokens defined at `:root` in `css/style.css`:
- `--bg`, `--surface`, `--text`, `--accent` (`#8bd3e6` cyan), `--danger`
- Dark theme; accent is cyan

Responsive breakpoints: `1080px`, `860px`, `620px`

Key class patterns:
- `.section` — page section container
- `.reveal` / `.reveal.is-visible` — scroll-triggered fade-in animation
- `.badge.<variant>` — inline tags: `research`, `awarded`, `prototype`, `dev`, `concept`
- `.card-grid`, `.metric-grid`, `.stack-grid` — layout grids
- `.eyebrow`, `.lead`, `.sublead`, `.proof-line`, `.chip` — typography utilities

## JavaScript Conventions

`js/script.js` has two Intersection Observers:
1. **Reveal observer** — adds `.is-visible` to `.reveal` elements as they scroll into view (threshold 18%, rootMargin `0px 0px -8% 0px`). Skips animation if `prefers-reduced-motion` is set.
2. **Scrollspy observer** — sets `aria-current="page"` on the matching nav link per visible section (threshold 1%, rootMargin `-45% 0px -45% 0px`).

tsParticles is disabled when `prefers-reduced-motion` is detected.

## Content Placeholders

Items still pending real content are marked in the HTML with `placeholder` or `pending-proof` classes/comments:
- Hackathon result proof link
- Qdrant evidence image
- Contact fields: email, GitHub, LinkedIn URLs

## Deployment

No CI/CD. Static files — deploy directly to Netlify, Vercel, GitHub Pages, or any static host. No build command needed; publish directory is the repo root.
