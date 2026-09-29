import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// Soft assertions: a failing page does not stop the others from being measured and reported.
import {
  ARTICLES,
  charactersPerLine,
  computed,
  contrast,
  glyphHeights,
  headingSkips,
  open,
  overflow,
  PAGES,
  printedPages,
  record,
  smallCaps,
  VIEWPORTS,
} from './lib/measure';

// Each test title starts with the READABILITY-PLAN.md item it verifies. Tests tagged @ci are
// font-independent and gate the deploy (.github/workflows/check.yml).

const LAB_NOTES = ['/lab/astro-7-satteri/', '/lab/pnpm-12-typescript-7/'];
const REAL_ARTICLES = ['/blog/hello-world/', ...LAB_NOTES];
const { xs, phone, phoneShort, tablet, laptop, desktop, wide } = VIEWPORTS;

test.describe('W1.1 fixture', () => {
  test('W1.1 the fixture page carries every construct and stays out of search @ci', async ({ page }) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    const counts = await page.evaluate(() => ({
      h2: document.querySelectorAll('.prose h2').length,
      h3: document.querySelectorAll('.prose h3').length,
      h4: document.querySelectorAll('.prose h4').length,
      frames: document.querySelectorAll('.prose .expressive-code').length,
      katex: document.querySelectorAll('.prose .katex').length,
      display: document.querySelectorAll('.prose .math-display').length,
      table: document.querySelectorAll('.prose table').length,
      quote: document.querySelectorAll('.prose blockquote').length,
      footnotes: document.querySelectorAll('.prose [data-footnotes], .prose .footnotes').length,
      img: document.querySelectorAll('.prose img').length,
      ol: document.querySelectorAll('.prose ol > li').length,
      noindex: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
    }));
    expect.soft(counts.h2).toBeGreaterThanOrEqual(7);
    expect.soft(counts.h3).toBeGreaterThanOrEqual(1);
    expect.soft(counts.h4).toBeGreaterThanOrEqual(1);
    expect.soft(counts.frames).toBeGreaterThanOrEqual(4);
    expect.soft(counts.katex).toBeGreaterThanOrEqual(2);
    expect.soft(counts.display).toBeGreaterThanOrEqual(1);
    expect.soft(counts.table).toBe(1);
    expect.soft(counts.quote + (await page.locator('.prose .callout').count())).toBeGreaterThanOrEqual(2);
    expect.soft(counts.footnotes).toBe(1);
    expect.soft(counts.img).toBe(1);
    expect.soft(counts.ol).toBeGreaterThanOrEqual(12);
    expect.soft(counts.noindex).toBe('noindex');
  });
});

