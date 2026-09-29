import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// W6.6: links between articles. Ids are checked when the page is built (src/lib/related.ts), so a
// misspelled one fails `pnpm build`. A series is a name shared by its parts, numbered from 1.
const links = () => ({
  relatedPosts: z.array(reference('posts')).default([]),
  relatedLab: z.array(reference('lab')).default([]),
  series: z.string().optional(),
  seriesPart: z.number().int().positive().optional(),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Force the contents list on or off (by default: 4+ sections on a long page). */
    toc: z.boolean().optional(),
    ...links(),
    draft: z.boolean().default(false),
  }),
});

// Notes on software, systems, and hardware being tested.
const labSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['software', 'system', 'hardware', 'homelab']),
  status: z.enum(['testing', 'adopted', 'dropped']),
  tools: z.array(z.string()).default([]),
  /** Topics shared with posts: /tags/<tag>/ lists both. */
  tags: z.array(z.string()).default([]),
  platform: z.string().optional(),
  /** One-line conclusion, shown on the list and at the top of the note. */
  verdict: z.string().optional(),
  repo: z.url({ protocol: /^https?$/ }).optional(),
  /** Force the contents list on or off (by default: 4+ sections on a long page). */
  toc: z.boolean().optional(),
  ...links(),
  draft: z.boolean().default(false),
});
const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.md' }),
  schema: labSchema,
});

// Test pages that exercise every long-form construct. Built only in dev or with FIXTURES=1
// (src/pages/dev/[...slug].astro); the readability tests run against them.
const fixtures = defineCollection({
  loader: glob({ base: './src/content/fixtures', pattern: '**/*.md' }),
  schema: labSchema,
});

// Articles, books, papers, and videos I'm reading. One YAML file, one entry per item.
const reading = defineCollection({
  loader: file('src/content/reading/reading.yaml'),
  schema: z.object({
    title: z.string(),
    url: z.url().optional(),
    author: z.string().optional(),
    kind: z.enum(['article', 'book', 'paper', 'video']).default('article'),
    status: z.enum(['to-read', 'reading', 'read']),
    addedDate: z.coerce.date(),
    finishedDate: z.coerce.date().optional(),
    rating: z.number().int().min(1).max(5).optional(),
    tags: z.array(z.string()).default([]),
    note: z.string().optional(),
  }),
});

// Public CV summary in JSON Resume format (https://jsonresume.org/schema). The full file is also
// validated against the official schema at build time by scripts/validate-resume.mjs.
const date = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM');
const cv = defineCollection({
  loader: file('src/content/cv/resume.json', { parser: (text) => ({ resume: JSON.parse(text) }) }),
  schema: z.object({
    basics: z.object({
      name: z.string(),
      label: z.string(),
      url: z.url().optional(),
      summary: z.string().default(''),
      location: z
        .object({ city: z.string().optional(), region: z.string().optional(), countryCode: z.string() })
        .optional(),
      profiles: z.array(z.object({ network: z.string(), username: z.string(), url: z.url() })).default([]),
    }),
    work: z
      .array(
        z.object({
          name: z.string(),
          location: z.string().optional(),
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
          /** English rendering of a non-English title (site-specific extension, allowed by the schema). */
          translation: z.string().optional(),
          url: z.url().optional(),
          roles: z.array(z.string()).default([]),
          /** Co-speakers or co-authors (site-specific extension, allowed by the schema). */
          with: z.array(z.string()).default([]),
          /** JSON Resume convention, e.g. application, library, contribution, talk, workshop. */
          type: z.string().optional(),
          entity: z.string().optional(),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          description: z.string(),
          highlights: z.array(z.string()).default([]),
          keywords: z.array(z.string()).default([]),
        }),
      )
      .default([]),
    publications: z
      .array(
        z.object({
          name: z.string(),
          /** Author line as cited (site-specific extension, allowed by the schema). */
          authors: z.string().optional(),
          publisher: z.string().optional(),
          releaseDate: z.string().optional(),
          url: z.url().optional(),
          summary: z.string().optional(),
        }),
      )
      .default([]),
    education: z
      .array(
        z.object({
          institution: z.string(),
          area: z.string(),
          /** Degree specialization (site-specific extension, allowed by the schema). */
          specialization: z.string().optional(),
          studyType: z.string(),
          startDate: date.optional(),
          endDate: date.optional(),
        }),
      )
      .default([]),
    skills: z.array(z.object({ name: z.string(), keywords: z.array(z.string()).default([]) })).default([]),
    languages: z.array(z.object({ language: z.string(), fluency: z.string() })).default([]),
    interests: z.array(z.object({ name: z.string(), keywords: z.array(z.string()).default([]) })).default([]),
    meta: z.object({ canonical: z.url(), version: z.string(), lastModified: z.string() }).optional(),
  }),
});

export const collections = { posts, lab, fixtures, reading, cv };
