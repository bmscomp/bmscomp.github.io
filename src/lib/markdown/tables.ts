import type { HastPluginDefinition } from 'satteri';

type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

// Text for a label: text nodes, and for raw HTML (KaTeX) only its TeX annotation, never markup.
const text = (node: Node): string => {
  if (node.type === 'text') return node.value ?? '';
  if (node.tagName === 'br') return ' ';
  if (node.type === 'raw') {
    if (/^<br\s*\/?>$/i.test(node.value ?? '')) return ' ';
    return node.value?.match(/<annotation encoding="application\/x-tex">([^<]*)<\/annotation>/)?.[1] ?? '';
  }
  return (node.children ?? []).map(text).join('');
};

// A plain copy of phrasing content, to move a caption paragraph into the table.
const copy = (node: Node): Node => ({
  type: node.type,
  ...(node.tagName && { tagName: node.tagName }),
  ...(node.value !== undefined && { value: node.value }),
  ...(node.type === 'element' && { properties: { ...node.properties } }),
  ...(node.children && { children: node.children.map(copy) }),
});

const CAPTION = /^\s*Table:\s*/;

/**
 * Sätteri hast plugin: every table sits in `div.table-scroll`, a labelled, focusable region that
 * scrolls sideways when the table is wider than the page, and breaks out into the margin with the
 * listings.
 *
 * A paragraph right after a table that starts with "Table:" becomes its caption, as in Pandoc:
 *
 *     | N | S_N |
 *     |--:|--:|
 *     | 10 | 1.5498 |
 *
 *     Table: Partial sums of the series.
 *
 * The region is labelled by the caption, or else by its column heads, so a screen reader announces
 * what it holds.
 */
export function tables(): HastPluginDefinition {
  let count = 0;
  return {
    name: 'tables',
    element: {
      filter: ['table'],
      visit(node, ctx) {
        count++;
        const table = node as unknown as Node;

        // The caption paragraph: the next element sibling, if it starts with "Table:".
        const parent = ctx.parent(node) as unknown as Node | undefined;
        const siblings = parent?.children ?? [];
        const next = siblings.slice((ctx.indexOf(node) ?? siblings.length) + 1).find((c) => c.type !== 'text' || c.value?.trim());
        const lead = next?.tagName === 'p' ? next.children?.[0] : undefined;
        let caption = '';
        if (next && lead?.type === 'text' && CAPTION.test(lead.value ?? '')) {
          const children = next.children!.map(copy);
          children[0] = { type: 'text', value: lead.value!.replace(CAPTION, '') };
          caption = children.map(text).join('').replace(/\s+/g, ' ').trim();
          ctx.prependChild(node, { type: 'element', tagName: 'caption', properties: {}, children } as never);
          ctx.removeNode(next as never);
        }

        const head = table.children?.find((c) => c.tagName === 'thead');
        const row = head?.children?.find((c) => c.tagName === 'tr');
        const columns = (row?.children ?? []).filter((c) => c.tagName === 'th').map((c) => text(c).replace(/\s+/g, ' ').trim());
        const label = caption
          ? `Table ${count}: ${caption}`
          : columns.some(Boolean)
            ? `Table ${count}: ${columns.join(', ')}`
            : `Table ${count}`;
        ctx.wrapNode(node, {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'], role: 'region', tabIndex: 0, ariaLabel: label },
          children: [],
        });
      },
    },
  };
}
