# ClearSky Software — Marketing Website

Static marketing site for ClearSky Software, built with **SvelteKit** and
`@sveltejs/adapter-static`. Desktop and mobile are delivered as **separate
component sets** (not responsive CSS) and swapped at runtime by a small
breakpoint helper.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Static production build → `./build` |
| `npm run preview` | Serve the production build locally |

## Deploy

`npm run build` emits a fully static site to `./build` (via
`@sveltejs/adapter-static`). Host it anywhere that serves static files —
Cloudflare Pages, Netlify, Vercel, S3+CloudFront, or any web server.

## Project structure

```
.
├── src/
│   ├── app.html               # HTML shell (fonts, meta)
│   ├── app.css                # global reset + CSS custom properties (brand tokens)
│   ├── lib/
│   │   ├── Responsive.svelte   # desktop/mobile slot swap (≤820px → mobile)
│   │   └── components/         # 50 Svelte components (desktop + *Mobile variants)
│   └── routes/                 # one folder per page
│       ├── +layout.svelte      # imports global CSS
│       ├── +layout.js          # prerender = true, trailingSlash = always
│       ├── +page.svelte        # Home
│       ├── trades/
│       ├── tourism/
│       ├── manufacturers/
│       ├── professional-services/
│       ├── associations/
│       ├── about/
│       ├── guarantee/          # Protected Markets
│       └── contact/            # STUB — no design delivered yet
├── static/
│   ├── favicon.svg
│   └── images/
│       ├── features/           # 40 real feature icons + hero images (Trades grid)
│       └── ...                 # placeholders (auto-swap when real assets dropped)
├── scripts/
│   └── gen-placeholders.mjs    # regenerates raster placeholder images (no deps)
└── _source-archive/            # original design deliverables (git-ignored)
```

## Pages

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero → Revenue → Sectors → Growth Engine → Founders |
| `/trades/` | Trades | Hero → Steps → **20-feature modal grid** → Modern Websites → Founders |
| `/tourism/` `/manufacturers/` `/professional-services/` | Sector pages | Same pattern; hero copy is draft (`TODO(copy)`) |
| `/associations/` | Associations | Hero → Scale Advantage → Leverage Scale → CTA (no Founders) |
| `/about/` | About / Who We Are | Hero → What We Do → Our Vision → Why ClearSky → Founders |
| `/guarantee/` | Guarantee / Protected Markets | Hero → Protection by Sector → Guarantee → Founders |
| `/contact/` | Contact | On-brand **stub** — replace when design arrives |

## Design system

- Grid: 1440 container / 30px sides / 1380 usable (Features section: 1200/1140).
- Mobile design width: 390px. Section padding 36/44 top/bottom, 20 sides.
- Brand colors: blue `#3D6DB5`, light blue `#6B9BD1`, orange `#F5841F`,
  title blue `#4267AD`, dark navy `#1F2A44`, tint `#F7F9FC`.
- Fonts (Google, loaded in `app.html`): Inter, Barlow, Barlow Condensed, Playpen Sans.
- Copy rules: guarantee is **always** "up to 100% back" (never flat "money back");
  never use "cannibalize/cannibalism".

## Outstanding (client-blocked)

These are intentional placeholders, not bugs — they need client-supplied content:

1. **Real image assets** — logo, hero photos, sector photos, video posters.
   Drop them into `static/images/` at the existing placeholder paths; they swap
   in automatically.
2. **Real video / CTA URLs** — every video and CTA link is placeholder `#`
   (Revenue, Growth Engine ×4, Trades Steps ×4, 20 feature modals, sector heroes,
   About platform video, Associations). All are prop-driven (`videoHref`,
   `step.href`, modal `video`) so they wire in fast once URLs exist.
3. **Copy sign-off** — sector-hero headlines are drafts (`TODO(copy)`); a few
   Features design decisions await confirmation (title color, title-bar wording).
4. **Contact page** — currently a stub; no design was delivered.

## Source archive

`_source-archive/` holds the original loose design deliverables (HTML previews,
raw Svelte components, Python build scripts, handoff docs) plus the session notes.
It is **git-ignored** by default (67 MB). To version it, remove `/_source-archive/`
from `.gitignore`.
