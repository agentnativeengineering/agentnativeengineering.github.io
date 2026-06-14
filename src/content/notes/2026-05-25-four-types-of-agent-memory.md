---
title: "The four types of agent memory — and why most agents don't need all four"
date: 2026-05-25
summary: "Google's Memory Bank is the latest in a wave of memory primitives, but the CoALA framework's four kinds show most agents need only a couple — and the tooling for the hard kind isn't ready yet."
tags: ["memory", "context"]
domain: "memory-and-context"
sourceName: "docs.cloud.google.com"
sourceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/memory-bank"
draft: false
---

At I/O on May 19, 2026, Google launched [Agent Platform Memory Bank](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/memory-bank), an identity-scoped persistence layer that generates and recalls long-term memories across sessions for the Gemini Enterprise Agent Platform. It is the latest of several memory primitives shipped by the major labs this spring — Anthropic put [persistent memory for Claude Managed Agents](https://www.edtechinnovationhub.com/news/anthropic-brings-persistent-memory-to-claude-managed-agents-in-public-beta) into public beta on April 23, storing memories as files on a filesystem. The primitives are arriving fast; the harder question is which of them a given agent actually needs.

The cleanest map for answering that comes from [Cognitive Architectures for Language Agents (CoALA)](https://arxiv.org/abs/2309.02427), a 2023 paper by Sumers, Yao, Narasimhan, and Griffiths at Princeton. It names four kinds. **Working memory** is the context window — fast, volatile, gone when the session ends. **Semantic memory** is the agent's knowledge base of facts, rules, and conventions. **Procedural memory** is how the agent does things — skills. **Episodic memory** is the record of past interactions and what was learned from them.

The useful part isn't the taxonomy; it's that [not every agent needs all four](https://www.youtube.com/watch?v=BacJ6sEhqMo). IBM's Martin Keen walks the gradient: a reflex agent like a thermostat needs only working memory. A narrow password-reset bot adds procedural memory to recall the reset skill. A coding agent genuinely needs all four. Reaching for episodic memory on a routing bot is wasted engineering.

Two practical notes. First, semantic memory is often [just Markdown files](https://www.youtube.com/watch?v=BacJ6sEhqMo) — the vector databases and knowledge graphs in the literature are real, but a `CLAUDE.md` loaded at session start does the job in most production systems. Second, episodic memory is the hardest to get right, because forgetting becomes an engineering problem: what do you delete, and when does a memory go stale?

That difficulty shows up in production. Jeff Barg, who leads AI at Clay — running [around 300M agent runs a month](https://www.youtube.com/watch?v=cx6_tb6HCeY) — says plainly that the [memory tools of today haven't hit product-market fit](https://www.youtube.com/watch?v=cx6_tb6HCeY). What has worked for them: append-only logs the agent writes to over time, and turning [traces into skills](https://www.youtube.com/watch?v=cx6_tb6HCeY) to improve procedural memory.

So: name the four, but only build the ones your agent's job demands, and don't expect a new memory product to do the episodic work for you yet.

[Memory & Context](/guide/memory-and-context/)
