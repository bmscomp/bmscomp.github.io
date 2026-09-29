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
