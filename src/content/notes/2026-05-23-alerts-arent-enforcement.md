---
title: "The $47,000 loop: alerts aren't enforcement"
date: 2026-05-23
summary: "An agent that goes wrong doesn't crash, it spends — and only a hard cap that terminates before the next API call can stop it; a dashboard or alert arrives too late."
tags: ["cost", "autonomy"]
draft: false
---

A failing agent does not throw an exception and halt. It keeps calling the model, and every call costs money. The damage is measured in spend, not stack traces — and the bills are now landing in public. On [May 22, Fortune reported](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/) that Microsoft has begun cancelling most of its direct Claude Code licenses, and that Uber's CTO told The Information the company [burned through its entire 2026 AI coding-tools budget in four months](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/). Nvidia's Bryan Catanzaro put it plainly in the same piece: "the cost of compute is far beyond the costs of the employees." A week earlier, a [field audit of 30 teams running agents in production](https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/) found one developer ran up $4,200 in API fees over a single long weekend on an autonomous refactor — discovered Monday morning, after the fact.

That "after the fact" is the whole problem. The original case that named it is the [$47,000 agent loop](https://dev.to/waxell/the-47000-agent-loop-why-token-budget-alerts-arent-budget-enforcement-389i): an Analyzer and a Verifier caught in a ping-pong, running 264 hours with "no per-agent budget caps, and no mechanism that could have terminated the session before the next API call completed." The team had dashboards; as the post-mortem says, ["observability tools record; they don't intercept."](https://dev.to/waxell/the-47000-agent-loop-why-token-budget-alerts-arent-budget-enforcement-389i) Claude Code logged the same shape — a runaway that burned [1.67 billion tokens in five hours](https://github.com/anthropics/claude-code/issues/4095) while every liveness check stayed green.

The control belongs in the path of execution, not on a screen. Two concrete pieces:

- A budget the call cannot exceed. [LiteLLM supports per-key and per-session `max_budget`](https://docs.litellm.ai/docs/proxy/users), so the proxy refuses the next request once a session crosses its cap — the check runs before the call, not after.
- A kill switch for the workflow itself. A durable workflow (Temporal, Restate) gives you a stable session handle you can cancel, terminating the loop rather than waiting for it to finish.

Vendors are catching up to the same line. [Portal26's Agentic Token Controls](https://siliconangle.com/2026/04/23/portal26-launches-agentic-token-controls-cap-runaway-ai-agent-spend/), released in April, throttles agents nearing a cap and pauses or kills those that blow through one — enforcement, not an alert. The distinction is the point: monitoring tells you what happened; enforcement decides what happens next. Build the cap that can say no before the next token is bought.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
