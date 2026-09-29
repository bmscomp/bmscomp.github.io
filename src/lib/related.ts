import { type CollectionEntry, getEntry } from 'astro:content';

type Ref<C extends 'posts' | 'lab'> = { collection: C; id: string };

/**
 * Resolve `relatedPosts` / `relatedLab` to entries. `reference()` accepts any id, so a missing entry
 * throws here and fails the build; a related draft is left out of production builds.
 */
export async function resolveRelated(refs: (Ref<'posts'> | Ref<'lab'>)[]) {
  const entries: (CollectionEntry<'posts'> | CollectionEntry<'lab'>)[] = [];
  for (const ref of refs) {
    const entry = await getEntry(ref.collection, ref.id);
    if (!entry) throw new Error(`Related article not found: ${ref.collection}/${ref.id}`);
    if (entry.data.draft && !import.meta.env.DEV) continue;
    entries.push(entry);
  }
  return entries.map((entry) => ({
    href: entry.collection === 'posts' ? `/blog/${entry.id}/` : `/lab/${entry.id}/`,
    title: entry.data.title,
  }));
}
