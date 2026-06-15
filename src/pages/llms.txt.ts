import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

// /llms.txt — the llms.txt convention: a plain-text map of the site for agents.
export async function GET(context: APIContext) {
  const site = (context.site?.href ?? 'https://agentnativeengineering.com/').replace(/\/$/, '');
  const domains = (await getCollection('guide', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  let t = `# Agent Native Engineering\n\n`;
  t += `> A clear guide and daily brief on building, operating, and engineering with AI agents in production — grounded in real-world examples and studies, not opinion.\n\n`;
  t += `## Field Guide (${domains.length} domains)\n`;
  for (const d of domains) t += `- [${d.data.title}](${site}/guide/${d.id}/): ${d.data.question}\n`;
  t += `\n## Daily Notes\n`;
  for (const n of notes) t += `- [${n.data.title}](${site}/field-notes/${n.id}/)${n.data.summary ? `: ${n.data.summary}` : ''}\n`;
  t += `\n## Reference Architecture\n`;
  t += `- [Reference Architecture](${site}/architectures/): the open-source software stack, one layer per Field Guide domain.\n`;
  t += `\n## Machine-readable\n- [agent.json](${site}/agent.json): the guide + architecture as structured JSON.\n- [RSS](${site}/rss.xml): the Daily Notes feed.\n`;

  return new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
