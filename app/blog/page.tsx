import type { Metadata } from 'next';
import Link from 'next/link';
import TypingAnimation from '../components/TypingAnimation';
import ScrollReveal from '../components/ScrollReveal';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Eric George',
  description: 'Writing on software, projects, and things I am learning.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#2b1f1a] px-4 py-24 text-[#e8d5c4]">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm uppercase tracking-widest text-[#d4b5a0] hover:text-[#e8d5c4]">
          ← Home
        </Link>
        <TypingAnimation
          text="Blog"
          className="mt-6 mb-12 font-serif text-5xl font-bold tracking-wide sm:text-6xl"
        />

        {posts.length === 0 && (
          <ScrollReveal>
            <p className="text-[#d4b5a0]">No posts yet.</p>
          </ScrollReveal>
        )}

        <ul className="space-y-10">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <ScrollReveal delay={0.1 * Math.min(index, 3)}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-[#d4b5a0]">{formatDate(post.date)}</time>
                <h2 className="mt-1 font-serif text-2xl font-semibold group-hover:underline">{post.title}</h2>
                <p className="mt-2 text-[#d4b5a0]">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="rounded-full border border-[#3d2e28] px-3 py-0.5 text-xs text-[#d4b5a0]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