test.describe('W2 body text and measure', () => {
  test('W2.2 font smoothing is left alone in light mode @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const [body] = await computed(page, 'body', ['-webkit-font-smoothing']);
    expect.soft(body['-webkit-font-smoothing']).toBe('auto');
  });

  test('W2.2 font smoothing is antialiased in dark mode @dark @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const [body] = await computed(page, 'body', ['-webkit-font-smoothing']);
    expect.soft(body['-webkit-font-smoothing']).toBe('antialiased');
  });

  for (const [vp, size] of [
    [phone, 19],
    [tablet, 20.1],
    [laptop, 21],
    [desktop, 21],
  ] as const) {
    test(`W2.3 article body is ${size}px at ${vp.width}px @ci`, async ({ page }) => {
      await open(page, '/lab/astro-7-satteri/', vp);
      const [p] = await computed(page, '.prose p', ['font-size']);
      expect.soft(Math.abs(parseFloat(p['font-size']) - size)).toBeLessThanOrEqual(0.2);
    });
  }

  for (const path of REAL_ARTICLES) {
    for (const vp of [desktop, wide]) {
      test(`W2.3 measure at ${vp.width}px on ${path}`, async ({ page }, info) => {
        await open(page, path, vp);
        const s = await charactersPerLine(page);
        record(info, `W2.3 cpl ${vp.width} ${path}`, { mean: s.mean, max: s.max, over75: s.over75 });
        expect.soft(s.mean).toBeGreaterThanOrEqual(58);
        expect.soft(s.mean).toBeLessThanOrEqual(68);
        expect.soft(s.over80).toBe(0);
        expect.soft(s.over75).toBeLessThanOrEqual(path.startsWith('/lab/') ? 0.1 : 0.2);
        expect.soft(s.runts).toBeLessThanOrEqual(1);
      });
    }
    test(`W2.3 measure at 768px and 375px on ${path}`, async ({ page }, info) => {
      await open(page, path, tablet);
      const t = await charactersPerLine(page);
      record(info, `W2.3 cpl 768 ${path}`, { mean: t.mean, inner: [Math.min(...t.inner), Math.max(...t.inner)] });
      for (const n of t.inner) {
        expect.soft(n).toBeGreaterThanOrEqual(45);
        expect.soft(n).toBeLessThanOrEqual(75);
      }
      await open(page, path, phone);
      const p = await charactersPerLine(page);
      record(info, `W2.3 cpl 375 ${path}`, { mean: p.mean });
      expect.soft(p.mean).toBeGreaterThanOrEqual(38);
    });
  }

  test('W2.3 body x-height is at least 8.4px from 1024px', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', laptop);
    const g = await glyphHeights(page, '.prose p');
    record(info, 'W2.3 body x-height @1024', g?.x);
    expect.soft(g!.x).toBeGreaterThanOrEqual(8.4);
  });

  for (const vp of [phone, tablet, desktop, wide]) {
    test(`W2.4 the lede is larger than the body at ${vp.width}px @ci`, async ({ page }) => {
      await open(page, '/lab/astro-7-satteri/', vp);
      const [lede] = await computed(page, '.lede', ['font-size']);
      const [p] = await computed(page, '.prose p', ['font-size']);
      expect.soft(parseFloat(lede['font-size']) / parseFloat(p['font-size'])).toBeGreaterThanOrEqual(1.12);
    });
  }

  test('W2.4 list descriptions stay within 72 characters per line at 1280px', async ({ page }, info) => {
    for (const path of ['/', '/lab/']) {
      await open(page, path, desktop);
      const s = await page.evaluate(() => {
        const range = document.createRange();
        let max = 0;
        for (const p of document.querySelectorAll<HTMLElement>('.entry-desc')) {
          const lh = parseFloat(getComputedStyle(p).lineHeight);
          const top = p.getBoundingClientRect().top;
          const lines = new Map<number, number>();
          const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            for (let i = 0; i < (node.textContent ?? '').length; i++) {
              range.setStart(node, i);
              range.setEnd(node, i + 1);
              const r = range.getClientRects()[0];
              if (!r) continue;
              const l = Math.floor((r.top + r.height / 2 - top) / lh);
              lines.set(l, (lines.get(l) ?? 0) + 1);
            }
          }
          const counts = [...lines.values()];
          if (counts.length > 1) max = Math.max(max, ...counts.slice(0, -1));
        }
        return max;
      });
      record(info, `W2.4 longest full description line ${path}`, s);
      expect.soft(s).toBeLessThanOrEqual(72);
    }
  });

  test('W2.5 the article column never shrinks by more than 8% as the window widens', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', { width: 600, height: 900 });
    const widths: [number, number][] = [];
    for (let w = 600; w <= 1600; w += 8) {
      await page.setViewportSize({ width: w, height: 900 });
      widths.push([w, await page.evaluate(() => document.querySelector('.prose')!.getBoundingClientRect().width)]);
    }
    let worst = 0;
    let at = 0;
    for (let i = 1; i < widths.length; i++) {
      const drop = (widths[i - 1][1] - widths[i][1]) / widths[i - 1][1];
      if (drop > worst) [worst, at] = [drop, widths[i][0]];
    }
    record(info, 'W2.5 worst step drop', { drop: Math.round(worst * 1000) / 1000, at });
    expect.soft(worst).toBeLessThanOrEqual(0.08);
    for (const w of [640, 768, 900, 1000]) {
      await page.setViewportSize({ width: w, height: 900 });
      const s = await charactersPerLine(page);
      record(info, `W2.5 cpl at ${w}`, s.mean);
      expect.soft(s.mean).toBeGreaterThanOrEqual(55);
      expect.soft(s.mean).toBeLessThanOrEqual(72);
    }
  });

  test('W2.5 the CV keeps its 7.5rem margin column @ci', async ({ page }) => {
    await open(page, '/cv/', desktop);
    const gutter = await page.evaluate(() => getComputedStyle(document.querySelector('.cv .row')!).gridTemplateColumns);
    expect.soft(gutter.split(' ')[0]).toBe('120px');
  });
});

