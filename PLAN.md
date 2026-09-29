# bmscomp.github.io — Rebuild Plan

> Status: **Reviewed — v2** · Author: Said Boudjelda · Date: 2026-09-29
>
> Goal: replace the current Jekyll site entirely with a modern, fast, static personal site
> hosted on GitHub Pages that holds my **CV**, **posts**, **phone photography**, **travel
> stories**, a **lab** (software / systems I'm testing) and a **reading list**.

Pros/cons of every choice: [TECH-STUDY.md](TECH-STUDY.md). Blog shape & readability work is planned in [READABILITY-PLAN.md](READABILITY-PLAN.md). Review by leaving comments on each numbered decision (D1, D2, …) and on the open questions at the end.

---

## 1. Principles

1. **Static first** — no server, no database; everything builds to HTML on GitHub Pages.
2. **Content is plain files** — Markdown/MDX + YAML/JSON in git. No CMS lock-in.
3. **Zero JS by default** — ship JavaScript only where it adds value (map, lightbox, search).
4. **Fast and accessible** — Lighthouse ≥ 95 on all four scores, WCAG 2.2 AA.
5. **Privacy-respecting** — no trackers, photo GPS metadata stripped, no third-party cookies.
6. **Low-friction publishing** — adding a post, photo, or book should be one file + `git push`.

---

## 2. Stack decisions

| # | Area | Choice | Why | Alternatives considered |
|---|------|--------|-----|------------------------|
| D1 | Framework | **Astro 7** (static output) | Content Collections with typed schemas, built-in image pipeline, islands architecture (zero JS by default), first-class MDX | Next.js (heavier, SSR-oriented), Hugo (fast but weaker component model), Eleventy (less typed content) |
| D2 | Language | **TypeScript** (strict) | Type-safe content schemas via Zod | — |
| D3 | Styling | **Tailwind CSS v4** + `@tailwindcss/typography` | CSS-first config, tiny output, good prose defaults | Vanilla CSS + Open Props |
| D4 | Content format | **MDX** for posts/travel/lab, **YAML/JSON** for CV, reading, photos metadata | Rich embeds where needed, data where it's data | Pure Markdown |
| D5 | Images | **`astro:assets`** (`<Picture>`, AVIF + WebP, responsive `srcset`) + **sharp** | Automatic optimization at build time | Cloudinary (external dependency) |
| D6 | Photo storage | **Outside GitHub** — object storage (Cloudflare R2 recommended, zero egress fees) served from a subdomain once the custom domain exists. Only metadata (YAML: title, description, alt, album, tags, EXIF) lives in the repo. **Deferred to a later phase.** | Keeps the repo and Pages artifact small; no 1 GB ceiling | In-repo (1 GB Pages limit), Git LFS (Pages can't serve LFS) |
| D7 | Maps (travel) | **MapLibre GL JS** + **Protomaps PMTiles** file hosted with the site | No API key, no tracking, works offline-ish | Leaflet + OSM tiles, Mapbox (key + billing) |
| D8 | Search | **Pagefind** | Static full-text search index built post-build, ~no runtime cost | Algolia (external), Fuse.js (loads everything) |
| D9 | Comments | **Giscus** (GitHub Discussions), opt-in per post | No DB, uses GitHub identity | None, utterances |
| D10 | Analytics | **None** at launch; optional **GoatCounter** later | Privacy principle | Plausible (paid), Umami (self-host) |
| D11 | CV | **Public summary only**: JSON Resume schema (`src/content/cv/resume.json`) → one-page `/cv` with headline, summary, roles (title/company/years), key skills, links. No phone/address. Validated against the official JSON Resume schema at build time, published as `/cv.json`, schema.org `Person` JSON-LD on the page, A4 print stylesheet instead of a generated PDF. | Standard schema keeps the door open for a full CV/PDF later | Full public CV + PDF |
| D12 | Social cards | Auto-generated **Open Graph images** with `satori` + `@resvg/resvg-js` | Nice link previews without manual work | Manual images |
| D13 | Feeds / SEO | `@astrojs/rss` (one feed per section + global), `@astrojs/sitemap`, JSON-LD (`Person`, `BlogPosting`) | Discoverability | — |
| D14 | Code highlighting | **Expressive Code** (on Shiki) with dual light/dark themes | Copy buttons, file titles, diff markers for Lab posts | Prism |
| D15 | Package manager / runtime | **pnpm** + **Node 22 LTS** | Fast, strict | npm, Bun |
| D16 | Lint / format | **Biome** + `astro check` | One fast tool for lint + format | ESLint + Prettier |
| D17 | Tests | **Playwright** smoke tests + **Lighthouse CI** + `lychee` link checker | Catch regressions before deploy | — |
| D18 | Deploy | **GitHub Actions** → `actions/upload-pages-artifact` + `actions/deploy-pages` | Official, no `gh-pages` branch needed | `gh-pages` branch push |
| D20 | Math | **KaTeX** via a native Sätteri mdast plugin (`src/lib/katex.ts`), rendered at build time | Astro 7's default Markdown processor (Sätteri) no longer runs remark/rehype plugins; a 20-line native plugin avoids the legacy pipeline | `remark-math` + `rehype-katex` through `@astrojs/markdown-remark` |
| D19 | Dependency updates | **Renovate** (weekly, grouped) | Keeps stack current | Dependabot |

---

## 3. Information architecture

```
/                     Home — short intro, latest post, latest photos strip, current reading, "now testing"
/cv                   CV summary (HTML)
/blog                 All posts, filter by tag
/blog/[slug]          Post
/photos               Photo grid (masonry), filter by album/tag, lightbox
/photos/[album]       Album page
/photos/[album]/[id]  Single photo: full image, description, EXIF details, location
/travel               World map with trips + list of trips
/travel/[slug]        Trip story: itinerary map, day-by-day, embedded photos
/lab                  Things I'm testing: software, systems, hardware — status badges
/lab/[slug]           Lab note: setup, config, results, verdict
/reading              Articles/books I'm reading: status (reading / read / to-read), rating, notes
/tags/[tag]           Cross-section tag page (posts + lab + travel + reading)
/now                  "What I'm doing now" page (optional, cheap to maintain)
/search               Pagefind UI
/rss.xml, /blog/rss.xml, /lab/rss.xml, /photos/rss.xml, /reading/rss.xml
```

Global: header nav, dark/light toggle (respects `prefers-color-scheme`), footer with socials + RSS.

---

## 4. Content model (Astro Content Collections, Zod schemas)

```ts
// src/content.config.ts (sketch)
posts:   { title, description, pubDate, updatedDate?, tags[], draft, cover?, comments: boolean }
travel:  { title, description, startDate, endDate, countries[], places: [{ name, lat, lng }], cover, gallery?: album-ref }
lab:     { title, description, pubDate, category: 'software'|'system'|'hardware'|'homelab',
           status: 'testing'|'adopted'|'dropped', tools[], platform?, verdict?, repo? }
reading: { title, url?, author, kind: 'article'|'book'|'paper', status: 'to-read'|'reading'|'read',
           addedDate, finishedDate?, rating?: 1-5, tags[], note? }          // one YAML file, many entries
photos:  { album, title?, description?, alt, image, takenAt, device, lens?, exposure?, location?: { name, country }, tags[] }
cv:      JSON Resume schema (basics, work, education, skills, projects, languages, certificates)
```

- `photos` (later phase): the import script **strips GPS EXIF**, generates AVIF/WebP sizes, uploads them
  to the external bucket, and writes a YAML metadata stub (EXIF-derived device/exposure + title/description/alt/album/tags)
  into the repo. The site only references remote URLs.
- `description` is free text (Markdown allowed) telling the story behind the shot; it is shown as the
  lightbox caption and on the photo's own page. `alt` is a short, literal description for screen readers
  (required, kept separate from the story).
- `draft: true` content is visible in `pnpm dev`, excluded from production builds.

---

## 5. Repository layout

```
.
├── .github/workflows/
│   ├── deploy.yml          # build → test → deploy to Pages
│   └── ci.yml              # PR checks: astro check, biome, playwright, lighthouse, links
├── public/                 # favicon, robots.txt, tiles/*.pmtiles
├── scripts/
│   ├── new.ts              # `pnpm new post|lab|travel "Title"` scaffolding
│   └── import-photos.ts    # (later) resize, strip GPS, upload to bucket, write metadata stub
├── src/
│   ├── content/{posts,travel,lab,photos,reading,cv}/
│   ├── components/         # Card, Tag, PhotoGrid, Lightbox, TripMap, StatusBadge, ...
│   ├── layouts/            # Base, Prose, Gallery
│   ├── pages/              # routes from §3
│   ├── styles/global.css
│   └── content.config.ts
├── tests/                  # Playwright specs
├── astro.config.ts
├── biome.json
├── package.json
└── README.md               # how to write/publish content
```

---

## 6. Design direction

- Clean, typographic, content-first; one accent color; system font stack or a single variable
  font (e.g. Inter / JetBrains Mono for code) self-hosted via Fontsource.
- Photos get a **dark, edge-to-edge** gallery layout; text sections use a readable 65–75ch column.
- View Transitions (Astro built-in) for smooth navigation between grid → photo → back.
- Mobile-first; photos section designed primarily for phone viewing since shots are from phone.

---

## 7. Publishing workflows

| I want to… | I do… |
|------------|-------|
| Write a post | `pnpm new post "Title"` → edit MDX → `git push` |
| Add phone photos (later) | Drop files into `inbox/` → `pnpm photos:import --album lisbon-2026` (uploads to bucket) → review stubs → push |
| Log a trip | `pnpm new travel "Title"` → add places (lat/lng) → link album → push |
| Log something I'm testing | `pnpm new lab "Title"` → fill setup/results, set `status` → push |
| Save an article I'm reading | Add entry to `src/content/reading/reading.yaml` (or GitHub mobile app edit) → push |
| Update CV | Edit `resume.json` → push |

---

## 8. Delivery phases

Each phase is one PR, reviewed and merged to `main`.

| Phase | Scope | Done when |
|-------|-------|-----------|
| **0. Reset** ✅ | Branch `rebuild`; delete **all** existing files including old posts, `docs/`, `test/`, `assets/`, `.idea`, Jekyll workflow. Keep only `LICENSE`, `.gitignore` (rewritten), `PLAN.md`, `TECH-STUDY.md`. Git history is kept. Switch Pages source to "GitHub Actions". | Repo contains only LICENSE, .gitignore, PLAN.md, TECH-STUDY.md |
| **1. Skeleton** ✅ | Astro 7 + TS + Tailwind (Biome moved to phase 7), base layout, nav, dark mode, 404, deploy workflow | Empty site live at bmscomp.github.io |
| **2. Blog** ✅ | `posts` collection, list/detail/tags, Expressive Code, KaTeX math, RSS, sitemap, OG images | 1 real post published |
| **3. CV** ✅ | JSON Resume summary data, `/cv` page | `/cv` live |
| **4. Lab** ✅ | `lab` collection, status badges, filters by category/status | ≥ 2 lab notes live |
| **5. Reading** 🟡 built, awaiting entries | `reading` data file, status filters, RSS | ≥ 5 entries live |
| **6. Travel** | `travel` collection, PMTiles world map, per-trip route map (text + map; photos slot in later) | ≥ 1 trip live |
| **7. Polish** | Biome lint/format, Pagefind search, home page aggregation, `/now`, Lighthouse CI + link check gates, README authoring guide | All CI gates green |
| **8. Custom domain** *(later)* | Buy domain, `public/CNAME`, DNS, enforce HTTPS, update `site` in config | Site served on custom domain, old URL redirects |
| **9. Photos** *(later, after 8)* | R2 bucket on `photos.<domain>`, import script (resize + GPS strip + upload), grid, albums, per-photo page, lightbox (PhotoSwipe) with description caption, link albums into trips | ≥ 1 album live, page weight < 1 MB above the fold |

---

## 9. Quality gates (CI on every PR)

- `astro check` (types + content schema validation) — fails on bad frontmatter
- `biome ci`
- Playwright: every route renders, nav works, no console errors, dark mode toggles
- Lighthouse CI: Perf/A11y/Best-Practices/SEO ≥ 95 on `/`, `/blog/[latest]`, `/photos`
- `lychee` link check (internal hard-fail, external warn)
- Build size check: fail if `dist/` > 100 MB (images belong in the external bucket)

---

## 10. Risks

| Risk | Mitigation |
|------|------------|
| Leaking home/location via EXIF | Mandatory GPS strip in import script before upload |
| Links break when moving to custom domain | GitHub Pages redirects `*.github.io` to the custom domain automatically; keep same paths |
| Content schema churn breaks old entries | Zod defaults + `astro check` in CI |
| Stack drift | Renovate weekly, pinned Node via `.nvmrc` |

---

## 11. Review decisions (2026-09-29)

- **Q1. Language:** English only. No i18n routing.
- **Q2. Photos:** later, hosted outside GitHub (D6, phase 9).
- **Q3. Domain:** `bmscomp.github.io` for now, custom domain later (phase 8).
- **Q4. CV:** public summary only (D11).
- **Q5. Existing content:** erase everything, start from scratch (phase 0).

## 12. Still open

- **Q6. Comments:** Giscus at launch or later? *Default: later.*
- **Q7. Reading list input:** ✅ both — edit `reading.yaml`, or open a "Reading" GitHub issue (form → workflow commits the entry and redeploys).
