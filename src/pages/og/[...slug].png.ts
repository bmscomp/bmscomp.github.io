import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../consts';
import { initialsOf, pngResponse, renderCard } from '../../lib/og';
import { getPosts, type Post } from '../../lib/posts';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: APIContext<{ post: Post }>) {
  const { title, description, tags } = props.post.data;
  return pngResponse(
    await renderCard({
      kicker: 'Blog',
      title,
      subtitle: description,
      footer: tags.map((tag) => `#${tag}`).join('  '),
      initials: initialsOf(SITE_TITLE),
    }),
  );
}
