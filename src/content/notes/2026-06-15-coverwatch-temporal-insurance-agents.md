---
title: "Coverwatch runs multi-day insurance agents on Temporal Workflows"
date: 2026-06-15
summary: "An AI-native insurance brokerage models each carrier submission as a durable Temporal Workflow so agent state survives deploys, outages, and days-long human waits."
takeaways:
  - "Model an agent that pauses for human review or external waits as a durable workflow, not a queue job, so its state survives deploys and outages and resumes exactly where it stopped."
  - "Centralized workflow history doubles as a debugging asset: Coverwatch's AI coding agents read Temporal logs to diagnose failures."
  - "Use signals to pause on low-confidence output for human review and resume from the same state."
tags: ["durable-execution", "temporal", "agents", "human-in-the-loop"]
sourceName: "Temporal Blog"
sourceUrl: "https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows"
sources:
  - title: "Coverwatch: orchestrating AI insurance workflows on Temporal"
    url: "https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows"
  - title: "DurableOS autonomous trading desk demo (Temporal + OpenAI Agents SDK)"
    url: "https://www.youtube.com/watch?v=oKW1Hi7o9go"
draft: false
---
## What happened

In a [guest post dated 2026-06-09](https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows), Wilmer Yan, co-founder of Coverwatch — an AI-native commercial insurance brokerage in San Francisco — described how the startup runs its carrier-submission process on [Temporal](https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows), a durable-execution engine that persists workflow state across crashes. A single submission can begin with a customer call, pass through document intake and AI-prepared applications, pause for a broker to fill gaps, then "wait days for an underwriter response." Coverwatch models each submission as one durable Temporal Workflow so that state "survives deploys, outages, third-party API issues, and long stretches of silence."

## Why it matters

Agents that touch the real world don't finish in one request — they wait on people and external systems. Yan says queue-based background jobs and DAG (directed-acyclic-graph) tools "were a poor fit" because submissions are event-driven and full of external waits. The alternative the team rejected is the expensive one: hand-building message queues, retry logic, scheduled polling, and database-backed state reconstruction "just to make long-running automation safe enough for production." That plumbing is what durable execution removes.

## How it works

1. **One workflow per submission.** Each submission's steps live in one place instead of scattered across queues, cron jobs, and service tables.
2. **Agents run as activities.** [Pydantic-AI agents](https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows), via its native Temporal integration, extract structured risk data and prepare carrier-specific applications.
3. **Signals pause for humans.** Temporal Signals halt a workflow on low-confidence output for review, then resume from the same state.
4. **Built-in retries.** Steps retry automatically when a dependency or LLM provider is temporarily down.
5. **History as a debugging asset.** The team's AI coding agents read centralized Temporal logs to diagnose failures.

> Agents are easy to demo, but they are very hard to operate.
>
> — Darshit Vora, staff architect, Temporal

## What broke

That operability gap is exactly what a [Temporal demo published the same day](https://www.youtube.com/watch?v=oKW1Hi7o9go) stress-tests. Staff architect Darshit Vora built an autonomous trading desk on Temporal plus the OpenAI Agents SDK, then injected chaos — bad news, a downed broker API, and a killed worker. Because state is durably persisted, trades "resume or retry exactly where they left off without hand-built state machines, Redis, or queues." The fix for flaky agents wasn't a better prompt; it was moving state out of the process and into a durable harness.

[Durable Execution](/guide/durable-execution/)

