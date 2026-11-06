import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx?$/, '');
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    // gray-matter parses bare YAML dates into Date objects
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    content,
  };
}

function isPublished(file: string) {
  return /\.mdx?$/.test(file) && !file.startsWith('_');
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter(isPublished)
    .map(readPost)
    .filter((p) => !p.tags.includes('draft'))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      description: p.description,
      tags: p.tags,
    }));
}

export function getPost(slug: string): Post | null {
  const file = ['.mdx', '.md']
    .map((ext) => slug + ext)
    .find((f) => isPublished(f) && fs.existsSync(path.join(BLOG_DIR, f)));
  return file ? readPost(file) : null;
}

export function formatDate(date: string) {
  return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
