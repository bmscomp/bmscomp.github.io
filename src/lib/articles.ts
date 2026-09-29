import { getLabNotes, type LabNote } from './lab';
import { getPosts, type Post } from './posts';

/** A post or a lab note, as lists and tag pages show it. */
export interface Article {
  kind: 'post' | 'lab';
  id: string;
  href: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  tags: string[];
  series?: string;
  seriesPart?: number;
  entry: Post | LabNote;
}

const fromPost = (post: Post): Article => ({
  kind: 'post',
  id: post.id,
  href: `/blog/${post.id}/`,
  title: post.data.title,
  description: post.data.description,
  pubDate: post.data.pubDate,
  updatedDate: post.data.updatedDate,
  tags: post.data.tags,
  series: post.data.series,
  seriesPart: post.data.seriesPart,
  entry: post,
});

const fromNote = (note: LabNote): Article => ({
  kind: 'lab',
  id: note.id,
  href: `/lab/${note.id}/`,
  title: note.data.title,
  description: note.data.verdict ?? note.data.description,
  pubDate: note.data.pubDate,
  updatedDate: note.data.updatedDate,
  tags: note.data.tags,
  series: note.data.series,
  seriesPart: note.data.seriesPart,
  entry: note,
});

/** Posts and lab notes together, newest first; same-day articles by URL, so the order is stable. */
export async function getArticles() {
  const articles = [...(await getPosts()).map(fromPost), ...(await getLabNotes()).map(fromNote)];
  return articles.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf() || a.href.localeCompare(b.href));
}

export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Every tag used by a post or a lab note, keyed by slug, in alphabetical order (a book index). */
export async function getTags() {
  const tags = new Map<string, { name: string; articles: Article[] }>();
  for (const article of await getArticles()) {
    for (const name of article.tags) {
      const slug = tagSlug(name);
      const entry = tags.get(slug) ?? { name, articles: [] };
      entry.articles.push(article);
      tags.set(slug, entry);
    }
  }
  return [...tags.entries()]
    .map(([slug, { name, articles }]) => ({ slug, name, articles }))
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
}

/** The entries either side of `id` in a newest-first list: `older` is the previous one, `newer` the next. */
export function neighbours<T extends { id: string }>(entries: T[], id: string) {
  const i = entries.findIndex((entry) => entry.id === id);
  if (i < 0) return {};
  return { newer: entries[i - 1], older: entries[i + 1] };
}
