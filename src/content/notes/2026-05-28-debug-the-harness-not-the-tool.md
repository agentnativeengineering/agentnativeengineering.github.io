---
title: "Your MCP server works — your agent doesn't"
date: 2026-05-28
summary: "When an agent fails, the tool and the model are usually fine; the bug is in context, handoff, or the eval — and a trace plus an eval is how you localize it instead of guessing."
tags: ["observability", "evaluation"]
draft: false
---

On May 21, Arize shipped [Phoenix v16.0.0](https://github.com/Arize-ai/phoenix/releases), which lets you write evaluators as server-side code — composite scores, embedding-based checks, and LLM juries that poll several models for a consensus verdict. It landed the same week as Honeycomb's [O11yCon in San Francisco](https://events.honeycomb.io/o11yConSF2026) (May 20–21), whose premise was that agents introduce complexity traditional observability was never designed for. Both point at one thing: when an agent misbehaves, the bug is usually not where you first look.

A common pattern: the MCP server passes its own tests, the model scores well on benchmarks, and the agent still does the wrong thing. The reflex is to blame the model or swap the tool. The actual bug is usually somewhere else — the context the agent was handed, a state dependency lost on a handoff, or an eval that never checked the thing that broke. AAIF makes the structural version: an MCP server gives an agent the *capability* to act, but without the right context it lacks the *judgment* to act correctly, and [closing that context gap is what separates a working agent from a working server](https://aaif.io/blog/closing-the-context-gap-why-mcp-skills-works/).

You can't fix what you can't locate. The first move is a trace where every LLM call and every tool invocation is [a queryable span with context](https://www.youtube.com/watch?v=5nZKUQFDYNA). Honeycomb describes teams without this going into "archaeology mode" — stitching partial logs and correlating timestamps by hand while the incident burns. With AI and system spans in [one trace waterfall under the OTel gen_ai semantic conventions](https://www.youtube.com/watch?v=2IEmf58a1Kk), you can see the agent didn't fail because the model was wrong — a downstream tool call threw a connection error — and read the exact exception. Clay runs tracing [from day zero](https://www.youtube.com/watch?v=cx6_tb6HCeY) to answer the real question: was a bad answer a tool problem, an inference problem, or something else? One agent well observed beats a swarm running blind.

The trace tells you *where* it broke; an eval tells you whether it's still broken after you change something — what the Phoenix evaluators above are for. Databricks frames evals as the spec for a non-deterministic system, and reports that [7x more systems reach production once teams build evals](https://www.youtube.com/watch?v=-NgCZDeITb4). Datadog's harness-first practice closes the loop the same way: production telemetry feeds back into [automated verification](https://www.datadoghq.com/blog/ai/harness-first-agents/) instead of line-by-line review.

So before you blame the tool or the model: trace it, localize the failure, and write the eval that would have caught it.

[Observability](/guide/observability/)
