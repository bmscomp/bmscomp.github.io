import { type CollectionEntry, getCollection } from 'astro:content';

export type MathArticle = CollectionEntry<'mathematics'>;

/**
 * Published mathematics articles, newest first. On the same day a later part of a series counts as
 * newer, so "next" leads from Part 1 to Part 2; then by id. Drafts only in `astro dev`.
 */
export async function getMathArticles() {
  const articles = await getCollection('mathematics', ({ data }) => import.meta.env.DEV || !data.draft);
  return articles.sort(
    (a, b) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf() ||
      (b.data.seriesPart ?? 0) - (a.data.seriesPart ?? 0) ||
      a.id.localeCompare(b.id),
  );
}
