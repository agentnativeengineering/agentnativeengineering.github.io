---
title: "A factory's agents \"dream\" nightly to consolidate three generations of knowledge"
date: 2026-07-14
summary: "Machinecraft ran its whole go-to-market on off-the-shelf models with no fine-tuning — treating institutional knowledge as well-organized, self-consolidating memory instead of a smarter model."
takeaways:
  - "To give an agent durable institutional knowledge, organize memory instead of fine-tuning a model: extract facts into vectors plus a relationship graph, then consolidate them on a schedule."
  - "A salience gate decides what is worth keeping; a nightly 'dream' cycle resolves contradictions and forms reusable skills, so recall improves without touching model weights."
  - "A dedicated 'corrections' agent pins every human fix so it stays fixed, turning one-time feedback into permanent memory."
tags: ["memory-and-context", "institutional-memory", "vector-graph", "consolidation"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=jtzh-GBXBWc"
sources:
  - title: "The Factory That Dreams: 39 AI Agents, No Framework — Rushabh Doshi, Machinecraft"
    url: "https://www.youtube.com/watch?v=jtzh-GBXBWc"
draft: false
---
## What happened

In a [talk published 2026-07-11](https://www.youtube.com/watch?v=jtzh-GBXBWc), Rushabh Doshi of Machinecraft — a 100-person thermoforming-machine factory in India with no data-science team or ML budget — described Eira, a system of [39 single-purpose agents](https://www.youtube.com/watch?v=jtzh-GBXBWc) that runs the company's entire go-to-market. They [never trained or fine-tuned a model](https://www.youtube.com/watch?v=jtzh-GBXBWc): they fed hundreds of gigabytes of private history (quotes, drawings, email threads) into off-the-shelf models, extracted the facts, and stored meaning as vectors and a relationship graph. As Doshi puts it, "The brain isn't a smarter model. It's actually a really, really well-organized memory."

## Why it matters

Three generations of tacit knowledge — who a customer is, what was quoted in 2019, why one machine needed a custom tweak — [lived only in family members' heads](https://www.youtube.com/watch?v=jtzh-GBXBWc) and walked out the door with every departure. Fine-tuning is the reflexive answer and the wrong one here: the problem isn't model capability, it's reliable recall of private facts. Memory & Context is about deciding, on purpose, what the agent holds.

## How it works

1. **Ingest.** Chop private history into chunks; let off-the-shelf models pull out the facts.
2. **Store.** Keep meaning as vectors and connections as a graph.
3. **Gate.** A [salience layer](https://www.youtube.com/watch?v=jtzh-GBXBWc) decides what is worth retaining.
4. **Dream.** A [nightly cycle](https://www.youtube.com/watch?v=jtzh-GBXBWc) consolidates learnings, resolves contradictions, and forms reusable skills.

> Don't reach for a smarter model; build a memory the company can't walk out the door with.

## The catch

This is a single-source founder talk. The costs (~$30k to build, ~$2k/month to run versus a $230k agency quote) are [self-reported and unaudited](https://www.youtube.com/watch?v=jtzh-GBXBWc), and the architecture is described, not benchmarked. A human stays in the loop — Eira drafts, a person sends. Treat it as a pattern to borrow, not a proven result.

[Memory & Context](/guide/memory-and-context/)
