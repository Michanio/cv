import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use YYYY-MM');

const experience = defineCollection({
  loader: glob({ pattern: 'en/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    // Shown after the company name, e.g. a city
    detail: z.string().optional(),
    // One-line description of the company
    about: z.string().optional(),
    start: yearMonth,
    // Leave out for the current job
    end: yearMonth.optional(),
    stack: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: 'en/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    url: z.url().optional(),
    year: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: 'en/*.md', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    start: z.number(),
    end: z.number(),
    note: z.string().optional(),
  }),
});

export const collections = { experience, projects, education };
