#!/usr/bin/env node
// Static site builder: Markdown editions → /newsletter/,
// JSON jobs → /jobs/, and a placeholder /dashboard/.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const NL_TAGS = ['ETF', 'Tokenisation', 'Regulation', 'Stablecoins', 'Infrastructure'];
const JOB_FUNCTIONS = [
  { value: 'Strategy',    label: 'Strategy & Product' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Research',    label: 'Research' },
  { value: 'Trading',     label: 'Trading' },
  { value: 'Legal',       label: 'Legal' },
];
const JOB_SENIORITIES = ['Junior', 'Mid', 'Senior', 'Lead'];

// ── Minimal YAML-ish front-matter parser ────────────────────────────────
function parseFrontMatter(src) {
  if (!src.startsWith('---\n')) return { data: {}, body: src };
  const end = src.indexOf('\n---', 4);
  if (end === -1) return { data: {}, body: src };
  const raw = src.slice(4, end);
  const body = src.slice(end + 4).replace(/^\n/, '');
  const data = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    let [, key, val] = m;
    val = val.trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    }
    data[key] = val;
  }
  return { data, body };
}

// ── Shared nav HTML for every sub-page ──────────────────────────────────
// `current` is one of: 'archive' | 'jobs' | null
function renderNav(current) {
  const link = (href, label, key, external = false) => {
    const active = current === key ? ' active' : '';
    const ext = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}" class="nav-link${active}"${ext}>${label}</a>`;
  };
  const drawerLink = (href, label, key, external = false) => {
    const active = current === key ? ' active' : '';
    const ext = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}" class="drawer-link${active}"${ext} onclick="closeDrawer()">${label}</a>`;
  };
  return `
<nav id="main-nav">
  <a href="/" class="nav-logo" aria-label="Enterprise Onchain — home">
    <img class="nav-logo-mark logo-dark" src="/assets/logo-dark.png" alt="" aria-hidden="true">
    <img class="nav-logo-mark logo-light" src="/assets/logo-light.png" alt="" aria-hidden="true">
    Enterprise Onchain
  </a>
  <div class="nav-r">
    <a href="/" class="nav-link">Home</a>
    <a href="/#newsletter" class="nav-link">Newsletter</a>
    ${link('/newsletter/', 'Archive', 'archive')}
    ${link('/jobs/', 'Jobs', 'jobs')}
    <a href="/#dashboard" class="nav-link">Dashboard</a>
    <a href="/#about" class="nav-link">About</a>
    ${link('https://enterpriseonchain.substack.com/', 'Substack <span class="arrow">↗</span>', null, true)}
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
      <svg class="theme-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="theme-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg>
    </button>
    <a href="/#subscribe" class="btn-nav">Subscribe</a>
    <button class="nav-hamburger" onclick="toggleDrawer()" aria-label="Open menu" aria-expanded="false" aria-controls="nav-drawer"><span></span></button>
  </div>
</nav>

<div class="drawer-backdrop" onclick="toggleDrawer()"></div>
<aside class="nav-drawer" id="nav-drawer" aria-label="Mobile menu">
  <a href="/" class="drawer-link" onclick="closeDrawer()">Home</a>
  <a href="/#newsletter" class="drawer-link" onclick="closeDrawer()">Newsletter</a>
  ${drawerLink('/newsletter/', 'Archive', 'archive')}
  ${drawerLink('/jobs/', 'Jobs', 'jobs')}
  <a href="/#dashboard" class="drawer-link" onclick="closeDrawer()">Dashboard</a>
  <a href="/#about" class="drawer-link" onclick="closeDrawer()">About</a>
  ${drawerLink('https://enterpriseonchain.substack.com/', 'Substack ↗', null, true)}
  <a href="/#subscribe" class="drawer-link" onclick="closeDrawer()" style="border-bottom:none;margin-top:12px;padding:14px;border:1px solid var(--fg);border-radius:3px;justify-content:center;opacity:1">Subscribe</a>
  <div class="drawer-footer">
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
      <svg class="theme-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="theme-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg>
    </button>
  </div>
</aside>`;
}

// ── Shared footer ───────────────────────────────────────────────────────
function renderFooter() {
  return `
<footer>
  <div class="footer-left">&copy; 2026 Enterprise Onchain. All rights reserved.</div>
  <div class="footer-right">
    <a href="/" class="footer-link">Home</a>
    <a href="/newsletter/" class="footer-link">Archive</a>
    <a href="/jobs/" class="footer-link">Jobs</a>
    <a href="https://enterpriseonchain.substack.com/" target="_blank" rel="noopener" class="footer-link">Substack ↗</a>
  </div>
</footer>`;
}

