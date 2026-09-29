/** An article as a series sees it. Posts and lab notes (src/lib/articles.ts) both fit. */
export interface SeriesMember {
  id: string;
  href: string;
  title: string;
  series?: string;
  seriesPart?: number;
}

/**
 * Where an article sits in its series: the parts sharing its series name, ordered by part number.
 * Articles are matched by URL (ids repeat across collections). The total is the highest part number,
 * so every part states the same total even while a part in between is unpublished.
 */
export function seriesPosition(all: SeriesMember[], current: SeriesMember) {
  if (!current.series || !current.seriesPart) return undefined;
  const parts = all.filter((a) => a.series === current.series && a.seriesPart);
  if (!parts.some((a) => a.href === current.href)) parts.push(current);
  parts.sort((a, b) => a.seriesPart! - b.seriesPart! || a.href.localeCompare(b.href));
  const total = Math.max(parts.length, ...parts.map((p) => p.seriesPart!));
  return { name: current.series, part: current.seriesPart, total, parts };
}
