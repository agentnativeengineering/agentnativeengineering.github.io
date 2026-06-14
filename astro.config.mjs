// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live site. Used for canonical URLs, sitemap, and RSS.
export default defineConfig({
  site: 'https://agentnativeengineering.com',
  integrations: [sitemap()],
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
