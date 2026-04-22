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
   type: weekly
   tags: [ETF, Tokenisation]
   excerpt: One-line summary shown in the archive list.
   ---
   ```

2. Write the edition body in Markdown below the front-matter.
3. `npm run build`, commit both the `.md` source and the generated
   `newsletter/<slug>/index.html`, push to `main`.

**Required fields:** `title`, `date`, `type`. The `type` field is
how the archive page tells weekly editions from deep dives. Allowed
values:

| `type`      | Archive treatment                                   |
|-------------|-----------------------------------------------------|
| `weekly`    | Shown under the *Weekly* format filter. No chip.    |
| `deep-dive` | Shown under the *Deep Dives* format filter. Gets a "Deep Dive" chip next to the date on the archive card. |

Per-edition pages render identically regardless of `type`.

Supported tags: `ETF`, `Tokenisation`, `Regulation`, `Stablecoins`,
`Infrastructure`. Tags are optional — an edition with no tags only
appears under the *All* topic filter.

## Adding a job

Edit `content/jobs.json` and append an entry:

```json
{
  "title": "Senior Research Analyst",
  "company": "Acme Capital",
  "function": "Research",
  "seniority": "Senior",
  "location": "London / Remote",
  "url": "https://example.com/apply",
  "posted": "2026-04-15"
}
```

Functions (five buckets, use the string exactly):

| Function        | Covers                                              |
|-----------------|-----------------------------------------------------|
| `Commercial`    | Sales, Business Development, Partnerships           |
| `Product`       | Product Management, Product Strategy                |
| `Technical`     | Engineering, Architecture, Software                 |
| `Strategy / Ops`| General Strategy, Operations, Legal                 |
| `Research`      | Research and research analyst roles                 |

The build script uses internal slugs (`commercial`, `product`,
`technical`, `strategy-ops`, `research`) for DOM data attributes, so
the slash in `Strategy / Ops` does not leak into selectors. Keep the
JSON value as the full string (`Strategy / Ops`).

Seniority: `Junior`, `Mid`, `Senior`, `Lead`.

`npm run build`, commit, push.

## Branches

- `main` — production. What GitHub Pages serves.
- `feature/site-rebuild` — current rebuild work.
- `archive/pre-rebuild-2026-04` — frozen snapshot of the repo before the
  cleanup, preserving old prototypes (`nextjs-app/`, `demo/`, `terminal/`,
  etc.). Do not merge.
