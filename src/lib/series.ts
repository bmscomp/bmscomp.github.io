/** An article as a series sees it. Posts and lab notes (src/lib/articles.ts) both fit. */
export interface SeriesMember {
  id: string;
  href: string;
  title: string;
  series?: string;
  seriesPart?: number;
}

/** Where an article sits in its series: the parts sharing its series name, ordered by part number. */
export function seriesPosition(all: SeriesMember[], current: SeriesMember) {
  if (!current.series || !current.seriesPart) return undefined;
  const parts = all.filter((a) => a.series === current.series && a.seriesPart);
  if (!parts.some((a) => a.id === current.id)) parts.push(current);
  parts.sort((a, b) => a.seriesPart! - b.seriesPart! || a.id.localeCompare(b.id));
  return { name: current.series, part: current.seriesPart, total: Math.max(parts.length, current.seriesPart), parts };
}
