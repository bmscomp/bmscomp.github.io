import type { HastPluginDefinition } from 'satteri';

type Node = { type: string; tagName?: string; value?: string; children?: Node[] };

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

/**
 * Sätteri hast plugin: every table sits in `div.table-scroll`, a labelled, focusable region that
 * scrolls sideways when the table is wider than the page, and breaks out into the margin with the
 * listings. The label names the columns, so a screen reader announces what the region holds.
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
        const head = table.children?.find((c) => c.tagName === 'thead');
        const row = head?.children?.find((c) => c.tagName === 'tr');
        const columns = (row?.children ?? []).filter((c) => c.tagName === 'th').map((c) => text(c).replace(/\s+/g, ' ').trim());
        const label = columns.some(Boolean) ? `Table ${count}: ${columns.join(', ')}` : `Table ${count}`;
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
