#!/usr/bin/env node
// Prose check for the human-writing skill: finds the phrases and shapes that make text sound generated,
// and measures how much the sentences vary. It reads Markdown (an article with its frontmatter abstract,
// a README, a pull request body) and ignores code, math, tables and the reference list.
//
//   node .claude/skills/human-writing/check-prose.mjs src/content/mathematics/basel-problem.md
//
// It reports; it does not judge. A flagged phrase can be right where it is, and varied sentences are a
// symptom of a voice, not a recipe for one.
import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('usage: check-prose.mjs <file.md>');
  process.exit(2);
}
const source = readFileSync(file, 'utf8');
const lines = source.split('\n');

// Phrases to look at twice, grouped as in SKILL.md. Each is a regular expression, case-insensitive.
const PHRASES = {
  inflated: [
    'delve', 'tapestry', 'testament', 'realm', 'landscape', 'journey', 'embark', 'unlock', 'elevate',
    'empower', 'harness', 'leverag(e|es|ing)', 'seamless(ly)?', 'robust', 'cutting-edge', 'game-changer',
    'pivotal', 'crucial', 'vital', 'paramount', 'comprehensive', 'meticulous(ly)?', 'intricate', 'nuanced',
    'vibrant', 'boasts',
  ],
  'throat-clearing': [
    "it'?s worth noting", "in today'?s fast-paced", 'it is worth (noting|pausing|checking)', 'it is important to', 'interestingly,',
    'notably,', 'essentially,', 'in essence', 'at its core', 'when it comes to', "let'?s dive", "here'?s the thing",
  ],
  announcing: [
    'deserves? (a closer look|a word|attention)', '\\bhere is the', 'in full\\.', 'two ideas in',
    'the first is', 'the second is', 'this (article|section|post) (follows|explains|shows|covers)',
    'as we will see', 'we will now', 'let us now',
  ],
  'stock frames': [
    'not just \\w+,? but', 'whether you(\'re| are)', 'is more than just', "it'?s not about",
    'the kind of \\w+ that is not',
  ],
  closers: ['in conclusion', 'overall,', 'in summary', 'ultimately,', 'to sum up'],
  'intensifiers and hedges': [
    '\\bvery\\b', '\\breally\\b', '\\btruly\\b', 'incredibly', '\\bquite\\b', 'may potentially',
    'could possibly', 'arguably',
  ],
};

// ---- Collect prose: the abstract, then the body without code, math, tables, headings or references.
let inFrontmatter = false;
let inAbstract = false;
let inFence = false;
let inMath = false;
let inReferences = false;
const prose = []; // { line, text }
lines.forEach((raw, i) => {
  const n = i + 1;
  if (i === 0 && raw === '---') return void (inFrontmatter = true);
  if (inFrontmatter) {
    if (raw === '---') return void (inFrontmatter = false);
    if (/^abstract:\s*\|/.test(raw)) return void (inAbstract = true);
    if (inAbstract && /^\s{2}\S/.test(raw)) return void prose.push({ line: n, text: raw.trim() });
    if (inAbstract && raw.trim() === '') return void prose.push({ line: n, text: '' });
    inAbstract = false;
    return;
  }
  let text = raw.replace(/^>\s?/, '');
  if (/^```/.test(text)) return void (inFence = !inFence);
  if (inFence) return;
  if (/^\$\$/.test(text.trim())) return void (inMath = !inMath);
  if (inMath) return;
  if (/^##\s+References/.test(text)) inReferences = true;
  else if (/^##\s/.test(text)) inReferences = false;
  if (inReferences || /^#/.test(text) || /^\s*\|/.test(text) || /^Table:/.test(text) || /^\[\^/.test(text)) {
    prose.push({ line: n, text: '' });
    return;
  }
  text = text.replace(/^\[![A-Z]+\].*$/, ''); // a callout marker and its note
  prose.push({ line: n, text });
});

const clean = (s) =>
  s
    .replace(/\$[^$]+\$/g, 'X') // inline math counts as one word
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links keep their text
    .replace(/\[\^[^\]]+\]/g, '') // footnote references
    .replace(/\s?\[\d+(, \d+)*\]/g, '') // citations
    .replace(/[*_`]/g, '');

// Paragraphs are runs of non-empty prose lines.
const paragraphs = [];
let current = null;
for (const { line, text } of prose) {
  if (text.trim() === '') {
    if (current) paragraphs.push(current);
    current = null;
    continue;
  }
  current ??= { line, text: '' };
  current.text += ` ${clean(text)}`;
}
if (current) paragraphs.push(current);

// Sentences: split after . ! ? when the next word starts a sentence.
const sentences = [];
for (const p of paragraphs) {
  for (const s of p.text.trim().split(/(?<=[.!?])\s+(?=[A-Z0-9“"(])/)) {
    const words = s.split(/\s+/).filter((w) => /\w/.test(w));
    if (words.length) sentences.push({ line: p.line, words: words.length, first: words[0].toLowerCase() });
  }
}

// ---- Report.
const out = [];
out.push(`${file}: ${paragraphs.length} paragraphs, ${sentences.length} sentences`);

const lengths = sentences.map((s) => s.words);
const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
const sd = Math.sqrt(lengths.reduce((a, b) => a + (b - mean) ** 2, 0) / lengths.length);
const near = lengths.filter((l) => Math.abs(l - mean) <= mean * 0.25).length / lengths.length;
const short = lengths.filter((l) => l <= 8).length;
out.push('');
out.push('Sentence length');
out.push(`  mean ${mean.toFixed(1)} words, spread (sd) ${sd.toFixed(1)}, variation ${(sd / mean).toFixed(2)}`);
out.push(`  ${Math.round(near * 100)}% of sentences are within a quarter of the mean; ${short} have 8 words or fewer`);
if (sd / mean < 0.45) out.push('  → the sentences are much alike in length: split a long one, join two, let a short one stand');

const sizes = paragraphs.map((p) => p.text.split(/(?<=[.!?])\s+(?=[A-Z0-9“"(])/).length);
const one = sizes.filter((s) => s === 1).length;
out.push('');
out.push('Paragraphs');
out.push(`  sentences per paragraph: min ${Math.min(...sizes)}, max ${Math.max(...sizes)}, ${one} of one sentence`);

const openers = new Map();
for (const s of sentences) openers.set(s.first, (openers.get(s.first) ?? 0) + 1);
const top = [...openers].sort((a, b) => b[1] - a[1]).slice(0, 5);
out.push('');
out.push('Most common first words');
out.push(`  ${top.map(([w, c]) => `${w} ${Math.round((c / sentences.length) * 100)}%`).join(', ')}`);
for (const [w, c] of top) {
  if (c / sentences.length > 0.12 && !['the', 'a', 'x'].includes(w)) out.push(`  → "${w}" starts ${c} sentences`);
}

const byLine = new Map(prose.map(({ line, text }) => [line, text]));
out.push('');
out.push('Phrases to look at');
let found = 0;
for (const [group, patterns] of Object.entries(PHRASES)) {
  const re = new RegExp(`(${patterns.join('|')})`, 'i');
  for (const [line, text] of byLine) {
    const m = text.match(re);
    if (m) {
      found++;
      out.push(`  ${file}:${line}  ${group}: "${m[0]}"`);
    }
  }
}
if (!found) out.push('  none');

console.log(out.join('\n'));
