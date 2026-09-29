import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { features, hastPlugins, mdastPlugins } from './index.ts';

const processor = await createSatteriMarkdownProcessor({ syntaxHighlight: false, features, mdastPlugins, hastPlugins });
const render = (md: string) => processor.render(md);

test('ids are ASCII: accents fold, other scripts drop', async () => {
  const { metadata } = await render('## Math with a native Sätteri plugin\n\n## Ça va\n\n## 日本語\n');
  assert.deepEqual(
    metadata.headings.map((h) => h.slug),
    ['math-with-a-native-satteri-plugin', 'ca-va', 'section'],
  );
});

test('one slugger per document: repeats are numbered, and a new document starts over', async () => {
  const first = await render('## Setup\n\n## Setup\n');
  const second = await render('## Setup\n');
  assert.deepEqual(first.metadata.headings.map((h) => h.slug), ['setup', 'setup-1']);
  assert.deepEqual(second.metadata.headings.map((h) => h.slug), ['setup']);
});

test('custom ids are kept and reserved, even when they come later', async () => {
  const { metadata } = await render('## Setup\n\n## Other {#setup}\n');
  assert.deepEqual(metadata.headings.map((h) => h.slug), ['setup-1', 'setup']);
});

test('h2 and h3 get a sibling § link; heading text stays clean', async () => {
  const { code, metadata } = await render('## Two gotchas\n\n### Running `astro check`\n\n#### Deep\n');
  assert.match(
    code,
    /<div class="section-head"><h2 id="two-gotchas">Two gotchas<\/h2><a class="anchor" href="#two-gotchas" aria-label="Link to section: Two gotchas"><\/a><\/div>/,
  );
  assert.match(code, /<a class="anchor" href="#running-astro-check" aria-label="Link to section: Running astro check">/);
  assert.match(code, /<h4 id="deep">Deep<\/h4>/);
  assert.equal((code.match(/class="anchor"/g) ?? []).length, 2);
  assert.deepEqual(
    metadata.headings.map((h) => h.text),
    ['Two gotchas', 'Running astro check', 'Deep'],
  );
});

test('math marks the frontmatter so the page links the KaTeX stylesheet', async () => {
  const withMath = await processor.render('Energy: $E = mc^2$.\n', { frontmatter: {} });
  const without = await processor.render('No math here, only prose.\n', { frontmatter: {} });
  assert.equal(withMath.metadata.frontmatter.hasMath, true);
  assert.equal(without.metadata.frontmatter.hasMath, undefined);
});
