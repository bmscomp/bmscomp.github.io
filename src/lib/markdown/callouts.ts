/**
 * Sätteri mdast plugin, a factory so each document numbers its own theorems. Two kinds of block are
 * written as a quotation whose first line is a marker:
 *
 * - GitHub alerts, `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]` (alone on the
 *   line), render as `aside.callout.callout-{type}` (role=note) with a label, so the same file
 *   previews on GitHub.
 * - Mathematical environments, as in LaTeX's amsthm: `[!THEOREM]`, `[!LEMMA]`, `[!PROPOSITION]`,
 *   `[!COROLLARY]`, `[!DEFINITION]`, `[!EXAMPLE]` (numbered in one sequence), `[!REMARK]` and
 *   `[!PROOF]`. Text after the marker is the optional note: `> [!THEOREM] Euler, 1735` reads
 *   "Theorem 1 (Euler, 1735)."; `> [!PROOF] of Theorem 1` reads "Proof of Theorem 1.". They render as
 *   `div.env.env-{type}` with a run-in label, and numbered ones get the id `{type}-{n}`.
 *
 * Sätteri's `directive` feature stays off: without a handler it deletes text like "localhost:4321".
 */
const ALERTS: Record<string, string> = {
  note: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
};
const ENVIRONMENTS: Record<string, { label: string; numbered: boolean }> = {
  theorem: { label: 'Theorem', numbered: true },
  lemma: { label: 'Lemma', numbered: true },
  proposition: { label: 'Proposition', numbered: true },
  corollary: { label: 'Corollary', numbered: true },
  definition: { label: 'Definition', numbered: true },
  example: { label: 'Example', numbered: true },
  remark: { label: 'Remark', numbered: false },
  proof: { label: 'Proof', numbered: false },
};
const MARKER = /^\[!([a-z]+)\][ \t]*([^\r\n]*?)[ \t]*(?:\r?\n|$)/i;

type Node = { type: string; value?: string; children?: Node[] };
type Ctx = {
  setProperty(node: Node, key: string, value: unknown): void;
  removeNode(node: Node): void;
  insertChildAt(node: Node, index: number, child: unknown): void;
};

const text = (value: string) => ({ type: 'text', value });

export function calloutsPlugin() {
  let count = 0;
  return {
    name: 'callouts',
    blockquote(node: Node, ctx: Ctx) {
      const first = node.children?.[0];
      const lead = first?.type === 'paragraph' ? first.children?.[0] : undefined;
      const match = lead?.type === 'text' ? lead.value?.match(MARKER) : null;
      if (!first || !lead || !match) return;
      const type = match[1].toLowerCase();
      const note = match[2];
      const alert = ALERTS[type];
      const env = ENVIRONMENTS[type];
      // GitHub only reads an alert marker alone on its line; anything else stays a quotation.
      if (!env && (!alert || note)) return;

      // Drop the marker (and a hard break after it); drop the paragraph if nothing else is in it.
      const rest = lead.value!.slice(match[0].length);
      const next = first.children?.[1];
      const breakAfter = !rest && next?.type === 'break';
      const others = (first.children?.length ?? 0) - 1 - (breakAfter ? 1 : 0);
      const keepsFirst = Boolean(rest) || others > 0;
      if (keepsFirst) {
        ctx.setProperty(lead, 'value', rest);
        if (breakAfter) ctx.removeNode(next);
      } else ctx.removeNode(first);

      if (alert) {
        ctx.setProperty(node, 'data', {
          hName: 'aside',
          hProperties: { className: ['callout', `callout-${type}`], role: 'note' },
        });
        ctx.insertChildAt(node, 0, {
          type: 'paragraph',
          data: { hProperties: { className: ['callout-label'] } },
          children: [text(alert)],
        });
        return;
      }

      const n = env.numbered ? ++count : 0;
      const plain = type === 'proof' || type === 'remark';
      const label = type === 'proof' && note ? `Proof ${note}` : n ? `${env.label} ${n}` : env.label;
      const labelNode = {
        type: plain ? 'emphasis' : 'strong',
        data: { hProperties: { className: ['env-label'] } },
        children: [text(label)],
      };
      const run = [
        labelNode,
        ...(note && type !== 'proof'
          ? [text(' '), { type: 'emphasis', data: { hName: 'span', hProperties: { className: ['env-note'] } }, children: [text(`(${note})`)] }]
          : []),
        text('. '),
      ];
      ctx.setProperty(node, 'data', {
        hName: 'div',
        hProperties: { className: ['env', `env-${type}`], ...(n ? { id: `${type}-${n}` } : {}) },
      });
      // The label runs into the first paragraph, or stands alone before a display.
      const target = keepsFirst ? first : node.children?.[1];
      if (target?.type === 'paragraph') ctx.insertChildAt(target, 0, run);
      else ctx.insertChildAt(node, 0, { type: 'paragraph', children: run });
    },
  };
}
