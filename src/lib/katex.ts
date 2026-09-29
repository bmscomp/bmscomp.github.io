import katex from 'katex';

/**
 * Sätteri mdast plugin: renders `$inline$` and `$$block$$` math to KaTeX HTML at build time.
 * Requires `features.math` on the Sätteri processor and the KaTeX stylesheet on the page.
 * Math nodes are replaced by `html` nodes so inline math stays inside its paragraph.
 */
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
