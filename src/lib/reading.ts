import { type CollectionEntry, getCollection } from 'astro:content';

export type ReadingEntry = CollectionEntry<'reading'>;

/** Date that places an entry on the timeline: when it was finished, otherwise when it was added. */
export function readingDate({ data }: ReadingEntry) {
  return data.finishedDate ?? data.addedDate;
}

const newestFirst = (a: ReadingEntry, b: ReadingEntry) => readingDate(b).valueOf() - readingDate(a).valueOf();

export async function getReading() {
  return (await getCollection('reading')).sort(newestFirst);
}

export async function getReadingByStatus() {
  const entries = await getReading();
  return {
    reading: entries.filter((e) => e.data.status === 'reading'),
    read: entries.filter((e) => e.data.status === 'read'),
    toRead: entries.filter((e) => e.data.status === 'to-read'),
  };
}
