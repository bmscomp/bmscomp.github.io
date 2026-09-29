import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../consts';
import { getLabNotes, lastTouched } from '../../lib/lab';

export async function GET(context: APIContext) {
  const notes = await getLabNotes();
  return rss({
    title: `${SITE_TITLE} · Lab`,
    description: "Software, systems, and hardware I'm testing.",
    site: context.site ?? 'https://bmscomp.github.io',
    items: notes.map((note) => ({
      title: `[${note.data.status}] ${note.data.title}`,
      description: note.data.verdict ?? note.data.description,
      pubDate: lastTouched(note),
      categories: [note.data.category, ...note.data.tools],
      link: `/lab/${note.id}/`,
    })),
  });
}
