import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Public CV summary, a subset of the JSON Resume schema (https://jsonresume.org/schema).
const date = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM');
const cv = defineCollection({
  loader: file('src/content/cv/resume.json', { parser: (text) => ({ resume: JSON.parse(text) }) }),
  schema: z.object({
    basics: z.object({
      name: z.string(),
      label: z.string(),
      summary: z.string().default(''),
      location: z.object({ city: z.string(), countryCode: z.string() }).optional(),
      profiles: z.array(z.object({ network: z.string(), username: z.string(), url: z.url() })).default([]),
    }),
    work: z
      .array(
        z.object({
          name: z.string(),
          position: z.string(),
          url: z.url().optional(),
          startDate: date,
          endDate: date.optional(),
          summary: z.string().optional(),
          highlights: z.array(z.string()).default([]),
        }),
      )
      .default([]),
    projects: z
      .array(
        z.object({
          name: z.string(),
          url: z.url().optional(),
          roles: z.array(z.string()).default([]),
          description: z.string(),
        }),
      )
      .default([]),
    education: z
      .array(
        z.object({
          institution: z.string(),
          area: z.string(),
          studyType: z.string(),
          startDate: date.optional(),
          endDate: date.optional(),
        }),
      )
      .default([]),
    skills: z.array(z.object({ name: z.string(), keywords: z.array(z.string()).default([]) })).default([]),
    languages: z.array(z.object({ language: z.string(), fluency: z.string() })).default([]),
  }),
});

export const collections = { posts, cv };
