import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { getAllPosts, getPost, formatDate } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Eric George`, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#2b1f1a] px-4 py-24 text-[#e8d5c4]">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm uppercase tracking-widest text-[#d4b5a0] hover:text-[#e8d5c4]">
          ← All posts
        </Link>
        <header className="mt-6 mb-10">
          <time className="text-sm text-[#d4b5a0]">{formatDate(post.date)}</time>
          <h1 className="mt-2 font-serif text-4xl font-semibold">{post.title}</h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-[#d4b5a0] prose-pre:bg-transparent prose-pre:p-0">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark', keepBackground: true }]],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
