// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import sitemap from '@astrojs/sitemap';

// Draft notes are built as unlisted pages; keep them out of the sitemap.
const notesDir = new URL('./src/content/notes/', import.meta.url);
const unlistedNotes = new Set(
  fs.readdirSync(notesDir)
    .filter((f) => f.endsWith('.md') && /^draft:\s*true\s*$/m.test(fs.readFileSync(new URL(f, notesDir), 'utf8')))
    .map((f) => `/field-notes/${f.replace(/\.md$/, '')}/`),
);

// The live site. Used for canonical URLs, sitemap, and RSS.
export default defineConfig({
  site: 'https://agentnativeengineering.com',
  integrations: [sitemap({ filter: (page) => !unlistedNotes.has(new URL(page).pathname) })],
  // Domain 04 "Multi-Agent Orchestration" was broadened to 05 "Architecture & Orchestration";
  // keep the old URL alive.
  redirects: {
    '/guide/multi-agent-orchestration/': '/guide/architecture-and-orchestration/',
    // The episodes archive moved under the Daily Brief; mp3s still live at /audio/*.mp3.
    '/audio/': '/daily-brief/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
