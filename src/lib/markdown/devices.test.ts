import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { features, hastPlugins, mdastPlugins } from './index.ts';

const processor = await createSatteriMarkdownProcessor({ syntaxHighlight: false, features, mdastPlugins, hastPlugins });
const html = async (md: string) => (await processor.render(md)).code;

test('footnotes: a visible "Notes" label, ↑ back-links, no § link on the label', async () => {
  const code = await html('A claim.[^1]\n\n[^1]: The source.\n');
  assert.match(code, /<h2[^>]*id="footnote-label"[^>]*>Notes<\/h2>/);
  assert.match(code, /data-footnote-backref[^>]*>↑<\/a>/);
  assert.doesNotMatch(code, /href="#footnote-label"/);
});

test('tables: wrapped in a labelled, focusable scroll region', async () => {
  const code = await html('| Run | p50 |\n|---|--:|\n| a | 1 |\n\n| x |\n|---|\n| y |\n');
  assert.match(code, /<div class="table-scroll" role="region" tabindex="0" aria-label="Table 1: Run, p50"><table>/);
  assert.match(code, /aria-label="Table 2: x"/);
});

test('figures: a titled image alone in its paragraph gets a caption; others are untouched', async () => {
  const code = await html(
    [
      '![A pipeline](https://example.com/a.png "Three stages")',
      '![Untitled](https://example.com/b.png)',
      '[![Linked](https://example.com/c.png "Linked title")](https://example.com)',
      'Text and ![inline](https://example.com/d.png "Inline title") image.',
    ].join('\n\n'),
  );
  assert.match(code, /<figure><img src="https:\/\/example.com\/a.png" alt="A pipeline"><figcaption>Three stages<\/figcaption><\/figure>/);
  assert.equal((code.match(/<figure>/g) ?? []).length, 1);
  assert.match(code, /title="Linked title"/);
  assert.match(code, /title="Inline title"/);
});

test('callouts: GitHub alerts become labelled asides; other quotations stay quotations', async () => {
  const code = await html('> [!WARNING]\n> Mind the `gap`.\n\n> [!TIP]\n>\n> Second paragraph.\n\n> An ordinary quote [!NOTE].\n');
  assert.match(
    code,
    /<aside class="callout callout-warning" role="note">\s*<p class="callout-label">Warning<\/p>\s*<p>Mind the <code>gap<\/code>.<\/p>\s*<\/aside>/,
  );
  assert.match(code, /<aside class="callout callout-tip" role="note">\s*<p class="callout-label">Tip<\/p>\s*<p>Second paragraph.<\/p>/);
  assert.match(code, /<blockquote>\s*<p>An ordinary quote \[!/);
});

test('colons survive: no directive syntax', async () => {
  const code = await html('Listen on localhost:4321. At 10:30 it ran. Import node:fs and set key:value.\n');
  for (const s of ['localhost:4321', 'At 10:30', 'node:fs', 'key:value']) assert.ok(code.includes(s), s);
});

test('acronyms: small caps in running text, not in code, links or headings', async () => {
  const code = await html('## The API\n\nThe API and two URLs, `HTTP` and [HTML](https://x.dev). TypeScript, macOS.\n');
  assert.match(code, /The <span class="sc">API<\/span> and two <span class="sc">URL<\/span>s/);
  assert.match(code, /<code>HTTP<\/code>/);
  assert.match(code, /<a href="https:\/\/x.dev">HTML<\/a>/);
  assert.match(code, /<h2 id="the-api">The API<\/h2>/);
  assert.doesNotMatch(code, /Type<span|mac<span/);
});

test('definition lists render as dl', async () => {
  const code = await html('Throughput\n: Messages per second.\n');
  assert.match(code, /<dl>\s*<dt>Throughput<\/dt>\s*<dd>\s*(<p>)?Messages per second.(<\/p>)?\s*<\/dd>\s*<\/dl>/);
});