test.describe('W3 code, math and technical text', () => {
  test('W3.1 inline code is never hyphenated and code in headings keeps its case @ci', async ({ page }) => {
    for (const path of ARTICLES) {
      await open(page, path, desktop);
      const hyphens = await computed(page, '.prose :not(pre) > code', ['hyphens']);
      expect.soft(hyphens.every((c) => c.hyphens === 'manual')).toBe(true);
    }
    const inHeading = await computed(page, '.prose h2 code', ['font-variant-caps', 'letter-spacing']);
    expect.soft(inHeading.length).toBeGreaterThan(0);
    for (const c of inHeading) {
      expect.soft(c['font-variant-caps']).toBe('normal');
      expect.soft(c['letter-spacing']).toBe('normal');
    }
  });

  test('W3.1 inline code matches the body x-height and hugs following punctuation', async ({ page }, info) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    const body = await glyphHeights(page, '.prose p');
    const code = await glyphHeights(page, '.prose p code');
    record(info, 'W3.1 inline code x / body x', code!.x / body!.x);
    expect.soft(Math.abs(code!.x / body!.x - 1)).toBeLessThanOrEqual(0.05);
    const gap = await page.evaluate(() => {
      const code = [...document.querySelectorAll('.prose p code')].find((c) => c.nextSibling?.textContent?.startsWith(','))!;
      // Visible gap: from the last code glyph (not the padded box) to the comma.
      const range = document.createRange();
      range.setStart(code.nextSibling!, 0);
      range.setEnd(code.nextSibling!, 1);
      const comma = range.getBoundingClientRect().left;
      const text = code.firstChild!;
      range.setStart(text, text.textContent!.length - 1);
      range.setEnd(text, text.textContent!.length);
      return comma - range.getBoundingClientRect().right;
    });
    record(info, 'W3.1 gap before comma', gap);
    expect.soft(gap).toBeLessThanOrEqual(3);
  });

  for (const vp of [xs, phone]) {
    test(`W3.1 no article scrolls sideways at ${vp.width}px @ci`, async ({ page }) => {
      for (const path of ARTICLES) {
        await open(page, path, vp);
        expect.soft((await overflow(page)).document).toBeLessThanOrEqual(0);
      }
    });
  }

  for (const vp of [phone, tablet, desktop, wide]) {
    test(`W3.2 every code line is visible at ${vp.width}px @ci`, async ({ page }, info) => {
      for (const path of ARTICLES) {
        await open(page, path, vp);
        const o = await overflow(page);
        record(info, `W3.2 hidden code ${vp.width} ${path}`, Math.max(0, ...o.pre));
        expect.soft(Math.max(0, ...o.pre)).toBeLessThanOrEqual(1);
      }
    });
  }

  test('W3.2 copying still returns the unwrapped line @ci', async ({ page }) => {
    await open(page, '/dev/kitchen-sink/', phone);
    const code = await page.locator('.expressive-code .copy button').first().getAttribute('data-code');
    expect.soft(code).toContain("inlineMath: (node: { value: string }) => render(node.value) };");
  });

  test('W3.3 inline code and code blocks use the same font; frame titles are readable', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');
    const { root } = await cdp.send('DOM.getDocument', { depth: -1 });
    const family = async (selector: string) => {
      const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector });
      const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
      return fonts.sort((a, b) => b.glyphCount - a.glyphCount)[0]?.familyName;
    };
    const inline = await family('.prose p code');
    const block = await family('.expressive-code .ec-line .code');
    record(info, 'W3.3 code fonts', { inline, block });
    expect.soft(inline).toBe(block);
    const title = await glyphHeights(page, '.expressive-code .title');
    record(info, 'W3.3 frame title x-height', title?.x);
    expect.soft(title!.x).toBeGreaterThanOrEqual(7);
  });

  test('W3.3 command output renders in terminal frames @ci', async ({ page }) => {
    await open(page, '/lab/pnpm-12-typescript-7/', desktop);
    const titles = await page.locator('.expressive-code .frame.is-terminal .title').allTextContents();
    expect.soft(titles.filter((t) => t === 'Output').length).toBeGreaterThanOrEqual(2);
  });

  test('W3.4 math is set at text size and keeps the line spacing', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const m = await page.evaluate(() => {
      const p = document.querySelector('.prose p .katex')!.closest('p')!;
      const k = p.querySelector<HTMLElement>('.katex')!;
      const size = parseFloat(getComputedStyle(k).fontSize);
      const body = parseFloat(getComputedStyle(p).fontSize);
      const ctx = document.createElement('canvas').getContext('2d')!;
      const x = (font: string) => {
        ctx.font = font;
        return ctx.measureText('x').actualBoundingBoxAscent;
      };
      ctx.font = `${body}px ${getComputedStyle(p).fontFamily}`;
      const bodyX = ctx.measureText('x').actualBoundingBoxAscent;
      const range = document.createRange();
      const tops = new Set<number>();
      const lh = parseFloat(getComputedStyle(p).lineHeight);
      for (const node of [...p.childNodes].filter((n) => n.nodeType === 3)) {
        for (let i = 0; i < node.textContent!.length; i++) {
          range.setStart(node, i);
          range.setEnd(node, i + 1);
          const r = range.getClientRects()[0];
          if (r) tops.add(Math.round((r.top + r.bottom) / 2));
        }
      }
      const centres = [...tops].sort((a, b) => a - b);
      const lines = centres.filter((c, i) => i === 0 || c - centres[i - 1] > lh / 2);
      const pitches = lines.slice(1).map((c, i) => c - lines[i]);
      return {
        main: x(`${size}px KaTeX_Main`) / bodyX,
        math: x(`italic ${size}px KaTeX_Math`) / bodyX,
        pitches,
        lh,
      };
    });
    record(info, 'W3.4 math x-height ratios', { main: m.main, math: m.math });
    expect.soft(m.main).toBeLessThanOrEqual(1.08);
    expect.soft(m.math).toBeLessThanOrEqual(1.1);
    for (const pitch of m.pitches) expect.soft(Math.abs(pitch - m.lh)).toBeLessThanOrEqual(1);
  });

  test('W3.6 code-block size sits just under the body size from 1024px', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const body = await glyphHeights(page, '.prose p');
    const block = await glyphHeights(page, '.expressive-code .ec-line .code');
    const inline = await glyphHeights(page, '.prose p code');
    record(info, 'W3.6 block/body x', block!.x / body!.x);
    expect.soft(block!.x / body!.x).toBeGreaterThanOrEqual(0.88);
    expect.soft(block!.x / body!.x).toBeLessThanOrEqual(0.95);
    expect.soft(inline!.x / block!.x).toBeLessThanOrEqual(1.12);
  });
});

