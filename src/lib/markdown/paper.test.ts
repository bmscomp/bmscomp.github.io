import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { features, hastPlugins, mdastPlugins } from './index.ts';

const processor = await createSatteriMarkdownProcessor({ syntaxHighlight: false, features, mdastPlugins, hastPlugins });
const html = async (md: string) => (await processor.render(md)).code;

test('equations: \\label numbers a display, $\\eqref$ links to it; numbering restarts per document', async () => {
  const code = await html(
    [
      'See $\\eqref{eq:basel}$ and $\\eqref{eq:zeta4}$.',
      '$$\n\\sum_{n\\ge1} \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\label{eq:basel}\n$$',
      '$$\nx = y\n$$',
      '$$\n\\zeta(4) = \\frac{\\pi^4}{90} \\label{eq:zeta4}\n$$',
      'Inline $a \\eqref{eq:basel}$ and unknown $\\eqref{nope}$.',
    ].join('\n\n'),
  );
  assert.match(code, /<a class="eqref" href="#eq-basel">\(1\)<\/a>/);
  assert.match(code, /<a class="eqref" href="#eq-zeta4">\(2\)<\/a>/);
  assert.match(code, /<div class="math-display" id="eq-basel">/);
  assert.match(code, /<div class="math-display" id="eq-zeta4">/);
  assert.equal((code.match(/<div class="math-display">/g) ?? []).length, 1, 'the unlabelled display has no id');
  assert.match(code, /<span class="eqref">\(\?\?\)<\/span>/);
  assert.doesNotMatch(code, /katex-error|\\label/);
  const again = await html('$$\na = b \\label{eq:one}\n$$\n\n$\\eqref{eq:one}$\n');
  assert.match(again, /href="#eq-one">\(1\)</);
});

test('environments: numbered theorems with notes, proofs, remarks; alerts unchanged', async () => {
  const code = await html(
    [
      '> [!THEOREM] Euler, 1735',
      '> The squares sum to $\\pi^2/6$.',
      '',
      '> [!PROOF] of Theorem 1',
      '> Squeeze.',
      '',
      '> [!LEMMA]',
      '>',
      '> $$',
      '> x = 1',
      '> $$',
      '',
      '> [!REMARK]',
      '> Not rigorous.',
      '',
      '> [!NOTE] with a title stays a quotation',
      '',
      '> [!NOTE]',
      '> An alert.',
    ].join('\n'),
  );
  assert.match(
    code,
    /<div class="env env-theorem" id="theorem-1">\s*<p><strong class="env-label">Theorem 1<\/strong> <span class="env-note">\(Euler, 1735\)<\/span>. The squares sum to/,
  );
  assert.match(code, /<div class="env env-proof">\s*<p><em class="env-label">Proof of Theorem 1<\/em>. Squeeze.<\/p>/);
  assert.match(code, /<div class="env env-lemma" id="lemma-2">\s*<p><strong class="env-label">Lemma 2<\/strong>. <\/p>\s*<div class="math-display">/);
  assert.match(code, /<div class="env env-remark">\s*<p><em class="env-label">Remark<\/em>. Not rigorous.<\/p>/);
  assert.match(code, /<blockquote>\s*<p>\[!<span class="sc">NOTE<\/span>\] with a title stays a quotation<\/p>/);
  assert.match(code, /<aside class="callout callout-note" role="note">/);
});

test('tables: a "Table:" paragraph after a table becomes its caption and names the region', async () => {
  const code = await html('| N | S |\n|--:|--:|\n| 10 | 1.5 |\n\nTable: Partial sums of $1/n^2$.\n\nAfter.\n');
  assert.match(code, /aria-label="Table 1: Partial sums of 1\/n\^2."><table><caption>Partial sums of <span class="katex">/);
  assert.doesNotMatch(code, /<p>Table:/);
  assert.match(code, /<p>After.<\/p>/);
});

test('citations: [n] links to the reference list after a References heading, nowhere else', async () => {
  const code = await html(
    [
      'Euler [1], Cauchy [1, 2], out of range [3], code `[1]`, a [link [1]](https://x.dev).',
      '## References',
      '1. L. Euler, *De summis serierum reciprocarum* (1740).',
      '2. A.-L. Cauchy, *Cours d’analyse* (1821) [1].',
    ].join('\n\n'),
  );
  assert.match(code, /Euler \[<a class="cite" href="#ref-1">1<\/a>\], Cauchy \[<a class="cite" href="#ref-1">1<\/a>, <a class="cite" href="#ref-2">2<\/a>\], out of range \[3\]/);
  assert.match(code, /<code>\[1\]<\/code>/);
  assert.match(code, /<ol class="references">\s*<li id="ref-1">/);
  assert.match(code, /<li id="ref-2">\s*(<p>)?A.-L. Cauchy, <em>Cours d’analyse<\/em> \(1821\) \[1\].(<\/p>)?\s*<\/li>/);
  const none = await html('No list here [1].\n');
  assert.match(none, /No list here \[1\]./);
});
