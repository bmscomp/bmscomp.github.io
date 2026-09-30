import { type CollectionEntry, getEntry } from 'astro:content';

type Section = 'posts' | 'lab' | 'mathematics';
type Ref = { collection: Section; id: string };

/** The URL of an article in any section. */
export function articleHref(collection: Section, id: string) {
  return collection === 'posts' ? `/blog/${id}/` : collection === 'lab' ? `/lab/${id}/` : `/mathematics/${id}/`;
}

/**
 * Resolve `relatedPosts` / `relatedLab` / `relatedMath` to entries. `reference()` accepts any id, so a
 * missing entry throws here and fails the build; a related draft is left out of production builds.
 */
export async function resolveRelated(refs: Ref[]) {
  const entries: CollectionEntry<Section>[] = [];
  for (const ref of refs) {
    const entry = await getEntry(ref.collection, ref.id);
    if (!entry) throw new Error(`Related article not found: ${ref.collection}/${ref.id}`);
    if (entry.data.draft && !import.meta.env.DEV) continue;
    entries.push(entry);
  }
  return entries.map((entry) => ({ href: articleHref(entry.collection, entry.id), title: entry.data.title }));
}
