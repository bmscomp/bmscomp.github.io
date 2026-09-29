import { expect, test } from '@playwright/test';
import { record } from './lib/measure';

// W2.1: layout shift while the webfont arrives, under Slow 4G and a 4x slower CPU. Median of 5 cold
// runs per case, run serially (project "cls"), local only: shared CI runners make this noisy.
// [path, width, height, limit]. Baselines before W2.1: 0.155, 0.089, 0.020, 0.007 and 0.191.
// hello-world @1280 is a known residual: its title is 586.9px in a 588px column, so any fallback face
// wraps it (the fallback is within 2% of EB Garamond on every title). Only font-display: optional
// would remove it (owner decision O6 keeps swap), so that case is held to its baseline instead.
const CASES = [
  ['/blog/hello-world/', 1280, 900, 0.155],
  ['/blog/hello-world/', 768, 1024, 0.05],
  ['/', 375, 812, 0.05],
  ['/lab/astro-7-satteri/', 1280, 900, 0.05],
  ['/cv/', 768, 1024, 0.1],
] as const;

for (const [path, width, height, limit] of CASES) {
  test(`W2.1 throttled layout shift on ${path} at ${width}px @cls`, async ({ browser }, info) => {
    const runs: number[] = [];
    for (let i = 0; i < 5; i++) {
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
