---
title: "Cognition keeps a frontier planner watching while cheap models do the typing"
date: 2026-08-07
summary: "A panel from Cognition, NVIDIA and OpenRouter argues task-type routing breaks because complexity shifts mid-session, so keep a frontier model resident as planner and monitor and delegate implementation to a cheaper one."
takeaways:
  - "Stop routing by task type: difficulty changes mid-session, so keep one frontier model resident as planner and monitor and hand only the implementation steps to a cheaper model."
  - "Judge models on cost-per-capability-per-second across a whole trajectory, not on single-call price, because a small model on out-of-distribution work can cost more overall."
  - "Pin a fixed input/output contract for each task so swapping the model underneath never touches your business logic."
tags: ["model-selection", "model-routing", "cost", "kv-cache"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=QHBjufYK8TA"
sources:
  - title: "Panel: The State of Model Routing — NVIDIA, Cognition, OpenRouter"
    url: "https://www.youtube.com/watch?v=QHBjufYK8TA"
  - title: "Notion's Token Town — Sarah Sachs on token cost strategy"
    url: "https://www.youtube.com/watch?v=-I5W5QVAT8E"
  - title: "DSPy: Separating the Task from the Model"
    url: "https://www.youtube.com/watch?v=GgLQ02aO-hs"
draft: false
---
## What happened

In a panel published 2026-08-06, engineers from Cognition, NVIDIA and OpenRouter [called model routing an open research problem rather than a settled product category](https://www.youtube.com/watch?v=QHBjufYK8TA), because capability is jagged across sub-domains and no single model dominates. Cognition's co-founder described Devin Fusion: a frontier model stays present for the whole session as planner and monitor while cheaper models do the implementation, which the team claims cuts the cost of frontier-level intelligence by about 40 percent. Routing on task type alone is fragile, the panel argued, because complexity shifts mid-session as a developer moves from questions to implementation to debugging.

## Why it matters

Notion's AI engineering lead makes the same bet from the buyer's side: [token cost, not model capability, is the structural barrier](https://www.youtube.com/watch?v=-I5W5QVAT8E), so keep the harness model-agnostic and judge models on cost-per-capability-per-second across a whole trajectory rather than single-call price.

## How it works

1. **Keep the planner resident.** The frontier model never leaves the session; it plans and watches, so nobody has to guess difficulty up front.
2. **Delegate the typing.** Implementation steps go to a cheaper model under that supervision.
3. **Use one warm sidekick.** Cognition runs a single persistent sidekick agent instead of many sub-agents so the KV cache (the stored attention keys and values that let a model skip reprocessing earlier tokens) stays warm.
4. **Pin the contract.** A fixed input/output signature is what makes the swap safe: [Shopify made one implementation 550x cheaper](https://www.youtube.com/watch?v=GgLQ02aO-hs) by moving to a cheap model without touching the business logic.

> Keeping one expensive model supervising the whole session is what makes the cheaper models underneath safe to swap.

## The catch

Small is not automatically cheap. OpenRouter warned that on out-of-distribution work a small model can raise total cost, citing Opus as roughly 3x better than Haiku on Terminal Bench against a tenfold price gap; in-distribution jobs like name classification are where small models pay. And the 40 percent is Cognition's own claim about its own router on its own workload, so check it against your traces before budgeting for it.

[Model Selection](/guide/model-selection/)
