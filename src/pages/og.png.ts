import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { initialsOf, pngResponse, renderCard } from '../lib/og';

export async function GET() {
  return pngResponse(
    await renderCard({
      kicker: 'Writing · Lab · CV',
      title: SITE_TITLE,
      subtitle: SITE_DESCRIPTION,
      initials: initialsOf(SITE_TITLE),
      variant: 'seal',
    }),
  );
}
