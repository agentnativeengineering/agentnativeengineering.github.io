import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Field notes — the daily stream. One markdown file per note.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are built locally but excluded from the published stream, RSS, and sitemap.
    draft: z.boolean().default(false),
  }),
});

// The field guide — one entry per engineering domain. Ordered, principled, and
// every claim is sourced: each page ends in a Sources section with links.
const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    // Ordering within the guide (Domain 1..8).
    order: z.number(),
    // The single question this domain answers, shown under the title.
    question: z.string(),
    // The imperative principle(s) this domain asserts — each grounded in the body.
    principles: z.array(z.string()).default([]),
    // Open-source building blocks named on the page.
    tools: z.array(z.string()).default([]),
    summary: z.string().optional(),
    // Last substantive revision of this domain (ISO date). Falls back to the guide-wide date.
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, guide };
