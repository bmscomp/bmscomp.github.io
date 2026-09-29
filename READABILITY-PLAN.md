# Blog shape & readability plan

> Status: **Draft for review** · 2026-09-29 · Companion to [PLAN.md](PLAN.md)
>
> Scope: "enhancing the blog for making better shape [and] readability". The request was cut off after
> "and"; tell me if a third goal was meant and it will be folded in.

**How this plan was made.** Six independent auditors measured the live build (headless Chrome at 375,
768, 1280 and 1600 px) through six lenses: typography, layout, wayfinding, rich content, accessibility
and performance, and published best practice. They produced **83 findings** (Appendix A). Three
competing plans were drafted from different angles: reader-first (scored 8.5/10), maintainer-first (8)
and typographer-first (7.5). A judge merged them, using reader-first as the backbone. Every item was
then checked against the actual code and dependencies: 3 items held as written, 37 needed corrections
and 2 were not needed. A completeness critic found 9 gaps, 10 contradictions and 7 sequencing problems.
**This document already includes all of those corrections.** Item IDs such as TYPO-1 or LAYO-03 refer to
Appendix A.

---

## 1. What the audits measured

| Problem | Measured today | Findings |
|---|---|---|
| Lines too long on desktop | mean 71.6–71.9 characters per line, max 83–86; 24–40% of lines over 75 @1280/1600 | TYPO-4, RESE-2 |
| Body text small for Garamond's short lowercase | 19 px, so a 7.7 px x-height (Georgia at 18 px has 8.67 px) | TYPO-3, RESE-1 |
| Package names hyphenated wrongly | 6 of 8 automatic hyphen breaks fall inside code (`mark-down.remarkPlugins`) | TYPO-1 |
| Code hidden behind sideways scrolling | 3 of 4 blocks on the Astro note @1280 (302 px hidden); 4 of 4 @375 (563 px) | LAYO-01, CONT-1 |
| Text jumps when the webfont arrives | throttled layout shift (CLS) 0.1552 on hello-world @1280; /cv/ 0.0659 unthrottled @768 | A11Y-1 |
| Section links land under the header | `#two-gotchas` lands at 0 px, under the 66 px sticky header; 3 keyboard stops hidden | WAYF-2, A11Y-2 |
| A phone's first screen shows no article text | first body line at 1037 px on an 812 px screen; the fact sheet is 464 px tall | LAYO-04 |
| Width "cliff" at 640 px | the text column drops from 550 to 404 px (−27%) between 639 and 640 px | LAYO-03 |
| Small caps everywhere | 37–42% of all characters on /, /blog/ and /lab/, 62% on /tags/; 10 different letter-spacings | TYPO-7 |
| Heading hierarchy upside down | article h3 capitals (14.9 px) taller than h2 (13.0 px); list-page section titles (10.6 px) smaller than the entries under them (14.3 px) | TYPO-8 |
| Articles just stop | 0 links after the text, no end mark, no "next" | WAYF-1, LAYO-11 |
| Old-style "1" reads as "ı" | "pnpm ı2", "~ı.8 s" in titles and version numbers | TYPO-5 |
| Inline math too big | KaTeX x-height 29–32% larger than the text around it | TYPO-6 |

**Worth keeping.** `text-wrap: pretty` leaves 0 one-word last lines. The 768 px measure is ideal (mean 60
characters per line, every line within 45–75). Body contrast is 16:1. Small caps and old-style figures
are real glyphs, not synthesized.

## 2. Principles

1. **The text column comes first.** 60–68 characters per line on desktop and at least 38 on phones. Body
   text is never below 19 px.
2. **Code reads exactly as typed.** No invented hyphens, no fake small caps, and no line hidden behind
   sideways scrolling.
3. **Nothing moves under the reader**, and every jump lands in view.
4. **The margin column earns its space.** It holds section marks and code that breaks out into it.
   Metadata, contents and length go in fact-sheet rows above the text, as on the CV.
5. **Restraint.** All-small-caps only for one- or two-word labels, four letter-spacing values in total,
   and italics only for ledes, h3, verdicts, captions and colophons.
6. **Size carries hierarchy.** Vertical space follows the line height.
7. **Keep the identity.** EB Garamond, the ivory sheet and accent bar, the margin grid, fleurons and
   old-style figures in dates. No cards, boxes, tints or new typefaces.
8. **No new runtime JavaScript.** Contents and disclosures use CSS and `<details>` only.
9. **Sätteri-native.** Changes are CSS, Expressive Code options, Sätteri feature flags or small, tested
   native plugins. No MDX and no legacy `unified()` processor.
10. **Measure before and after.** Every item has a numeric check that one committed command re-runs,
    and CI blocks deploys that bring a fixed defect back.

## 3. Targets

| Metric | Baseline | Target |
|---|---|---|
| Automatic hyphen breaks inside `<code>` | 8 (6 per layout) | 0 at all viewports |
| Code hidden by sideways scrolling (`scrollWidth − clientWidth`) | up to 302 px @1280, 563 px @375 | ≤ 1 px on every block |
| Characters per line @1280/1600 (lab notes) | mean 71.6–71.9, max 83–86 | mean 60–68, 0 lines > 80, ≤ 10% > 75 |
| Body x-height @≥1024 | 7.7 px | ≥ 8.4 px (21 px body) |
| Largest step drop in text-column width while widening 600→1600 px | −27% at 640 px | ≤ 8% at any step |
| Throttled CLS, article and list pages | up to 0.1552 | ≤ 0.05; no case worse than its baseline |
| Heading top after `#section` navigation @≥768 | 0 px | ≥ 80 px |
| Phone first screen, Astro note @375×812 | first line at 1037 px | third text line ends ≤ 812 px |
| Internal links after the article text | 0 | ≥ 3 on every article |
| Small caps share of characters, / and /lab/ | 40% and 42% | ≤ 21% and ≤ 20% |
| Distinct small-caps letter-spacing values | 10 | ≤ 4 |
| Link underline contrast on paper (light/dark) | 1.67:1 and 2.00:1 | ≥ 3:1 |
| Heading-level skips and axe violations | h1→h3 on /blog/ and /lab/ | 0 |
| Runtime JavaScript on articles | 1,538 B gzipped (Expressive Code) | + 0 B |

## 4. Decisions for you

These change the look or the wording, so they need your call. Each one is raised in the PR that needs it,
with before and after screenshots.

