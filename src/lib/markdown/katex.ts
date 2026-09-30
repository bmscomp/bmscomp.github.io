import katex from 'katex';

type Node = { type: string; value?: string; children?: Node[] };
type Ctx = { data: Record<string, unknown> };

const LABEL = /\\label\{([^}]+)\}/;
const EQREF = /\\eqref\{([^}]+)\}/g;

/** The id of a labelled equation: `eq:basel` and `basel` both give `eq-basel`. */
export function equationId(key: string) {
  const slug = key
    .trim()
    .toLowerCase()
    .replace(/^eq[:-]/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `eq-${slug}`;
}

/**
 * Sätteri mdast plugin, a factory so each document numbers its own equations. It renders `$inline$`
 * and `$$block$$` math to KaTeX HTML at build time (with `features.math`); math nodes become `html`
 * nodes, so inline math stays inside its paragraph.
 *
 * Numbering works as in LaTeX, though KaTeX has no `\label`: a display containing `\label{key}` is
 * numbered in order, (1), (2)…, at the right margin, and gets the id `eq-key`. `$\eqref{key}$` alone
 * becomes a link to it, and `\eqref{key}` inside a formula prints the number; an unknown key prints
 * (??), as LaTeX does. Unlabelled displays stay unnumbered, like `\[ … \]`.
 *
 * It also sets `hasMath` on the frontmatter Astro returns as `remarkPluginFrontmatter`, so only pages
 * with math link the KaTeX stylesheet.
 */
export function katexPlugin() {
  const numbers = new Map<string, number>();
  const number = (key: string) => numbers.get(key.trim());
  const refs = (tex: string) => tex.replace(EQREF, (_, key: string) => `\\text{(${number(key) ?? '??'})}`);
  return {
    name: 'katex',
    before(root: Node) {
      const walk = (node: Node) => {
        const key = node.type === 'math' ? node.value?.match(LABEL)?.[1]?.trim() : undefined;
        if (key && !numbers.has(key)) numbers.set(key, numbers.size + 1);
        for (const child of node.children ?? []) walk(child);
      };
      walk(root);
    },
    inlineMath(node: Node, ctx: Ctx) {
      markMath(ctx);
      const value = node.value ?? '';
      const only = value.trim().match(/^\\eqref\{([^}]+)\}$/);
      if (only) {
        const n = number(only[1]);
        return {
          type: 'html' as const,
          value: n ? `<a class="eqref" href="#${equationId(only[1])}">(${n})</a>` : '<span class="eqref">(??)</span>',
        };
      }
      // A label only numbers a display (`$$` on lines of their own); inline, it is dropped.
      return { type: 'html' as const, value: render(refs(value.replace(LABEL, '')), false) };
    },
    math(node: Node, ctx: Ctx) {
      markMath(ctx);
      const value = node.value ?? '';
      const key = value.match(LABEL)?.[1];
      const tex = refs(key ? value.replace(LABEL, `\\tag{${number(key)}}`) : value);
      const id = key ? ` id="${equationId(key)}"` : '';
      return { type: 'html' as const, value: `<div class="math-display"${id}>${render(tex, true)}</div>` };
    },
  };
}

function markMath(ctx: Ctx) {
  const astro = ctx.data.astro as { frontmatter?: Record<string, unknown> } | undefined;
  if (astro?.frontmatter) astro.frontmatter.hasMath = true;
}

function render(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, { displayMode, throwOnError: false, output: 'htmlAndMathml' });
}
