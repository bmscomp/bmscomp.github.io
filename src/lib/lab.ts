import { type CollectionEntry, getCollection } from 'astro:content';

export type LabNote = CollectionEntry<'lab'>;
export type LabCategory = LabNote['data']['category'];
export type LabStatus = LabNote['data']['status'];

export const CATEGORIES: LabCategory[] = ['software', 'system', 'hardware', 'homelab'];
export const STATUSES: LabStatus[] = ['testing', 'adopted', 'dropped'];

/** Published lab notes, most recently touched first (same-day notes by id). Drafts only in `astro dev`. */
export async function getLabNotes() {
  const notes = await getCollection('lab', ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => lastTouched(b).valueOf() - lastTouched(a).valueOf() || a.id.localeCompare(b.id));
}

/**
 * Filter groups worth showing on /lab/: a group appears only when the notes take two or more values,
 * since one value filters nothing. Articles link their status and category only to groups shown here.
 */
export function filterGroups(notes: { data: { status: LabStatus; category: LabCategory } }[]) {
  const groups = {
    status: STATUSES.filter((s) => notes.some((n) => n.data.status === s)),
    category: CATEGORIES.filter((c) => notes.some((n) => n.data.category === c)),
  };
  return Object.fromEntries(Object.entries(groups).filter(([, values]) => values.length >= 2)) as Partial<typeof groups>;
}

export function lastTouched(note: LabNote) {
  return note.data.updatedDate ?? note.data.pubDate;
}
