import type { HastPluginDefinition } from 'satteri';
import { ACRONYM } from '../typeset.ts';

type Node = { type: string; tagName?: string; value?: string; properties?: { className?: unknown } };

// Code, links and headings keep their own letterforms; math arrives as raw HTML and is never visited.
const SKIP = new Set(['pre', 'code', 'kbd', 'samp', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'script', 'style', 'svg']);

/**
 * Sätteri hast plugin: acronyms in running text ("API", "CSS") are set in small caps, the same way
 * `typeset()` sets them in titles, descriptions and facts (one regex, `ACRONYM`, for both). A plural
 * "s" stays lowercase outside the span.
 */
export function acronyms(): HastPluginDefinition {
  return {
    name: 'acronyms',
    text(node, ctx) {
      const value = (node as unknown as Node).value ?? '';
      if (!/[A-Z]{2}/.test(value)) return;
      for (let p = ctx.parent(node) as Node | undefined; p && p.type !== 'root'; p = ctx.parent(p as never) as Node) {
        const classes = Array.isArray(p.properties?.className) ? p.properties.className : [];
        if (p.type === 'element' && (SKIP.has(p.tagName!) || classes.includes('sc'))) return;
      }
      const parts: unknown[] = [];
      let last = 0;
      for (const m of value.matchAll(ACRONYM)) {
        if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
        parts.push({ type: 'element', tagName: 'span', properties: { className: ['sc'] }, children: [{ type: 'text', value: m[1] }] });
        last = m.index + m[1].length;
      }
      if (!parts.length) return;
      if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
      ctx.replaceNode(node, parts as never);
    },
  };
}