test.describe('W4 headings, small caps, figures and rhythm', () => {
  test('W4.1 at most four letter-spacing values for small caps across the site', async ({ page }, info) => {
    const values = new Set<string>();
    for (const path of PAGES) {
      await open(page, path, desktop);
      for (const v of (await smallCaps(page)).tracking) values.add(v);
    }
    record(info, 'W4.1 small-caps tracking values', [...values].sort());
    expect.soft(values.size).toBeLessThanOrEqual(4);
  });

  test('W4.1 small caps are no longer the dominant texture of list pages', async ({ page }, info) => {
    for (const [path, max] of [
      ['/', 0.21],
      ['/lab/', 0.2],
    ] as const) {
      await open(page, path, desktop);
      const s = await smallCaps(page);
      record(info, `W4.1 small-caps share ${path}`, s.share);
      expect.soft(s.share).toBeLessThanOrEqual(max);
    }
  });

  test('W4.2 numbers read as lining figures in titles, headings, ledes and keywords @ci', async ({ page }) => {
    await open(page, '/lab/', desktop);
    for (const sel of ['.entry-title', '.entry-desc', '.keywords', '.lede']) {
      const [c] = await computed(page, sel, ['font-variant-numeric']);
      expect.soft(c['font-variant-numeric'], sel).toContain('lining-nums');
    }
    const [date] = await computed(page, '.date', ['font-variant-numeric']);
    expect.soft(date['font-variant-numeric']).toContain('oldstyle-nums');
    await open(page, '/dev/kitchen-sink/', desktop);
    const [h2] = await computed(page, '.prose h2', ['font-variant-numeric']);
    expect.soft(h2['font-variant-numeric']).toContain('lining-nums');
    const widths = await page.evaluate(() => {
      const cells = [...document.querySelectorAll('.prose td')];
      const w = (t: string) => {
        const cell = cells.find((c) => c.textContent === t)!;
        const range = document.createRange();
        range.selectNodeContents(cell);
        return range.getBoundingClientRect().width;
      };
      return [w('11.84'), w('10.10')];
    });
    expect.soft(Math.abs(widths[0] - widths[1])).toBeLessThanOrEqual(0.1);
  });

  for (const vp of [phone, desktop]) {
    test(`W4.3 one gap after the double rule at ${vp.width}px @ci`, async ({ page }, info) => {
      for (const path of PAGES) {
        await open(page, path, vp);
        const gap = await page.evaluate(() => {
          const hr = document.querySelector('hr.double-rule')!;
          let next = hr.nextElementSibling as HTMLElement | null;
          while (next && (next.hidden || getComputedStyle(next).display === 'none')) next = next.nextElementSibling as HTMLElement;
          return next!.getBoundingClientRect().top - hr.getBoundingClientRect().bottom;
        });
        record(info, `W4.3 gap ${vp.width} ${path}`, gap);
        expect.soft(Math.abs(gap - 32), path).toBeLessThanOrEqual(1);
      }
    });
  }

  test('W4.4 headings rank by size at 1280px', async ({ page }, info) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    const h2 = await glyphHeights(page, '.prose h2');
    const h3 = await glyphHeights(page, '.prose h3');
    const body = await glyphHeights(page, '.prose p', 'H');
    record(info, 'W4.4 cap heights 1280', { h2: h2?.cap, h3: h3?.cap, body: body?.cap });
    expect.soft(h2!.cap / h3!.cap).toBeGreaterThanOrEqual(1.2);
    expect.soft(h3!.cap / body!.cap).toBeGreaterThanOrEqual(1.08);
    const [h4] = await computed(page, '.prose h4', ['font-weight', 'font-variant-caps']);
    expect.soft(h4['font-weight']).toBe('500');
    expect.soft(h4['font-variant-caps']).toBe('all-small-caps');
  });

  test('W4.4 headings rank and fit on phones', async ({ page }, info) => {
    await open(page, '/dev/kitchen-sink/', phone);
    const h2 = await glyphHeights(page, '.prose h2');
    const h3 = await glyphHeights(page, '.prose h3');
    record(info, 'W4.4 h2/h3 cap ratio 375', h2!.cap / h3!.cap);
    expect.soft(h2!.cap / h3!.cap).toBeGreaterThanOrEqual(1.1);
    for (const path of ARTICLES) {
      await open(page, path, phone);
      const lines = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>('.prose h2')].map(
          (h) => h.getBoundingClientRect().height / parseFloat(getComputedStyle(h).lineHeight),
        ),
      );
      for (const l of lines) expect.soft(l, path).toBeLessThanOrEqual(2.05);
    }
  });

  test('W4.5 vertical rhythm follows the line height and lists sit like the CV', async ({ page }, info) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    const r = await page.evaluate(() => {
      const prose = document.querySelector<HTMLElement>('.prose')!;
      const ps = [...prose.querySelectorAll<HTMLElement>(':scope > p')];
      const lh = parseFloat(getComputedStyle(ps[0]).lineHeight);
      const gaps: number[] = [];
      for (let i = 1; i < ps.length; i++) {
        if (ps[i].previousElementSibling === ps[i - 1]) gaps.push(ps[i].getBoundingClientRect().top - ps[i - 1].getBoundingClientRect().bottom);
      }
      const ul = [...prose.querySelectorAll<HTMLElement>(':scope > ul')][0];
      const items = [...ul.querySelectorAll<HTMLElement>(':scope > li')];
      const range = document.createRange();
      range.selectNodeContents(items[0]);
      const textLeft = range.getClientRects()[0].left;
      const itemGap = items[1].getBoundingClientRect().top - items[0].getBoundingClientRect().bottom;
      return { lh, gaps, bulletIndent: textLeft - prose.getBoundingClientRect().left, itemGap };
    });
    record(info, 'W4.5 rhythm', r);
    for (const g of r.gaps) expect.soft(Math.abs(g - r.lh / 2)).toBeLessThanOrEqual(1);
    expect.soft(r.bulletIndent).toBeLessThanOrEqual(24);
    expect.soft(r.itemGap).toBeLessThanOrEqual(8);
  });

  test('W4.6 running prose uses lining figures; dates stay old-style @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const [p] = await computed(page, '.prose p', ['font-variant-numeric']);
    expect.soft(p['font-variant-numeric']).toContain('lining-nums');
    const [date] = await computed(page, '.date', ['font-variant-numeric']);
    expect.soft(date['font-variant-numeric']).toContain('oldstyle-nums');
  });

  for (const vp of [phone, desktop]) {
    test(`W4.7 list-page section titles outrank their entries at ${vp.width}px`, async ({ page }, info) => {
      await open(page, '/', vp);
      const heading = await glyphHeights(page, '.heading-text');
      const entry = await glyphHeights(page, '.entry-title a');
      record(info, `W4.7 section/entry ${vp.width}`, heading!.cap / entry!.cap);
      expect.soft(heading!.cap / entry!.cap).toBeGreaterThanOrEqual(1.1);
    });
  }
});

