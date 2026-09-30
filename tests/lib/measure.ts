import type { Page, TestInfo } from '@playwright/test';

/**
 * Readability measurements, evaluated in the page. Every function has a pinned definition so that
 * numbers in READABILITY-PLAN.md can be re-measured and compared across runs.
 */

export const PAGES = [
  '/',
  '/blog/',
  '/blog/hello-world/',
  '/lab/',
  '/lab/astro-7-satteri/',
  '/lab/pnpm-12-typescript-7/',
  '/tags/',
  '/reading/',
  '/cv/',
  '/dev/kitchen-sink/',
] as const;

export const ARTICLES = [
  '/blog/hello-world/',
  '/blog/basel-problem/',
  '/lab/astro-7-satteri/',
  '/lab/pnpm-12-typescript-7/',
  '/dev/kitchen-sink/',
] as const;

export const VIEWPORTS = {
  xs: { width: 320, height: 640 },
  phone: { width: 375, height: 812 },
  phoneShort: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  laptop: { width: 1024, height: 768 },
  desktop: { width: 1280, height: 900 },
  wide: { width: 1600, height: 1000 },
} as const;

/** Record a number for `pnpm measure` (collected by tests/lib/metrics-reporter.ts). */
export function record(testInfo: TestInfo, name: string, value: unknown) {
  testInfo.annotations.push({ type: 'metric', description: JSON.stringify({ name, value }) });
}

export async function open(page: Page, path: string, viewport: { width: number; height: number }) {
  await page.setViewportSize(viewport);
  await page.goto(path, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
}

export interface LineStats {
  lines: number;
  /** Mean characters of full lines (paragraph-final lines excluded). */
  mean: number;
  max: number;
  over75: number;
  over80: number;
  /** Non-final lines of paragraphs with 3 or more lines. */
  inner: number[];
  runts: number;
}

/**
 * Characters per rendered line of article paragraphs. Each character's box is assigned to a line by
 * its vertical centre in units of the paragraph's line height; math and footnote references count
 * as they render. Paragraphs inside lists, quotations, callouts and footnotes are excluded.
 */
export async function charactersPerLine(page: Page, selector = '.prose p'): Promise<LineStats> {
  return page.evaluate((sel) => {
    const counts: { n: number; final: boolean; paraLines: number; words: number }[] = [];
    const paras = [...document.querySelectorAll<HTMLElement>(sel)].filter(
      (p) => !p.closest('li, blockquote, .callout, .footnotes, figure, .expressive-code'),
    );
    const range = document.createRange();
    for (const p of paras) {
      const lh = parseFloat(getComputedStyle(p).lineHeight);
      const top = p.getBoundingClientRect().top;
      const lines = new Map<number, string>();
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const parent = (node as Text).parentElement!;
        if (parent.closest('.katex-mathml')) continue;
        const text = node.textContent ?? '';
        for (let i = 0; i < text.length; i++) {
          range.setStart(node, i);
          range.setEnd(node, i + 1);
          const r = range.getClientRects()[0];
          if (!r || r.width === 0) continue;
          const line = Math.floor((r.top + r.height / 2 - top) / lh);
          lines.set(line, (lines.get(line) ?? '') + text[i]);
        }
      }
      const ordered = [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, s]) => s.trim());
      ordered.forEach((s, i) =>
        counts.push({ n: s.length, final: i === ordered.length - 1, paraLines: ordered.length, words: s.split(/\s+/).length }),
      );
    }
    // Measure is judged on full lines: every line except the last line of each paragraph.
    const all = counts.map((c) => c.n);
    const full = counts.filter((c) => !c.final).map((c) => c.n);
    const mean = full.reduce((a, b) => a + b, 0) / Math.max(full.length, 1);
    return {
      lines: all.length,
      mean: Math.round(mean * 10) / 10,
      max: Math.max(0, ...all),
      over75: all.filter((n) => n > 75).length / Math.max(all.length, 1),
      over80: all.filter((n) => n > 80).length,
      inner: counts.filter((c) => !c.final && c.paraLines >= 3).map((c) => c.n),
      runts: counts.filter((c) => c.final && c.paraLines > 1 && c.words < 2).length,
    };
  }, selector);
}

/** Hidden width of every code block (scrollWidth − clientWidth), and of the document itself. */
export async function overflow(page: Page) {
  return page.evaluate(() => ({
    pre: [...document.querySelectorAll('.expressive-code pre')].map((pre) => pre.scrollWidth - pre.clientWidth),
    document: document.documentElement.scrollWidth - window.innerWidth,
  }));
}

