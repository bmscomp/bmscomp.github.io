import assert from 'node:assert/strict';
import { test } from 'node:test';
import { markdownToMdast } from 'satteri';
import { features } from './index.ts';
import { lint } from './lint.ts';

const check = (md: string) =>
  lint(markdownToMdast(md, { features }) as never, md).map(({ line, severity, message }) => `${line} ${severity} ${message.split(':')[0]}`);

test('a clean article has no problems', () => {
  assert.deepEqual(check('---\ntitle: x\n---\n\nText.\n\n## One\n\n### Two\n\n![A diagram](./a.png)\n\n## Three\n'), []);
});

test('images need alt text; raw <img> is refused', () => {
  assert.deepEqual(check('Text.\n\n![](./x.png)\n\n<img src="x.png">\n'), [
    '3 error image without alt text',
    '5 error raw <img>',
  ]);
});

test('headings: no h1, start at h2, no jumps', () => {
  assert.deepEqual(check('# Title\n\n## A\n\n#### B\n'), [
    '1 error h1 in the body',
    '5 error heading jumps from h2 to h4',
  ]);
  assert.deepEqual(check('### Starts low\n'), ['1 error the first heading is h3; start at ##']);
});

test('warnings: long code lines and dollar amounts read as math', () => {
  const long = 'x'.repeat(111);
  assert.deepEqual(check(`Intro.\n\n\`\`\`ts\nshort\n${long}\n\`\`\`\n`), ['5 warning code line of 111 characters (over 110) wraps on every screen']);
  assert.deepEqual(check('It cost $5 and $6.\n'), ['1 warning "$5 and $" reads as math; write \\$ for a dollar sign']);
  assert.deepEqual(check('Energy $E = mc^2$ and $2x$.\n'), []);
});

test('reference-style images are refused (Astro would not optimize them)', () => {
  assert.deepEqual(check('Text.\n\n![A diagram][d]\n\n[d]: ./x.png\n'), ['3 error reference-style image']);
});

test('prices: ranges and slashes read as math too', () => {
  assert.deepEqual(check('Plans cost $5-$10 a month.\n'), ['1 warning "$5-$" reads as math; write \\$ for a dollar sign']);
});

test('line numbers: indented code, and CRLF files', () => {
  const long = 'y'.repeat(112);
  assert.deepEqual(check(`Intro.\n\n    short\n    ${long}\n`), ['4 warning code line of 112 characters (over 110) wraps on every screen']);
  const crlf = `Intro.\r\n\r\n\`\`\`\r\n${'z'.repeat(110)}\r\n\`\`\`\r\n`;
  assert.deepEqual(check(crlf), []);
});

test('equations: unknown \\eqref and inline \\label are warnings', () => {
  assert.deepEqual(check('$$\na = b \\label{eq:a}\n$$\n\nSee $\\eqref{eq:a}$ and $\\eqref{eq:b}$.\n'), [
    '5 warning \\eqref{eq',
  ]);
  assert.deepEqual(check('Inline $x \\label{eq:x}$ here.\n'), ['1 warning \\label in inline math numbers nothing']);
});
