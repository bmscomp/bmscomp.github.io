import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../../consts';
import { getLabNotes, type LabNote } from '../../../lib/lab';
import { initialsOf, pngResponse, renderCard } from '../../../lib/og';

export async function getStaticPaths() {
  const notes = await getLabNotes();
  return notes.map((note) => ({ params: { slug: note.id }, props: { note } }));
}

export async function GET({ props }: APIContext<{ note: LabNote }>) {
  const { title, description, status, category, tools } = props.note.data;
  return pngResponse(
    await renderCard({
      kicker: `Lab · ${status}`,
      title,
      subtitle: description,
      footer: [category, ...tools.slice(0, 3)].join(' · '),
      initials: initialsOf(SITE_TITLE),
    }),
  );
}