test.describe('W5 article shell and orientation', () => {
  for (const vp of [tablet, desktop, wide]) {
    test(`W5.1 section links land below the header at ${vp.width}px @ci`, async ({ page }, info) => {
      for (const [path, id] of [
        ['/lab/astro-7-satteri/', 'two-gotchas'],
        ['/cv/', 'experience'],
      ]) {
        await page.setViewportSize(vp);
        await page.goto(`${path}#${id}`, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(400);
        const top = await page.evaluate((i) => document.getElementById(i)!.getBoundingClientRect().top, id);
        record(info, `W5.1 #${id} top ${vp.width}`, top);
        expect.soft(top).toBeGreaterThanOrEqual(80);
      }
    });
  }

  test('W5.1 keyboard focus is never hidden under the sticky header @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    let hidden = 0;
    for (let i = 0; i < 40; i++) {
      await page.keyboard.press('Shift+Tab');
      hidden += await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        const header = document.querySelector('header')!.getBoundingClientRect();
        if (!el || el === document.body) return 0;
        const r = el.getBoundingClientRect();
        // Fixed elements (the skip link) paint above the header, so they are never hidden by it.
        const fixed = getComputedStyle(el).position === 'fixed';
        return r.top < header.bottom && r.bottom > header.top && r.height > 0 && !el.closest('header') && !fixed ? 1 : 0;
      });
    }
    expect.soft(hidden).toBe(0);
  });

  test('W5.2 every article has one BlogPosting record; post tags sit in a fact row @ci', async ({ page }) => {
    for (const path of REAL_ARTICLES) {
      await open(page, path, desktop);
      const types = await page.evaluate(() =>
        [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent!)['@type']),
      );
      expect.soft(types.filter((t) => t === 'BlogPosting')).toHaveLength(1);
    }
    await open(page, '/blog/hello-world/', desktop);
    await expect.soft(page.locator('.facts dt', { hasText: 'filed under' })).toHaveCount(1);
  });

  test('W5.2 math-free articles load no KaTeX @ci', async ({ page }) => {
    const requests: string[] = [];
    page.on('request', (r) => requests.push(r.url()));
    await open(page, '/lab/pnpm-12-typescript-7/', desktop);
    expect.soft(requests.filter((u) => /katex/i.test(u))).toHaveLength(0);
    requests.length = 0;
    await open(page, '/lab/astro-7-satteri/', desktop);
    expect.soft(requests.some((u) => /katex/i.test(u))).toBe(true);
  });

  test('W5.3 code frames align with the double rule and hold 82 columns at 1280px', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const r = await page.evaluate(() => {
      const rule = document.querySelector('hr.double-rule')!.getBoundingClientRect().left;
      const frames = [...document.querySelectorAll('.prose .expressive-code')].map((f) => f.getBoundingClientRect().left);
      const line = document.querySelector<HTMLElement>('.expressive-code .ec-line .code')!;
      const pre = document.querySelector<HTMLElement>('.expressive-code pre')!;
      const cs = getComputedStyle(line);
      const ctx = document.createElement('canvas').getContext('2d')!;
      ctx.font = `${cs.fontSize} ${cs.fontFamily}`;
      const advance = ctx.measureText('0000000000').width / 10;
      const ps = getComputedStyle(pre.querySelector('code') ?? pre);
      const inner = pre.clientWidth - parseFloat(ps.paddingLeft) - parseFloat(ps.paddingRight) - 32;
      return { rule, frames, columns: Math.floor(inner / advance) };
    });
    record(info, 'W5.3 breakout', r);
    for (const left of r.frames) expect.soft(Math.abs(left - r.rule)).toBeLessThanOrEqual(1);
    expect.soft(r.columns).toBeGreaterThanOrEqual(82);
  });

  test('W5.3 phones show at least 44 code columns', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', phone);
    const cols = await page.evaluate(() => {
      const line = document.querySelector<HTMLElement>('.expressive-code .ec-line .code')!;
      const pre = document.querySelector<HTMLElement>('.expressive-code pre')!;
      const ctx = document.createElement('canvas').getContext('2d')!;
      const cs = getComputedStyle(line);
      ctx.font = `${cs.fontSize} ${cs.fontFamily}`;
      return pre.clientWidth / (ctx.measureText('0000000000').width / 10);
    });
    record(info, 'W5.3 phone code columns', cols);
    expect.soft(cols).toBeGreaterThanOrEqual(44);
  });

  test('W5.4 every section heading has a § link with a clean name @ci', async ({ page }) => {
    for (const path of ARTICLES) {
      await open(page, path, desktop);
      const heads = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>('.prose h2, .prose h3')].map((h) => {
          const anchor = h.nextElementSibling as HTMLAnchorElement | null;
          const box = anchor?.getBoundingClientRect();
          return {
            id: h.id,
            text: h.textContent ?? '',
            href: anchor?.matches('a.anchor') ? anchor.getAttribute('href') : null,
            w: box?.width ?? 0,
            h: box?.height ?? 0,
          };
        }),
      );
      const ids = heads.map((h) => h.id);
      expect.soft(new Set(ids).size, path).toBe(ids.length);
      for (const h of heads) {
        expect.soft(h.id, path).toMatch(/^[a-z0-9-]+$/);
        expect.soft(h.href, `${path} ${h.id}`).toBe(`#${h.id}`);
        expect.soft(h.text).not.toContain('§');
        expect.soft(h.w).toBeGreaterThanOrEqual(44);
        expect.soft(h.h).toBeGreaterThanOrEqual(24);
      }
    }
    await open(page, '/lab/astro-7-satteri/', desktop);
    await expect.soft(page.getByRole('heading', { name: 'Two gotchas', exact: true })).toHaveCount(1);
  });

  test('W5.5 long notes list their sections; short posts do not @ci', async ({ page }) => {
    for (const path of LAB_NOTES) {
      await open(page, path, desktop);
      await expect.soft(page.locator('.contents-row a')).toHaveCount(5);
    }
    await open(page, '/blog/hello-world/', desktop);
    await expect.soft(page.locator('.contents-row, .contents-disclosure')).toHaveCount(0);
  });

  test('W5.5 the first line of the text stays on the first desktop screen', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const bottom = await page.evaluate(() => {
      const p = document.querySelector<HTMLElement>('.prose > p')!;
      return p.getBoundingClientRect().top + parseFloat(getComputedStyle(p).lineHeight);
    });
    record(info, 'W5.5 first line bottom @1280x900', bottom);
    expect.soft(bottom).toBeLessThanOrEqual(0.85 * 900);
    await open(page, '/lab/astro-7-satteri/', phone);
    const disclosure = await page.locator('.contents-disclosure').boundingBox();
    expect.soft(disclosure!.height).toBeLessThanOrEqual(32);
  });

  test('W5.6 a phone reaches the article on its first screen', async ({ page }, info) => {
    for (const [vp, lines] of [
      [phone, 3],
      [phoneShort, 1],
    ] as const) {
      await open(page, '/lab/astro-7-satteri/', vp);
      const r = await page.evaluate((n) => {
        const p = document.querySelector<HTMLElement>('.prose > p')!;
        const facts = document.querySelector<HTMLElement>('.facts')!;
        return {
          line: p.getBoundingClientRect().top + n * parseFloat(getComputedStyle(p).lineHeight),
          facts: facts.getBoundingClientRect().height,
        };
      }, lines);
      record(info, `W5.6 ${vp.width}x${vp.height}`, r);
      expect.soft(r.line).toBeLessThanOrEqual(vp.height);
      if (vp === phone) expect.soft(r.facts).toBeLessThanOrEqual(200);
    }
    await open(page, '/lab/', phone);
    const kicker = await page.evaluate(
      () => document.querySelector('.kicker')!.getBoundingClientRect().top - document.querySelector('main > div')!.getBoundingClientRect().top,
    );
    record(info, 'W5.6 list kicker offset', kicker);
    expect.soft(kicker).toBeLessThanOrEqual(41);
  });

  test('W5.6 the fact sheet stays compact from 768px', async ({ page }, info) => {
    await open(page, '/lab/astro-7-satteri/', tablet);
    const h = await page.evaluate(() => {
      const facts = document.querySelector<HTMLElement>('.facts')!;
      const contents = facts.querySelector<HTMLElement>('.contents-row');
      return facts.getBoundingClientRect().height - (contents?.getBoundingClientRect().height ?? 0);
    });
    record(info, 'W5.6 fact sheet @768', h);
    expect.soft(h).toBeLessThanOrEqual(228);
  });
});

