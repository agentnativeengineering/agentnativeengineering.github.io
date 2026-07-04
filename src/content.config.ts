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
    // Optional guide-domain slug this note is filed under — themes the article with that
    // domain's loop-phase color and links "Filed under".
    domain: z.string().optional(),
    // The note's primary external source — a short label (host) and its link, shown as "Source ↗".
    sourceName: z.string().optional(),
    sourceUrl: z.string().optional(),
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
    // Ordering within the guide (Domain 1..12).
    order: z.number(),
    // Loop phase this domain belongs to — drives the accent color (build=rust, operate=blue,
    // engineer=green). Domains 1-5 build, 6-10 operate, 11-12 engineer.
    phase: z.enum(['build', 'operate', 'engineer']),
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

// Daily Brief — podcast digest episodes (audio). One markdown file per episode; the mp3 itself
// lives in public/audio/<slug>.mp3 (committed by the publish skill). `covers` lists the note ids the
// episode voices — they become "The Brief" stories on the edition page.
const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    // Site-relative mp3 path, e.g. /audio/<slug>.mp3
    audio: z.string(),
    // The episode's YouTube "Audio Edition" watch URL (youtu.be/…), present once uploaded.
    youtube: z.string().url().optional(),
    // Duration in seconds (from the audio master), rendered as mm:ss.
    seconds: z.number().int().positive(),
    // Field-note ids (YYYY-MM-DD-slug) this episode covers — the canonical episode↔note linkage.
    covers: z.array(z.string()).default([]),
    // "The One Idea" card — the edition's thesis: a punchy claim (title) + a short plain
    // explanation (body). Falls back to `summary` as the title when absent.
    oneIdea: z.object({ title: z.string(), body: z.string().optional() }).optional(),
    // "By the Numbers" stat cards — render only when present (n = the figure, label = the gloss).
    stats: z.array(z.object({ n: z.string(), label: z.string() })).default([]),
    // "The Brief" — the authored, shareable cards. Two kinds:
    //   'story' — a light summary card: badge + timestamp + title + body + source link + Copy.
    //   'quote' — a dark "THE TAKE" pull-quote card: the quote sits in `title`, with `attribution`.
    // When empty, the page falls back to deriving simple story cards from `covers`.
    brief: z
      .array(
        z.object({
          kind: z.enum(['story', 'quote']).default('story'),
          // Guide-domain slug — drives the badge label, the filter key, and the phase accent.
          domain: z.string().optional(),
          // Badge text override; falls back to the domain's title.
          cat: z.string().optional(),
          // Audio timestamp (mm:ss) where this story is voiced — optional.
          time: z.string().optional(),
          // The original, external source: a label and its link.
          source: z.string().optional(),
          url: z.string().optional(),
          // Story headline — or, for a quote card, the pull-quote text itself.
          title: z.string(),
          // Story summary (kind 'story').
          body: z.string().optional(),
          // Attribution line (kind 'quote').
          attribution: z.string().optional(),
          // Marks a 'story' card as carrying the edition's Take (the ◆ THE TAKE flag).
          take: z.boolean().default(false),
        }),
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, guide, episodes };
