import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

// Social cards in the site's "typeset paper" style. Satori needs WOFF/TTF (not WOFF2) and cannot use
// OpenType features, so the cards use the static EB Garamond files and plain uppercase for small caps.
const fontDir = join(process.cwd(), 'node_modules/@fontsource/eb-garamond/files');
// Greek letters, math symbols and superscripts ("π²/6", "⋯"), which the Latin files lack: static
// instances of the same EB Garamond, used only for glyphs the Latin fonts do not have. Built with
// fontTools from the variable fonts (instancer at wght 400/500, then subset to U+0391–03C9, the
// variants ϑ ϕ ϖ ϵ, U+2200–22FF, □ and the superscript digits).
const mathDir = join(process.cwd(), 'src/assets/fonts/eb-garamond/og');
let fonts: Promise<Buffer[]> | undefined;
const loadFonts = () =>
  (fonts ??= Promise.all([
    ...['latin-400-normal', 'latin-500-normal', 'latin-400-italic'].map((f) => readFile(join(fontDir, `eb-garamond-${f}.woff`))),
    ...['400', '500', '400-italic'].map((f) => readFile(join(mathDir, `EBGaramond-Math-${f}.woff`))),
  ]));

const NAVY = '#213f73';
const INK = '#221f1a';
const MUTED = '#6a6358';
const PAPER = '#fffdf8';

type Node = { type: 'div'; props: { style: Record<string, unknown>; children?: unknown } };
const div = (style: Record<string, unknown>, children?: unknown): Node => ({ type: 'div', props: { style, children } });

/** Curly apostrophes for card text (the page itself uses `typeset`). */
const curly = (text: string) => text.replace(/(\w)'(\w)/g, '$1’$2');

/** Two concentric rings around italic initials, like a seal. */
function monogram(initials: string, size: number): Node {
  const inner = Math.round(size * 0.79);
  return div(
    {
      width: size,
      height: size,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
      border: `${Math.max(2, Math.round(size / 64))}px solid ${NAVY}`,
    },
    div(
      {
        width: inner,
        height: inner,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        border: `1px solid ${NAVY}`,
        color: NAVY,
        fontSize: Math.round(size * 0.4),
        fontStyle: 'italic',
      },
      initials,
    ),
  );
}

export interface CardOptions {
  /** Small-caps line above the title, e.g. "Blog". */
  kicker: string;
  title: string;
  /** Italic line under the title. */
  subtitle?: string;
  /** Extra roman line under the subtitle, e.g. credentials. */
  note?: string;
  /** Bottom-left, italic: tags, location. */
  footer?: string;
  /** Bottom-right address. */
  url?: string;
  initials: string;
  /** "seal": a large monogram beside the title (CV, home). "mark": a small one beside the kicker. */
  variant?: 'seal' | 'mark';
}

/** Renders a 1200×630 PNG card: ivory paper, navy rule, EB Garamond. */
export async function renderCard({
  kicker,
  title,
  subtitle,
  note,
  footer,
  url = 'bmscomp.github.io',
  initials,
  variant = 'mark',
}: CardOptions) {
  const [regular, medium, italic, math, mathMedium, mathItalic] = await loadFonts();
  const titleSize = title.length <= 28 ? 100 : title.length <= 45 ? 78 : title.length <= 70 ? 62 : 52;
  const kickerLine = div({ fontSize: 24, letterSpacing: 9, color: NAVY }, kicker.toUpperCase());
  const text = div(
    { display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 },
    [
      variant === 'mark'
        ? div({ display: 'flex', alignItems: 'center', gap: 22 }, [monogram(initials, 64), kickerLine])
        : kickerLine,
      div(
        { fontSize: titleSize, fontWeight: 500, lineHeight: 1.06, color: INK, marginTop: variant === 'mark' ? 30 : 8 },
        curly(title),
      ),
      subtitle && div({ fontSize: 36, fontStyle: 'italic', color: MUTED, marginTop: 18, lineHeight: 1.3 }, curly(subtitle)),
      note && div({ fontSize: 27, color: INK, marginTop: 20 }, curly(note)),
    ].filter(Boolean),
  );
  const hairline = (marginTop: number | 'auto') => div({ marginTop, height: 1.5, background: MUTED, opacity: 0.6 });

  const svg = await satori(
    div(
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 84px 56px',
        background: PAPER,
        borderTop: `14px solid ${NAVY}`,
        fontFamily: 'EB Garamond, EB Garamond Math, EB Garamond Symbols',
        color: INK,
      },
      [
        variant === 'seal' ? div({ display: 'flex', alignItems: 'center', gap: 56 }, [monogram(initials, 190), text]) : text,
        // Double rule (satori has no `double` border style): two hairlines.
        hairline('auto'),
        hairline(4),
        div({ display: 'flex', justifyContent: 'space-between', paddingTop: 22, fontSize: 26, color: MUTED }, [
          div({ fontStyle: 'italic' }, footer ?? ''),
          div({ fontSize: 22, letterSpacing: 5, color: NAVY }, url.toUpperCase()),
        ]),
      ],
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'EB Garamond', data: regular, weight: 400, style: 'normal' },
        { name: 'EB Garamond', data: medium, weight: 500, style: 'normal' },
        { name: 'EB Garamond', data: italic, weight: 400, style: 'italic' },
        { name: 'EB Garamond Math', data: math, weight: 400, style: 'normal' },
        { name: 'EB Garamond Math', data: mathMedium, weight: 500, style: 'normal' },
        { name: 'EB Garamond Math', data: mathItalic, weight: 400, style: 'italic' },
        // EB Garamond Italic has no superscript digits: italic text borrows the upright ones, as a
        // browser would.
        { name: 'EB Garamond Symbols', data: math, weight: 400, style: 'italic' },
      ],
    },
  );
  return new Resvg(svg).render().asPng();
}

/** Satori output → HTTP response. */
export const pngResponse = (png: Buffer) =>
  new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });

/** "Said Boudjelda" → "SB". */
export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
