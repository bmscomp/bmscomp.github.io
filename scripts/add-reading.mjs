#!/usr/bin/env node
// Adds or updates a reading-list entry from a GitHub issue form (the "Reading" template).
// Input: the issue body in $ISSUE_BODY. Output: src/content/reading/reading.yaml updated in place,
// and a one-line `summary` written to $GITHUB_OUTPUT when running in Actions.
import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { isSeq, parseDocument } from 'yaml';

const FILE = 'src/content/reading/reading.yaml';
const KINDS = ['article', 'book', 'paper', 'video'];
const STATUSES = ['to-read', 'reading', 'read'];

/** Issue forms render each field as `### Label` followed by its value, or `_No response_`. */
function parseIssueForm(body) {
  const fields = {};
  for (const section of body.replace(/\r\n/g, '\n').split(/^###\s+/m).slice(1)) {
    const [label, ...rest] = section.split('\n');
    const value = rest.join('\n').trim();
    fields[label.trim().toLowerCase()] = value === '_No response_' ? '' : value;
  }
  return fields;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
    .replace(/-$/, '');
}

function sameUrl(a, b) {
  const normalize = (u) => u.replace(/\/+$/, '').replace(/^http:/, 'https:');
  return normalize(a) === normalize(b);
}

/** Best-effort page title lookup; falls back to the hostname. */
async function fetchTitle(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000), headers: { 'User-Agent': 'bmscomp.github.io reading list' } });
    const html = (await res.text()).slice(0, 200_000);
    const match =
      html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i) ??
      html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (match) {
      return match[1]
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#0?39;|&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')
        .trim();
    }
  } catch {
    // Unreachable or slow page: fall through to the hostname.
  }
  return new URL(url).hostname.replace(/^www\./, '');
}

const form = parseIssueForm(process.env.ISSUE_BODY ?? '');
const url = form.link || undefined;
if (url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    fail(`Not a valid link: ${url}`);
  }
  if (!['http:', 'https:'].includes(parsed.protocol)) fail(`Link must be http(s): ${url}`);
}
if (!url && !form.title) fail('Provide a link, a title, or both.');

const status = form.status || 'reading';
if (!STATUSES.includes(status)) fail(`Unknown status: ${status}`);
const kind = form.kind || 'article';
if (!KINDS.includes(kind)) fail(`Unknown kind: ${kind}`);
const rating = /^[1-5]$/.test(form.rating) ? Number(form.rating) : undefined;
const tags = (form.tags ?? '')
  .split(',')
  .map((t) => t.trim().replace(/^#/, ''))
  .filter(Boolean);
const today = new Date().toISOString().slice(0, 10);

const doc = parseDocument(await readFile(FILE, 'utf8'));
const list = doc.contents;
if (!isSeq(list)) fail(`${FILE} must contain a YAML list`);
list.flow = false;

const existing = list.items.find((item) => {
  const itemUrl = item.get('url');
  return url ? itemUrl && sameUrl(itemUrl, url) : item.get('title') === form.title;
});

let summary;
if (existing) {
  existing.set('status', status);
  if (form.title) existing.set('title', form.title);
  if (form.author) existing.set('author', form.author);
  if (form.kind) existing.set('kind', kind);
  if (rating) existing.set('rating', rating);
  if (form.note) existing.set('note', form.note);
  if (tags.length) existing.set('tags', [...new Set([...(existing.get('tags')?.toJSON() ?? []), ...tags])]);
  if (status === 'read' && !existing.get('finishedDate')) existing.set('finishedDate', today);
  summary = `Updated “${existing.get('title')}” (${status})`;
} else {
  const title = form.title || (await fetchTitle(url));
  const ids = new Set(list.items.map((item) => item.get('id')));
  let id = slugify(title) || slugify(new URL(url).hostname) || 'entry';
  for (let n = 2; ids.has(id); n++) id = `${slugify(title)}-${n}`;
  const entry = { id, title, url, author: form.author || undefined, kind, status, addedDate: today };
  if (status === 'read') entry.finishedDate = today;
  if (rating) entry.rating = rating;
  if (tags.length) entry.tags = tags;
  if (form.note) entry.note = form.note;
  // Drop undefined keys so the YAML stays clean.
  list.items.unshift(doc.createNode(Object.fromEntries(Object.entries(entry).filter(([, v]) => v !== undefined))));
  summary = `Added “${title}” (${status})`;
}

await writeFile(FILE, doc.toString({ lineWidth: 0 }));
console.log(summary);
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `summary=${summary.replace(/\n/g, ' ')}\n`);