// ── Shared <head> fragment ──────────────────────────────────────────────
function renderHead(title, description) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Enterprise Onchain</title>
<meta name="description" content="${description}">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.png">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5.0.19/latin-400.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.17/latin-300.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.17/latin-400.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.17/latin-500.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.17/latin-600.min.css" rel="stylesheet">
<link rel="stylesheet" href="/assets/shared.css">
</head>`;
}

// ── Shared bottom script (theme toggle + drawer) ────────────────────────
const SHARED_SCRIPT = `<script>
function toggleTheme(){const h=document.documentElement;const n=h.getAttribute('data-theme')==='dark'?'light':'dark';h.setAttribute('data-theme',n);try{localStorage.setItem('eo-theme',n)}catch(e){}}
try{const s=localStorage.getItem('eo-theme');if(s)document.documentElement.setAttribute('data-theme',s)}catch(e){}
function toggleDrawer(){document.body.classList.toggle('drawer-open');const b=document.querySelector('.nav-hamburger');if(b)b.setAttribute('aria-expanded',document.body.classList.contains('drawer-open'))}
function closeDrawer(){document.body.classList.remove('drawer-open');const b=document.querySelector('.nav-hamburger');if(b)b.setAttribute('aria-expanded','false')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});
const nav=document.getElementById('main-nav');let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{nav.classList.toggle('scrolled',window.scrollY>60);ticking=false});ticking=true}});
</script>`;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ── Load newsletter editions ────────────────────────────────────────────
function loadEditions() {
  const dir = resolve(root, 'content/newsletter');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const src = readFileSync(resolve(dir, file), 'utf8');
      const { data, body } = parseFrontMatter(src);
      const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
      const tags = Array.isArray(data.tags) ? data.tags : [];
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        tags,
        excerpt: data.excerpt || '',
        html: md.render(body),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ── /newsletter/ archive index ─────────────────────────────────────────
function renderArchive(editions) {
  const items = editions.map(e => `
      <a href="/newsletter/${e.slug}/" class="archive-item" data-tags="${e.tags.join(',')}">
        <div class="archive-title-wrap">
          <h3>${e.title}</h3>
          ${e.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
        <div class="archive-excerpt">${e.excerpt}</div>
        <span class="archive-date">${formatDate(e.date)}</span>
      </a>`).join('');

  const tagButtons = ['All', ...NL_TAGS].map(t =>
    `<button class="filter-btn${t === 'All' ? ' active' : ''}" data-filter="${t}">${t}</button>`
  ).join('');

  return `${renderHead('Archive', 'Every edition of the Enterprise Onchain weekly newsletter.')}
<body>
${renderNav('archive')}

<main class="page">
  <div class="inner reveal">
    <div class="s-label">Archive</div>
    <h1 class="s-title">The Weekly Archive.</h1>
    <p class="s-desc">Every edition of Enterprise Onchain. Filter by topic.</p>

    <div class="filter-row">${tagButtons}</div>

    <div class="archive-list" id="archive-list">${items}</div>
  </div>
</main>

${renderFooter()}
${SHARED_SCRIPT}
<script>
(function(){
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.archive-item');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.filter;
    items.forEach(it => {
      const tags = (it.dataset.tags || '').split(',');
      it.style.display = (f === 'All' || tags.includes(f)) ? '' : 'none';
    });
  }));
})();
</script>
</body></html>`;
}

// ── /newsletter/<slug>/ edition page ───────────────────────────────────
function renderEdition(e) {
  return `${renderHead(e.title, e.excerpt)}
<body>
${renderNav('archive')}

<main class="page">
  <article class="inner reveal edition">
    <div class="s-label">Newsletter · ${formatDate(e.date)}</div>
    <h1 class="edition-title">${e.title}</h1>
    <div class="edition-tags">${e.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}</div>
    <div class="edition-body">${e.html}</div>
    <div class="edition-cta">
      <a href="/newsletter/" class="btn btn-ghost">← Back to archive</a>
      <a href="/#subscribe" class="btn btn-primary">Subscribe</a>
    </div>
  </article>
</main>

${renderFooter()}
${SHARED_SCRIPT}
</body></html>`;
}

// ── /jobs/ page ─────────────────────────────────────────────────────────
function renderJobs(jobs) {
  const jobsJSON = JSON.stringify(jobs).replace(/</g, '\\u003c');
  const fnBtns = [{ value: 'All', label: 'All' }, ...JOB_FUNCTIONS].map(f =>
    `<button class="filter-btn${f.value === 'All' ? ' active' : ''}" data-filter-fn="${f.value}">${f.label}</button>`
  ).join('');
  const snBtns = ['All', ...JOB_SENIORITIES].map(s =>
    `<button class="filter-btn${s === 'All' ? ' active' : ''}" data-filter-sn="${s}">${s}</button>`
  ).join('');

  return `${renderHead('Jobs', 'Curated roles in institutional crypto, stablecoins, tokenisation, and onchain finance.')}
