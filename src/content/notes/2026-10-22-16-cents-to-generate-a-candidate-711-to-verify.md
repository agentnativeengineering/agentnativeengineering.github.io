---
title: "16 cents to generate a candidate, $711 to verify one: size the swarm to the verifier"
date: 2026-10-22
summary: "A 300-sub-agent Claude run produced 318,484 candidates in 64 hours, but only 211 could be physically checked — a worked example of fan-out moving the whole throughput constraint onto the verifier."
takeaways:
  - "Wide sub-agent fan-out makes candidates nearly free and moves the entire throughput limit onto whatever verifies them, so the funnel ratio, not the agent count, is the number to design around."
  - "In this run generation cost roughly 16 cents per candidate and physical verification roughly $711, a gap of about 4,500x that no amount of extra parallelism closes."
  - "Build the cheap intermediate filter before you widen the swarm: an automated screen stood between 318,484 outputs and the 211 that anyone could actually test."
tags: ["architecture-and-orchestration", "sub-agents", "fan-out", "verification"]
domain: architecture-and-orchestration
sourceName: "Anthropic Research"
sourceUrl: "https://www.anthropic.com/research/claude-scorpion-toxin-binder-design"
sources:
  - title: "How Claude designed protein binders against scorpion neurotoxins"
    url: "https://www.anthropic.com/research/claude-scorpion-toxin-binder-design"
  - title: "Citrini Therapeutics"
    url: "https://www.citriniresearch.com/p/citrini-therapeutics"
upstream: "aidailybrief/2026-10-21"
draft: false
---

## The Takeaway

Fan-out buys you candidates, not answers; once generation is cheap, your architecture is only as wide as the slowest thing downstream that can tell a good output from a bad one.

## The details

- On [2026-10-20 Anthropic published](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design) a 64-hour run in which an internal Claude model, steered by one initial prompt and four follow-ups, generated 318,484 protein designs and screened 553,052 design-toxin pairs across 12 tools, setting its own quality thresholds.
- [Citrini Research](https://www.citriniresearch.com/p/citrini-therapeutics), the five-person firm that funded and ran the project, says the campaign spawned more than 300 sub-agents (parallel model instances each running part of the job) across 300-plus concurrent GPUs from a roughly 35-page prompt, with 367 human messages in total.
- Only [211 designs](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design) reached physical testing — 180 picked by the model, 31 added by the team — and 17 cleared the bar: a hit at both contract labs, binding in every replicate, and no signal against a control protein.
- [Citrini puts its own spend](https://www.citriniresearch.com/p/citrini-therapeutics) at $49,997 of compute, with Anthropic helping cover the token bill, against just under $150,000 of contract lab work. That is roughly $0.16 per candidate generated versus about $711 per candidate tested.

## Why it matters

Adding agents past the point where your verifier saturates buys a bigger pile to triage, not more answers. The middle tier is where the engineering is: the automated screen that cut 318,484 outputs to a few hundred did more for throughput than the fan-out did. Anthropic also [notes in a footnote](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design) that a simplified single-agent, single-GPU run over 24 hours reached comparable in silico scores, which is a caution about how much the width actually bought. The 300-sub-agent figure comes from Citrini, not Anthropic, which does not describe the topology, and the cost split is arithmetic on reported totals rather than a number either party published. Anthropic is explicit that it has not confirmed the binders neutralize venom, so the most expensive verifier has not run yet.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
