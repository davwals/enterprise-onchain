# Enterprise Onchain

Source for [www.enterpriseonchain.com](https://www.enterpriseonchain.com).

Static site hosted on GitHub Pages. The landing page (`index.html`) is a
single self-contained file: all CSS, JS, SVG, and the data-URI logos are
inlined. No build step is required for the landing page.

Sub-pages (`/newsletter/`, `/jobs/`, `/dashboard/`) share styles from
`assets/shared.css`. `index.html` deliberately does not consume it — the
landing page stays self-contained so it loads fast and is portable.

## Local development

```bash
python -m http.server 8000
# → http://localhost:8000
```

Any static file server works.

## Deployment

Push to `main`. GitHub Pages serves the repo root. `CNAME` binds the
custom domain; `.nojekyll` disables Jekyll processing. No CI, no build
pipeline on the server — whatever is committed is what ships.

## Repository layout

```
/
├── index.html            Landing page (self-contained).
├── CNAME                 GitHub Pages custom domain.
├── .nojekyll             Disables Jekyll on GitHub Pages.
├── assets/
│   └── shared.css        Shared styles for sub-pages only.
├── content/
│   ├── newsletter/       Markdown sources, one file per edition.
│   └── jobs.json         Curated jobs board data.
├── scripts/
│   └── build.mjs         Node script: Markdown → HTML.
├── newsletter/           Built output: archive + per-edition pages.
├── jobs/                 Built output: filterable jobs page.
└── dashboard/            Placeholder "Coming soon" page.
```

> `assets/`, `content/`, `scripts/`, `newsletter/`, `jobs/`, and
> `dashboard/` are added in subsequent commits on the
> `feature/site-rebuild` branch. Until those land, only `index.html`,
> `CNAME`, and `.nojekyll` are live.

## Build

Sub-pages are generated from Markdown via a small Node script using
`markdown-it`. Run after any edit to `content/` or the page templates:

```bash
npm install        # one-time
npm run build      # regenerates /newsletter/, /jobs/, /dashboard/
```

Commit the built HTML output alongside the sources. GitHub Pages serves
it as static files.

## Adding a newsletter edition

1. Create `content/newsletter/YYYY-MM-DD-slug.md` with front-matter:

   ```yaml
   ---
   title: Full Spectrum
   date: 2026-04-21
   tags: [ETF, Tokenisation]
   excerpt: One-line summary shown in the archive list.
   ---
   ```

2. Write the edition body in Markdown below the front-matter.
3. `npm run build`, commit both the `.md` source and the generated
   `newsletter/<slug>/index.html`, push to `main`.

Supported tags: `ETF`, `Tokenisation`, `Regulation`, `Stablecoins`,
`Infrastructure`.

## Adding a job

Edit `content/jobs.json` and append an entry:

```json
{
  "title": "Senior Research Analyst",
  "company": "Acme Capital",
  "function": "Strategy",
  "seniority": "Senior",
  "location": "London / Remote",
  "url": "https://example.com/apply",
  "posted": "2026-04-15"
}
```

Functions: `Strategy`, `Engineering`, `Research`, `Trading`, `Legal`.
The `Strategy` value is surfaced on the board as the **Strategy &
Product** filter pill.
Seniority: `Junior`, `Mid`, `Senior`, `Lead`.

`npm run build`, commit, push.

## Branches

- `main` — production. What GitHub Pages serves.
- `feature/site-rebuild` — current rebuild work.
- `archive/pre-rebuild-2026-04` — frozen snapshot of the repo before the
  cleanup, preserving old prototypes (`nextjs-app/`, `demo/`, `terminal/`,
  etc.). Do not merge.
