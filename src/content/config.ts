// filepath: src/content/config.ts
import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.enum(['ai', 'shield', 'cloud', 'fractional', 'assessment']),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const works = defineCollection({
  type: 'content',
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