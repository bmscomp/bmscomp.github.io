const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

/** An acronym: two or more capitals, then an optional plural "s" (group 2) that stays lowercase. */
export const ACRONYM = /\b([A-Z]{2,})(s?)\b/g;

/**
 * Plain text → typeset HTML: curly apostrophes, en dashes for spaced hyphens, a narrow no-break space
 * before French high punctuation (" :" → " :"), acronyms (two or more capitals, optional plural "s")
 * wrapped in `.sc` so they render as small caps, and hyphenated identifiers kept on one line.
 */
export function typeset(text: string) {
  return text
    .replace(/[&<>"]/g, (c) => ESCAPES[c])
    .replace(/(\w)'(\w)/g, '$1’$2')
    .replace(/ - /g, ' – ')
    .replace(/ ([:;!?])/g, '\u202f$1')
    .replace(/\b([A-Z])\. (?=[A-Z])/g, '$1.\u00a0')
    .replace(ACRONYM, '<span class="sc">$1</span>$2')
    // Keep identifiers such as KAFKA-15000 or UTF-8 on one line.
    .replace(/(<span class="sc">[A-Z]+<\/span>|\b[A-Za-z]+)-(\d+)\b/g, '<span class="nowrap">$1-$2</span>');
}
