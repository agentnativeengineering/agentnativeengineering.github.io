---
title: "Govern agents at the one interface every harness shares"
date: 2026-06-23
summary: "Databricks' open-source Omnigent puts cost budgets, approval gates, and a secret-hiding proxy at the one interface every agent harness shares — messages in, tool calls out — instead of re-implementing governance per vendor."
takeaways:
  - "Put cost, permission, and secret controls once at the messages-in/tool-calls-out boundary every harness shares, not inside each vendor's agent."
  - "Stateful policies can gate on history — require approval to push only after an agent has installed a new package."
  - "A network-intercepting sandbox lets an agent act on a secret like a GitHub token without ever seeing it."
tags: ["autonomy-and-cost", "meta-harness", "agent-governance", "sandbox"]
sourceName: "Databricks"
sourceUrl: "https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents"
sources:
  - title: "Databricks: Introducing Omnigent, a meta-harness"
    url: "https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents"
draft: false
---
## What happened

On 2026-06-13, Databricks' Matei Zaharia, Kasey Uhlenhuth, and Corey Zumar [introduced Omnigent](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents), an open-source (Apache 2.0) "meta-harness" — a layer that sits *above* coding agents like Claude Code, Codex, and Pi rather than being one itself. The team's claim is the part worth keeping: a harness is the loop and tooling wrapped around a model, and while harnesses differ internally, [the interface to users is the same](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents) — "messages and files in, text streams and tool calls out." That uniform shape lets one wrapper treat a terminal coding agent and an SDK agent (OpenAI Agents, Claude Agents SDK) as the same object: a session you reach from terminal, web, mobile, or REST.

## Why it matters

If you run more than one agent vendor, you re-implement governance — budgets, approvals, secret handling — once per harness, and each one logs and gates differently. The cost is that your control plane fragments exactly where it must not: spend and blast radius. Omnigent's premise is that because every harness reduces to the same input/output contract, you can put cost and permission control *once*, at the boundary, instead of inside each tool. That is the Autonomy, Cost & Control principle stated as architecture.

## How it works

1. **Common interface.** Every harness is wrapped as one session — messages/files in, streams/tool-calls out — so heterogeneous agents become interchangeable.
2. **OS sandbox.** Each run executes inside a flexible operating-system sandbox, giving the layer a real place to enforce policy.
3. **Stateful policies.** Guardrails track what an agent has done over time, e.g. require human approval to `git push` only *after* it has installed a new npm package.
4. **Cost gates.** You can ask Omnigent to pause an agent and ask to continue after every $100 it spends.
5. **Secret-hiding proxy.** The sandbox intercepts and transforms network requests so the agent never sees raw secrets like a GitHub token.

> Govern agents at the one interface they all share — messages in, tool calls out — not inside each vendor's harness.

## What broke

The honest gap is the framing, not a fix: Databricks compares this layer to how [Kubernetes and Terraform](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents) lifted operations above individual servers, motivated by results from orchestrating multiple agents (it cites Harvey, Anthropic's multi-agent work, and Databricks Genie). But the abstraction only holds where the messages-in/tool-calls-out contract actually does — agents that need bespoke channels, custom UI, or out-of-band state leak past it, and GEPA optimization plus broader harness integrations are still roadmap. Treat the uniform interface as the reusable lesson; treat the meta-harness as one early bet on it.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
