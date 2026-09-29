/**
 * Length of an article, measured on its Markdown source. Only running text counts as words: code
 * blocks, inline code, math, HTML, URLs and link targets are left out, and image alt text too.
 */

const FENCE = /^ {0,3}(`{3,}|~{3,})/;

/** The body split into prose and fenced code blocks. */
function split(markdown: string) {
  const prose: string[] = [];
  let listings = 0;
  let fence: string | null = null;
  for (const line of markdown.split('\n')) {
    const open = line.match(FENCE)?.[1];
    if (fence) {
      if (open && open[0] === fence[0] && open.length >= fence.length && !line.trim().slice(open.length).trim()) fence = null;
      continue;
    }
    if (open) {
      fence = open;
      listings++;
      continue;
    }
    prose.push(line);
  }
  return { prose: prose.join('\n'), listings };
}

export function countListings(markdown: string) {
  return split(markdown).listings;
}

export function countWords(markdown: string) {
  const text = split(markdown)
    .prose.replace(/\$\$[\s\S]*?\$\$/g, ' ') // display math
    .replace(/(^|[^\\$])\$(?=\S)([^$\n]*?\S)\$(?!\d)/g, '$1 ') // inline math
    .replace(/(`+)[\s\S]*?\1/g, ' ') // inline code
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<\/?[a-z][^>]*>/gi, ' ') // HTML tags (their text stays)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // inline links keep their text
    .replace(/^\s*\[[^\]]+\]:\s+\S+.*$/gm, ' ') // link reference definitions
    .replace(/\[\^[^\]]+\]:?/g, ' ') // footnote markers
    .replace(/\bhttps?:\/\/\S+/g, ' ');
  return text.match(/[\p{L}\p{N}]+(?:['’.\-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

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
