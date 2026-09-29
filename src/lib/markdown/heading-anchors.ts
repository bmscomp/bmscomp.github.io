import GithubSlugger from 'github-slugger';
import type { HastPluginDefinition, HastVisitorContext } from 'satteri';

type Element = Parameters<NonNullable<HastVisitorContext['textContent']>>[0] & {
  type: 'element';
  tagName: string;
  properties?: Record<string, unknown>;
  children?: unknown[];
};

/**
 * ASCII id for a heading: accents are folded ("Sätteri" → "satteri") and anything else outside
 * ASCII is dropped, so every id reads the same in a URL as on the page.
 */
export function asciiSlug(slugger: GithubSlugger, text: string) {
  const folded = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x20-\x7e]/g, '');
  return slugger.slug(/[a-z0-9]/i.test(folded) ? folded : 'section');
}

/**
 * Sätteri hast plugin: section marks. Every heading gets an ASCII id from one slugger per document;
 * `{#custom}` ids (the `headingAttributes` feature) are kept and reserved first, so no generated id
 * can take them. h2 and h3 are wrapped in `div.section-head` with a sibling `a.anchor` — a link to the
 * section that CSS draws as `§` and, in the margin, as the accent bar. The anchor is a sibling rather
 * than a child, so heading text (and Astro's `headings`) never contains the mark.
 *
 * It runs before Astro's own heading-ids plugin, which keeps an existing id.
 */
export function headingAnchors(): HastPluginDefinition {
  const slugger = new GithubSlugger();
  return {
    name: 'heading-anchors',
    before(root) {
      const walk = (node: { type: string; tagName?: string; properties?: Record<string, unknown>; children?: unknown[] }) => {
        if (node.type === 'element' && /^h[1-6]$/.test(node.tagName ?? '') && typeof node.properties?.id === 'string') {
          slugger.slug(node.properties.id);
        }
        for (const child of node.children ?? []) walk(child as typeof node);
      };
      walk(root as unknown as Parameters<typeof walk>[0]);
    },
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      visit(node, ctx) {
        const heading = node as unknown as Element;
        const text = ctx.textContent(node).trim();
        const custom = heading.properties?.id;
        const id = typeof custom === 'string' ? custom : asciiSlug(slugger, text);
        if (typeof custom !== 'string') ctx.setProperty(node, 'id', id);
        // The footnotes label is a label, not a section.
        if (heading.tagName !== 'h2' && heading.tagName !== 'h3') return;
        if (id === 'footnote-label') return;
        ctx.wrapNode(node, {
          type: 'element',
          tagName: 'div',
          properties: { className: ['section-head'] },
          children: [
            {
              type: 'element',
              tagName: 'a',
              properties: { className: ['anchor'], href: `#${id}`, ariaLabel: `Link to section: ${text}` },
              children: [],
            },
          ],
        });
      },
    },
  };
}
