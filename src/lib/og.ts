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

const garamondDir = join(process.cwd(), 'node_modules/@fontsource/eb-garamond/files');
let garamondFonts: Promise<Buffer[]> | undefined;

interface CvCardOptions {
  name: string;
  label: string;
  initials: string;
  /** Credentials line under the headline, e.g. talks and publications. */
  credentials?: string;
  location?: string;
}

/** CV social card in the page's "typeset document" style: ivory paper, seal, EB Garamond. */
export async function renderCvCard({ name, label, initials, credentials, location }: CvCardOptions) {
  garamondFonts ??= Promise.all(
    ['latin-400-normal', 'latin-500-normal', 'latin-400-italic'].map((f) =>
      readFile(join(garamondDir, `eb-garamond-${f}.woff`)),
    ),
  );
  const [regular, medium, italic] = await garamondFonts;
  const navy = '#213f73';
  const ink = '#221f1a';
  const muted = '#6a6358';
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#fffdf8',
          borderTop: `14px solid ${navy}`,
          padding: '70px 84px',
          fontFamily: 'EB Garamond',
          color: ink,
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '56px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: 190,
                      height: 190,
                      borderRadius: 9999,
                      border: `3px solid ${navy}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    },
                    children: {
                      type: 'div',
                      props: {
                        style: {
                          width: 150,
                          height: 150,
                          borderRadius: 9999,
                          border: `1px solid ${navy}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: navy,
                          fontSize: 76,
                          fontStyle: 'italic',
                        },
                        children: initials,
                      },
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column' },
                    children: [
                      {
                        type: 'div',
                        props: { style: { fontSize: 24, letterSpacing: 9, color: navy }, children: 'CURRICULUM VITÆ' },
                      },
                      {
                        type: 'div',
                        props: { style: { fontSize: 104, fontWeight: 500, lineHeight: 1.05, marginTop: 8 }, children: name },
                      },
                      {
                        type: 'div',
                        props: { style: { fontSize: 40, fontStyle: 'italic', color: muted, marginTop: 14 }, children: label },
                      },
                      credentials && {
                        type: 'div',
                        props: { style: { fontSize: 27, color: ink, marginTop: 22 }, children: credentials },
                      },
                    ].filter(Boolean),
                  },
                },
              ],
            },
          },
          // Double rule (satori has no `double` border style): two hairlines.
          { type: 'div', props: { style: { marginTop: 'auto', height: 1.5, background: muted, opacity: 0.6 } } },
          { type: 'div', props: { style: { marginTop: 4, height: 1.5, background: muted, opacity: 0.6 } } },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                paddingTop: 24,
                justifyContent: 'space-between',
                fontSize: 26,
                color: muted,
              },
              children: [
                { type: 'div', props: { style: { fontStyle: 'italic' }, children: location ?? '' } },
                { type: 'div', props: { style: { fontSize: 22, letterSpacing: 5, color: navy }, children: 'BMSCOMP.GITHUB.IO/CV' } },
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
        { name: 'EB Garamond', data: regular, weight: 400, style: 'normal' },
        { name: 'EB Garamond', data: medium, weight: 500, style: 'normal' },
        { name: 'EB Garamond', data: italic, weight: 400, style: 'italic' },
      ],
    },
  );
  return new Resvg(svg).render().asPng();
}
