---
title: "MCP tools fail on interface clarity, not model intelligence"
date: 2026-06-17
summary: "Practitioners at MCPDev Summit Bengaluru traced production agent failures to wrapped OpenAPI specs, schema-verbosity selection bias, and a STDIO stderr deadlock — design the tool interface for the model, not the human."
takeaways:
  - "Write MCP tool names, descriptions, and schemas for the model that reads only those three things; don't wrap an OpenAPI spec and assume it works."
  - "A verbose tool description out-selects a sparse but better tool because more words give the model more surface area to match — descriptions structurally rig tool choice."
  - "A full 64KB stderr pipe can silently suspend a STDIO MCP server, so drain stderr and watch for protocol churn like the stateless 2026-07-28 spec."
tags: ["architecture-and-orchestration", "mcp", "tool-design", "agentic"]
sourceName: "Agentic AI Foundation"
sourceUrl: "https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/"
sources:
  - title: "MCPDev Summit Bengaluru: lessons from the agentic frontier"
    url: "https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/"
  - title: "Migration guide for the 2026-07-28 MCP spec breaking changes"
    url: "https://mcpmigrate.dev/blog/mcp-spec-2026-07-28-migration-guide"
draft: false
---
## What happened

When your agent works in local testing but degrades in production, the instinct is to blame the model — tweak the prompt, drop the temperature. In a [recap published 2026-06-16](https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/) of the Agentic AI Foundation's first MCPDev Summit in Bengaluru, practitioners said that instinct is usually wrong. (MCP is the Model Context Protocol, the open standard for exposing tools to an LLM agent.)

Yashasvi Misra of Pure Storage [described](https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/) a support agent that kept failing to cancel orders. The fix was not the AI: "It's clearly not an intelligence problem. It's a problem about clarity. How clear the interface is." A model never reads your docs — it sees only a tool's name, description, and JSON schema. Sam Partee of Arcade put the common mistake bluntly: take an OpenAPI spec, "wrap it, and call it an MCP. That gives it the utmost chances to fail."

## Why it matters

APIs were designed for human programmers; agents reason over the raw schema. If the interface is the agent's entire world, then interface design *is* orchestration. A poorly labeled endpoint is not a documentation gap the model can route around — it is a dead end.

## How it works

1. **The model reads three fields.** Name, description, schema. Anything not in those is invisible to it.
2. **Verbose tools win.** Per Jyoti Bisht of Harness, "more words actually equal more semantic surface area for the model to match against the user's intent" — so a bloated description out-selects a sparse but better tool.
3. **Primacy biases choice.** Aditya Oberai noted models remember "what they see first," so alphabetically listing tools buries critical ones.
4. **Drain stderr.** A full 64KB stderr pipe on a STDIO server can [silently suspend](https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/) the LLM engine — a deadlock, not a bug in reasoning.

> The agent only knows what the interface tells it, so clarity is the system, not the prompt.

## What broke

The failures here are harness failures, not model failures: a wrapped spec, a description tuned for human readability, a clogged pipe. They are also moving targets. A HN-surfaced [migration guide](https://mcpmigrate.dev/blog/mcp-spec-2026-07-28-migration-guide) walks through the 2026-07-28 MCP revision, which makes the core stateless — removing the initialize handshake and `Mcp-Session-Id`, so state moves to explicit handles passed as tool arguments. Fix the interface, then track the protocol it rides on.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
