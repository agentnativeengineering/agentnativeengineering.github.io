---
title: "Chrome DevTools MCP measures agent tools in tokens per successful outcome"
date: 2026-06-10
summary: "Google's Chrome DevTools MCP team treats agents as a distinct user class — returning markdown summaries instead of raw traces, scoring interfaces by tokens per successful outcome, and writing error messages that tell the agent what to do next."
takeaways:
  - "Agents are a distinct user class with different bottlenecks than humans. Chrome DevTools MCP returns markdown semantic summaries instead of raw 50,000-line JSON traces and scores each interface by tokens per successful outcome, scoped per user journey rather than globally."
  - "Most agent-experience failures are silent. Microsoft's walkthrough of the seven steps between a prompt and generated code shows that an oversized tool description simply gets dropped from the context window, and the agent falls back to stale training data with no error anywhere."
  - "Error messages are now agent input, so make them prescriptive. Self-healing errors that state the next step stop literal-minded retry loops, and Datadog's Pup CLI cuts preload cost by letting agents fetch its command schema on demand instead of loading 200+ tool definitions up front."
tags: ["harness-engineering", "mcp", "agent-experience", "tool-design"]
domain: "harness-engineering"
sourceName: "youtube.com"
sourceUrl: "https://www.youtube.com/watch?v=_B4Pv9ttFgY"
draft: false
---
**Why this matters to you.** If you ship an SDK, CLI, or MCP server (Model Context Protocol — the standard interface coding agents use to call external tools), agents are already your users, and they fail differently than humans: they read everything you return into a token-limited context window, take error messages literally, and silently skip your tool when its description costs too much space. The price is invisible — the agent writes code from stale training data instead, and nobody files a bug. On 2026-06-05, Michael Hablich of Google published [a talk on the engineering lessons from Chrome DevTools MCP](https://www.youtube.com/watch?v=_B4Pv9ttFgY), the purpose-built server that lets agents like Claude Code, Gemini CLI, and Codex debug and profile live web pages.

**What they actually do.** The first lesson is to [treat agents as a distinct user class](https://www.youtube.com/watch?v=_B4Pv9ttFgY) with different cognitive bottlenecks. Instead of dumping a 50,000-line JSON performance trace into context, the tools return markdown semantic summaries, and the team measures each interface in tokens per successful outcome — scoped per user journey, not globally. Token burn is cut by hiding niche tools behind flags, offering a slim mode that exposes only a few tools, and shipping a CLI agents can chain for local post-processing. Error recovery gets self-healing error messages that tell the agent what to do next. Discoverability came from decomposing one monolithic tool into 25 well-described ones — the schema is the agent's UI. And the team refuses to trade trust for convenience: per-action human consent stays on by design, framed around Simon Willison's lethal trifecta.

**The idea underneath.** Failures cascade silently. Microsoft's breakdown of [the seven steps between a prompt and generated code](https://developer.microsoft.com/blog/how-ai-coding-agents-actually-use-your-technology) shows why: your tool description competes for context-window space, an oversized response creates "drag" that pushes other context out, and a cryptic error sends a literal-minded agent iterating in the wrong direction — so measuring only "was my tool called?" reveals almost nothing. The same week, Datadog shipped [Pup, a CLI built for agents](https://www.datadoghq.com/blog/give-your-ai-agents-live-datadog-access-from-the-command-line/) that applies the pattern in production: agents fetch the command tree on demand via `pup agent schema` instead of preloading 200+ tool definitions, and OAuth-scoped tokens replace long-lived API keys.

**What to do tomorrow.** Open the most-called tool in your MCP server or CLI and trace one full agent journey through it. Count the tokens it returns per successful outcome, then rewrite its most common error message so it states the next command to run — prescriptive errors are one of the four lessons Hablich names, and they need no schema change to ship.

[Harness Engineering](/guide/harness-engineering/)
