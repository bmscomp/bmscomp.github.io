import type { HastPluginDefinition } from 'satteri';

type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

const TITLES = new Set(['references', 'bibliography']);
// "[1]", "[1, 3]" or "[2–4]": numbers, commas and ranges inside brackets.
const CITATION = /\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g;
const SKIP = new Set(['pre', 'code', 'kbd', 'samp', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'script', 'style', 'svg']);

const text = (node: Node): string => node.value ?? (node.children ?? []).map(text).join('');
const classes = (node: Node) => (Array.isArray(node.properties?.className) ? (node.properties.className as string[]) : []);

/**
 * Sätteri hast plugin: a numbered reference list, as in a paper. The ordered list right after a
 * "References" (or "Bibliography") heading gets the class `references` and ids `ref-1`, `ref-2`…;
 * citations in the text, `[1]` or `[1, 3]`, become links to those entries. Only numbers the list has
 * are linked, and nothing inside code, links or headings. It runs after heading-anchors, which wraps
 * the heading in `div.section-head`.
 */
export function citations(): HastPluginDefinition {
  let entries = 0;
  return {
    name: 'citations',
    before(root, ctx) {
      const top = (root as unknown as Node).children ?? [];
      const elements = top.filter((n) => n.type === 'element');
      const at = elements.findIndex((n) => {
        const heading = n.tagName === 'div' && classes(n).includes('section-head') ? n.children?.find((c) => c.tagName === 'h2') : n;
        return heading?.tagName === 'h2' && TITLES.has(text(heading).trim().toLowerCase());
      });
      const list = at >= 0 ? elements[at + 1] : undefined;
      if (list?.tagName !== 'ol') return;
      ctx.setProperty(list as never, 'className', [...classes(list), 'references']);
      for (const item of (list.children ?? []).filter((c) => c.tagName === 'li')) {
        ctx.setProperty(item as never, 'id', `ref-${++entries}`);
      }
    },
    text(node, ctx) {
      const value = (node as unknown as Node).value ?? '';
      if (!entries || !/\[\d/.test(value)) return;
      for (let p = ctx.parent(node) as Node | undefined; p && p.type !== 'root'; p = ctx.parent(p as never) as Node) {
        if (p.type === 'element' && (SKIP.has(p.tagName!) || classes(p).includes('references'))) return;
      }
      const parts: unknown[] = [];
      let last = 0;
      for (const m of value.matchAll(CITATION)) {
        const numbers = m[1].split(/[,–-]/).map((n) => Number(n.trim()));
        if (numbers.some((n) => n < 1 || n > entries)) continue;
        if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
        parts.push({ type: 'text', value: '[' });
        // Link each number; keep the separators as written.
        const pieces = m[1].split(/(\s*[,–-]\s*)/);
        for (const piece of pieces) {
          if (/^\d+$/.test(piece)) {
            parts.push({
              type: 'element',
              tagName: 'a',
              properties: { className: ['cite'], href: `#ref-${piece}` },
              children: [{ type: 'text', value: piece }],
            });
          } else if (piece) parts.push({ type: 'text', value: piece });
        }
        parts.push({ type: 'text', value: ']' });
        last = m.index + m[0].length;
      }
      if (!parts.length) return;
      if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
      ctx.replaceNode(node, parts as never);
    },
  };
}
