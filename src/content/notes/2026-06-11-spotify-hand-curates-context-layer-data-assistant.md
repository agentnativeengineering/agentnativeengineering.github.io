---
title: "Spotify hand-curates the context layer behind its 70k-dataset data assistant"
date: 2026-06-11
summary: "Spotify's Vedder answers natural-language data questions across 70,000+ datasets by retrieving from 177 expert-owned context clusters — and an experiment auto-generating few-shot SQL examples saw only 12.5% pass expert review."
takeaways:
  - "Schema dumps don't scale past a real warehouse. Spotify's Vedder answers questions over 70,000+ datasets by retrieving from 177 expert-owned context clusters rather than feeding the model raw schemas."
  - "Auto-generated few-shot examples mostly fail expert review. When Spotify mined real query history for question-SQL pairs, curators accepted only 12.5% — the rest were ad-hoc exploration, wrong tables, or misleading patterns."
  - "Context needs an owner and a health score. Each cluster is monitored for pair validity after schema changes, coverage of actual questions, and SQL reproducibility, and the scores direct where experts spend curation time."
tags: ["memory-and-context", "context-engineering", "text-to-sql", "retrieval"]
domain: "memory-and-context"
sourceName: "engineering.atspotify.com"
sourceUrl: "https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/"
draft: false
---
**Why this matters to you.** A context layer is the bundle of schemas, examples, and docs an agent retrieves before it acts — and for a text-to-SQL agent (one that turns a plain-English question into a database query), it decides whether the answer is right or merely plausible. The wall you hit at any real warehouse: dumping every table schema into the model's context window doesn't scale, and the agent starts joining the wrong tables and returning numbers nobody should trust. On 2026-06-10, [Spotify published how it handles this for Vedder](https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/), its internal data assistant, which has answered natural-language questions against a warehouse of 70,000+ datasets since August 2025 and is now used by 2,100+ employees.

**What they actually do.** Vedder runs a ReAct loop — the model alternates between reasoning and calling tools — to select context, generate SQL, and run it. The context it selects from is not auto-extracted: Spotify organizes it into [177 domain clusters, each owned by a named team of domain experts](https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/). Each cluster has three parts: datasets with profiling (cardinality, sample values, partition info), vetted question-SQL pairs used as few-shot examples (worked examples placed in the prompt), and docs covering domain terminology and gotchas. Clusters carry continuously monitored health scores — do the pairs still hold after schema changes, do they cover the questions people actually ask, does the SQL reproduce — and every conversation feeds back to the cluster's owners.

**The idea underneath.** Spotify tested the obvious shortcut: [auto-generating question-SQL pairs from real query history. Curators accepted only 12.5%](https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/) of the proposals; the rest were ad-hoc exploration, wrong tables, or misleading patterns. Query logs record what people tried, not what was correct, so a retrieval corpus mined from them encodes the warehouse's mistakes alongside its answers. Curation works because it changes what an expert's hour buys: instead of answering one analyst's question, the expert shapes the context that answers thousands, and the health scores point that hour at the clusters that need it.

**What to do tomorrow.** If your agent retrieves over internal data, pick the one domain that generates the most questions and give its context bundle a named owner — a real team on the hook, the way [Spotify assigns each cluster](https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/). Have that owner vet a starter set of question-SQL (or question-answer) pairs by hand rather than mining logs, and wire one health check: re-run the vetted examples whenever the schema changes and flag the breaks to the owner.

[Memory & Context](/guide/memory-and-context/)
