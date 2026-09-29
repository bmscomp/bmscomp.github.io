import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first (same-day posts by id). Drafts are only included in `astro dev`. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** All tags used by published posts, keyed by slug, sorted by post count then name. */
export async function getTags() {
  const tags = new Map<string, { name: string; posts: Post[] }>();
  for (const post of await getPosts()) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const entry = tags.get(slug) ?? { name, posts: [] };
      entry.posts.push(post);
      tags.set(slug, entry);
    }
  }
  return [...tags.entries()]
    .map(([slug, { name, posts }]) => ({ slug, name, posts }))
    .sort((a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name));
}
