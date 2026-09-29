import type { APIContext } from 'astro';
import { renderOgImage } from '../../lib/og';
import { getPosts, type Post } from '../../lib/posts';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: APIContext<{ post: Post }>) {
  const { title, description, tags } = props.post.data;
  const png = await renderOgImage({ title, subtitle: description, tags });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
