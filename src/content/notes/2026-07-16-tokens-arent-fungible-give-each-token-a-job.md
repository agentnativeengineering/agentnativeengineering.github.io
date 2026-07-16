---
title: "Anthropic's agents give each token a job: advise, execute, or dream"
date: 2026-07-16
summary: "Anthropic's Angela Jiang argues tokens aren't fungible: assign each token a job — advise, execute, or dream — and compose those roles into a \"strategy\" layer above your execution harness."
takeaways:
  - "Stop treating every token as interchangeable: assign each one a job (advise, execute, or reflect) and compose those roles into a strategy layer that sits above your execution harness."
  - "As models get more steerable, delete rigid scaffolding: the leverage moves up to how you route and compose the model with itself, not how much prompt glue you hand-wire."
  - "Bound agent cost by routing tokens to the right job, not by hard spending caps, and watch for 'hyperindependence' where uncoordinated agents sprawl."
tags: ["architecture-and-orchestration", "meta-harness", "token-routing", "multi-agent"]
sourceName: "YouTube"
sourceUrl: "https://www.youtube.com/watch?v=Fsi2b4PrjZk"
sources:
  - title: "Angela Jiang: Why 'Tokens Aren't Fungible'"
    url: "https://www.youtube.com/watch?v=Fsi2b4PrjZk"
  - title: "Lesse & Jiang: Building an Ecosystem, not a Walled Garden"
    url: "https://www.youtube.com/watch?v=vPnVTHYplrQ"
  - title: "Building the future of agentic infrastructure"
    url: "https://www.youtube.com/watch?v=ksfm6jeTg3Q"
draft: false
---
## What happened

In a talk published 2026-07-14, Anthropic platform lead Angela Jiang laid out [three layers of abstraction the company builds toward](https://www.youtube.com/watch?v=Fsi2b4PrjZk): knowledge (get an answer), execution (actually do work, like editing files across systems), and an emerging coordination layer. Her framing: "tokens aren't fungible," so different tokens should get different jobs — advising, executing, or "dreaming" — and be composed into orchestrated "strategies" that sit above the low-level harness (the code and infrastructure that turns a model into an agent). In [a companion platform talk](https://www.youtube.com/watch?v=vPnVTHYplrQ), Jiang and Katelyn Lesse call this strategy layer a "meta-harness."

## Why it matters

As models became more steerable, [much of the rigid scaffolding around them can be deleted](https://www.youtube.com/watch?v=vPnVTHYplrQ), and the value shifts up to *how you compose the model with itself*. If you keep hand-wiring one long prompt-and-tool loop, you leave that leverage on the table.

## How it works

1. **Knowledge.** The messages API, tools, skills, and memory — string these to get answers.
2. **Execution.** A low-level harness plus managed infra (sandboxes, session storage), shipped as Claude Managed Agents, to actually do work.
3. **Coordination.** Assign roles and route by task complexity — one token advises, another executes; [a stuck model calls a smarter one for help in an "advisor" pattern](https://www.youtube.com/watch?v=ksfm6jeTg3Q).

> Tokens aren't fungible — maybe this token is advising, this token is executing, this token is dreaming.

## The catch

The coordination layer is still nascent: Jiang says they have only "inklings" of it and expose strategies "in ways that aren't very obvious." The same design multiplies a failure mode the team names [hyperindependence](https://www.youtube.com/watch?v=ksfm6jeTg3Q) — uncoordinated agents sprawling. On cost, they prefer [token rationalization via smarter routing over hard spending caps](https://www.youtube.com/watch?v=vPnVTHYplrQ), leverage that only pays off if your routing is actually good.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
