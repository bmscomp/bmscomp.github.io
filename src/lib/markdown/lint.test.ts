import assert from 'node:assert/strict';
import { test } from 'node:test';
import { markdownToMdast } from 'satteri';
import { features } from './index.ts';
import { lint } from './lint.ts';

const check = (md: string) =>
  lint(markdownToMdast(md, { features }) as never).map(({ line, severity, message }) => `${line} ${severity} ${message.split(':')[0]}`);

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
