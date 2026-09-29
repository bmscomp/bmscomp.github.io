import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { SITE_TITLE } from '../consts';

const fontDir = join(process.cwd(), 'node_modules/@fontsource/inter/files');
const fonts = Promise.all([
  readFile(join(fontDir, 'inter-latin-400-normal.woff')),
  readFile(join(fontDir, 'inter-latin-700-normal.woff')),
]);

interface OgOptions {
  title: string;
  subtitle?: string;
  tags?: string[];
}

/** Renders a 1200×630 social card as PNG. */
export async function renderOgImage({ title, subtitle, tags = [] }: OgOptions) {
  const [regular, bold] = await fonts;
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #09090b 0%, #1e293b 100%)',
          color: '#f4f4f5',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '24px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.1 },
                    children: title,
                  },
                },
                subtitle && {
                  type: 'div',
                  props: { style: { fontSize: 30, color: '#a1a1aa', lineHeight: 1.4 }, children: subtitle },
                },
              ].filter(Boolean),
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28 },
              children: [
                { type: 'div', props: { style: { fontWeight: 700, color: '#60a5fa' }, children: SITE_TITLE } },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', gap: '16px', color: '#a1a1aa' },
                    children: tags.slice(0, 4).map((tag) => ({ type: 'div', props: { children: `#${tag}` } })),
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );
  return new Resvg(svg).render().asPng();
}