test.describe('W6 endings and paths between articles', () => {
  test('W6.1 articles link to each other; the Blog lede is its own @ci', async ({ page }) => {
    await open(page, '/blog/hello-world/', desktop);
    expect.soft(await page.locator('.prose a[href^="/"]').count()).toBeGreaterThanOrEqual(2);
    await open(page, '/lab/pnpm-12-typescript-7/', desktop);
    await expect.soft(page.locator('.prose a[href="/lab/astro-7-satteri/"]')).not.toHaveCount(0);
    await open(page, '/blog/', desktop);
    expect.soft(await page.locator('.lede').textContent()).not.toMatch(/notes/i);
  });

  test('W6.2 every article ends with a fleuron, a colophon and at least three links @ci', async ({ page }) => {
    for (const path of REAL_ARTICLES) {
      await open(page, path, desktop);
      const end = page.locator('.article-end');
      await expect.soft(end.locator('.fleuron')).toHaveCount(1);
      expect.soft(await end.locator('a[href^="/"], a[href^="#"]').count(), path).toBeGreaterThanOrEqual(3);
      const [colophon] = await computed(page, '.article-end .colophon', ['font-size']);
      expect.soft(parseFloat(colophon['font-size'])).toBeGreaterThanOrEqual(16);
    }
    for (const label of ['Blog', 'Lab']) await expect.soft(page.locator('footer a', { hasText: label })).toHaveCount(1);
  });

  test('W6.2 from the end of a note, the next one is one tap away on a phone', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', phone);
    const distance = await page.evaluate(() => {
      const ps = document.querySelectorAll('.prose > p');
      const last = ps[ps.length - 1].getBoundingClientRect().bottom;
      const link = document.querySelector('.article-end a[href="/lab/pnpm-12-typescript-7/"]')!.getBoundingClientRect().top;
      return link - last;
    });
    expect.soft(distance).toBeLessThanOrEqual(812);
  });

  test('W6.3 the kicker is a visible breadcrumb @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const link = page.locator('.kicker a').first();
    const [deco] = await computed(page, '.kicker a', ['text-decoration-line']);
    expect.soft(deco['text-decoration-line']).toBe('underline');
    expect.soft((await link.boundingBox())!.height).toBeGreaterThanOrEqual(24);
    await expect.soft(page.locator('.kicker')).toContainText('Software');
  });

  test('W6.4 index pages keep heading order and hide empty filters @ci', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    for (const path of ['/blog/', '/lab/', '/tags/', '/tags/astro/', '/reading/']) {
      await open(page, path, desktop);
      expect.soft((await headingSkips(page)).skips, path).toEqual([]);
    }
    await open(page, '/lab/', desktop);
    await expect.soft(page.locator('#lab-filters')).toHaveCount(0);
    expect.soft(errors).toEqual([]);
    await open(page, '/reading/', desktop);
    await expect.soft(page.locator('a.pill[href="/reading/rss.xml"]')).toHaveCount(0);
  });

  test('W6.4 short pages end at the sheet, and phone entries are compact', async ({ page }, info) => {
    for (const vp of [tablet, desktop, wide]) {
      for (const path of ['/blog/', '/tags/', '/reading/', '/tags/meta/', '/404.html']) {
        await open(page, path, vp);
        const gap = await page.evaluate(
          () => document.querySelector('footer')!.getBoundingClientRect().top - document.querySelector('main > div')!.getBoundingClientRect().bottom,
        );
        record(info, `W6.4 bare ${vp.width} ${path}`, gap);
        expect.soft(gap, `${path} @${vp.width}`).toBeLessThanOrEqual(48);
      }
    }
    await open(page, '/lab/', phone);
    const r = await page.evaluate(() => ({
      first: document.querySelector('.entry')!.getBoundingClientRect().top,
      heights: [...document.querySelectorAll('.entry')].map((e) => e.getBoundingClientRect().height),
    }));
    record(info, 'W6.4 lab list @375', r);
    expect.soft(r.first).toBeLessThanOrEqual(0.62 * 812);
    for (const h of r.heights) expect.soft(h).toBeLessThanOrEqual(230);
  });

  test('W6.5 feeds: a global feed and one per section @ci', async ({ request }) => {
    const items = async (path: string) => ((await (await request.get(path)).text()).match(/<item>/g) ?? []).length;
    expect.soft(await items('/rss.xml')).toBe(3);
    expect.soft(await items('/blog/rss.xml')).toBe(1);
    expect.soft(await items('/lab/rss.xml')).toBe(2);
  });

  test('W6.5 tag pages list both collections; /tags/ reads as an index', async ({ page }, info) => {
    await open(page, '/tags/astro/', desktop);
    expect.soft(await page.locator('main .entry').count()).toBeGreaterThanOrEqual(2);
    await open(page, '/tags/', desktop);
    const s = await smallCaps(page, 'main');
    record(info, 'W6.5 /tags/ small caps in main', s.share);
    expect.soft(s.share).toBeLessThanOrEqual(0.25);
  });

  test('W6.6 every article links to a related one @ci', async ({ page }) => {
    for (const path of REAL_ARTICLES) {
      await open(page, path, desktop);
      await expect.soft(page.locator('.article-end dt', { hasText: /related|series/ }).first(), path).toBeVisible();
    }
  });
});

