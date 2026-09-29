import { type CollectionEntry, getCollection } from 'astro:content';

export type LabNote = CollectionEntry<'lab'>;
export type LabCategory = LabNote['data']['category'];
export type LabStatus = LabNote['data']['status'];

export const CATEGORIES: LabCategory[] = ['software', 'system', 'hardware', 'homelab'];
export const STATUSES: LabStatus[] = ['testing', 'adopted', 'dropped'];

/** Published lab notes, most recently touched first. Drafts are only included in `astro dev`. */
export async function getLabNotes() {
  const notes = await getCollection('lab', ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => lastTouched(b).valueOf() - lastTouched(a).valueOf());
}

export function lastTouched(note: LabNote) {
  return note.data.updatedDate ?? note.data.pubDate;
}
