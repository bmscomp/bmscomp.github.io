// Markdown pipeline for articles: Sätteri features and the native plugins Astro runs on every entry.
// Each plugin has a test next to it (`pnpm test`).
import type { Features } from 'satteri';
import { acronyms } from './acronyms.ts';
import { calloutsPlugin } from './callouts.ts';
import { citations } from './citations.ts';
import { figures } from './figures.ts';
import { headingAnchors } from './heading-anchors.ts';
import { katexPlugin } from './katex.ts';
import { tables } from './tables.ts';

export const features: Features = {
  math: true,
  smartPunctuation: true,
  headingAttributes: true,
  definitionList: true,
  // W7.2: a visible "Notes" label; ↩ is not in the font subset, ↑ is.
  gfm: { footnotes: { label: 'Notes', backContent: '↑' } },
};

// Factories, so each document gets fresh state: its own equation, theorem and table numbers, and one
// slugger for its heading ids. Citations run after heading-anchors, which wraps the References heading.
export const mdastPlugins = [katexPlugin, calloutsPlugin];

export const hastPlugins = [() => headingAnchors(), () => tables(), () => figures(), () => citations(), () => acronyms()];
