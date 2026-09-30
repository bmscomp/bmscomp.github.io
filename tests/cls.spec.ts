import { type Browser, expect, test } from '@playwright/test';
import { record } from './lib/measure';

// W2.1: layout shift while the webfont arrives, under Slow 4G and a 4x slower CPU. Median of 5 cold
// runs per case, run serially (project "cls"), local only: shared CI runners make this noisy.
// [path, width, height, limit]. Baselines before W2.1: 0.155, 0.089, 0.020, 0.007 and 0.191.
// /cv/ keeps a looser limit: its synthesized fallback small caps cannot be matched by @font-face
// overrides (tracked separately, per the plan).
const CASES = [
  ['/mathematics/basel-problem/', 1280, 900, 0.05],
  ['/mathematics/basel-problem/', 768, 1024, 0.05],
  ['/', 375, 812, 0.05],
  ['/lab/astro-7-satteri/', 1280, 900, 0.05],
  ['/cv/', 768, 1024, 0.1],
] as const;

/** A cold page under Slow 4G and a 4x slower CPU. */
async function throttled(browser: Browser, width: number, height: number) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  return { context, page };
}

for (const [path, width, height, limit] of CASES) {
  test(`W2.1 throttled layout shift on ${path} at ${width}px @cls`, async ({ browser }, info) => {
    const runs: number[] = [];
    for (let i = 0; i < 5; i++) {
      const { context, page } = await throttled(browser, width, height);
      await page.addInitScript(() => {
        (window as unknown as { __cls: number }).__cls = 0;
        new PerformanceObserver((list) => {
          for (const e of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
            if (!e.hadRecentInput) (window as unknown as { __cls: number }).__cls += e.value;
          }
        }).observe({ type: 'layout-shift', buffered: true });
      });
      await page.goto(path, { waitUntil: 'load' });
      await page.waitForTimeout(2500);
      runs.push(await page.evaluate(() => (window as unknown as { __cls: number }).__cls));
      await context.close();
    }
    runs.sort((a, b) => a - b);
    const median = runs[2];
    record(info, `W2.1 CLS ${path} @${width}`, { median, runs });
    expect(median).toBeLessThanOrEqual(limit);
  });
}

// W8.3: KaTeX's faces use font-display: block, so formulas stay blank until they load. Preloaded, the
// two every formula uses arrive within 100 ms of first contentful paint (baseline about 500 ms).
for (const path of ['/lab/astro-7-satteri/', '/mathematics/basel-problem/']) {
  test(`W8.3 math fonts arrive with first paint on ${path} @cls`, async ({ browser }, info) => {
    const runs: number[] = [];
    for (let i = 0; i < 5; i++) {
      const { context, page } = await throttled(browser, 1280, 900);
      await page.goto(path, { waitUntil: 'load' });
      await page.waitForTimeout(1500);
      runs.push(
        await page.evaluate(() => {
          const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? 0;
          const fonts = performance
            .getEntriesByType('resource')
            .filter((r) => /KaTeX_(Main-Regular|Math-Italic)/.test(r.name)) as PerformanceResourceTiming[];
          // Both faces must have loaded; otherwise there is nothing to time (and no math on screen).
          if (fonts.length < 2) return Number.POSITIVE_INFINITY;
          return Math.max(...fonts.map((f) => f.responseEnd)) - fcp;
        }),
      );
      await context.close();
    }
    runs.sort((a, b) => a - b);
    record(info, `W8.3 KaTeX fonts after FCP ${path}`, { median: runs[2], runs });
    expect(runs[2]).toBeLessThanOrEqual(100);
  });
}
