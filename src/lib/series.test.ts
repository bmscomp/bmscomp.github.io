import assert from 'node:assert/strict';
import { test } from 'node:test';
import { seriesPosition } from './series.ts';

const a = (id: string, series?: string, seriesPart?: number) => ({ id, href: `/${id}/`, title: id, series, seriesPart });

test('series: part and total from the articles sharing the name', () => {
  const all = [a('one', 'Rebuild', 1), a('three', 'Rebuild', 3), a('two', 'Rebuild', 2), a('other', 'Else', 1), a('none')];
  const pos = seriesPosition(all, all[2])!;
  assert.deepEqual([pos.name, pos.part, pos.total], ['Rebuild', 2, 3]);
  assert.deepEqual(pos.parts.map((p) => p.id), ['one', 'two', 'three']);
  assert.equal(seriesPosition(all, all[4]), undefined);
});

test('series: an article outside the list still counts, and a gap keeps the stated part', () => {
  const pos = seriesPosition([a('one', 'Rebuild', 1)], a('four', 'Rebuild', 4))!;
  assert.deepEqual([pos.part, pos.total], [4, 4]);
});

test('series: every part states the same total when a part in between is missing', () => {
  const all = [a('one', 'Rebuild', 1), a('two', 'Rebuild', 2), a('four', 'Rebuild', 4)];
  assert.deepEqual(all.map((x) => seriesPosition(all, x)!.total), [4, 4, 4]);
});

test('series: a post and a lab note with the same id are different parts', () => {
  const post = { id: 'nas', href: '/blog/nas/', title: 'NAS', series: 'Homelab', seriesPart: 1 };
  const note = { id: 'nas', href: '/lab/nas/', title: 'NAS', series: 'Homelab', seriesPart: 2 };
  assert.deepEqual(seriesPosition([post], note)!.parts.map((p) => p.href), ['/blog/nas/', '/lab/nas/']);
});
