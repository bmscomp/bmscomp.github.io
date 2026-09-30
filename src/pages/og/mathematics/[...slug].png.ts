import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../../consts';
import { getMathArticles, type MathArticle } from '../../../lib/mathematics';
import { initialsOf, pngResponse, renderCard } from '../../../lib/og';

export async function getStaticPaths() {
  const articles = await getMathArticles();
  return articles.map((article) => ({ params: { slug: article.id }, props: { article } }));
}

export async function GET({ props }: APIContext<{ article: MathArticle }>) {
  const { title, description, tags } = props.article.data;
  return pngResponse(
    await renderCard({
      kicker: 'Mathematics',
      title,
      subtitle: description,
      footer: tags.map((tag) => `#${tag}`).join('  '),
      initials: initialsOf(SITE_TITLE),
    }),
  );
}
