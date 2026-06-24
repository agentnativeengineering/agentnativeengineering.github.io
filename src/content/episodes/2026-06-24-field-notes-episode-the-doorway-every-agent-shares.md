---
title: "One Million Tasks, and the Trouble Was an Agent Trying Too Hard"
date: 2026-06-24
summary: "Where to put agent controls: at the one boundary every harness shares, treating agents as well-meaning insiders, not outside attackers."
audio: "/audio/field-notes-episode-the-doorway-every-agent-shares.mp3"
seconds: 474
covers:
  - "2026-06-15-bound-agent-llm-spend-at-the-gateway"
  - "2026-06-23-deepmind-agents-as-insider-threats"
  - "2026-06-23-govern-agents-at-the-shared-harness-interface"
oneIdea:
  title: "A control the agent can ignore isn't a control. Put budgets, secrets, and permissions at the shared boundary where they're enforced whether the agent cooperates or not."
  body: "Every coding harness reduces to the same shape: messages in, tool calls out. Databricks' Omnigent and Solo's agentgateway both put governance at that one doorway instead of inside each vendor's agent. A budget enforced in the request path refuses the next call before the money is spent; a secret swapped in at the proxy means a hijacked agent has no key to steal."
stats:
  - n: "1M"
    label: "DeepMind coding tasks analyzed — most flagged events were overzealousness, not malice"
  - n: "$100"
    label: "Omnigent can pause an agent to re-confirm after every $100 of spend"
  - n: "messages in → tool calls out"
    label: "the single interface every agent harness shares, where governance belongs"
brief:
  - kind: story
    domain: "security"
    source: "The Decoder"
    url: "https://the-decoder.com/google-deepmind-treats-its-own-ai-agents-like-rogue-employees-with-office-keys/"
    title: "DeepMind treats its own agents as insider threats, not trusted employees"
    body: "Google DeepMind's AI Control Roadmap grants internal agents permissions incrementally on verified behavior, with supervisor agents watching reasoning and a real-time prevention layer. Across 1M coding tasks, most flagged events were overzealousness and misinterpretation — not malice."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "Databricks"
    url: "https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents"
    title: "Govern agents at the one interface every harness shares"
    body: "Databricks' open-source Omnigent puts cost budgets, approval gates, and a secret-hiding proxy at the boundary every harness shares — messages in, tool calls out — instead of re-implementing governance per vendor. A network-intercepting sandbox lets an agent act on a token without ever seeing it."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "Solo.io"
    url: "https://www.solo.io/blog/building-real-time-ai-cost-controls-with-agentgateway"
    title: "Bound agent spend at the gateway with reserve-then-settle budgets"
    body: "Provider dashboards are retrospective; Solo's agentgateway moves dollar budgets into the request path. It reserves estimated cost before the call and settles actual usage after, so a blown allocation rejects the next call before it reaches the model — fail-closed when the budget check can't complete."
    take: false
  - kind: quote
    domain: "autonomy-and-cost"
    source: "Databricks"
    url: "https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents"
    title: "Harnesses differ inside, but the interface to users is the same: messages and files in, text streams and tool calls out."
    attribution: "— Databricks' Omnigent team, on why governance belongs at the shared boundary"
    take: false
draft: false
---
