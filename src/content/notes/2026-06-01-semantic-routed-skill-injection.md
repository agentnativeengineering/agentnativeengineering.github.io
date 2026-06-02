---
title: "Context engineering as a routing problem"
date: 2026-06-01
summary: "Rippling reports a semantic-route-first, domain-scoped skill injection pipeline cuts context size 100–500x in a system serving over a million users, by treating context engineering as a routing problem instead of reaching for a bigger window."
tags: ["memory-context", "context-engineering"]
draft: false
---

LangChain published a Rippling engineering case study this week, [How Rippling Went AI-Native Across Every Product in 6 Months with Deep Agents and LangSmith](https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith) (1 June 2026). The constraint it opens with is one a lot of teams will recognize: Rippling's product ontology is thousands of tables with many overlapping entity names. As they put it, "If you put the whole thing in context, even a chunk of it, there are so many conflicting entities that it just won't fit in the context window in the timeframe Rippling's customers expect."

The detail worth sitting with is the *timeframe*. A bigger window does not save you here — even when the schema fits by size, stuffing it blows the latency budget. So the budget is two-sided, and "use a longer context" only addresses one side.

Their answer is to assemble context just-in-time instead of pre-loading it. On each query a search step uses Rippling's semantic layer to identify the relevant domain — payroll, devices, and so on — *first*, then injects a skill scoped to that domain, then a re-ranker prunes the candidate set hard. Rippling reports the result plainly: "Re-rankers prune aggressively, reducing context size by 100 to 500x." Routing collapses the candidate space from the whole ontology to one domain before any tokens are spent; the injected unit becomes a domain-scoped skill rather than raw schema; the re-ranker drops the long tail. Small input times a hard prune is where the reduction comes from.

A separate mechanism handles a different failure: the agent keeps a REPL and stores named references rather than threading raw alphanumeric IDs through prompts. If the model never re-types an ID, it can't hallucinate one. Rippling reports no number for this one, so it stays a pattern rather than a measured result.

This runs in production — "more than one million people using Rippling AI globally," shipped across every product in roughly six months, gated by 300–400 queries in post-merge integration tests with about 10 critical scenarios that block deployment. The case study is vendor-published, and the 100–500x and 1M figures are Rippling's own numbers without independent benchmarking, so keep them attributed.

The transferable part needs none of that vendor stack. The pattern is retriever → re-ranker → skill store, reproducible with [Qdrant](https://github.com/qdrant/qdrant) for vector search, [LlamaIndex](https://github.com/run-llama/llama_index) to wire the routing and re-rank post-processors, [mem0](https://github.com/mem0ai/mem0) as the skill store, and [Ragas](https://github.com/explodinggradients/ragas) as the retrieval-quality gate. Route to the domain first, inject the scoped skill, then re-rank.

[Memory & Context](/guide/memory-and-context/)
