# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio site for Dulce Lucero Ruvalcaba Valenzuela, AI Product Manager. No build step, no framework, no package.json — pure HTML/CSS/JS deployed to GitHub Pages at `druvalcabavlz.github.io`.

## Deployment

```bash
git add <files>
git commit -m "message"
git push   # deploys to GitHub Pages automatically via origin/main
```

Preview locally by opening `index.html` directly in a browser (`file://`). There is no dev server.

## Architecture

All content lives in a single-page layout (`index.html`) with sub-pages in `pages/`. There is no templating engine — nav, footer, and shared styles are duplicated across pages.

```
index.html                  # Main portfolio (single-page, all sections)
pages/
  blog.html                 # Writing index with category filter
  30-days-ai-challenge.html # Daily AI challenge log (add new days here)
  contact.html              # Standalone contact page (legacy, not linked from nav)
assets/
  css/base/styles.css       # Base styles (largely superseded by inline Tailwind)
  css/components/           # Component styles (largely superseded by inline Tailwind)
  js/shared/                # Shared JS stubs (not used by index.html)
  js/pages/                 # Page-specific JS stubs (not used by main pages)
  images/dulce-profile.jpg  # Hero profile photo
data/
  skills.json               # Skill categories (not dynamically loaded — for reference)
  agents.json               # Agent list (not dynamically loaded — for reference)
config/
  site.json                 # Site metadata, theme colours, social links
```

> Note: `assets/js/` and `assets/css/` files are stubs from initial scaffolding. The live site uses inline `<style>` and `<script>` blocks inside each HTML file. Do not move logic into those files without updating all page references.

## Design System

**Colours (Pure Minimal palette):**
- Background: `#FFFFFF`
- Text/Navy: `#111111`
- Primary/Blue: `#2563EB`
- Muted: `#6B7280`
- Surface: `#F9FAFB` (bg), `#E5E7EB` (border)

**Typography:**
- Headings: `Archivo` (weights 400/600/700/900)
- Body: `DM Sans`
- Both loaded from Google Fonts

**Tailwind:** loaded via CDN (`cdn.tailwindcss.com`). Custom tokens are defined in a `tailwind.config` script block at the top of each HTML file. Use Tailwind utility classes for layout; use the inline `<style>` block for animations, pseudo-elements, and anything Tailwind can't express.

## Patterns

**Adding a new blog post** — edit `pages/blog.html` (add an `<article>` to `#post-list` with a `data-category` attribute) and add a card to the Writing section in `index.html`.

**Adding a new challenge day** — edit `pages/30-days-ai-challenge.html`: add a new `<article class="day-entry">` above the upcoming placeholder, update the progress bar percentage (`1/30 = 3.33%`, `2/30 = 6.66%`, etc.), update the Day counter in the hero and the `<p>` text, and remove/update the Day N+1 placeholder.

**Scroll reveal** — add class `reveal` to any element; it fades in via `IntersectionObserver` when scrolled into view. Stagger with `style="transition-delay: 0.Xs"`.

**GA4 custom events** — call `track('event_name', { key: 'value' })`. The helper is defined in `index.html`'s `<script>` block. Measurement ID: `G-4PQR9N1WTT`.

## Content Reference

Real personal data is in `config/site.json` (email, LinkedIn, GitHub handle). Do not invent contact details — always pull from that file.
