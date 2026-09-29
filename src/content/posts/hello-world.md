---
title: Hello, world — a new home
description: The site is rebuilt from scratch with Astro. Here's what's coming.
pubDate: 2026-09-29
tags: [meta, astro]
relatedLab: [astro-7-satteri]
---

This site has been rebuilt from scratch. Posts are plain **Markdown** files in
`src/content/posts/`, rendered by [Astro](https://astro.build) and deployed to GitHub Pages
on every push to `main`.

## What's coming

- A short [**CV**](/cv/)
- [**Lab**](/lab/) notes on the software and systems I'm testing
- A **reading** list of articles I find worth sharing
- **Travel** stories, and later my favourite phone shots

## Writing a post

Create `src/content/posts/my-post.md`:

```md
---
title: My post
description: One-line summary
pubDate: 2026-10-01
tags: [linux]
---

Content in Markdown.
```

Set `draft: true` to keep it out of the published site while still seeing it in `pnpm dev`.

## Code

Code blocks get syntax highlighting, a copy button, and optional titles and line markers:

```bash title="Run the site locally"
pnpm install
pnpm dev
```

```ts title="src/lib/posts.ts" {3}
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
```

## Math

LaTeX math is rendered at build time with KaTeX. Inline, like $E = mc^2$, or as a block:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$
