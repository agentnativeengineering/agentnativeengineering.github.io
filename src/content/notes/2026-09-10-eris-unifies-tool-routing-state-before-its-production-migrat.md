---
title: "Eris Unifies Tool-Routing State Before Its Production Migration"
date: 2026-09-10
summary: "Eris's tool-routing rewrite shows why local-to-production agent migrations need one shared source of truth for which tools are callable."
takeaways:
  - "Project tool-routing state explicitly into your durable execution path before moving agents to a production orchestrator, since drift between what the model believes is callable and what the infrastructure permits will wedge the agent."
  - "Compute the offered-tool list once and derive both the prompt and the grammar from it so the two consumers can never disagree."
tags: [architecture-and-orchestration, tool-routing, gbnf, agent-migration]
domain: architecture-and-orchestration
sourceName: "eris-system.dev"
sourceUrl: "https://eris-system.dev/blog/tool-routing"
draft: false
---

## The Takeaway

Project tool-routing state explicitly into your durable execution path before migrating agents to a production orchestrator, or drift between what the model believes is callable and what the infrastructure permits will wedge the agent.

## The details

- On September 9, 2026, the Eris project's engineering blog described how naive top-k embedding rankings for tool routing created unrecoverable states once the system moved to llama.cpp with GBNF grammars: a confidently wrong top-1 pick gets structurally locked in by the grammar, so the model cannot recover mid-turn ([Eris System Blog](https://eris-system.dev/blog/tool-routing)).
- Eris's fix is a policy layer that demotes a lone weak hit scoring below a 0.58 floor, widens near-ties within a 0.05 margin into affinity clusters (clock, agenda, and calendar share a "time" cluster), and otherwise passes cosine hits through unchanged ([Eris System Blog](https://eris-system.dev/blog/tool-routing)).
- That policy's offered-tool list feeds both the slim tool prompt and the GBNF grammar from a single function call, so the two consumers physically cannot disagree about what is callable ([Eris System Blog](https://eris-system.dev/blog/tool-routing)).
- A separate teardown of the DeepSeek Harness found no native cross-session memory and no privileged core to own shared state, meaning any tool-selection history that needs to persist across sessions has to be built externally on top of the session log ([DeepSeek Harness teardown](https://github.com/jimy-r/agent-workspace-architecture/blob/main/teardowns/2026-09-05-deepseek-harness.md)).

## Why it matters

Teams moving agents off forgiving local prototypes and onto constrained-decoding production orchestrators should expect exactly this failure mode. Unifying the source of truth for tool availability before the migration is what separates an agent that demos fine from one that wedges silently under load.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
