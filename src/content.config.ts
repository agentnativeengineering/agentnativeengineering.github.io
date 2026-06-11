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
    // Key Takeaways — up to 3 plain-language bullets at the top of a note (the learn-it-in-
    // 10-seconds layer, written so you never need a second tool to decode the point). The
    // first sentence of each renders bold; the rest is the muted explanation.
    takeaways: z.array(z.string()).max(3).optional(),
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

// Field audio — podcast digest episodes. One markdown file per episode; the mp3 itself lives in
// public/audio/<slug>.mp3 (committed by the publish skill). `covers` lists the field-note slugs the
// episode voices, so the page can link its show notes.
const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    // Site-relative mp3 path, e.g. /audio/<slug>.mp3
    audio: z.string(),
    // Duration in seconds (from the audio master), rendered as mm:ss.
    seconds: z.number().int().positive(),
    // Field-note ids (YYYY-MM-DD-slug) this episode covers — its show notes.
    covers: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, guide, episodes };
