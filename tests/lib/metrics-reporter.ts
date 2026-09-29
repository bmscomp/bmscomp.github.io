import { mkdirSync, writeFileSync } from 'node:fs';
import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

/**
 * Collects the `metric` annotations recorded by tests (see record() in measure.ts). With MEASURE=1
 * (`pnpm measure`) it prints them as a table and writes test-results/metrics.json.
 */
export default class MetricsReporter implements Reporter {
  private metrics: { test: string; name: string; value: unknown }[] = [];

  onTestEnd(test: TestCase, _result: TestResult) {
    for (const a of test.annotations) {
      if (a.type !== 'metric' || !a.description) continue;
      const { name, value } = JSON.parse(a.description);
      this.metrics.push({ test: test.title, name, value });
    }
  }

  onEnd(_result: FullResult) {
    if (!process.env.MEASURE) return;
    mkdirSync('test-results', { recursive: true });
    writeFileSync('test-results/metrics.json', `${JSON.stringify(this.metrics, null, 2)}\n`);
    const rows = this.metrics.map((m) => `${m.name.padEnd(64)} ${JSON.stringify(m.value)}`);
    console.log(`\nReadability metrics (${this.metrics.length}, also in test-results/metrics.json)\n${rows.join('\n')}`);
  }
}
