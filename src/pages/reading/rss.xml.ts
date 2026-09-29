import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../consts';
import { getReading, readingDate } from '../../lib/reading';

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://bmscomp.github.io');
  const entries = (await getReading()).filter((e) => e.data.status !== 'to-read');
  return rss({
    title: `${SITE_TITLE} · Reading`,
    description: "Articles, books, and papers I'm reading.",
    site,
    items: entries.map((entry) => ({
      title: `[${entry.data.status}] ${entry.data.title}`,
      description: entry.data.note ?? '',
      pubDate: readingDate(entry),
      categories: entry.data.tags,
      link: entry.data.url ?? new URL(`/reading/#${entry.id}`, site).href,
    })),
  });
}
