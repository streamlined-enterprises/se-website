import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('default'),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = { services, works };
