import katex from 'katex';

/**
 * Sätteri mdast plugin: renders `$inline$` and `$$block$$` math to KaTeX HTML at build time.
 * Requires `features.math` on the Sätteri processor. Math nodes are replaced by `html` nodes so inline
 * math stays inside its paragraph. It also sets `hasMath` on the frontmatter Astro returns as
 * `remarkPluginFrontmatter`, so only pages with math link the KaTeX stylesheet.
 */
export const katexPlugin = {
  name: 'katex',
  inlineMath(node: { value: string }, ctx: { data: Record<string, unknown> }) {
    markMath(ctx);
    return { type: 'html' as const, value: render(node.value, false) };
  },
  math(node: { value: string }, ctx: { data: Record<string, unknown> }) {
    markMath(ctx);
    return { type: 'html' as const, value: `<div class="math-display">${render(node.value, true)}</div>` };
  },
};

function markMath(ctx: { data: Record<string, unknown> }) {
  const astro = ctx.data.astro as { frontmatter?: Record<string, unknown> } | undefined;
  if (astro?.frontmatter) astro.frontmatter.hasMath = true;
}

function render(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, { displayMode, throwOnError: false, output: 'htmlAndMathml' });
}
