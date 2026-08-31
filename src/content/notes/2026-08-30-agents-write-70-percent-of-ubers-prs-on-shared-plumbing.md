---
title: "Agents write 70% of Uber's PRs on plumbing every team inherits"
date: 2026-08-30
summary: "Uber's engineers say agent leverage at their scale comes from six shared platform blocks — one model gateway, one tool gateway, pre-warmed environments — that every agent gets by default, a split Warp makes explicit too."
takeaways:
  - "Put identity, PII redaction, tool discovery, spend attribution and warm dev environments in one shared platform layer every agent inherits by default, instead of re-solving them inside each team's harness."
  - "Route every model call through a single compatible endpoint so guardrails stay latency-bounded (Uber: five safety models plus PII redaction under 100ms) and every request is attributable to a user, project and team."
  - "Treat where an agent runs as a separate primitive from which harness it uses, so state, artifacts and outputs stay consistent when you swap models or harnesses."
tags: ["architecture-and-orchestration", "platform-engineering", "mcp-gateway", "agentic-sdlc"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=17-YSUHo6Lk"
sources:
  - title: "Agentic SDLC at Uber — Uday Kiran Medisetty & Adam Huda"
    url: "https://www.youtube.com/watch?v=17-YSUHo6Lk"
  - title: "Building the Oz Cloud Agent Platform — Safia Abdalla, Warp"
    url: "https://www.youtube.com/watch?v=L173Z8DpaJg"
draft: false
---
## What happened

In a talk published 2026-08-21, Uber's Uday Kiran Medisetty and Adam Huda [walked through the platform behind their agentic SDLC](https://www.youtube.com/watch?v=17-YSUHo6Lk) (software development lifecycle): over 70% of Uber's pull requests now come from local or cloud agents, and over 250 automated migrations have rewritten 9 million lines of code. The leverage sits in six shared building blocks every agent inherits, rather than in any one team's harness.

## Why it matters

Identity, PII redaction, tool discovery, spend attribution and a warm dev environment are the same problems in every team's agent harness. Solved once in the platform they are a default; solved per team they are a standing tax, and a measurable one: Uber's MCP gateway cut token use by more than 40%.

## How it works

1. **One model gateway.** Every call goes through a single OpenAI/Anthropic-compatible endpoint that adds Spire identity, redacts 20+ PII (personally identifiable information) types and runs five safety models — all "under 100 milliseconds" — while attributing 100M+ requests a day per user, project and team.
2. **One tool gateway.** An MCP gateway (Model Context Protocol — the standard interface agents use to reach tools) auto-crawls internal APIs into agent tools. Separate blocks add 2,500 lint-checked skills at 20,000 executions a day and a 40-million-entry context graph linking services, owners, design docs, Jira and incidents.
3. **Environments as their own primitive.** Uber pre-provisions Kubernetes "balloon pods" with repos snapshotted and search indexes prebuilt. Warp's Safia Abdalla [makes the same split explicit](https://www.youtube.com/watch?v=L173Z8DpaJg): where an agent runs (managed or self-hosted sandbox) is separate from which harness it uses, with platform-level structure keeping state, artifacts and outputs consistent across Claude, Codex or a custom harness.

> "You take the vanilla client, you set the project ID and we take care of everything else." — Medisetty, on the model gateway

## The catch

Medisetty said the blocks are "in various stages of maturity and rollout", and credited six years of monorepo and Bazel work as the foundation — this sits on an already-consolidated codebase. The bottlenecks the talk still names are CI capacity, experiment throughput, and deciding what should be built at all. Abdalla, for her part, pushes back on the "software factory" framing in favour of a craftsman's workshop.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
