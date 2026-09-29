// Markdown pipeline for articles: Sätteri features and the native plugins Astro runs on every entry.
import type { Features } from 'satteri';
import { headingAnchors } from './heading-anchors.ts';
import { katexPlugin } from './katex.ts';

export const features: Features = {
  math: true,
  smartPunctuation: true,
  headingAttributes: true,
};

export const mdastPlugins = [katexPlugin];

// A factory, so each document gets its own slugger.
export const hastPlugins = [() => headingAnchors()];
