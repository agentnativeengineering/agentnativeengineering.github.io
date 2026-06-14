---
title: "Prune the toolset: the hidden token tax of MCP"
date: 2026-05-26
summary: "Wiring many MCP tools into an agent burns context tokens on schema and degrades tool selection before the agent does anything; load only what the task needs."
tags: ["mcp", "context"]
domain: "memory-and-context"
sourceName: "aaif.io"
sourceUrl: "https://aaif.io/blog/prime-videos-approach-to-progressive-tool-discovery/"
draft: false
---

On [19 May 2026](https://aaif.io/blog/prime-videos-approach-to-progressive-tool-discovery/) the Agentic AI Foundation published Prime Video's account of why connecting an MCP server to an agent is never free. Every tool the server advertises ships its name, description, and full JSON input schema into the context window at the start of the conversation, before the agent has done a single useful thing. IBM's Martin Keen [puts a number on it](https://www.youtube.com/watch?v=g9JIUM0MHgQ): the GitHub MCP server exposes 80 tools, and loading all of those definitions costs [roughly 55,000 tokens](https://www.youtube.com/watch?v=g9JIUM0MHgQ) even when the task needs only one or two of them. Those are real tokens — real money, and real window space taken from the actual work.

The cost isn't only tokens. It's accuracy. As the toolset grows, the model has more near-duplicate options to disambiguate, and tool selection degrades. Anthropic's [guidance on context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) frames the window as a finite, attention-limited resource where irrelevant content actively crowds out the signal — a single overloaded tool list works against the model on every turn. The Agentic AI Foundation calls this [the tool abstraction problem](https://aaif.io/blog/the-tool-abstraction-problem/): past a point, more tools make the agent worse, not more capable.

The fix is to stop loading the whole catalog up front and discover tools on demand. Prime Video's engineers started by giving agents the same hundreds of tools their humans had, then [cut it to three](https://aaif.io/blog/prime-videos-approach-to-progressive-tool-discovery/): at session start the agent sees exactly one tool, `find_tools`, and pulls in a small, relevant subset only once it knows the job. This is now a productised pattern, not a one-off — on [29 May 2026](https://www.marktechpost.com/2026/05/29/hermes-agent-ships-tool-search-for-mcp-anthropic-evals-show-49-to-74-accuracy-gain-on-opus-4/) the Hermes agent shipped MCP tool search built on Anthropic's deferred-loading approach, where a five-server, 34-tool deployment was carrying about [22,000 of its 45,000 prompt tokens](https://www.marktechpost.com/2026/05/29/hermes-agent-ships-tool-search-for-mcp-anthropic-evals-show-49-to-74-accuracy-gain-on-opus-4/) as schema overhead, and Anthropic's own evals show accuracy on large tool libraries [climbing from 49% to 74%](https://www.anthropic.com/engineering/advanced-tool-use) on Opus 4 once tools load on demand. Duolingo runs a Slackbot backed by [180+ MCP tools](https://aaif.io/blog/how-duolingo-built-an-ai-slackbot-with-180-mcp-tools/) where selection only stays tractable with routing rather than dumping every schema in, and sub-agents help too: an [isolated sub-agent](https://www.youtube.com/watch?v=H-8gUvYfRPs) gets its own narrow tool whitelist and hands results back, keeping the coordinator's window clean.

Treat the toolset as a budget. Wire in what the task needs, and let the agent reach for the rest.

[Memory & Context](/guide/memory-and-context/)
