import type { APIContext } from 'astro';
import { getLabNotes, type LabNote } from '../../../lib/lab';
import { renderOgImage } from '../../../lib/og';

export async function getStaticPaths() {
  const notes = await getLabNotes();
  return notes.map((note) => ({ params: { slug: note.id }, props: { note } }));
}

export async function GET({ props }: APIContext<{ note: LabNote }>) {
  const { title, description, status, category } = props.note.data;
  const png = await renderOgImage({ title: `Lab: ${title}`, subtitle: description, tags: [category, status] });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
