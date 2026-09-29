---
title: Astro 7 and Sätteri — Markdown without remark
description: Rebuilding this site on Astro 7, what changed with its new Rust Markdown pipeline, and how I got LaTeX math working natively.
pubDate: 2026-09-29
category: software
status: adopted
tools: [Astro 7.3, Sätteri, KaTeX, Expressive Code, Tailwind CSS 4]
tags: [astro, markdown, math]
relatedPosts: [hello-world]
relatedLab: [pnpm-12-typescript-7]
platform: macOS · Node 26
repo: https://github.com/bmscomp/bmscomp.github.io
verdict: Adopted — fast builds and a clean plugin API, but remark/rehype plugins need porting or the legacy processor.
---

This site was rebuilt from scratch on **Astro 7**, which ships a new default Markdown processor,
**Sätteri**, written in Rust. Most things just worked; math did not, at first.

## Setup

- Static output, content collections with the `glob()` loader and Zod schemas
- Tailwind CSS 4 through its Vite plugin, `astro-expressive-code` for code blocks
- Build time for the first version: **4 pages in ~0.5 s**; with generated social images, 7 pages in ~1.8 s

## What broke: remark and rehype plugins

The classic recipe for math — `remark-math` + `rehype-katex` in `markdown.remarkPlugins` — fails the build.
Astro explains that these options run on the `unified` processor from `@astrojs/markdown-remark`, which is
no longer installed by default now that Sätteri is the default. Two ways out:

1. Install `@astrojs/markdown-remark` and pass `processor: unified({ remarkPlugins, rehypePlugins })` — the old pipeline.
2. Stay on Sätteri and write a small native plugin.

I went with option 2.

## Math with a native Sätteri plugin

Sätteri already *parses* math; it's just off by default. With `features: { math: true }`, `$…$` becomes
an `inlineMath` node and `$$…$$` a `math` node — rendered as `<code class="language-math">` if nothing
handles them. A plugin replaces them with KaTeX output:

```ts title="src/lib/katex.ts"
import katex from 'katex';

export const katexPlugin = {
  name: 'katex',
  inlineMath(node: { value: string }) {
    return { type: 'html' as const, value: render(node.value, false) };
  },
  math(node: { value: string }) {
    return { type: 'html' as const, value: `<div class="math-display">${render(node.value, true)}</div>` };
  },
};

function render(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, { displayMode, throwOnError: false, output: 'htmlAndMathml' });
}
```

```ts title="astro.config.ts"
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  markdown: {
    processor: satteri({ features: { math: true }, mdastPlugins: [katexPlugin] }),
  },
});
```

Result: $e^{i\pi} + 1 = 0$ rendered at build time, with no JavaScript sent to the browser.

## Two gotchas

**`raw` vs `html` nodes.** Sätteri's docs suggest returning `{ raw, mdxExpressions: false }` for generated
HTML. But `raw` is re-parsed *as Markdown*, so inline math came out wrapped in its own `<p>` and broke the
sentence in two. Returning an mdast `html` node keeps it inline:

```diff lang="ts"
- return { raw: render(node.value, false), mdxExpressions: false };
+ return { type: 'html' as const, value: render(node.value, false) };
```

**The content cache.** After changing the plugin, the page didn't change — Astro's content layer had cached
the rendered Markdown because the `.md` file itself hadn't changed. Clearing it fixed it:

```bash
rm -rf node_modules/.astro .astro
```

CI always builds from a clean checkout, so this only bites locally.

## Verdict

**Adopted.** Builds are fast and the plugin API is small and pleasant. The cost is the ecosystem: any
remark/rehype plugin has to be ported or run through the legacy `unified()` processor.
`astro-expressive-code` already works with Astro 7 out of the box.
