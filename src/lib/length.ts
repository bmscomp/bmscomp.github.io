import { markdownToMdast } from 'satteri';
import { features } from './markdown/index.ts';

/**
 * Length of an article, measured on the Markdown tree Sätteri parses (so listings inside callouts or
 * nested lists count). Only running text counts as words: code, math, HTML, images, link definitions
 * and bare URLs are left out.
 */

type Node = { type: string; value?: string; url?: string; children?: Node[] };

const SKIP = new Set(['code', 'inlineCode', 'math', 'inlineMath', 'html', 'yaml', 'toml', 'image', 'imageReference', 'definition']);
// Inline containers: their text runs on into the surrounding words ("Sät**teri**" is one word).
const INLINE = new Set(['emphasis', 'strong', 'delete', 'link', 'linkReference']);
const WORD = /[\p{L}\p{N}]+(?:['’.\-][\p{L}\p{N}]+)*/gu;

export function measureLength(markdown: string) {
  let listings = 0;
  let text = '';
  const walk = (node: Node) => {
    if (node.type === 'code') listings++;
    if (SKIP.has(node.type)) return;
    // A bare URL is a link whose only text is the URL itself.
    if (node.type === 'link' && node.children?.length === 1 && node.children[0].value === node.url) return;
    if (node.type === 'text') text += node.value ?? '';
    for (const child of node.children ?? []) walk(child);
    if (!INLINE.has(node.type) && node.type !== 'text') text += ' ';
  };
  walk(markdownToMdast(markdown, { features, position: false }) as Node);
  return { words: text.match(WORD)?.length ?? 0, listings };
}

export const countWords = (markdown: string) => measureLength(markdown).words;
export const countListings = (markdown: string) => measureLength(markdown).listings;

/** Minutes at 230 words a minute. Listings are read, not skimmed: each adds half a minute. */
export function readingMinutes(words: number, listings = 0) {
  return Math.max(1, Math.round(words / 230 + listings * 0.5));
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

/**
 * The length cue shown under the date: sections and listings, and minutes once an article is long
 * enough for them to mean something (five or more).
 */
export function lengthParts({ sections, listings, minutes }: { sections: number; listings: number; minutes: number }) {
  return [
    sections > 1 && plural(sections, 'section'),
    listings > 0 && plural(listings, 'listing'),
    minutes >= 5 && `${minutes} min`,
  ].filter((part): part is string => Boolean(part));
}