<body>
${renderNav('jobs')}

<main class="page">
  <div class="inner reveal">
    <div class="s-label">Jobs</div>
    <h1 class="s-title">Institutional Crypto Jobs.</h1>
    <p class="s-desc">Curated roles across strategy, engineering, research, trading, and legal — at firms building onchain.</p>

    <div class="filter-group">
      <div class="filter-group-label">Function</div>
      <div class="filter-row">${fnBtns}</div>
    </div>
    <div class="filter-group">
      <div class="filter-group-label">Seniority</div>
      <div class="filter-row">${snBtns}</div>
    </div>

    <div class="jobs-list" id="jobs-list"></div>
    <div class="jobs-empty" id="jobs-empty" style="display:none">No roles match those filters right now.</div>
  </div>
</main>

${renderFooter()}
${SHARED_SCRIPT}
<script>
const JOBS = ${jobsJSON};
(function(){
  const list = document.getElementById('jobs-list');
  const empty = document.getElementById('jobs-empty');
  const state = { fn: 'All', sn: 'All' };
  function fmt(iso){const d=new Date(iso);return d.toLocaleDateString('en-US',{month:'short',day:'numeric'})}
  function render(){
    const filtered = JOBS.filter(j =>
      (state.fn==='All' || j.function===state.fn) &&
      (state.sn==='All' || j.seniority===state.sn)
    );
    empty.style.display = filtered.length ? 'none' : '';
    list.innerHTML = filtered.map(j => \`
      <a href="\${j.url}" target="_blank" rel="noopener" class="job-item">
        <div class="job-main">
          <div class="job-title-row">
            <h3>\${j.title}</h3>
            <span class="job-company">\${j.company}</span>
          </div>
          <div class="job-meta">
            <span class="tag-chip">\${j.function}</span>
            <span class="tag-chip">\${j.seniority}</span>
            <span class="job-location">\${j.location}</span>
          </div>
        </div>
        <span class="job-date">\${fmt(j.posted)} <span class="job-arrow">↗</span></span>
      </a>\`).join('');
  }
  document.querySelectorAll('[data-filter-fn]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter-fn]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.fn = b.dataset.filterFn;
    render();
  }));
  document.querySelectorAll('[data-filter-sn]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter-sn]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.sn = b.dataset.filterSn;
    render();
  }));
  render();
})();
</script>
</body></html>`;
}

// ── /dashboard/ placeholder ────────────────────────────────────────────
function renderDashboard() {
  return `${renderHead('Dashboard', 'Institutional blockchain data at a glance. Coming soon.')}
<body>
${renderNav(null)}

<main class="page page-center">
  <div class="inner reveal" style="text-align:center;max-width:560px;margin:0 auto">
    <div class="s-label">Dashboard</div>
    <h1 class="s-title">Coming Soon.</h1>
    <p class="s-desc" style="margin:0 auto 28px">
      Real-time metrics on tokenised RWAs, stablecoin supply, ETH ETF flows,
      DeFi TVL, and institutional adoption. Launching for subscribers in the
      coming weeks.
    </p>
    <div class="soon-stat-row">
      <div class="soon-stat"><div class="soon-stat-val">628</div><div class="soon-stat-lbl">on the waitlist</div></div>
      <div class="soon-stat"><div class="soon-stat-val">43+</div><div class="soon-stat-lbl">forum members</div></div>
      <div class="soon-stat"><div class="soon-stat-val">200+</div><div class="soon-stat-lbl">institutions reading</div></div>
    </div>
    <a href="/#subscribe" class="btn btn-primary" style="margin-top:32px">Get Early Access</a>
  </div>
</main>

${renderFooter()}
${SHARED_SCRIPT}
</body></html>`;
}

// ── Build orchestration ────────────────────────────────────────────────
function writeFile(relPath, content) {
  const full = resolve(root, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
  console.log('  wrote', relPath);
}

function clean(dir) {
  const full = resolve(root, dir);
  if (existsSync(full)) rmSync(full, { recursive: true, force: true });
}

function build() {
  console.log('Building sub-pages...');

  console.log('→ /newsletter/');
  clean('newsletter');
  const editions = loadEditions();
  writeFile('newsletter/index.html', renderArchive(editions));
  for (const e of editions) writeFile(`newsletter/${e.slug}/index.html`, renderEdition(e));

  console.log('→ /jobs/');
  clean('jobs');
  const jobsPath = resolve(root, 'content/jobs.json');
  const jobs = existsSync(jobsPath) ? JSON.parse(readFileSync(jobsPath, 'utf8')) : [];
  writeFile('jobs/index.html', renderJobs(jobs));

  console.log('→ /dashboard/');
  clean('dashboard');
  writeFile('dashboard/index.html', renderDashboard());

  console.log('Done.');
}

build();
