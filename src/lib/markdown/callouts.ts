/**
 * Sätteri mdast plugin: GitHub alerts become callouts. A quotation whose first line is exactly
 * `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` or `[!CAUTION]` renders as
 * `aside.callout.callout-{type}` (role=note) with a label, so the same file previews on GitHub.
 * Sätteri's `directive` feature stays off: without a handler it deletes text like "localhost:4321".
 */
const LABELS: Record<string, string> = {
  note: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
};
const MARKER = /^\[!(note|tip|important|warning|caution)\][ \t]*(?:\n|$)/i;

type Node = { type: string; value?: string; children?: Node[] };
type Ctx = {
  setProperty(node: Node, key: string, value: unknown): void;
  removeNode(node: Node): void;
  insertChildAt(node: Node, index: number, child: unknown): void;
};

export const calloutsPlugin = {
  name: 'callouts',
  blockquote(node: Node, ctx: Ctx) {
    const first = node.children?.[0];
    const text = first?.type === 'paragraph' ? first.children?.[0] : undefined;
    const match = text?.type === 'text' ? text.value?.match(MARKER) : null;
    if (!first || !text || !match) return;
    const type = match[1].toLowerCase();
    ctx.setProperty(node, 'data', {
      hName: 'aside',
      hProperties: { className: ['callout', `callout-${type}`], role: 'note' },
    });
    const rest = text.value!.slice(match[0].length);
    if (rest || (first.children?.length ?? 0) > 1) ctx.setProperty(text, 'value', rest);
    else ctx.removeNode(first);
    ctx.insertChildAt(node, 0, {
      type: 'paragraph',
      data: { hProperties: { className: ['callout-label'] } },
      children: [{ type: 'text', value: LABELS[type] }],
    });
  },
};
