---
title: "Loop engineering — the nested loops that let coding agents build for hours"
date: 2026-07-02
summary: "In a June 26 Batch letter, Andrew Ng frames \"loop engineering\" — the buzzphrase Boris Cherny and Peter Steinberger pushed viral — as three nested loops at different speeds: a fast agentic coding loop, a slower developer-feedback loop, and a slow external-feedback loop."
takeaways:
  - "Design your agent workflow as nested loops by speed, not one long prompt — the fast loop self-corrects, the slow loops inject what the agent can't know."
  - "Closing the inner loop (the agent tests its own work) is what lets a coding agent run productively for an hour without you babysitting it as QA."
  - "Give the agent a spec and evals for the inner loop; reserve human time for the outer loops — product vision, spec clarification, and real user feedback."
tags: ["harness-engineering", "agentic-coding", "loops", "evals"]
sourceName: "Andrew Ng — The Batch (issue 359)"
sourceUrl: "https://www.deeplearning.ai/the-batch/issue-359"
sources:
  - title: "Andrew Ng, 'Loop engineering' three loops for 0-to-1 products — The Batch issue 359 (2026-06-26)"
    url: "https://www.deeplearning.ai/the-batch/issue-359"
draft: false
---
## What happened

On June 26, Andrew Ng's [Batch letter](https://www.deeplearning.ai/the-batch/issue-359) framed "loop engineering" — a phrase he notes went viral after ["mentions of it by Boris Cherny (Claude Code's creator) and Peter Steinberger (OpenClaw's creator)"](https://www.deeplearning.ai/the-batch/issue-359) — as three nested loops for building products with coding agents. Each runs at a different speed: an **agentic coding loop** (minutes), a **developer-feedback loop** (tens of minutes to hours), and an **external-feedback loop** (days).

## Why it matters

The inner loop is what changed the game. When [the agent tests its own work and keeps iterating](https://www.deeplearning.ai/the-batch/issue-359) against a spec, it can work longer productively without human intervention — Ng describes a coding agent spending about an hour building a typing app for his daughter, checking its build in a browser several times, before coming back to him. Structure the loops well and the human stops being the agent's QA and moves up to product decisions.

## How it works

1. **Agentic coding loop (minutes).** Given a spec and optionally [evals — "a dataset against which to measure performance"](https://www.deeplearning.ai/the-batch/issue-359) — the agent writes, tests, and re-iterates until the code meets the spec. This is the loop you engineer to run unattended.
2. **Developer-feedback loop (tens of minutes to hours).** The developer reviews the running product and steers: which features, where the UI is weak, spec clarifications. Better inner-loop testing shrinks the QA work, freeing this time for higher-level calls.
3. **External-feedback loop (days).** Friends, alpha testers, production A/B tests — slow signal that reshapes the vision, which drives the spec, which drives the agent.

> Engineer the loops by cadence: let the fast loop self-correct against evals, and spend human time on the slow loops where you know things the agent doesn't.

## The catch

The outer loops resist automation for a real reason. Ng argues the human holds a ["context advantage" — we know more than the agent about the users and where the product must operate](https://www.deeplearning.ai/the-batch/issue-359) — so human-in-the-loop stays necessary to inject that knowledge, and the inner loop only runs unattended once you've actually built the spec and evals to close it. It's a framing drawn from one builder's 0-to-1 experience rather than a benchmark.

[Harness Engineering](/guide/harness-engineering/)
