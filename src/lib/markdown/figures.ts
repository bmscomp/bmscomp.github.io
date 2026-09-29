import type { HastPluginDefinition } from 'satteri';

type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

/**
 * Sätteri hast plugin: an image alone in its paragraph, with a title, becomes a figure whose caption
 * is the title (`![Alt](./a.png "Caption")`). The title attribute is dropped, so the caption is not
 * also a tooltip. Untitled and linked images are left alone. It runs before Astro's image plugin,
 * which then optimizes the image as usual.
 */
export function figures(): HastPluginDefinition {
  return {
    name: 'figures',
    element: {
      filter: ['p'],
      visit(node, ctx) {
        const kids = ((node as unknown as Node).children ?? []).filter((c) => !(c.type === 'text' && !c.value?.trim()));
        const [img] = kids;
        if (kids.length !== 1 || img.type !== 'element' || img.tagName !== 'img') return;
        const { title, ...properties } = img.properties ?? {};
        if (typeof title !== 'string' || !title.trim()) return;
        ctx.replaceNode(node, {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: [
            { type: 'element', tagName: 'img', properties, children: [] },
            { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: title.trim() }] },
          ],
        } as never);
      },
    },
  };
}
