# Technology Study — bmscomp.github.io

> Companion to [PLAN.md](PLAN.md) · 2026-09-29
>
> For each layer of the site: the realistic candidates, their pros and cons **for this project**
> (a personal, English-only, static site on GitHub Pages with CV summary, posts, lab notes,
> reading list, travel stories, and — later — externally hosted phone photos).
> ✅ marks the recommendation.

---

## 1. Site framework / static site generator

| | Pros | Cons |
|---|---|---|
| ✅ **Astro 7** | Built for content sites: typed Content Collections, zero JS by default, islands for the few interactive bits (map, lightbox, search); built-in image pipeline, Markdown/MDX, RSS/sitemap integrations; Astro 7 adds a Rust compiler and Vite 8 → fast builds; huge theme/integration ecosystem | Node toolchain + `node_modules` to maintain; major versions ship yearly with migration work; slower than Hugo on very large sites (irrelevant at our scale) |
| **Hugo** | Single Go binary, fastest builds by far, no dependencies to update, mature (taxonomies, image processing, i18n built in) | Go templates are awkward to write and debug; no component model; adding interactive pieces (map, lightbox) means hand-wiring JS; weaker type-checking of content |
| **Eleventy (11ty) 3** | Simple mental model (content + templates → HTML), very flexible, zero client JS, stable API | You assemble everything yourself (images, feeds, schemas); no built-in content validation; smaller integration ecosystem than Astro |
| **Next.js (static export)** | React ecosystem, very popular, good if the site later becomes an app | App-oriented: ships a React runtime even for static text; static export disables several features (image optimization, ISR); more complexity than a blog needs |
| **SvelteKit (adapter-static)** | Pleasant components, small bundles | Content handling (collections, MDX, feeds) is DIY; ecosystem for blogs is thinner |
| **Jekyll** (current) | Native to GitHub Pages, no CI needed | Ruby toolchain, slow, stagnant ecosystem, old theme debt — the reason for this rebuild |

**Verdict:** Astro — best balance of content tooling, performance, and room for the interactive
sections (travel maps, photo lightbox). Hugo is the fallback if you want *no* JavaScript toolchain at all.

---

## 2. Styling

| | Pros | Cons |
|---|---|---|
| ✅ **Tailwind CSS v4** | CSS-first config (no JS config file), tiny purged output, fast iteration, `@tailwindcss/typography` gives good article styling instantly | Utility classes clutter markup; a learning curve if you prefer semantic CSS |
| **Vanilla CSS + Open Props** | No build step dependency, modern CSS (nesting, `:has`, container queries) is now enough; design tokens out of the box | More hand-written CSS to maintain; you design prose styles yourself |
| **UnoCSS** | Faster, more configurable Tailwind-like engine | Smaller community, fewer copy-paste examples |

**Verdict:** Tailwind v4 for speed of building; vanilla CSS is a valid choice if you prefer clean markup.

---

## 3. Content authoring

| | Pros | Cons |
|---|---|---|
| ✅ **Markdown + MDX files in git** | Portable, versioned, works in any editor; MDX lets a post embed components (map, gallery, callouts) | Editing on the phone is clunky (GitHub mobile app / web editor only) |
| **Markdoc** | Safer than MDX (no arbitrary JS), clean custom tags | Less familiar syntax, fewer examples |
| **Keystatic** (git-based CMS) | Nice editing UI that writes Markdown/YAML to the repo; integrates with Astro | Its GitHub mode needs a server route for OAuth → on static GitHub Pages it only works **locally** (`pnpm dev`) |
| **Decap CMS** | Web admin UI committing to GitHub | Needs an external OAuth proxy; UI feels dated |
| **Headless SaaS CMS** (Sanity, Contentful…) | Great editing, mobile-friendly | Content leaves git, API keys, vendor lock-in, rebuild webhooks — overkill here |

**Verdict:** Markdown/MDX in git. Optionally add Keystatic later as a *local* editing UI.

---

## 4. Code highlighting (for Lab notes)

| | Pros | Cons |
|---|---|---|
| ✅ **Expressive Code** (on top of Shiki) | Copy button, file titles, line markers, diffs, terminal frames — ideal for "what I'm testing" posts; light/dark themes | Adds a small CSS/JS payload |
| **Shiki** (Astro default) | Zero config, VS Code-grade highlighting at build time | No copy button / frames without extra work |
| **Prism** | Familiar | Less accurate grammars, older approach |

---

## 5. Search

| | Pros | Cons |
|---|---|---|
| ✅ **Pagefind** | Builds a static index after the build; loads only the chunks needed; no service, no key | Index is rebuilt each deploy (seconds); UI customization is limited unless you use its JS API |
| **Fuse.js / MiniSearch** | Simple, fully custom UI | Loads the whole index in the browser; fine for 50 posts, poor for 500 |
| **Algolia DocSearch** | Excellent relevance and UI | External service, application process, sends queries to a third party |

---

## 6. Photo hosting (later phase)