/** Computed style values of every element matching a selector. */
export async function computed(page: Page, selector: string, props: string[]) {
  return page.evaluate(
    ([sel, keys]) =>
      [...document.querySelectorAll(sel)].map((el) => {
        const cs = getComputedStyle(el);
        return Object.fromEntries(keys.map((k) => [k, cs.getPropertyValue(k)]));
      }),
    [selector, props] as const,
  );
}

/**
 * Share of visible characters (spaces included) set in small caps, and the distinct small-caps
 * letter-spacing values in em. `root` limits the count, e.g. to 'main'.
 */
export async function smallCaps(page: Page, root = 'body') {
  return page.evaluate((rootSel) => {
    const rootEl = document.querySelector(rootSel)!;
    let total = 0;
    let sc = 0;
    const tracking = new Set<string>();
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const el = (node as Text).parentElement!;
      if (el.closest('.sr-only, script, style, [hidden], .katex-mathml')) continue;
      const text = (node.textContent ?? '').replace(/\s+/g, ' ');
      if (!text.trim()) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      const cs = getComputedStyle(el);
      total += text.length;
      if (cs.fontVariantCaps !== 'normal') {
        sc += text.length;
        const ls = cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing) / parseFloat(cs.fontSize);
        tracking.add(ls.toFixed(2));
      }
    }
    return { share: Math.round((sc / Math.max(total, 1)) * 1000) / 1000, tracking: [...tracking].sort() };
  }, root);
}

/**
 * Glyph heights measured with canvas in the element's own font: cap height of `glyph` (default the
 * element's first letter) and x-height. Honours font-variant-caps and font-size-adjust ex-height.
 */
export async function glyphHeights(page: Page, selector: string, glyph?: string) {
  return page.evaluate(
    ([sel, g]) => {
      const el = document.querySelector<HTMLElement>(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const ctx = document.createElement('canvas').getContext('2d')!;
      const adjust = cs.getPropertyValue('font-size-adjust');
      let size = parseFloat(cs.fontSize);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      const m = adjust.match(/ex-height\s+([\d.]+)|^([\d.]+)$/);
      if (m) {
        const target = parseFloat(m[1] ?? m[2]);
        const x = ctx.measureText('x').actualBoundingBoxAscent / size;
        size = (size * target) / x;
        ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      }
      ctx.fontVariantCaps = cs.fontVariantCaps as CanvasFontVariantCaps;
      const first = g ?? (el.textContent ?? 'H').trim().charAt(0);
      const cap = ctx.measureText(first).actualBoundingBoxAscent;
      ctx.fontVariantCaps = 'normal';
      const xh = ctx.measureText('x').actualBoundingBoxAscent;
      return { fontSize: size, cap: Math.round(cap * 100) / 100, x: Math.round(xh * 100) / 100 };
    },
    [selector, glyph] as const,
  );
}

/** Heading levels in document order and any jump of more than one level. */
export async function headingSkips(page: Page) {
  return page.evaluate(() => {
    const levels = [...document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')].map((h) =>
      Number(h.tagName[1]),
    );
    const skips: string[] = [];
    levels.forEach((l, i) => {
      if (i > 0 && l > levels[i - 1] + 1) skips.push(`h${levels[i - 1]}→h${l}`);
    });
    return { levels, skips };
  });
}

/** Effective colour of `color` painted over `background` (both CSS colours), as 0–255 sRGB. */
export async function contrast(page: Page, color: string, background: string) {
  return page.evaluate(
    ([fg, bg]) => {
      const c = document.createElement('canvas');
      c.width = c.height = 1;
      const ctx = c.getContext('2d', { willReadFrequently: true })!;
      const paint = (...layers: string[]) => {
        ctx.clearRect(0, 0, 1, 1);
        for (const l of layers) {
          ctx.fillStyle = l;
          ctx.fillRect(0, 0, 1, 1);
        }
        return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)];
      };
      const lum = (rgb: number[]) => {
        const [r, g, b] = rgb.map((v) => {
          const s = v / 255;
          return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const a = lum(paint(bg, fg));
      const b = lum(paint(bg));
      return Math.round(((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)) * 100) / 100;
    },
    [color, background] as const,
  );
}

/** Page count of the page printed to A4 (Chromium only). */
export async function printedPages(page: Page) {
  await page.emulateMedia({ media: 'print' });
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true });
  await page.emulateMedia({ media: 'screen' });
  return (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
}
