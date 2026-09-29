import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { renderOgImage } from '../lib/og';

export async function GET() {
  const png = await renderOgImage({ title: SITE_TITLE, subtitle: SITE_DESCRIPTION });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
