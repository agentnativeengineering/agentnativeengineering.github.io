---
title: "A Vetted Agent Tool That Rewrote Itself to Steal Your Chats"
date: 2026-06-21
summary: "Three notes, one rule: an agent pays off only where a trustworthy judge — the description, the human checkpoint, the frozen benchmark — stays out of its reach."
audio: "/audio/field-notes-episode-never-grade-its-own-homework.mp3"
seconds: 521
youtube: "https://youtu.be/-7cEsLJUZms"
covers:
  - "2026-06-15-optimization-agent-benchmark-cant-game"
  - "2026-06-15-agents-move-human-operator-to-supervisor"
  - "2026-06-19-mcp-tool-descriptions-trust-boundary"
oneIdea:
  title: "An autonomous agent only pays off where there's a trustworthy yardstick it can't reach in and rewrite."
  body: "The same rule shows up three ways today. A poisoned MCP tool description hijacks an agent because the model trusts what it reads. An agent doing 48x more work stays safe only because a human still signs off on the risky steps. And Datadog's optimizer works only because the benchmark is frozen and grounded in real traffic before a separate agent tries to beat it. In every case, if the agent controls the thing that judges it, the trust is gone."
stats:
  - n: "48x"
    label: "more machine work per agent session than non-agent search — yet it paused for approval more, not less"
  - n: "26 min vs 33 sec"
    label: "machine execution per session: Perplexity's agent vs its non-agent search"
  - n: "8%+"
    label: "of a heavily-tuned Go service's total CPU cut by Datadog's DODO optimizer (~10k cores)"
  - n: "~25%"
    label: "of captured tag inputs had uppercase chars — the real-traffic detail a synthetic benchmark missed"
brief:
  - kind: story
    domain: "security"
    source: "Invariant Labs"
    url: "https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks"
    title: "A vetted MCP tool can rewrite its own description and hijack your agent"
    body: "MCP tool descriptions reach the model with the same authority as your own prompt, yet the spec itself calls them untrusted. Invariant Labs demoed a server that looked clean at install, then silently swapped its description on a later run to exfiltrate chat history. Pin the tool's fingerprint at approval and re-prompt on any change."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "Perplexity / HBS"
    url: "https://research.perplexity.ai/articles/how-ai-agents-reshape-knowledge-work"
    title: "Perplexity + HBS: agents did 48x more work — and paused MORE to ask"
    body: "In real deployed sessions, Perplexity's agent ran ~26 minutes of machine execution per session versus 33 seconds for non-agent search — roughly 48x more work. Yet it paused for approval more often, not less. Autonomy scaled by adding checkpoints, moving the human from operator to supervisor."
    take: false
  - kind: story
    domain: "evaluation"
    source: "Datadog"
    url: "https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/"
    title: "Datadog's DODO: split the agent that builds the benchmark from the one that beats it"
    body: "DODO grounds an optimization agent in real production telemetry, then splits the work: one loop fits a benchmark to live traffic and freezes it, a separate loop optimizes against it so the agent can't game its own score. The result cut more than 8% of a heavily-tuned Go service's total CPU."
    take: false
  - kind: quote
    domain: "security"
    source: "TrueFoundry analysis"
    url: "https://www.truefoundry.com/blog/blog-mcp-tool-poisoning-gateway-defense"
    title: "Every byte that reaches the model carries the same authority weight."
    attribution: "— on MCP tool poisoning, why a third-party tool description has the same standing as your system prompt"
    take: false
draft: false
---
