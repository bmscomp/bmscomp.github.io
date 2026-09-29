import { getEntry } from 'astro:content';
import { renderOgImage } from '../../lib/og';

export async function GET() {
  const entry = await getEntry('cv', 'resume');
  if (!entry) throw new Error('Missing src/content/cv/resume.json');
  const { name, label } = entry.data.basics;
  const png = await renderOgImage({ title: name, subtitle: label, tags: ['cv'] });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
