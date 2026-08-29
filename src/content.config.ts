import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.coerce.date().optional(),
  author: z.string().optional().default('NurOS Team'),
  tags: z.array(z.string()).optional().default([]),
});

const postsEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/posts-en' }),
  schema: postSchema,
});

const postsRu = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/posts-ru' }),
  schema: postSchema,
});

const postsKz = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/posts-kz' }),
  schema: postSchema,
});

export const collections = {
  'posts-en': postsEn,
  'posts-ru': postsRu,
  'posts-kz': postsKz,
};
