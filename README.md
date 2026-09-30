# bmscomp.github.io

Personal site of Said Boudjelda — built with [Astro](https://astro.build), deployed to GitHub Pages
on every push to `main` once the checks pass. See [PLAN.md](PLAN.md) for the roadmap and
[READABILITY-PLAN.md](READABILITY-PLAN.md) for the typography and reading work, with its measurements.

## Develop

Requires Node 22.18 or later (`.nvmrc`) and pnpm 12.6 (`packageManager` in `package.json`; `corepack
enable` picks it up).

```bash
pnpm install
pnpm dev             # http://localhost:4321 (drafts and the /dev/ test pages visible)
pnpm build           # type-check, validate the CV, lint the content, static build into dist/
pnpm preview         # serve dist/
pnpm lint:content    # the Markdown checks alone (see "Writing features")
```

## Design

Every page is a typeset "sheet of paper": EB Garamond with true small caps and old-style figures, dates
and labels in a left margin column, small-caps section titles with an accent bar. The system lives in
`src/styles/global.css` (palette tokens `page`, `paper`, `ink`, `muted`, `rule`, `accent` switch for dark
mode and print); `src/styles/cv.css` only holds CV-specific pieces. Shared building blocks:
`PageHeader`, `Section`, `PostList`, `LabList`, `ArticleList`, `TagList`, `Colophon`. Posts,
mathematics articles and lab notes share one shell, `src/layouts/Article.astro` (fact sheet,
`Contents`, text, `ArticleEnd`). Social cards (`src/lib/og.ts`) use the same paper style:
`/og/<post>.png`, `/og/mathematics/<article>.png`, `/og/lab/<note>.png` and `/og/cv.png`.

The type is **EB Garamond**, self-hosted from `src/assets/fonts/eb-garamond/` (OFL). It is a Latin subset
of the full font, because the npm/Google Fonts builds drop the small caps, old-style figures and
superior figures; the `pyftsubset` command is at the top of `src/styles/global.css`. A second subset
holds the Greek letters and math symbols (π, ζ, ≈, ⋯), and a browser downloads it only for a page that
uses one. A metric-matched fallback keeps the text from jumping while it loads.

## Write a post or a mathematics article

Add a Markdown file to `src/content/posts/` for the blog (`/blog/<file-name>/`), or to
`src/content/mathematics/` for the Mathematics section (`/mathematics/<file-name>/`). Both take the same
frontmatter:

```md
---
title: My post
description: One-line summary, for lists, feeds and social cards
abstract: |                    # optional, the paper's abstract (the description is used without it)
  A paragraph or two. Leave a blank line between paragraphs.
pubDate: 2026-10-01
updatedDate: 2026-10-15        # optional, shown as "revised" under the date and "updated" in lists
tags: [linux]                  # the paper's keywords
msc: [11M06, 40A05]            # optional, Mathematics Subject Classification (MSC 2020)
draft: false                   # true: visible in `pnpm dev` only
---
```

Both are set as papers, in the manner of LaTeX's article class and in the site's type: a title block
centred over the text (title, author, date), the abstract with keywords and subject classification,
numbered sections, indented and justified paragraphs, theorem environments, numbered equations,
tables and figures, and a numbered reference list (see "Writing features"). Lab notes keep the
notebook letterhead and fact sheet; the CV is unaffected.

Tags link to `/tags/<tag>/`. Each article gets a generated social card. Optional fields shared with lab
notes (`toc`, `relatedPosts`, `relatedMath`, `relatedLab`, `series`, `seriesPart`) are described under
"Writing features". The blog is empty for now; its page says so and points to Mathematics.

## Write a lab note

Lab notes are Markdown files in `src/content/lab/`, published at `/lab/<file-name>/`:

```md
---
title: Trying Ghostty as my terminal
description: One-line summary
pubDate: 2026-10-01
category: software        # software | system | hardware | homelab
status: testing           # testing | adopted | dropped
tools: [Ghostty 1.2]
platform: macOS           # optional
verdict: One-line conclusion   # optional, shown on the list
repo: https://github.com/…     # optional
tags: [terminal]               # optional, shared with posts
---
```

Update `status`, `verdict`, and `updatedDate` as the test progresses; the list is sorted by last update,
and the note's category becomes its breadcrumb ("Lab · Software").

## Writing features

Posts and lab notes are Markdown, rendered by Astro's native processor (Sätteri) with the features and
plugins in `src/lib/markdown/`. What renders today:

| Write | You get | Limits |
|---|---|---|
| `## Heading` | A section with an ASCII id (`Sätteri` → `satteri`) and a § link beside it, drawn with the accent bar in the margin. | Only h2 and h3 get a § link. |
| `## Heading {#my-id}` | The heading keeps `my-id`; generated ids never take it. | |
| Four or more `##` sections | A contents row in the fact sheet (a closed disclosure on phones), and "5 sections · 4 listings" under the date. | Only on a long page (250+ words or 4+ listings); set `toc: true` or `toc: false` in the frontmatter to decide (a list needs at least two sections). |
| ```` ```ts title="src/file.ts" ```` | A listing with a file tab, copy button, light and dark themes. Long lines wrap with a hanging indent; copying returns the original line. | Listings break out into the margin column from 48rem. |
| ```` ```ts {3} ```` | Line 3 marked. | |
| ```` ```diff lang="ts" ```` | A diff with `+`/`-` lines highlighted as TypeScript. | |
| ```` ```text frame="terminal" title="Output" ```` | Command output in a terminal frame. | Shell languages (`bash`, `sh`) get a terminal frame on their own. |
| `` `code` `` | Inline code at the text's x-height, never hyphenated. | |
| `$E = mc^2$`, `$$ … $$` | Math rendered to HTML at build time by KaTeX (`src/lib/markdown/katex.ts`); the stylesheet loads only on pages with math. | Two dollar amounts in one paragraph read as math: write `\$5`. |
| `\| a \| b \|` with `\|---\|--:\|` | A table in the booktabs manner (rules above, below and under the head), in a labelled region that scrolls sideways on phones; `--:` right-aligns a column, and figures are tabular. | Wide tables break out into the margin with the listings. |
| `text[^1]` and `[^1]: note` | Numbered notes under a "Notes" label at the end, with ↑ back-links. | |
| `![Alt text](./image.png)` | A responsive image (`srcset`, scaled to the column). | Alt text is required: the build fails without it. Write images inline; reference-style `![Alt][id]` is refused. |
| `![Alt](./image.png "Caption")` | A figure with the title as its caption. | Only for an image alone in its paragraph. |
| `> quoted text` | A quotation, upright, with a quiet rule. | |
| `> [!NOTE]` (also `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`) on the first line of a quotation | A callout with its label in the margin; GitHub previews the same file as an alert. | `:::` directives are not supported (they would eat text such as `localhost:4321`). |
| `Term` then `: definition` on the next line | A definition list, the term in the margin like the fact sheet. | |
| `> [!THEOREM] Euler, 1735` then the statement on `>` lines | **Theorem 1** (Euler, 1735). *Statement in italic.* Also `LEMMA`, `PROPOSITION`, `COROLLARY`, `DEFINITION`, `EXAMPLE` (one numbered sequence), `REMARK`, and `PROOF` (`> [!PROOF] of Theorem 1`), which ends with □. | GitHub shows these as plain quotations. |
| `$$` lines around a formula containing `\label{eq:basel}` | A display numbered (1), (2)… at the right margin; `$\eqref{eq:basel}$` in the text links to it. | Only labelled displays are numbered; an unknown `\eqref` prints (??) and the lint warns. |
| A paragraph `Table: caption` right after a table | The table's caption, numbered "Table 1:" in posts. | |
| `## References` followed by a numbered list | Entries labelled [1], [2]…; `[1]` or `[1, 3]` in the text link to them. | Only numbers the list has are linked. |
| `API`, `CSS`, `URLs` | Acronyms in small caps, as in titles. | Not in code, links or headings. |

Frontmatter can also link articles: `relatedMath: [basel-problem]`, `relatedLab: [astro-7-satteri]` and
`relatedPosts: [...]` add a "related" row to the end block (a misspelled id fails the build), and
`series: Name` with `seriesPart: 2` adds "Name, part 2 of 3" to the fact sheet and the other parts to
the end block; on the same day, a later part lists as the newer one. Tags on every section share one
index at `/tags/`.

`pnpm lint:content` (part of `pnpm build`) checks every file and prints `path:line`: an image without alt
text, a reference-style image, a raw `<img>`, an h1 or a skipped heading level fail the build; a code
line over 110 characters, a dollar amount read as math (`$5 and $6`, `$5-$10`), an `\eqref` without a
`\label` and a `\label` in inline math are warnings.

After changing `astro.config.ts` or anything in `src/lib/markdown/`, clear the content cache:
`rm -rf node_modules/.astro .astro`.

## Test

```bash
pnpm test         # unit tests: Markdown plugins, lint rules, length cue, series (node --test)
pnpm test:e2e     # build with the test fixtures, then the readability harness (Playwright + axe)
pnpm measure      # the same harness, printing every measurement (test-results/metrics.json)
```

The harness measures the articles and two fixture pages: `/dev/kitchen-sink/` uses every construct above,
and `/dev/short-note/` is too short for a contents list. Fixtures live in `src/content/fixtures/` and are
built only by `astro dev` and `pnpm build:fixtures`, never in the production build. `pnpm test:e2e` also
runs the `cls` project: layout shift and math-font timing under a throttled network, local only because
shared CI runners are too noisy for it. `PW_WEBKIT=1` adds a WebKit run of the `@ci` checks (after
`pnpm exec playwright install webkit`).

Lighthouse runs against `lighthouserc.json` (scores of 0.95 and byte budgets):

```bash
pnpm exec astro build && npx @lhci/cli@0.15.1 autorun
```

## CI and deploy

`.github/workflows/check.yml` runs on every pull request, and the deploy workflow calls it, so nothing
reaches GitHub Pages unless it passes:

- types, the CV schema and the content lint;
- the unit tests;
- the font-independent readability checks (`@ci`) on a fixtures build;
- an internal-link check (lychee, offline);
- Lighthouse, as a parallel job.

## Feeds

- `/rss.xml` — everything: posts, mathematics articles titled "Mathematics: …", and lab notes titled
  "Lab: …"
- `/blog/rss.xml` — posts
- `/mathematics/rss.xml` — mathematics articles
- `/lab/rss.xml` — lab notes, with their status
- `/reading/rss.xml` — what I'm reading or have read; advertised once it has an item

## Update the CV

Edit `src/content/cv/resume.json` ([JSON Resume v1.0.0](https://jsonresume.org/schema)). Every build
validates it against the official schema (`pnpm validate:cv`), then publishes:

- `/cv/` — the page, with schema.org `Person` structured data and an A4 print layout (print → PDF)
- `/cv.json` — the file as-is, for JSON Resume tools and themes

Roles that started before 2015 are listed compactly under "Earlier experience" (`EARLIER_BEFORE` in
`src/lib/cv.ts`). Update `meta.lastModified` when you change the content.

- **Talks and workshops** are `projects` entries with `type: "talk"` or `"workshop"` (the JSON Resume
  convention); `entity` is the venue, `translation` an English title, `with` the co-speakers.
- **Publications** use the standard `publications` list; `authors` is the cited author line.
- The print layout is tested: `/cv/` must print to at least three A4 pages.

## Add to the reading list

**From any device:** open a new issue on GitHub → **Reading** template → paste the link, pick a status,
optionally add a rating, tags, and a note. A workflow adds the entry to
`src/content/reading/reading.yaml`, commits it, redeploys the site, and closes the issue.
Submitting the **same link again** updates that entry (e.g. `reading` → `read` sets the finished date).
Only issues opened by the repository owner are processed.

**By hand:** add an entry at the top of `src/content/reading/reading.yaml`:

```yaml
- id: designing-data-intensive-applications
  title: Designing Data-Intensive Applications
  url: https://dataintensive.net/
  author: Martin Kleppmann
  kind: book            # article | book | paper | video
  status: reading       # to-read | reading | read
  addedDate: 2026-10-01
  finishedDate:         # optional, set when read
  rating: 5             # optional, 1–5
  tags: [distributed-systems]
  note: Why it's worth reading.
```

The **Reading** link appears in the site menu once the list has at least one entry.