test.describe('W7 long-form devices and print', () => {
  test('W7.1 print keeps code, shows link targets and hides section marks @ci', async ({ page }) => {
    for (const path of ARTICLES) {
      await open(page, path, desktop);
      await page.emulateMedia({ media: 'print' });
      const o = await overflow(page);
      expect.soft(Math.max(0, ...o.pre), path).toBeLessThanOrEqual(1);
      const anchors = await computed(page, '.prose a.anchor', ['display']);
      expect.soft(anchors.every((a) => a.display === 'none')).toBe(true);
      await page.emulateMedia({ media: 'screen' });
    }
    await open(page, '/blog/hello-world/', desktop);
    await page.emulateMedia({ media: 'print' });
    const after = await page.evaluate(() => getComputedStyle(document.querySelector('.prose a[href^="http"]')!, '::after').content);
    expect.soft(after).toMatch(/astro\.build|attr\(href\)/);
  });

  test('W7.1 the CV prints to at least three A4 pages (owner decision O2)', async ({ page }, info) => {
    await open(page, '/cv/', desktop);
    const pages = await printedPages(page);
    record(info, 'O2 CV print pages', pages);
    expect.soft(pages).toBeGreaterThanOrEqual(3);
  });

  test('W7.2 footnotes read as notes', async ({ page }, info) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    const r = await page.evaluate(() => {
      const notes = document.querySelector<HTMLElement>('.footnotes li p, [data-footnotes] li p')!;
      const body = document.querySelector<HTMLElement>('.prose > p')!;
      const label = document.querySelector<HTMLElement>('.footnotes h2, [data-footnotes] h2')!;
      const ref = document.querySelector<HTMLElement>('sup a[data-footnote-ref], a[data-footnote-ref]')!.getBoundingClientRect();
      const back = document.querySelector('[data-footnote-backref]')!;
      return {
        ratio: parseFloat(getComputedStyle(notes).fontSize) / parseFloat(getComputedStyle(body).fontSize),
        labelVisible: label.getBoundingClientRect().width > 1,
        back: back.textContent,
        ref: [ref.width, ref.height],
      };
    });
    record(info, 'W7.2 footnotes', r);
    expect.soft(r.ratio).toBeLessThanOrEqual(0.9);
    expect.soft(r.labelVisible).toBe(true);
    expect.soft(r.back).toContain('↑');
    expect.soft(r.ref[0]).toBeGreaterThanOrEqual(12);
    expect.soft(r.ref[1]).toBeGreaterThanOrEqual(18);
  });

  test('W7.3 tables, quotations, figures and definitions in house style @ci', async ({ page }) => {
    for (const vp of [xs, phone]) {
      await open(page, '/dev/kitchen-sink/', vp);
      expect.soft((await overflow(page)).document).toBeLessThanOrEqual(0);
    }
    await open(page, '/dev/kitchen-sink/', desktop);
    await expect.soft(page.locator('.prose .table-scroll table')).toHaveCount(1);
    const [quote] = await computed(page, '.prose blockquote:not(.callout)', ['font-style']);
    expect.soft(quote['font-style']).toBe('normal');
    const quoteMark = await page.evaluate(
      () => getComputedStyle(document.querySelector('.prose blockquote:not(.callout) p')!, '::before').content,
    );
    expect.soft(['none', 'normal', '""']).toContain(quoteMark);
    await expect.soft(page.locator('.prose figure figcaption')).toHaveText('A three-stage pipeline');
    expect.soft(await page.locator('.prose figure img').getAttribute('srcset')).toBeTruthy();
    const [dt] = await computed(page, '.prose dt', ['font-variant-caps', 'font-weight']);
    expect.soft(dt['font-variant-caps']).toBe('all-small-caps');
    expect.soft(dt['font-weight']).toBe('500');
  });

  test('W7.4 GitHub alerts render as callouts; colons survive @ci', async ({ page }) => {
    await open(page, '/dev/kitchen-sink/', desktop);
    await expect.soft(page.locator('.prose aside.callout.callout-warning')).toHaveCount(1);
    const text = await page.locator('.prose').textContent();
    for (const s of ['localhost:4321', 'At 10:30', 'ratio was 3:2', 'node:fs', '@astrojs/mdx:latest', 'key:value']) {
      expect.soft(text).toContain(s);
    }
  });

  test('W7.6 acronyms in article bodies are set in small caps like titles @ci', async ({ page }) => {
    await open(page, '/lab/astro-7-satteri/', desktop);
    const caps = await page.evaluate(() => {
      const body = [...document.querySelectorAll('.prose .sc')].map((e) => e.textContent);
      const inCode = document.querySelectorAll('.prose code .sc, .prose a .sc').length;
      return { body, inCode };
    });
    expect.soft(caps.body).toContain('API');
    expect.soft(caps.inCode).toBe(0);
  });
});

