---
title: "The agent that does the work should never grade its own homework"
date: 2026-09-11
summary: "Three founders building production features on Claude Managed Agents independently landed on the same fix: a separate verifier agent, graded on its own rubric, checks the worker agent's output before a user sees it."
takeaways:
  - "Don't let the agent that did the work also grade it: run a separate verifier agent with its own rubric before the output reaches a user"
  - "Three unrelated startups (meeting-assistant, sales-agent, product-analytics) each built this decoupled worker/verifier split within one to two weeks on Claude Managed Agents"
  - "When the underlying model changes, watch for new failure modes instead of re-tuning prompts for the old model"
tags: ["evaluation", "verifier-agent", "claude-managed-agents", "model-migration"]
sourceName: "YouTube"
sourceUrl: "https://www.youtube.com/watch?v=hm8NzEd5io0"
sources:
  - title: "How founders build on Claude Managed Agents (roundtable)"
    url: "https://www.youtube.com/watch?v=hm8NzEd5io0"
draft: false
---
## What happened

In a roundtable [published 2026-09-08](https://www.youtube.com/watch?v=hm8NzEd5io0), three startup founders building on Anthropic's Claude Managed Agents described converging, independently, on the same pattern: never let the agent that did the work also grade it. A meeting-assistant company runs separate "outcomes" agents that grade draft briefs against a rubric for accuracy and presentation, sometimes up to 24 hours before the meeting they're prepping for, before a user ever sees the output. A sales-intelligence company (Watchtower) runs one persistent agent per customer account that builds up account-level memory over time, then fans a single cross-account question out to hundreds of these agents and rolls the answers up — keeping tightly managed "core" memory separate from softer, less-critical memory like stated preferences. A product-analytics company sandboxes a snapshot of a customer's source code and diffs it against live telemetry to catch missing instrumentation, running the check as an overnight batch job and opening a pull request when it finds a gap. All three said they shipped the feature in one to two weeks on the managed harness.

## Why it matters

Model capability is jagged — strong on most inputs, quietly wrong on some — so a worker agent grading its own output shares its own blind spots. A separate verifier, scored on its own [rubric](https://www.youtube.com/watch?v=hm8NzEd5io0), catches failures the worker can't see in itself.

## How it works

1. **Worker agent does the task.** It drafts the brief, writes the account summary, or produces the code diff.
2. **A separate verifier agent grades it.** It runs its own rubric, with no shared context or incentive to rubber-stamp the worker's output.
3. **The verifier runs ahead of the user.** Grading finishes hours before the result is needed, leaving room to fix or discard a bad output.
4. **Model swaps get watched, not chased.** When the underlying model changes, all three founders said they look for new failure modes rather than over-tuning prompts for the old one.

> Grade the agent's work with a second agent that never touches the task itself.

## The catch

The founders were candid about the cost of this pattern on managed infrastructure: running a verifier agent for every worker call adds real spend, complicates attribution of which agent caused which result, and the managed-agent pricing has no batch or flex tier to soften that cost at scale.

[Evaluation](/guide/evaluation/)
