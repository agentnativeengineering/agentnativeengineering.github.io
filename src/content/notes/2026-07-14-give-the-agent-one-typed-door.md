---
title: "Give the agent one typed door for every edit it makes"
date: 2026-07-14
summary: "Watershed, Phaidra, and AWS converged on the same reliability move: let the LLM reason and write code freely, but force every effect and retrieval through a deterministic typed layer that validates, rejects, and retries."
takeaways:
  - "Let the agent reason and write code freely, but force every state change and retrieval through a deterministic typed layer that validates, rejects, and retries — you can't make the model deterministic, but you can make its blast radius deterministic."
  - "General coding agents scaled better than specialized function-call tools for Watershed, but only once a typed boundary separated the fields the agent may edit from the derived fields it must not touch."
  - "The pattern generalizes: Watershed lifted internal eval accuracy from 43% to 92%, and Phaidra held 100% accuracy at ~9,000 tokens where its old approach fell to 30% at 460,000 sensors."
tags: ["reliability", "deterministic-execution", "typed-sdk", "agent-architecture"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=CLttOU7n6sI"
sources:
  - title: "Andrew Dumit (Watershed): Respect The Process"
    url: "https://www.youtube.com/watch?v=CLttOU7n6sI"
  - title: "Phaidra: Semantic Blindness — 500,000 Sensors Confused an LLM"
    url: "https://www.youtube.com/watch?v=EUsPvBeIx70"
  - title: "Elizabeth Fuentes (AWS): Stop AI Agent Hallucinations"
    url: "https://www.youtube.com/watch?v=vJukHCIv7Ck"
draft: false
---
## What happened

[Watershed AI engineer Andrew Dumit](https://www.youtube.com/watch?v=CLttOU7n6sI), in a talk published 2026-07-07, described deploying coding agents to edit the supply-chain graphs behind product carbon footprints. Early React agents with specialized function-call tools worked on one graph but broke at scale — inconsistency, context exhaustion, and schema hallucination. Swapping in general coding agents added flexibility but new dangers: writing Python instead of TypeScript, mutating graph data with no lineage, and "gaslighting" users about edits that never happened. His fix — "constrain the effects, not the expression" — lets the agent reason and write code freely, but forces every graph edit through a typed TypeScript SDK (the only door) and a deterministic run-executor that lints, runs, validates, and can reject and retry. Internal eval accuracy climbed from 43% to 92%.

## Why it matters

An agent's freedom to write arbitrary code is also its freedom to corrupt state invisibly. You can't make the model deterministic, but you can make its blast radius deterministic: bound what an effect is allowed to be, so every wrong expression bounces off a typed boundary instead of landing in your data. That is what turns a nondeterministic system into a dependable one.

## How it works

1. **Free expression.** The agent reasons and writes whatever code it wants.
2. **One door.** Every effect passes through a typed SDK that separates editable fields from derived ones.
3. **Deterministic executor.** A script lints, detects conflicts, runs the code, and validates the output artifacts.
4. **Reject and retry.** Invalid runs bounce back to the agent; valid ones emit replayable review artifacts a non-coder can inspect without reading code.

> Constrain the effects, not the expression.

## The catch

The pattern only pays off where the domain has structure to encode. [Phaidra](https://www.youtube.com/watch?v=EUsPvBeIx70) hit the same wall with 460,000 inconsistently named data-center sensors: a planner LLM emits a structured search plan and a deterministic resolver executes it, holding 100% accuracy at ~9,000 tokens per query where the old approach fell to 30%. [AWS's Elizabeth Fuentes](https://www.youtube.com/watch?v=vJukHCIv7Ck) puts hard rules in Python via before-tool-call hooks "the model cannot escape." All three encode a boundary the model can't cross. And validating output isn't the whole job — Watershed cites a 2020 study where six experts given the same wine data varied by up to 50%, so the process itself has to be traceable, not just the answer plausible.

[Reliability](/guide/reliability/)
