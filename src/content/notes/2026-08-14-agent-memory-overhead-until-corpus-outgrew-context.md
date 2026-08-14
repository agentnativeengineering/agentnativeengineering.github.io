---
title: "Agent memory was pure overhead until the corpus outgrew the context window"
date: 2026-08-14
summary: "Sakana AI's memory-harness experiments found recall added cost without accuracy while the corpus still fit in context, and a ranked decisions ledger beat vector retrieval once the answer sat hundreds of steps back."
takeaways:
  - "Benchmark your agent's memory against running it with memory switched off; while the working corpus fits in the context window, recall is pure token cost."
  - "A ranked ledger of the agent's own past decisions beat similarity search over an embedding store and beat a gated 'do you need memory?' policy on long-horizon tasks."
  - "Injecting the correct memory does not force the model to use it, so report gain: a stateful run minus a stateless baseline that is reset between instances."
tags: ["memory-and-context", "recall-policy", "context-rot", "local-models"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=R3-anFK1YM8"
sources:
  - title: "Memory Harnesses for Long-Running Research Agents — Stefania Druga, Sakana AI"
    url: "https://www.youtube.com/watch?v=R3-anFK1YM8"
  - title: "Beyond Static Intelligence: Evaluating Continual Learning — Parth Asawa, UC Berkeley"
    url: "https://www.youtube.com/watch?v=iqloyWCGYQQ"
  - title: "Lessons from Studying Every Memory System — Shlok Khemani"
    url: "https://www.youtube.com/watch?v=5ZGyKWjQDr0"
draft: false
---
## What happened

In a talk published 2026-08-12, Stefania Druga, a research scientist at Sakana AI, [described a "memory harness"](https://www.youtube.com/watch?v=R3-anFK1YM8) — a write-manage-read control loop wrapped around agents that have no durable memory of their own — and benchmarked it on long-horizon research tasks run entirely on local models (Qwen 27B quantized to 4-bit and DeepSeek V4 Flash on a 96GB M3 Ultra). She tested a ladder of recall policies: memory off, vector RAG, a ranked ledger of the decisions the agent made each turn, and an oracle that injects the known-correct memory. On a literature review whose corpus fit inside the context window, memory added cost without improving accuracy. On X-Bench questions where the answer appeared around step 124 but was needed at step 500, the rank-only ledger came out best, beating both no-memory and a gated "do you need memory?" policy, and holding across both models and on Spider V2.

## Why it matters

Bad memory bills twice: the tokens you pay for, plus the wrong path the agent then walks down. The same "prove it against no memory" discipline shows up in [Parth Asawa's continual-learning benchmark work](https://www.youtube.com/watch?v=iqloyWCGYQQ), which reports gain — a stateful run minus a stateless baseline reset between instances — next to reward and cost, and where plain in-context learning topped the leaderboard over more expensive context-management systems. Druga's oracle run makes the point from the other side: even ground truth placed in context did not reach maximum performance.

> Supplying the correct memory does not force the model to use it.

## The catch

This is one machine, two local models, serial inference only, and three benchmarks — re-measure the shape on your own workload. And "ledger beats vector store" is not a universal law: [Shlok Khemani's reverse-engineering of ChatGPT, Claude, Gemini and Poke](https://www.youtube.com/watch?v=5ZGyKWjQDr0) found consumer products converged on a small user-editable profile (roughly 1,000 tokens in Claude, about 4,000 denser ones in ChatGPT) refreshed on a schedule, plus keyword and time-range search over past conversations. What both agree on is the negative: retrieval by similarity is rarely the right default.

[Memory & Context](/guide/memory-and-context/)
