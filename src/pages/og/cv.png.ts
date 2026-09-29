import { getEntry } from 'astro:content';
import { formatLocation } from '../../lib/cv';
import { renderCvCard } from '../../lib/og';

export async function GET() {
  const entry = await getEntry('cv', 'resume');
  if (!entry) throw new Error('Missing src/content/cv/resume.json');
  const { basics, publications, projects } = entry.data;
  const [first, ...rest] = basics.name.split(/\s+/);
  const venues = projects.filter((p) => p.entity?.startsWith('Devoxx')).length;
  const credentials = [
    venues > 0 ? 'Speaker at Devoxx France' : undefined,
    publications[0] ? `Author of ${publications[0].name}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ');
  const png = await renderCvCard({
    name: basics.name,
    label: basics.label,
    initials: `${first[0]}${rest.at(-1)?.[0] ?? ''}`,
    credentials,
    location: formatLocation(basics.location),
  });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
