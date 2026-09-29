import { defineConfig, devices } from '@playwright/test';

// Runs against `astro preview` of a FIXTURES=1 build (pnpm test:e2e builds it first).
// Locally it drives the installed Chrome; CI uses Playwright's Chromium. WebKit (hyphenation and
// Safari rendering) runs only with PW_WEBKIT=1, after `pnpm exec playwright install webkit`.
const ci = !!process.env.CI;

export default defineConfig({
  testDir: 'tests',
  timeout: 120_000,
  fullyParallel: true,
  forbidOnly: ci,
  workers: ci ? 2 : undefined,
  reporter: [[ci ? 'github' : 'list'], ['./tests/lib/metrics-reporter.ts']],
  use: {
    baseURL: 'http://127.0.0.1:4322',
    channel: ci ? undefined : 'chrome',
  },
  webServer: {
    command: './node_modules/.bin/astro preview --host 127.0.0.1 --port 4322 --ignore-lock',
    url: 'http://127.0.0.1:4322/',
    reuseExistingServer: false,
    timeout: 60_000,
  },
  projects: [
    { name: 'light', use: { colorScheme: 'light' }, grepInvert: /@dark|@cls|@webkit/ },
    { name: 'dark', use: { colorScheme: 'dark' }, grep: /@dark/ },
    // Throttled layout shift: serial, local only (noisy on shared CI runners).
    { name: 'cls', grep: /@cls/, fullyParallel: false, workers: 1 },
    ...(process.env.PW_WEBKIT ? [{ name: 'webkit', use: { ...devices['Desktop Safari'] }, grep: /@webkit/ }] : []),
  ],
});