test.describe('W8 accessibility', () => {
  for (const scheme of ['light', 'dark'] as const) {
    test(`W8.1 link underlines and status colours are legible (${scheme}) ${scheme === 'dark' ? '@dark' : ''} @ci`, async ({
      page,
    }, info) => {
      await open(page, '/blog/hello-world/', desktop);
      const [paper] = await computed(page, 'main > div', ['background-color']);
      const [prose] = await computed(page, '.prose a[href^="http"]', ['text-decoration-color', 'text-decoration-thickness']);
      const [other] = await computed(page, '.article-end a', ['text-decoration-color', 'text-decoration-thickness']);
      expect.soft(prose).toEqual(other);
      const ratio = await contrast(page, prose['text-decoration-color'], paper['background-color']);
      record(info, `W8.1 underline contrast ${scheme}`, ratio);
      expect.soft(ratio).toBeGreaterThanOrEqual(3);
      await open(page, '/dev/kitchen-sink/', desktop);
      const statuses = await computed(page, '.status', ['color']);
      for (const s of statuses) expect.soft(await contrast(page, s.color, paper['background-color'])).toBeGreaterThanOrEqual(4.5);
    });
  }

  test('W8.2 no axe violations on any page', async ({ page }, info) => {
    for (const path of PAGES) {
      await open(page, path, desktop);
      const results = await new AxeBuilder({ page }).analyze();
      record(
        info,
        `W8.2 axe ${path}`,
        results.violations.map((v) => v.id),
      );
      expect.soft(results.violations.map((v) => `${v.id}: ${v.nodes.length}`), path).toEqual([]);
    }
  });

  test('W8.2 headings, targets and the phone header @ci', async ({ page }, info) => {
    await open(page, '/cv/', desktop);
    await expect.soft(page.getByRole('heading', { name: 'Earlier experience, before 2015' })).toHaveCount(1);
    await open(page, '/blog/', phone);
    const targets = await page.evaluate(() =>
      [...document.querySelectorAll('header nav a.nav-link, .keywords a')].map((a) => {
        const r = a.getBoundingClientRect();
        return [Math.round(r.width * 10) / 10, Math.round(r.height * 10) / 10];
      }),
    );
    record(info, 'W8.2 targets @375', targets);
    for (const [w, h] of targets) {
      expect.soft(w).toBeGreaterThanOrEqual(24);
      expect.soft(h).toBeGreaterThanOrEqual(24);
    }
    const header = (await page.locator('header').boundingBox())!.height;
    record(info, 'W8.2 phone header height', header);
    expect.soft(header).toBeLessThanOrEqual(107.4);
    expect.soft((await overflow(page)).document).toBeLessThanOrEqual(0);
  });

  test('W1.2 heading levels never skip on articles @ci', async ({ page }) => {
    for (const path of ARTICLES) {
      await open(page, path, desktop);
      expect.soft((await headingSkips(page)).skips, path).toEqual([]);
    }
  });
});

test.describe('W2.2 ink', () => {
  test('W2.2 light mode is darker without antialiasing (local, macOS)', async ({ page }, info) => {
    test.skip(process.platform !== 'darwin', 'font smoothing only differs on macOS');
    await open(page, '/lab/astro-7-satteri/', desktop);
    const shot = async () => {
      const box = (await page.locator('.prose > p').first().boundingBox())!;
      const png = await page.screenshot({ clip: box });
      const sharp = (await import('sharp')).default;
      const { data, info: meta } = await sharp(png).greyscale().raw().toBuffer({ resolveWithObject: true });
      let dark = 0;
      for (const v of data) dark += 255 - v;
      return dark / (meta.width * meta.height);
    };
    const now = await shot();
    await page.addStyleTag({ content: 'body{-webkit-font-smoothing:antialiased!important}' });
    const thin = await shot();
    record(info, 'W2.2 mean darkness auto vs antialiased', { now, thin });
    expect.soft(now / thin).toBeGreaterThanOrEqual(1.15);
  });
});
