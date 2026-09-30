import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getLabNotes } from '../lib/lab';
import { getMathArticles } from '../lib/mathematics';
import { getPosts } from '../lib/posts';

// Everything on the site, newest first. Each section also has its own feed (/blog/, /mathematics/,
// /lab/, /reading/).
export async function GET(context: APIContext) {
  const posts = (await getPosts()).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    categories: post.data.tags,
    link: `/blog/${post.id}/`,
  }));
  const math = (await getMathArticles()).map((article) => ({
    title: `Mathematics: ${article.data.title}`,
    description: article.data.description,
    pubDate: article.data.pubDate,
    categories: article.data.tags,
    link: `/mathematics/${article.id}/`,
  }));
  const notes = (await getLabNotes()).map((note) => ({
    title: `Lab: ${note.data.title}`,
    description: note.data.verdict ?? note.data.description,
    pubDate: note.data.pubDate,
    categories: [note.data.category, ...note.data.tools],
    link: `/lab/${note.id}/`,
  }));
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? 'https://bmscomp.github.io',
    items: [...posts, ...math, ...notes].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf() || a.link.localeCompare(b.link)),
  });
}