| # | Decision | Recommendation |
|---|---|---|
| O1 | **Lining figures in running prose** (W4.6). Old-style "1" reads as "ı" in version numbers. | Lining in articles; old-style stays in dates and on the CV |
| O2 | **CV print length.** It was designed for 2 A4 pages (commit de9f0db) but now prints 3. | Decide 2 (print-only tightening) or 3, then lock it with a test |
| O3 | **Blog description and lede** (W6.1). "Articles and notes" borrows the Lab's word. | You write it; suggestions in W6.1 |
| O4 | **Shared-style changes that also touch /cv/**: italic keywords and half the kicker tracking (W4.1), the gap after the double rule (W4.3), the stronger link underline (W8.1) | Approve from screenshots of /, /lab/ and /cv/ |
| O5 | **Acronyms in article bodies** (W7.6): small caps as in titles, or leave them in full caps | Small caps |
| O6 | **Webfont swap** (W2.1): metric-matched fallback (small residual shift), or `font-display: optional` (zero shift, but Times on a slow first visit) | Metric-matched fallback |
| O7 | **Callout syntax** (W7.4): GitHub alerts (`> [!NOTE]`) only, or also `:::` directives | GitHub alerts only for now |

## 5. Delivery order

Each step is one PR. Every PR first adds its measurement to the harness as an expected failure, so the
fix visibly turns it green. Steps that share a list number land in the same PR.

**P0: foundation and quick wins (15 items)**

1. W1.1 fixture page + W1.2 measurement harness (with HTML snapshots of the articles)
2. W1.3 CI check that gates the deploy. It moves into P0, so everything after it is protected.
3. W5.1 section links and keyboard focus clear the header
4. W3.1 inline code, W3.2 wrapped code blocks, W3.3 one code face, W3.4 math size
5. W2.1 fallback font metrics, W2.2 font smoothing
6. W4.1 letter-spacing tokens and keywords, W4.2 lining figures in titles, W4.3 one gap after the rule (O4)
7. W8.1 link underline and "testing" colour (O4)
8. W6.1 cross-links and the Blog lede (O3)

**P1: core structure (20 items, in three groups)**

- **(a) The type-scale PR** ships as one, because the values interact: W2.3 body size and measure, W2.4
  lede, W2.5 no width cliff, W3.6 code block size, W4.4 headings, W4.5 rhythm and lists, W4.7 list-page
  headings, plus the print line-height override from W7.1. Afterwards: re-baseline the harness, re-check
  W2.1, and decide O1 (W4.6) from the screenshots.
- **(b) The article shell:** W5.2 shared `Article.astro` (first, so the HTML snapshots stay valid) →
  W6.5a feed split → minimal W6.2 end block (code row and back link) + W6.3 kicker breadcrumb → W5.6
  phone first screen → W5.3 code breakout → W5.4 section marks → W5.5 contents row.
- **(c) Endings and index pages:** W6.4 index pages (including the /lab/ script guard, before anything
  else touches the filter bar) → the rest of W6.2 → W8.2 semantics → W7.1 print → W1.4 docs → O2 CV print
  target.

**P2: devices for future content (9 items):** W6.5b cross-collection tags and index, W6.6 series and
related links, W7.2 footnotes, W7.3 tables, quotations, figures and definition lists, W7.4 callouts, W7.5
content lint, W7.6 acronyms (O5), W1.5 Lighthouse CI, W8.3 math font loading.

---

## 6. Workstreams

Each item lists its phase, effort (S/M/L), what is wrong, what to change, and how "done" is measured.

### W1. Test bed, guardrails and docs

**W1.1 Kitchen-sink fixture page** · P0 · S
*Why:* nothing exercises tables, footnotes, figures, h3/h4, quotations or colon-heavy prose (CONT-16).
*Change:* add a `fixtures` collection (`src/content/fixtures/kitchen-sink.md`), rendered through the real
article layout at `/dev/kitchen-sink/`. It is built only in dev or with `FIXTURES=1`, gets `noindex`, and
is excluded from the sitemap. Widen `LabNote.astro` props and forward a `head` slot. Keep the fixture
image next to the `.md` file (never in `public/`).
*Done when:* the fixture source contains every construct. The ones today's config cannot render
(definition list, `[!WARNING]`, title as caption) have expected-fail checks naming the item that enables
them. A production build contains no `/dev/` path and identical feeds. `FIXTURES=1` builds the page.

**W1.2 Committed measurement harness** · P0 · M
*Why:* every audit number came from throwaway scripts, and nothing can show before/after or catch a
regression.
*Change:* add Playwright and `@axe-core/playwright`. Tests run against a `FIXTURES=1` build on
`astro preview --host 127.0.0.1 --port 4322` (`reuseExistingServer: false`, `channel: 'chrome'` locally).
Pin each metric's definition in `tests/lib/measure.ts`: characters per line from Range rects, hyphen
breaks in code, pre overflow, first-line position, anchor landing, focus under the header, small-caps
share, letter-spacing count, cap heights, heading order, axe. Test projects: light, dark, A4 print, and
local-only WebKit (hyphenation and Safari rendering). Viewports: 320, 375×812, 375×667, 768×1024,
1024×768, 1280×900 and 1600×1000, plus an 8 px width sweep from 600 to 1600 for width-only checks.
Throttled CLS runs serially on at most 5 page × viewport cases, median of 5 cold runs. HTML snapshots of
every article. Every numeric acceptance in this plan maps to a test whose title carries the item ID.
Known defects are marked `test.fail`. `pnpm measure` prints JSON through a custom reporter.
*Done when:* on today's main, deterministic metrics reproduce the audit baselines exactly (±1 px), and
throttled CLS is within ±0.02 of 0.1552. Timing metrics are reported, not asserted. The run takes under
3 minutes locally, excluding the CLS project.

**W1.3 CI check that gates the deploy** · P0 · S
*Why:* the build runs only `astro check` and the CV validation; no fix is protected.
*Change:* add `.github/workflows/check.yml` on `pull_request` and `workflow_call`. Steps: install,
`pnpm run --if-present test`, `FIXTURES=1` build, `playwright install --with-deps chromium`,
`pnpm test:e2e --grep @ci` (font-independent checks only), and `lycheeverse/lychee-action`
(`--offline --root-dir dist`). `deploy.yml` calls it (`check: uses: ./.github/workflows/check.yml`) and
the build job `needs: check`. Reading-list deploys will run it too.
*Done when:* a PR that restores `hyphens: auto` on code, removes the scroll padding or brings back an
overflowing block fails with the item ID in the output. The deploy cannot start when the check fails. The
check takes ≤ 6 minutes, and the deploy build has no `/dev/`. Blocking merges additionally needs branch
protection, a GitHub setting only you can turn on.

**W1.4 "Writing features" guide** · P1 · S
*Change:* a README table of syntax → result → limits, documenting only what renders today: footnotes,
tables with `--:`, `title=`, `{3}`, diff, `frame="terminal"`, math, Markdown images with alt text. Later
PRs add their own rows (`{#id}`, callouts, `toc`, `related`, `series`). Fix the README's font-recipe
location (it lives in `global.css`), and update PLAN.md D4 plus lines 16 and 141, which still mention MDX.
*Done when:* every construct in the fixture appears in the table, and Code and Math are no longer under
the reading-list heading.

**W1.5 Lighthouse CI budgets** · P2 · M
*Change:* `lighthouserc.json` over 5 URLs, 3 runs each, as its own parallel job. Size budgets are
`resource-summary` assertions in bytes (fonts ≥ 210,000 B). Leave CLS gating to W1.2's CDP check, because
Lighthouse's simulated mode reports 0.
*Done when:* all four categories are ≥ 0.95 on every URL, and article JS is ≤ 2 KB.

### W2. Body text and measure

**W2.1 Metric-matched fallback font** · P0 · S · (O6)
*Why:* the page reflows when EB Garamond replaces Times (A11Y-1).
*Change:* add `'EB Garamond Fallback'` faces on `local('Times New Roman')` / `Liberation Serif`. Weight
400: size-adjust 94.11%, ascent-override 107%, descent-override 31.67%, line-gap-override 0%. Weights
500–599: 97.41%, 103.38%, 30.59%. Weights 600–800 (bold local faces): 94.44%, 106.63%, 31.55%. Italic 400:
91.51%, 110.04%, 32.56%. Set `--font-serif` to
`'EB Garamond Web', 'EB Garamond Fallback', 'Times New Roman', serif`. Don't preload the italic.
*Done when:* no page × viewport case is worse than its baseline. Throttled CLS is ≤ 0.05 on article and
list pages after the type-scale PR. /cv/ @768 is tracked separately (baseline 0.0659), because its
synthesized fallback small caps cannot be matched.

**W2.2 Font smoothing only in dark mode** · P0 · S
*Why:* the global `-webkit-font-smoothing: antialiased` thins an already light face (TYPO-3, RESE-5).
*Change:* apply it only under `prefers-color-scheme: dark`.
*Done when:* mean darkness of the first paragraph rises by ≥ 15% in light mode (the metric is defined in
the harness), and dark mode is unchanged ±1%.

**W2.3 Fluid body size, 1.5 leading, 28em measure cap** · P1a · S
*Why:* TYPO-3, TYPO-4, RESE-1 and RESE-2. A simulation of exactly these values measured means of 65–68
characters per line.
*Change:* `--text-body: clamp(1.1875rem, 1.08rem + 0.37vw, 1.3125rem)`, which gives 19 / 20.1 / 21 px.
Set the prose to `font-size: var(--text-body); line-height: 1.5; max-width: 28em`. The print override
keeps `max-width: none` at 1rem/1.4. The site default and the CV stay at 19 px.
*Done when:* 19 px @375, 20.1 ±0.2 px @768 and 21 px @≥1024. @1280/1600: mean 60–68, 0 lines over 80,
≤ 10% over 75 on the lab notes and ≤ 20% on hello-world. @768: every non-final line of 3+-line paragraphs
is within 45–75. @375: mean ≥ 38. x-height ≥ 8.4 px @≥1024, and at most 1 runt line per article.
Expect pages +4–6% taller @1280.

**W2.4 Lede and list descriptions scale with the body** · P1a · S
*Why:* the fixed 20.8 px lede would be smaller than a 21 px body, and ledes run to 80 characters per line.
*Change:* `--text-lede: calc(var(--text-body) * 1.15)`. Add `.text-body` to the post and lab lists, and cap
entry descriptions at about 32em.
*Done when:* the lede is ≥ 1.12× the body at every width, the longest full list-description line is ≤ 72
characters @1280, and /cv/ is unchanged.

**W2.5 No width cliff** · P1a · M
*Why:* at 640 px the margin column and the sheet padding switch on at the same moment, so the text
column drops 27% (LAYO-03). Narrowing the gutter alone still leaves −27% (verified).
*Change:* scoped to `.article`, keep article rows single-column below 48rem, using W5.6's compact fact
grid. Between 48 and 64rem use `--gutter: 6rem; --gap: 1rem`. From 64rem it is unchanged. /cv/ is not
affected.
*Done when:* in the 8 px sweep from 600 to 1600, no step shrinks the text column by more than 8% (worst
expected: −5.5% at 768), mean characters per line stays within 55–72 at every sample, and the /cv/ gutter
is still 7.5rem.

### W3. Code, math and technical text

**W3.1 Inline code: never hyphenated, never small caps, sized to the text** · P0 · S
*Why:* TYPO-1, TYPO-2, TYPO-12.
*Change:* on prose code, `hyphens: manual; overflow-wrap: anywhere; box-decoration-break: clone`. On code
inside h2–h4, `font-variant-caps: normal; letter-spacing: normal`. Inline code at 0.76em with padding
0.05em 0.2em. Under `@supports (font-size-adjust: ex-height 0.4)`, use `font-size: 1em;
font-size-adjust: ex-height 0.405`, padding `0.05em 0.15em`, and 1em for code in headings.
*Done when:* 0 automatic hyphen breaks in code on the 3 articles and the fixture at every viewport. "astro
check" in an h2 renders in lowercase. Inline code x-height is within ±5% of the body's @1280 (baseline
+8.6%). The gap before a following comma is ≤ 3 px. No page scrolls sideways at 320 or 375.

**W3.2 Every code line visible** · P0 · S
*Why:* LAYO-01, CONT-1, RESE-4. Print clips 156 px and 57 px of code (A11Y-4).
*Change:* Expressive Code `defaultProps: { wrap: true, preserveIndent: true, hangingIndent: 2,
overridesByLang: { 'bash,sh,shell,zsh': { preserveIndent: false } } }`. Add an unlayered rule giving the
copy button the accent focus ring.
*Done when:* overflow is ≤ 1 px on every block at every viewport, and copying still returns the unwrapped
107-character line. The `{3}` marker covers the whole wrapped line. A4 print clips 0 px.

**W3.3 One code face, readable frame titles, labelled output** · P0 · S
*Why:* inline code renders in JetBrains Mono and blocks in Menlo (TYPO-9). Frame titles are the smallest
text on the page at a 5.8 px x-height (RESE-11). Command output sits in untitled frames (CONT-14).
*Change:* Expressive Code `codeFontFamily` and `uiFontFamily: 'var(--font-mono)'`, `uiFontSize:
'0.85rem'`. Reorder `--font-mono` to `ui-monospace, 'SF Mono', Menlo, Consolas, 'JetBrains Mono',
monospace`. Mark the two pnpm output fences `frame="terminal" title="Output"`.
*Done when:* `.prose p code` and `.expressive-code .ec-line .code` resolve to the same font, frame titles
reach ≥ 7 px x-height, and both output blocks render as terminal frames.

**W3.4 Math at text size** · P0 · S
*Change:* unlayered, at the end of `global.css` (KaTeX's own CSS is unlayered and would win otherwise):
`.prose .katex { font-size: 1em } .prose .math-display .katex { font-size: 1.15em }`.
*Done when:* @1280, KaTeX_Main x-height is ≤ 1.08× and KaTeX_Math ≤ 1.10× the body's (baseline
1.29–1.32×), line pitch is unchanged, and display math does not overflow.

**W3.6 Code-block size matched to the new body** · P1a · S · *(new, from the critic)*
*Why:* after W2.3 the body grows while block code stays at 13.1 px, so the same identifier would be about
18% taller inline than in the listing below it.
*Change:* decide it in the type-scale PR, e.g. 0.875rem at ≥64rem through a CSS variable.
*Done when:* @≥1024, block-code x-height is 0.88–0.95× the body's, inline code is ≤ 1.12× block code, and a
breakout frame holds ≥ 82 columns @1280.

### W4. Headings, small caps, figures and rhythm

**W4.1 Four letter-spacing tokens; keywords in italic** · P0 · S · (O4)
*Why:* TYPO-7. Tracked small-caps keyword runs dominate the list pages.
*Change:* tokens `--track-tight .03em`, `--track-sc .05em`, `--track-label .08em`, `--track-head .14em`
(nav, section titles, and the kicker, which halves from .30em). Replace every literal, including the print
`.label` and the first-line small caps. `.keywords` becomes italic, normal caps, 0.9em, muted, lining
figures. The CV project keyword line changes too, or keeps a `.keywords-sc` variant, depending on O4.
*Done when:* letter-spacing literals appear only in the tokens (0 and `normal` allowed), there are ≤ 4
distinct small-caps values across the pages, small caps are ≤ 21% of characters on / and ≤ 20% on /lab/
@1280, and "pnpm" and "TypeScript" keep their case.

**W4.2 Lining figures where numbers must be read** · P0 · S
*Change:* `lining-nums proportional-nums` on entry titles, entry descriptions (new `.entry-desc` class),
`.keywords`, `.lede` and prose h2–h4. Table cells and ordered-list markers get `lining-nums tabular-nums`.
Dates, counts and the colophon stay old-style. On /cv/, the exceptions are `.ref`, `.page-title` and the
keyword line.
*Done when:* "pnpm 12" shows a lining 1 on / and /lab/, `.date` still computes old-style, and the
fixture's "11.84" and "10.10" are equally wide (±0.1 px).

**W4.3 One gap after the double rule** · P0 · S · (O4)
*Why:* the same letterhead is followed by 28, 32, 40 or 44 px depending on the page (LAYO-07).
*Change:* `--after-rule: 2rem`, set with `@media screen { hr.double-rule + * { margin-top:
var(--after-rule) } }` in the components layer **after** `.section`. A base-layer rule would lose to it.
Replace `mt-7!` on the CV with `print:mt-7!`, and remove the per-page `mt-8` / `mt-10`.
*Done when:* the rule-to-next-element distance is 32 ±1 px on all pages @375 and @1280, and the CV print is
unchanged.

**W4.4 Heading hierarchy by size and form** · P1a · S
*Why:* h3 outranks h2, and all-small-caps flattens "TypeScript" and "KaTeX" (TYPO-8, TYPO-2).
*Change:* h2 in caps and small caps (`font-variant-caps: small-caps`, so brand casing survives),
`--track-sc`, 1.35em at ≥40rem and 1.3em below, line-height 1.15, `text-wrap: balance`, lining figures,
accent colour, margins 1.5 / 0.5 × `--lh`. h3: 1.1em (1.08em on phones), italic, weight 500. h4: 1em,
weight 500, all-small-caps, `--track-label`. Define `--lh: calc(var(--text-body) * 1.5)`.
*Done when:* @≥40rem, h2 capitals are ≥ 1.2× h3 and h3 ≥ 1.08× body. On phones, h2 is ≥ 1.1× h3 and every
h2 fits in ≤ 2 lines @375. Accessible names are unchanged.

**W4.5 Rhythm in line units; lists set like the CV** · P1a · S
*Change:* paragraphs `margin-block: 0.5 × --lh`. Code frames, math, tables, figures and quotations get
`1 × --lh`, plus an unlayered `.prose .math-display > .katex-display { margin: 0 }`. Lists:
`padding-inline-start: 1.15em`, `li` padding 0, item gap `0.125 × --lh`. Print override
`@media print { .prose.prose-paper { --lh: 1.4em } }` in the same PR.
*Done when:* @1280, the paragraph gap is 0.5× line pitch ±1 px, h2 space is 1.5× above and 0.5× below,
bullet text starts ≤ 24 px from the paragraph edge (baseline 38 px), single-line items are ≤ 8 px apart
(baseline 19 px), and in print the paragraph gap is 0.5× the print line.

**W4.6 Lining figures in running prose** · P1a · decision (O1)
*Change:* if adopted, add `lining-nums proportional-nums` on `.prose.prose-paper`, and give W4.2's entry
descriptions the same treatment.
*Done when:* the decision is recorded. If adopted, `.prose p` computes lining, `.date` stays old-style, and
/cv/ matches its snapshot.

**W4.7 List-page section titles above their entries** · P1a · S · *(new, from the critic)*
*Why:* on /, /blog/ and /lab/ the section title's glyphs (10.6 px) are smaller than entry titles (14.3 px).
W2.4 would widen the gap to 1.5×.
*Change:* a `Section` variant for list pages (caps and small caps, or larger small caps). /cv/ keeps
`.heading-text` as it is.
*Done when:* @375 and @1280, section-title glyphs are ≥ 1.1× entry-title capitals on / and /lab/, and /cv/
computed styles are unchanged.

### W5. Article shell and orientation

**W5.1 Section links and keyboard focus clear the sticky header** · P0 · S
*Change:* `--header-h: 4.125rem`, with the header at `min-block-size: var(--header-h)` on sm+ (the header
is static on phones). `html { scroll-padding-top: calc(var(--header-h) + 1.375rem) }` @≥40rem, plus
smooth scrolling only under `prefers-reduced-motion: no-preference`.
*Done when:* after `#two-gotchas` and `/cv/#experience`, the heading top is ≥ 80 px @768/1280/1600
(baseline 0), and a Shift+Tab pass finds 0 focused elements under the header (baseline 3).

**W5.2 One shared `Article.astro`** · P1b · M
*Why:* posts and lab notes would otherwise build the contents list, end block and length cue twice. The
margin beside the text is 0–3.6% used (LAYO-02). There is no `BlogPosting` data (WAYF-13).
*Change:* `Article.astro` wraps Base and renders PageHeader, a meta `dl` (post tags become a "filed under"
row), the prose row, and later ArticleEnd. `Post.astro` and `LabNote.astro` become thin wrappers. In the
head, add `<Fragment slot="head">` with `BlogPosting` JSON-LD (escaped like the CV's) and
`article:modified_time`. Put `data-pagefind-body` on `<article>`. Headings come from `render()`. KaTeX
CSS is linked only where math renders: `katexPlugin` sets `data.astro.frontmatter.hasMath`, the layout
reads `remarkPluginFrontmatter.hasMath`, and it emits `katex.min.css?url` as a `<link>`. Verify the fonts
come along into `dist`. Land it **before** W5.3 and W5.4.
*Done when:* article HTML matches the snapshots, there is one `BlogPosting` per article, the pnpm note
requests no KaTeX CSS, and hello-world's tags sit in a "filed under" row.

**W5.3 Code frames break out into the margin** · P1b · S
*Why:* the 148 px margin beside every frame is empty while lines wrap (LAYO-01, RESE-4; Tufte CSS, Distill
and Comeau do the same).
*Change:* where the article grid is active,
`.prose.prose-paper :where(.expressive-code, .table-scroll) { margin-inline-start: calc(-1 * (var(--gutter) + var(--gap))) }`.
On phones, frames bleed to the sheet edge, with square corners set by an unlayered rule. Display math
stays in the column.
*Done when:* frame left edges align with the double rule ±1 px. @≥1024, lines of ≤ 82 characters fit on
one line and longer ones wrap with the hanging indent. @375, at least 44 code columns are visible
(baseline 38.6). No page overflows.

**W5.4 Section marks: § links and the accent bar in the margin** · P1b · M
*Why:* no heading can be linked to (WAYF-4). One ID is percent-encoded (`s%C3%A4tteri`, CONT-10). Article
h2s lack the CV's margin bar (LAYO-08).
*Change:* create `src/lib/markdown/` (move `katex.ts` there, keep a re-export at `src/lib/katex.ts`
because an article lists that path, and use `.ts` extensions in imports). Add `heading-anchors.ts`, a
native hast plugin. It uses one `github-slugger` per document, gives h1–h6 ASCII-folded IDs, keeps
`{#custom}` IDs (turn on the `headingAttributes` feature), and wraps h2/h3 in `div.section-head` with a
focusable sibling `a.anchor` (`aria-label="Link to section: …"`, drawn as `§`). @≥40rem the anchor is
absolutely positioned across the gutter and draws the accent bar. Tests run with `node --test` against
`createSatteriMarkdownProcessor`. Set `engines` to `>=22.18.0`, and pin the Sätteri packages exactly.
*Done when:* every h2 and h3 has exactly one anchor, IDs are unique ASCII (only
`math-with-a-native-satteri-plugin` changes), `render()` heading texts contain no `§`, each heading's
accessible name equals its text, anchors can be tabbed to with a ≥ 44×24 px hit area, and tests run under
5 s.

**W5.5 Contents row and length cue** · P1b · M
*Why:* `render()` already returns headings, but they are discarded (WAYF-3, RESE-6). The lab notes are 2–3
minute reads that look like 5 screens (WAYF-10).
*Change:* `src/lib/length.ts` (fixed tokenizer, unit-tested) and `Contents.astro`. @≥40rem it is a
run-in "contents" row in the fact sheet. Below that it is a closed `<details>`; both are rendered and CSS
picks one. Shown when there are ≥ 4 sections and ≥ 250 words, with a `toc` override. A length line under
the date reads "5 sections · 4 listings" on two stacked lines. Minutes are left out until some article is
≥ 5 minutes long. Filter `footnote-label` out of the headings. Depends on W6.3 (category moves to the
kicker) and W6.2 (code moves to the end), which make room.
*Done when:* both lab notes list 5 entries and hello-world none, with and without JavaScript. The first
text line stays ≤ 85% of 900 px @1280 (expected about 82%). The phone disclosure adds ≤ 32 px, and 0 B of
JavaScript are added.

**W5.6 A phone's first screen reaches the article** · P1b · M
*Why:* LAYO-04 and LAYO-10.
*Change:* below 48rem, a compact two-column fact grid: status, category and platform on one line, tools
and code moved to the end block, the verdict kept. Tighten the article's gaps to about 1.25rem. PageHeader
renders its gutter only when that slot is filled, and moves it after the lede on phones. Depends on the
minimal W6.2 and W6.3.
*Done when:* @375×812 the third text line ends ≤ 812 px, and @375×667 the first line ends ≤ 667 px. The fact
block is ≤ 200 px @375 (baseline 464). The list-page kicker is ≤ 41 px from the sheet top. The fact sheet is
≤ 228 px @≥768, excluding the contents row.

### W6. Endings and paths between articles

**W6.1 Cross-links and a Blog lede of its own** · P0 · S · (O3)
*Change:* link /cv/ and /lab/ from hello-world, and the Astro note from the pnpm note's `astro check`
passage. The reverse link needs a sentence from you; the previous/next row covers it otherwise. Change the
Blog description and lede together. The suggested "Essays and stories…" doesn't fit today's only post, so
the wording is yours. Don't link /reading/ while it is empty.
*Done when:* hello-world has ≥ 2 internal links, the pnpm note links the Astro note, and the Blog lede no
longer says "notes".

**W6.2 Article end block** · P1b (minimal) + P1c (full) · M
*Why:* articles stop with no end mark and no next step (WAYF-1, LAYO-11).
*Change:* `ArticleEnd.astro` inside `<article>`: the ❦ fleuron (the CV's), then `.label` rows:
- **filed under:** links to /lab/ or the tag pages
- **previous / next:** within the collection, with an ID tiebreaker added to both sorts, and
  `<link rel=prev/next>`
- **related:** from W6.6
- **code:** the repo link
- **follow:** the section feed from W6.5a
- **back:** "All lab notes" or "All posts", plus "↑ top"

A colophon with the dates at ≥ 1rem, scoped to `.article-end` so the CV is untouched. Blog and Lab join
the footer.
*Done when:* every article has ≥ 3 internal links after the text. From the last paragraph of the Astro note
@375, the other note is 1 tap and ≤ 1 screen away. There is a fleuron and a ≥ 16 px colophon. Labels align
to the gutter edge ±1 px. The footer lists Blog and Lab.

**W6.3 Kicker becomes a breadcrumb** · P1b · S
*Change:* lab notes read "Lab · Software", and the category row leaves the fact sheet. The kicker link gets
the underline and 0.35rem block padding (hit area ≥ 24 px, baseline 21 px). Category and status become
filter links **only when that filter group is rendered** (not today, see W6.4), with `.status` on the
`<a>` itself.
*Done when:* the kicker shows an underline, has a ≥ 24 px hit area, and the fact sheet has one row fewer.

**W6.4 Index pages and short pages** · P1c · M
*Why:* heading skips (A11Y-5). An empty filter bar pushes the first /lab/ entry to 82% of the phone
screen (LAYO-09). Phone entries are tall (LAYO-10). Near-empty pages sit on 255–467 px of bare background
(LAYO-06).
*Change:* a `headingLevel` prop on PostList and LabList (h2 on index and tag pages, h3 inside Sections).
Render a filter group only with ≥ 2 values, and the bar only if some group qualifies. Guard the script
(`if (bar)`), and apply URL parameters without needing buttons. Tighten the top margin when there is no
bar. Compact phone entries. The sheet stretches to the footer at all widths, and a shared `Colophon`
closes list pages. The Reading RSS pill and `<link rel=alternate>` appear only when there are entries.
Land it before W6.3's links and W8.2's filter changes.
*Done when:* no heading skips, no filter bar and no script error on /lab/ today, and the first /lab/ entry
is ≤ 62% of the viewport @375. Lab entries are ≤ 230 px @375. Sheet-bottom to footer-top is ≤ 48 px @768,
@1280 and @1600 on /blog/, /tags/, /reading/, the tag pages and 404.

**W6.5a Feed split** · P1b · S
*Change:* `/blog/rss.xml` carries posts only and `/rss.xml` becomes global, with lab titles prefixed
"Lab:". Articles advertise their section feed and the global one. This comes before W6.2's "follow" row,
so the meaning of that link never changes under existing subscribers.
*Done when:* `/rss.xml` has 3 items and `/blog/rss.xml` has posts only.

**W6.5b One tag index across both collections** · P2 · M
*Change:* tags on the lab schema, and `src/lib/articles.ts` (a mixed list with a tiebreaker; `tagSlug`
moves there). Tag pages list both collections. /tags/ is set as a book index: lowercase roman names,
old-style tabular counts, small-caps initials in the gutter. List rows show "updated ‹date›" when
`updatedDate` is set, and the lab feed sends the real `pubDate` (WAYF-13).
*Done when:* /tags/astro/ lists all three Astro articles, small caps are ≤ 25% inside `<main>` on /tags/
(baseline 51%), counts align, and every lab feed item's `pubDate` equals its frontmatter.

**W6.6 Series and related links** · P2 · S
*Change:* `relatedPosts: z.array(reference('posts'))` and `relatedLab: z.array(reference('lab'))`,
resolved through a helper that throws on a missing entry (`astro check` alone exits 0). Add
`series` + `seriesPart` fields, with a series row in the fact sheet and a related row in the end block.
Comes after W6.2 and W6.5b.
*Done when:* every article links to ≥ 1 other from its end block, a misspelled slug fails `pnpm build`,
and the series part is correct.

### W7. Long-form devices and print

**W7.1 Print that keeps code, links and headings together** · P1c · S
*Change:* in print: h2/h3 `break-after: avoid`; `.prose .expressive-code`, math, tables, figures and
callouts `break-inside: avoid`; orphans and widows 3. External URLs are printed after their links, and the
prose underline is kept in the unlayered print block. Hide `a.anchor`, the contents list and the
previous/next/follow rows, and keep the colophon. The `--lh` override already came with the type-scale
PR.
*Done when:* A4 print shows 0 px of clipped code, `https://astro.build` printed, no page ending in an h2,
no split frame shorter than 20 lines, and no printed "§". Article page counts are recorded; the Astro note
may go from 2 to 3 pages with whole frames. /cv/ matches the O2 target.

**W7.2 Footnotes styled as notes** · P2 · S
*Change:* `gfm: { footnotes: { label: 'Notes', backContent: '↑' } }` (↩ is outside the font subset). Show
the label, set notes at 0.85em muted with a rule above and lining tabular numbers. Give references
`padding-inline: .3em` and `font-variant-position: super`, with the Preflight `sup` reset. Add a unit
test.
*Done when:* on the fixture, note text is ≤ 0.9× body, the label is visible, the back-link glyph is EB
Garamond, and the reference hit area is ≥ 12×18 px (baseline 4.1×18).

**W7.3 Tables, quotations, figures and definition lists** · P2 · M
*Change:*
- **Tables:** `tables.ts` wraps each table in `div.table-scroll` (`role=region`, `tabindex=0`, labelled),
  which breaks out with the code frames. Booktabs style: 0.9em, lining tabular figures, rules above and
  below only, small-caps headers.
- **Quotations:** upright, with no generated quote marks.
- **Figures:** `figures.ts` turns an image-only paragraph with a title into
  `figure` + `figcaption` (dropping the `title` attribute). Set `image: { layout: 'constrained',
  responsiveStyles: true }`.
- **Definition lists** (`definitionList` feature on): laid out like the fact sheet, with `dt` in the
  gutter and `dd` in the text column (CONT-9).

Unit tests for both plugins.
*Done when:* on the fixture, the table adds 0 px of page scroll @320/375 (fixture baseline 98/43 px),
digits align, quotations are upright with no marks, the figure has a caption and a `srcset`, and
untitled or linked images are untouched. `dt` is weight 500 small caps aligned to the gutter edge ±1 px.
Existing articles match their snapshots.

**W7.4 Callouts through GitHub alerts** · P2 · M · (O7)
*Why:* there is no callout syntax (CONT-7). Turning on Sätteri's `directive` flag without a handler
silently deletes text such as `localhost:4321` or "At 10:30" (CONT-2).
*Change:* a blockquote visitor maps `> [!NOTE|TIP|IMPORTANT|WARNING|CAUTION]` to
`aside.callout[role=note]`. The label sits in the gutter with the accent bar, with no box or tint, and
frames inside a callout don't break out. `directive` stays off, and the notes preview correctly on
GitHub too.
*Done when:* `> [!WARNING]` renders as an aside with its label in the gutter, colon strings on the fixture
are untouched, and existing articles match their snapshots.

**W7.5 Content lint that fails the build with file and line** · P2 · S
*Change:* `scripts/lint-content.mjs` parses each Markdown file with `satteri` `markdownToMdast` (add
`satteri@0.10.5` as a dev dependency) and runs rule functions kept in `src/lib/markdown/lint.ts`
(unit-tested). It is chained into `build` like `validate:cv`. Errors: an empty alt, a raw `<img>`, an h1 in
the body, a first heading that isn't h2, or a heading jump of more than one level. Warning: a code line
over 110 characters.
*Done when:* the articles and fixture are clean, and a post with `![](x.png)` fails the build and prints
`path:line`.

**W7.6 Acronyms set the same way in the text as in titles** · P2 · S · (O5)
*Change:* export the acronym regex from `typeset.ts`, and add a hast text visitor that skips `pre`, `code`,
`a` and headings and emits `<span class="sc">`.
*Done when:* "API" in the verdict and in the body, and "CSS" in tools and in the body, compute the same
caps. There are 0 `.sc` inside code or links, and the regex lives in one module.

### W8. Accessibility and weight

**W8.1 A visible link underline; an AA "testing" colour** · P0 · S · (O4)
*Change:* the base underline mix goes from 30% to 60%. Prose links use `text-decoration: revert-layer`, so
the base rule is the single source of truth. The "testing" status becomes `oklch(0.55 0.115 70)` in light
mode and print.
*Done when:* the underline is ≥ 3:1 on paper in both modes (baseline 1.67 and 2.00). Prose and non-prose
links are identical at rest and on hover. Every status colour is ≥ 4.5:1. Prose underlines get
deliberately lighter (8.49:1 → 3.12:1) for consistency.

**W8.2 Semantics pass** · P1c · M
*Change:*
- **Section headings with a note:** get an `aria-label`, so the /cv/ name reads "Earlier experience,
  before 2015" (it currently reads "Earlier experiencebefore 2015").
- **Nav links:** `padding-inline: .35rem; margin-inline: -.35rem`, with the current-page bar inset.
- **Tags:** `gap-y-1` and `padding-block: .2rem`.
- **Lab filters** (after W6.4): `role=group` + `aria-labelledby`, and a live region updated only after
  clicks.
- **Rating:** `role=img`.

*Done when:* axe reports 0 violations on all pages and the fixture. Nav and tag targets are ≥ 24×24 px
@375. There is no sideways scroll @375 with the Reading link present, and the header height changes by
≤ 2 px.

**W8.3 Math visible sooner** · P2 · S · *(replaces the font-trimming item)*
*Why:* KaTeX's fonts use `font-display: block`, so "e^{iπ}+1=0" is blank for about 400 ms after first paint
on math pages (A11Y-3).
*Change:* now that W5.2 owns the KaTeX stylesheet, preload KaTeX_Main and KaTeX_Math on math pages, or
rewrite their `font-display` to `swap`. The proposed trim of the Garamond weight range is dropped: it
saves only about 5% and doesn't affect readability.
*Done when:* throttled, the inline math glyphs paint within 100 ms of first paint, and CLS stays ≤ 0.05.

---

## 7. Deferred and out of scope

- **Sidenotes and a right-hand notes column.** The 120 px gutter fits about 16 characters, and no article
  has footnotes yet. Revisit once 3+ articles use 3+ notes each.
- **A sticky or scroll-spy contents list in the margin.** It conflicts with code breakout. Revisit as a
  right-hand rail at ≥ 80rem if articles grow.
- **Reading-progress bar and a floating back-to-top button.** The articles are 300–460 words; "↑ top"
  in the end block covers it.
- **Pagefind search** until there are about 10 articles. W5.2 adds the `data-pagefind-body` hook now.
- **An archive page**, year grouping, and a combined "Latest" list on the home page.
- **Build-time diagrams**, and the Expressive Code line-number and collapsible-section plugins.
- **MDX and the legacy `unified()` processor.**
- **Pull quotes, justified article text** (Safari ignores the hyphenation limits), new typefaces, cards,
  boxes and tinted callouts.
- **44 px (AAA) nav targets on phones.** AA already passes, and taller targets would grow the phone header.
- **CV-specific typography.** The CV changes only through shared tokens, and only with your sign-off (O4).
- **From PLAN.md:** travel, maps, photos, comments and Biome.

## 8. Risks

- **Shared styles reach the CV.** W2.1, W4.1, W4.3 and W8.1 touch it. Every such PR carries /cv/
  screenshots and a print page-count check.
- **The type-scale PR moves every number.** It ships as one PR and re-baselines the harness afterwards.
- **Sätteri is 0.x.** The heading-ID plugin relies on internal ordering, so pin the versions and run the
  plugin tests on every bump.
- **Throttled CLS is noisy.** Only deterministic checks gate the deploy; CLS is a median-of-5 local check.
- **Devices are built before the content that needs them.** The fixture keeps them honest until real
  articles use them.

---

## Appendix A: Audit findings

Every item above cites these IDs. Severity is the auditor's rating. Evidence and measurements are in the workflow journal.

### Typography and measure (15 findings)

The typeset system works well where the design is careful. Paragraph and heading spacing are good, text-wrap: pretty leaves no runt last lines, true small caps and old-style figures really render, and the 768px measure is ideal (mean 60 characters per line, every line within 45–75). The main problems are elsewhere. First, `hyphens: auto` leaks into inline code: 6 of the 8 automatic hyphen breaks measured split code identifiers, such as mark-down.remarkPlugins. Second, the h2 small-caps style leaks into code: `astro check` renders as fake monospace small caps, ASTRO CHECK. Third, the body text is small for EB Garamond. At 19px its x-height is 7.7px, below Georgia at 18px (8.67px). On desktop the 588px column fits about 82 characters, so 24–36% of lines go past 75. Other issues: the old-style "1" reads as "ı" in version numbers ("pnpm ı2", "~ı.8 s"), inline KaTeX is set 29% larger than the text around it, and letterspaced small caps make up 37–62% of the characters on the list pages, with ten different letter-spacing values. Two changes do most of the work. Use a fluid body size of about 18px on phones rising to 21px on desktop, with 1.5 line height. And add scoped resets for code, math and numerals inside prose.

| ID | Severity | Finding |
|---|---|---|
| TYPO-1 | high | Automatic hyphenation splits inline code identifiers |
| TYPO-2 | high | h2 small caps leak into inline code and flatten case in technical names |
| TYPO-3 | high | 19px EB Garamond is too small and too light on screen |
| TYPO-4 | medium | Desktop line length exceeds 75 characters in articles, list descriptions and ledes |
| TYPO-5 | medium | Old-style figures make '1' read as 'ı' in version numbers |
| TYPO-6 | medium | Inline KaTeX is 29–32% larger than the surrounding text |
| TYPO-7 | medium | Small caps are overused on list pages and have 10 different letter-spacing values |
| TYPO-8 | medium | Heading hierarchy relies on colour and tracking, not size |
| TYPO-9 | medium | Code blocks: mismatched monospace fonts, heavy horizontal scrolling on mobile, tiny file-name tabs |
| TYPO-10 | low | Prose links ignore the site's hairline underline |
| TYPO-11 | low | Tables, blockquotes and figures have no house style yet |
| TYPO-12 | low | Inline code is slightly oversized, and its padding opens gaps before punctuation |
| TYPO-13 | low | Loose list spacing and deep indentation diverge from the CV reference |
| TYPO-14 | low | Acronyms are small caps in titles and front matter but full caps in the body |
| TYPO-15 | low | Printed articles can strand headings and split code frames |

### Layout and shape (11 findings)

The document system holds together well. Kicker, title, lede, prose, fact values and list bodies all share one left edge at every width. The header and footer line up with the edges of the paper sheet, and no page scrolls sideways at any of the 6 widths × 9 pages tested. Long articles are where the shape breaks down. The 148px margin column beside article text is almost empty (3.6% filled on posts, 0% on lab notes), while code blocks are clipped behind sideways scrolling (up to 302px of a line hidden at 1280 and 563px at 375) and long h2s wrap onto 2–3 lines. Tablets have a hard cliff at 640px, where the text column drops from 591px to 364px (about 71 to 44 characters per line). On phones, the stacked lab fact sheet pushes the first line of the article below the first screen. Short pages (Blog with one post, Tags, the empty Reading page) float as small cards above 255–467px of bare background, and spacing after the double rule varies from 28px to 44px across pages. The CV uses its margin column on every row and closes with a fleuron; articles do neither.

| ID | Severity | Finding |
|---|---|---|
| LAYO-01 | high | Code blocks are clipped behind sideways scrolling; the margin column beside them sits empty |
| LAYO-02 | high | The article margin column is dead space |
| LAYO-03 | high | Hard cliff at 640px and a squeezed tablet range (640–1023px) |
| LAYO-04 | medium | On phones, the lab-note fact sheet pushes the article below the first screen |
| LAYO-05 | medium | The sticky header hides in-page anchor targets |
| LAYO-06 | medium | Empty and near-empty pages float as short cards above bare background |
| LAYO-07 | medium | Inconsistent gap after the double rule |
| LAYO-08 | medium | Article headings and lists don't match the CV and home section style |
| LAYO-09 | low | The Lab filter bar has nothing to filter |
| LAYO-10 | low | On phones, margin content stacks above entries and bloats list and letterhead height |
| LAYO-11 | low | Articles end abruptly, with no closing mark or navigation |

### Wayfinding and reading aids (15 findings)

Nothing helps a reader find their way around inside an article or move between articles, but the data needed to build that help already exists. Sätteri's built-in heading-ids plugin gives every heading an id and returns {depth, slug, text} through render(). So a table of contents and section links can be built without the legacy unified() processor. Today both page routes throw that data away, and the 120px margin column next to the prose is empty; a mock sticky contents list measured 120×185–222px there. The biggest problems are: (1) every article ends with nothing after it (no previous/next, no link back to its section, and the footer has no Blog/Lab links; on phones the header is not sticky, so the reader has to scroll back up to 4,591px); (2) links to sections land under the 66px sticky header, which fully hides the "Two gotchas" heading at 1280. Taxonomy and feeds split along the Blog/Lab line: tags and the site-wide /rss.xml cover posts only, and none of the three articles links to another, even though all three tell the same story (rebuilding the site). The articles are short (298–462 words) but tall (3–5.7 phone screens) because of code blocks, so the recommended aids are light: a margin contents list, section links, an end-of-article block and a length line. A progress bar and search are less urgent.

| ID | Severity | Finding |
|---|---|---|
| WAYF-1 | high | Articles end in a dead end: no previous/next, no link back, no related, and on phones no nav within reach |
| WAYF-2 | high | Links to sections land underneath the sticky header |
| WAYF-3 | medium | No table of contents, although the heading data is already produced and a slot is waiting |
| WAYF-4 | medium | Sections have ids but nothing to click, so they can only be linked by guessing the slug |
| WAYF-5 | medium | Tags cover posts only; lab notes are outside the taxonomy, yet Tags is a top-level nav item |
| WAYF-6 | medium | Related articles are not connected: no in-text links, no series, and no data to compute 'related' |
| WAYF-7 | medium | The feed advertised on every page (/rss.xml) contains posts only |
| WAYF-8 | low | The kicker link back to the section does not look like a link |
| WAYF-9 | low | Lab categories, status and tools are plain text, although the Lab filters can be linked to |
| WAYF-10 | low | No reading length is shown |
| WAYF-11 | low | The difference between Blog and Lab is in the schema, not in the text readers see |
| WAYF-12 | low | No single index of everything written, and the home page repeats /blog/ |
| WAYF-13 | low | 'Updated' dates are unclear in lists and feeds (not yet visible) |
| WAYF-14 | low | No search yet; the planned Pagefind setup depends on WAYF-2 and WAYF-4 |
| WAYF-15 | low | No reading progress indicator or back-to-top link on long phone pages |

### Rich content and authoring (16 findings)

The pipeline can support almost every long-form feature without going back to the legacy unified() processor. Sätteri 0.10.5 already renders GFM footnotes and tables. Definition lists, heading attributes, superscript/subscript and ::: directives are each one feature flag away. Every missing piece (callouts, figures with captions, sidenotes, table wrappers, GitHub-style alerts, build-time diagrams) worked as a native plugin of 10–30 lines in scratch tests, including async visitors and data.hName. Expressive Code runs natively through Sätteri's hastPlugins. The real problems are in how content is presented today, and one trap in the plan. Long code lines are hidden behind horizontal scroll: 302px of the 888px katex.ts block at 1280px, 563px at 375px. Inline code gets auto-hyphenated ('mark-down.remarkPlugins'). Footnotes, tables, figures and quotes have no styles of their own, and a 5-column table causes 58px of page-wide horizontal scroll on phones. The 120px margin column is empty beside every lab note but only fits about 16 characters per line, too narrow for Tufte-style notes. The trap: turning on Sätteri's `directive` flag without a plugin silently deletes text ('localhost:4321' becomes 'localhost', and ::: blocks disappear), so callouts must ship with a plugin that puts unknown directives back as text. MDX (@astrojs/mdx 8.0.2) works with the same processor but isn't needed for these features, and it breaks on technical prose like `Array<string>` written outside backticks.

| ID | Severity | Finding |
|---|---|---|
| CONT-1 | high | Long code lines are hidden behind horizontal scroll at every width; word wrap is available but off |
| CONT-2 | high | Turning on Sätteri's `directive` flag without a complete plugin silently deletes text |
| CONT-3 | medium | Inline code is auto-hyphenated and split mid-identifier |
| CONT-4 | medium | GFM tables have no scroll container and use old-style proportional figures |
| CONT-5 | medium | Footnotes already work but look like part of the article body |
| CONT-6 | medium | The margin column is empty beside every lab note but too narrow for Tufte-style sidenotes |
| CONT-7 | medium | No callout, aside or pull-quote syntax, and blockquotes are styled as quotations |
| CONT-8 | medium | Images get no captions and no responsive srcset, and raw-HTML images skip astro:assets |
| CONT-9 | low | Built-in Sätteri features are off: definition lists, heading attributes, sub/superscript |
| CONT-10 | low | Headings have ids but no self-links, and the heading list Astro already collects is unused |
| CONT-11 | low | No abbreviation syntax, and body acronyms are not set in small caps like the rest of the site |
| CONT-12 | low | Inline KaTeX is 21% larger than the Garamond body text |
| CONT-13 | low | Diagrams: a build-time hook works; Mermaid is the heavy option |
| CONT-14 | low | Expressive Code: optional plugins not installed, and command output uses a generic frame |
| CONT-15 | low | MDX would work with Sätteri but isn't needed for readability features, and it is fragile for technical prose |
| CONT-16 | low | Authoring docs are misplaced and don't cover the features that already work |

### Accessibility and performance (14 findings)

The foundations are solid. Body text contrast is 16.15:1 (light) and 14.28:1 (dark), the site has one landmark set, a working skip link, a 2px accent focus ring (8.49:1), no horizontal scroll at 320–1600px even with WCAG 1.4.12 text spacing, KaTeX output exposed as MathML, and only 1.5 KB of JS. The two problems that most affect reading are both measured and both have verified fixes. First, the EB Garamond swap moves text under the reader: throttled CLS is 0.1552 on /blog/hello-world/ at 1280px and a 32px jump on / at 375px, and fallback metric overrides cut these to 0.0238 and 0.0008. Second, the 66px sticky header hides in-page anchor targets and Shift+Tab focus (a WCAG 2.4.11 failure); scroll-padding-top: 5.5rem takes the obscured stops from 3 to 0. On weight, the long article is 10 requests and 231,379 B, of which 88% is fonts and 22% is KaTeX (CSS plus 2 fonts) for a single inline equation; the KaTeX CSS is also render-blocking on pages with no math, costing about 45ms of FCP on Slow 4G. Print holds up well, but code lines are clipped on paper and link destinations are lost. The rest are smaller semantic fixes: h1→h3 skips on the index pages, a faint link underline, a "testing" status colour at 4.31:1, and heading names that run together.

| ID | Severity | Finding |
|---|---|---|
| A11Y-1 | high | Webfont swap reflows text under the reader: the fallback has no metric overrides |
| A11Y-2 | high | Sticky header hides anchor targets and keyboard focus (WCAG 2.4.11 Focus Not Obscured) |
| A11Y-3 | medium | KaTeX CSS and fonts are loaded on every post and lab note, render-blocking, even with no math |
| A11Y-4 | medium | Print loses content: code lines are clipped and link destinations disappear |
| A11Y-5 | medium | Heading hierarchy skips from h1 to h3 on the blog and lab indexes |
| A11Y-6 | medium | Links in running text are identified by a faint 1px underline |
| A11Y-7 | medium | 'testing' status colour fails AA text contrast |
| A11Y-8 | low | Section headings with a note run their words together |
| A11Y-9 | low | Mobile nav and tag targets are small (pass 2.5.8 only through spacing) |
| A11Y-10 | low | Code blocks: unnamed focusable regions and an inconsistent copy-button focus ring |
| A11Y-11 | low | French talk titles lack lang="fr" |
| A11Y-12 | low | Webfonts are 69% of an article's weight; the variable range is wider than used |
| A11Y-13 | low | Lab filter controls have no group label and no result announcement |
| A11Y-14 | low | No reduced-motion guard (preventive) and a rating markup that won't be announced |

### Best-practice research (12 findings)

The typographic base is sound and matches much of the published guidance. Articles are set ragged-right with hyphenation and text-wrap: pretty, the dark palette is off-black with a desaturated accent, and the phone measure is about 39 characters, in the same range as Tufte CSS, Gwern and Maggie Appleton. The biggest evidence-backed gap is apparent type size. EB Garamond's small x-height (0.405) makes the 19px body only 7.7px tall in lowercase, which is optically the same as 16px Georgia. That is about 0.16° of visual angle by the CSS reference pixel, below the 0.2° lower bound of the fluent reading range (Legge & Bigelow). It is also the smallest of every exemplar measured. Raising desktop body text to about 21px would also bring the desktop measure down from a median of 75 characters per line (max 83) into the 45–75 ideal. The long-read features the owner wants all need groundwork first. In-page anchors currently land under the 66px sticky header. Code blocks scroll sideways at every width while a 120px margin column sits empty. The 120px margin is too narrow for Tufte/Gwern-style sidenotes, which need about 24–41 characters per line. Sätteri already emits accessible GFM footnotes, and Astro already exposes heading data, so a table of contents and footnote-to-sidenote upgrades can be done without changing the Markdown pipeline.

| ID | Severity | Finding |
|---|---|---|
| RESE-1 | high | Body type is optically small for a small-x-height Garamond: 7.7px x-height, below the 0.2 deg critical print size and every exemplar |
| RESE-2 | medium | Desktop measure is at the upper limit: median 75, max 83 characters per line |
| RESE-3 | medium | In-page anchors land under the 66px sticky header (a prerequisite for a TOC, footnotes and heading links) |
| RESE-4 | medium | Code blocks scroll sideways at every width while the 148px margin column beside them is empty |
| RESE-5 | medium | Global -webkit-font-smoothing: antialiased thins an already light Garamond in light mode, and the font cannot go lighter in dark mode |
| RESE-6 | medium | Long lab notes have no table of contents or heading self-links, although the data and space for them exist |
| RESE-7 | medium | The 120px gutter is too narrow for sidenotes; start with styled footnotes and add sidenotes on wide screens as an enhancement |
| RESE-8 | low | Inline code is optically larger than the Garamond around it, and the font fallbacks have different x-heights |
| RESE-9 | low | Vertical spacing is off a line-based rhythm; paragraph gap exceeds typographic guidance |
| RESE-10 | low | Hyphenation limits are ignored in Safari |
| RESE-11 | low | Secondary reading text (code-frame file names, colophon) is very small in Garamond |
| RESE-12 | low | No reading-time cue; if added, compute it from the evidence-based reading rate |


## Appendix B: Sources used by the research audit

- <http://webtypography.net/2.1.2>
- <http://webtypography.net/2.2.2>
- <https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/>
- <https://baymard.com/blog/line-length-readability>
- <https://css-tricks.com/dark-mode-and-variable-fonts/>
- <https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/>
- <https://dbushell.com/2024/11/05/webkit-font-smoothing/>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-size-adjust>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/hyphens>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-padding-top>
- <https://distill.pub/guide/>
- <https://edwardtufte.github.io/tufte-css/>
- <https://experts.umn.edu/en/publications/does-print-size-matter-for-reading-a-review-of-findings-from-visi/>
- <https://expressive-code.com/key-features/word-wrap/>
- <https://github.com/sindresorhus/modern-normalize/issues/19>
- <https://gwern.net/design>
- <https://gwern.net/doc/psychology/linguistics/2019-brysbaert.pdf>
- <https://gwern.net/sidenote>
- <https://jov.arvojournals.org/article.aspx?articleid=2191906>
- <https://kittygiraudel.com/2020/11/24/accessible-footnotes-and-a-bit-of-react/>
- <https://martech.org/estimated-reading-times-increase-engagement/>
- <https://nerdy.dev/adjust-perceived-typepace-weight-for-dark-mode-without-layout-shift>
- <https://practicaltypography.com/first-line-indents.html>
- <https://practicaltypography.com/line-length.html>
- <https://practicaltypography.com/point-size.html>
- <https://practicaltypography.com/space-between-paragraphs.html>
- <https://readabilitymatters.org/articles/research-highlight-how-bold-can-we-be>
- <https://www.joshwcomeau.com/css/full-bleed/>
- <https://www.nngroup.com/articles/horizontal-scrolling/>
- <https://www.nngroup.com/articles/table-of-contents/>
- <https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786>
- <https://www.w3.org/TR/css-values-4/>
- <https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html>
