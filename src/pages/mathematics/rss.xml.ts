import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../consts';
import { getMathArticles } from '../../lib/mathematics';

export async function GET(context: APIContext) {
  const articles = await getMathArticles();
  return rss({
    title: `${SITE_TITLE} · Mathematics`,
    description: 'Problems, their history and their proofs.',
    site: context.site ?? 'https://bmscomp.github.io',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      categories: article.data.tags,
      link: `/mathematics/${article.id}/`,
    })),
  });
}