| | Pros | Cons |
|---|---|---|
| ✅ **Cloudflare R2** + custom subdomain | No egress (bandwidth) fees, S3-compatible API, generous free storage tier, fits naturally if the custom domain's DNS is on Cloudflare | Requires a Cloudflare account and domain setup; you generate image sizes yourself (in the import script) |
| **Cloudinary / ImageKit** | On-the-fly resizing and format conversion via URL, no pre-processing | Free tiers are credit-limited; lock-in via URL transformation syntax |
| **Bunny Storage + CDN** | Very cheap, fast, built-in image optimizer | Paid from the first GB (small amounts) |
| **AWS S3 + CloudFront** | Industry standard | Egress costs, more setup and IAM complexity |
| **Backblaze B2** (+ Cloudflare) | Very cheap storage | Extra moving parts to get free egress |
| **Flickr / Google Photos embeds** | Zero effort | Not your site's look, weak control, platform may change |

**Verdict:** R2 with sizes pre-generated (AVIF + WebP) by the import script. Cloudinary if you'd rather never run a script.

### Gallery / lightbox

| | Pros | Cons |
|---|---|---|
| ✅ **PhotoSwipe 5** | Best mobile gestures (pinch, swipe), responsive images, captions for descriptions, framework-free | Needs image dimensions known up front (we have them from the import script) |
| **GLightbox** | Simple, supports video | Weaker touch gestures |
| **Pure CSS / `<dialog>`** | Zero JS | No swipe/zoom — poor for a phone photo gallery |

---

## 7. Maps (travel)

| | Pros | Cons |
|---|---|---|
| ✅ **MapLibre GL + Protomaps PMTiles** | Vector maps, no API key, no tracking; one tiles file served statically (or from R2) | World tiles file is large → host a low-zoom world extract, or host it on R2 alongside photos |
| **Leaflet + OpenStreetMap tiles** | Tiny, simple, familiar | Raster tiles look dated; OSM's public tile servers have a usage policy — not meant for production traffic |
| **Mapbox GL** | Beautiful styles | API key, billing, tracking |
| **Static SVG map** | Zero JS, fastest | No zoom/pan; fine for "countries visited", not for routes |

**Verdict:** MapLibre + PMTiles for trip pages; a static SVG "countries visited" map on `/travel` is a cheap extra.

---

## 8. Comments

| | Pros | Cons |
|---|---|---|
| ✅ **Giscus** (GitHub Discussions) | Free, no DB, moderation in GitHub, lazy-loaded | Commenters need a GitHub account (fine for tech posts, less for travel) |
| **Webmentions** (webmention.io) | IndieWeb, collects replies from other sites/social | Setup effort, low volume for new sites |
| **None** + "reply by email / Mastodon" link | Zero maintenance, zero JS | No on-page discussion |

**Verdict:** none at launch (as decided), Giscus when you want it.

---

## 9. Analytics

| | Pros | Cons |
|---|---|---|
| ✅ **None at launch** | Privacy, zero JS, no banner | No traffic insight |
| **GoatCounter** | Cookieless, free for personal use, tiny script | Basic reports |
| **Cloudflare Web Analytics** | Free, cookieless | Needs Cloudflare; best once the custom domain is there |
| **Plausible** | Polished, privacy-first | Paid (or self-host) |
| **Umami** | Self-hostable, open source | You run a server + DB |

---

## 10. Hosting & deploy

| | Pros | Cons |
|---|---|---|
| ✅ **GitHub Pages + GitHub Actions** | Free, already your URL, deploy on `git push`, custom domain + HTTPS supported | 1 GB site limit (photos go external anyway), no server functions, no redirects config, no preview deploys per PR |
| **Cloudflare Pages / Workers** | Preview deploys per PR, redirects/headers, functions, sits next to R2 | Moves hosting off GitHub (your stated target is the GitHub site) |
| **Netlify / Vercel** | Previews, forms, functions | Free tier limits; not needed for a static blog |

**Verdict:** GitHub Pages as requested. Cloudflare Pages remains an easy migration path later, because Astro's output is plain static files.

---

## 11. Developer tooling

| Choice | Pros | Cons |
|---|---|---|
| ✅ **pnpm** vs npm / Bun | pnpm: fast, strict dependency resolution, disk-efficient | npm: slower but zero install; Bun: fastest, but occasional compatibility gaps with Astro integrations |
| ✅ **Biome** vs ESLint + Prettier | One fast Rust tool for lint + format | Doesn't yet format every `.astro` template construct; ESLint has more plugins |
| ✅ **Playwright + Lighthouse CI + lychee** | Real-browser smoke tests, performance budget, broken-link detection | CI time (~2–3 min) |
| ✅ **Renovate** vs Dependabot | Grouped weekly updates, less PR noise | One more config file |

---

## Recommended stack (summary)

**Astro 7 · TypeScript · Tailwind v4 · MDX · Expressive Code · Pagefind · PhotoSwipe · MapLibre + PMTiles ·
Cloudflare R2 (photos, later) · GitHub Pages via Actions · pnpm · Biome · Playwright · Renovate** —
no analytics and no comments at launch.

Sources: [Astro 7 release notes](https://happas.jp/blog/en/post/1142/), [Astro releases](https://astrobuild.eu/en/releases),
[Astro vs Hugo vs Next.js vs Eleventy 2026](https://aileapers.com/articles/42-static-site-generators-2026-comparison.html),
[Best SSGs in 2026](https://naturaily.com/blog/best-static-site-generators).
