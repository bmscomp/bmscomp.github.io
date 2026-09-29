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

### Code

Fenced code blocks are rendered by [Expressive Code](https://expressive-code.com): copy button,
light/dark themes, and optional titles and line markers — ```` ```ts title="file.ts" {3} ````.

### Math

LaTeX math is rendered to HTML at build time with KaTeX: `$inline$` or a `$$ … $$` block.
Math is parsed by Astro's native Markdown processor (Sätteri) and rendered by `src/lib/katex.ts`.

> If a Markdown change doesn't show up after editing `astro.config.ts` or `src/lib/`, clear the
> content cache: `rm -rf node_modules/.astro .astro`.
