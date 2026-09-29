// Markdown pipeline for articles: Sätteri features and the native plugins Astro runs on every entry.
// Each plugin has a test next to it (`pnpm test`).
import type { Features } from 'satteri';
import { acronyms } from './acronyms.ts';
import { calloutsPlugin } from './callouts.ts';
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

export const mdastPlugins = [katexPlugin, calloutsPlugin];

// Factories, so each document gets fresh state (one slugger, one table count).
export const hastPlugins = [() => headingAnchors(), () => tables(), () => figures(), () => acronyms()];
