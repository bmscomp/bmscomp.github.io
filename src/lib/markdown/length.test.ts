import assert from 'node:assert/strict';
import { test } from 'node:test';
import { countListings, countWords, lengthParts, readingMinutes } from '../length.ts';

test('words: running text only', () => {
  const md = [
    'Run `pnpm install` on [the site](https://example.com/x) — it takes ~1.8 s.',
    '',
    '```ts',
    'const a = 1; // not words',
    '```',
    '',
    '![alt text here](./a.png) Energy is $E = mc^2$ and $$x$$ done.',
    '<span class="sc">API</span> <!-- hidden --> https://example.com',
    '[ref]: https://example.com',
  ].join('\n');
  // Run, on, the, site, it, takes, 1.8, s, Energy, is, and, done, API
  assert.equal(countWords(md), 13);
});

test('words: contractions, versions and hyphenated compounds are one word', () => {
  assert.equal(countWords("It's pnpm 12.6.0 and a well-known ‘smart’ quote."), 8);
});

test('listings: fences of any length, tildes, and an unclosed fence', () => {
  assert.equal(countListings('```\na\n```\n\n~~~~text\n```\nstill inside\n~~~~\n\n````md\n```\n````\n'), 3);
  assert.equal(countListings('```\nnever closed'), 1);
  assert.equal(countWords('before\n```\nnever closed words\n'), 1);
});

test('length line: minutes only from five', () => {
  assert.deepEqual(lengthParts({ sections: 5, listings: 4, minutes: 3 }), ['5 sections', '4 listings']);
  assert.deepEqual(lengthParts({ sections: 1, listings: 1, minutes: 6 }), ['1 listing', '6 min']);
  assert.equal(readingMinutes(460, 2), 3);
  assert.equal(readingMinutes(10), 1);
});
