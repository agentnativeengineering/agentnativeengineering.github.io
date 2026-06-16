---
title: "Rocket Close cut agent latency 3x by reducing model round trips, not the model"
date: 2026-06-16
summary: "Rocket Close cut agent latency 3x by reducing LLM round trips with single-call retrieval — not a faster model — while exposing each data source as its own MCP tool."
takeaways:
  - "When a retrieval agent is slow, count its model round trips before reaching for a bigger model — resolve each query in a single data-fetch pass."
  - "Expose each data source as its own MCP tool with a descriptive name and docstring so the agent routes correctly without exploratory calls."
  - "Prompt the agent on what to accomplish, not the step-by-step how, and let session-level entitlements handle security."
tags: ["architecture-and-orchestration", "mcp", "latency", "strands-agents"]
sourceName: "AWS Machine Learning Blog"
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/"
sources:
  - title: "Building Supercharger: How Rocket Close optimized title operations with agentic AI"
    url: "https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/"
draft: false
---
## What happened

On 2026-06-12, AWS published an [engineering account](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) of how Rocket Close, a title agency inside Rocket Companies, built "Supercharger" — an agentic AI assistant for title examiners who "previously [spent] hours navigating disparate systems, state guides, and county requirements." It runs on [Strands Agents](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) (an open-source agent harness SDK) with Anthropic Claude models through Amazon Bedrock. The reported impact: a 30% drop in contact-center calls and emails, better state-exam accuracy, and a 3x latency improvement from architectural and prompting changes that cut the number of model calls.

The architectural choice worth copying: each internal data source is exposed as its own [Model Context Protocol (MCP) tool](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) — MCP being the open standard for letting an agent call external tools — so the agent picks which to call per query rather than running a fixed script.

## Why it matters

A knowledge-retrieval agent's latency and cost are dominated by how many round trips it makes to the model. Every extra tool-selection-then-call loop is another full LLM invocation, and they stack up fast. Rocket Close's [3x latency gain came from cutting those calls](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/), not from a faster model. If you structure one agent so it can answer a query in a single retrieval pass, you remove the biggest fixed cost in the loop. That is the core of structuring one agent without chaos.

## How it works

1. **One tool per data source.** Each operational database and policy store is a [distinct MCP tool](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) the agent selects dynamically, instead of one monolithic retrieval path.
2. **Separate agents from tools.** The team kept [agent reasoning and tool execution as separate concerns](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) so each could be tuned and tested on its own.
3. **Name tools descriptively.** Clear tool names and docstrings let the agent route correctly without trial-and-error calls.
4. **Prompt what, not how.** They [told the agent what to accomplish rather than prescribing the steps](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/), leaving the path to the model.
5. **Push security into the session.** [Row-level entitlements and Bedrock Guardrails](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/) ride on session attributes rather than per-query checks, with full audit logging.

> The 3x speedup came from cutting model calls through single-call retrieval, not from swapping in a faster model.

## What broke

The early design made too many LLM calls, dragging latency. The fix was [harness-level, not prompt-level](https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/): redesign retrieval so a query resolves in a single data-fetch pass, and lean on descriptive tool naming so the agent stops making exploratory calls to figure out which tool fits. The lesson generalizes — when an agent feels slow, count its round trips before you reach for a bigger model.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
