import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { softwareLayer, domainLayer, toolUrl } from '../data/architecture';

// /agent.json — the guide + reference architecture as a structured manifest for agents.
export async function GET(context: APIContext) {
  const site = (context.site?.href ?? 'https://agentnativeengineering.com/').replace(/\/$/, '');
  const domains = (await getCollection('guide', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const data = {
    name: 'Agent Native Engineering',
    description:
      'A clear guide and daily brief on building, operating, and engineering with AI agents in production — grounded in real-world examples and studies, not opinion.',
    url: `${site}/`,
    license: 'CC BY 4.0',
    loop: ['build', 'operate', 'engineer'],
    guide: domains.map((d) => ({
      order: d.data.order,
      slug: d.id,
      title: d.data.title,
      phase: d.data.phase,
      question: d.data.question,
      principles: d.data.principles,
      url: `${site}/guide/${d.id}/`,
    })),
    architecture: {
      software_layer: softwareLayer.map((l) => ({ num: l.num, domain: l.name, phase: l.phase, default: l.default, alternatives: l.alts, guide: `${site}/guide/${l.slug}/` })),
      domain_layer: domainLayer.map((d) => ({ name: d.name })),
      tool_links: toolUrl,
    },
    notes: notes.map((n) => ({
      date: n.data.date.toISOString().slice(0, 10),
      slug: n.id,
      title: n.data.title,
      domain: n.data.domain ?? null,
      summary: n.data.summary ?? null,
      source: n.data.sourceUrl ?? null,
      url: `${site}/field-notes/${n.id}/`,
    })),
  };

  return new Response(JSON.stringify(data, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
