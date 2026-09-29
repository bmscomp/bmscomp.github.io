import { getEntry } from 'astro:content';
import { formatLocation } from '../../lib/cv';
import { initialsOf, pngResponse, renderCard } from '../../lib/og';

export async function GET() {
  const entry = await getEntry('cv', 'resume');
  if (!entry) throw new Error('Missing src/content/cv/resume.json');
  const { basics, publications, projects } = entry.data;
  const note = [
    projects.some((p) => p.entity?.startsWith('Devoxx')) ? 'Speaker at Devoxx France' : undefined,
    publications[0] ? `Author of ${publications[0].name}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ');
  return pngResponse(
    await renderCard({
      kicker: 'Curriculum Vitæ',
      title: basics.name,
      subtitle: basics.label,
      note,
      footer: formatLocation(basics.location),
      url: 'bmscomp.github.io/cv',
      initials: initialsOf(basics.name),
      variant: 'seal',
    }),
  );
}
