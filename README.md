# bmscomp.github.io

Personal site of Said Boudjelda — built with [Astro](https://astro.build), deployed to GitHub Pages
on every push to `main`. See [PLAN.md](PLAN.md) for the roadmap.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321 (drafts visible)
pnpm build      # type-check + static build into dist/
```

## Write a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL (`/blog/<file-name>/`).

```md
---
title: My post
description: One-line summary
pubDate: 2026-10-01
tags: [linux]
draft: false
---
```

Tags link to `/tags/<tag>/`. Each post gets a generated social card at `/og/<file-name>.png`.

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
---
```

Update `status`, `verdict`, and `updatedDate` as the test progresses; the list is sorted by last update.

## Update the CV

Edit `src/content/cv/resume.json` ([JSON Resume v1.0.0](https://jsonresume.org/schema)). Every build
validates it against the official schema (`pnpm validate:cv`), then publishes:

- `/cv/` — the page, with schema.org `Person` structured data and an A4 print layout (print → PDF)
- `/cv.json` — the file as-is, for JSON Resume tools and themes

Roles that started before 2015 are listed compactly under "Earlier experience" (`EARLIER_BEFORE` in
`src/lib/cv.ts`). Update `meta.lastModified` when you change the content.

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

### Code

Fenced code blocks are rendered by [Expressive Code](https://expressive-code.com): copy button,
light/dark themes, and optional titles and line markers — ```` ```ts title="file.ts" {3} ````.

### Math

LaTeX math is rendered to HTML at build time with KaTeX: `$inline$` or a `$$ … $$` block.
Math is parsed by Astro's native Markdown processor (Sätteri) and rendered by `src/lib/katex.ts`.

> If a Markdown change doesn't show up after editing `astro.config.ts` or `src/lib/`, clear the
> content cache: `rm -rf node_modules/.astro .astro`.
