---
title: "Stripe's Hundred Agents, a Model That Cheated Its Tests, and Memory Moving to Plain Files"
date: 2026-06-28
summary: "Stripe grounds compliance agents in fetched evidence, two teams gate every write behind humans, and four teams move agent memory onto plain files."
audio: "/audio/field-notes-episode-checkable-agents.mp3"
seconds: 571
covers:
  - "2026-06-27-agent-memory-files-and-index"
  - "2026-06-27-enterprise-agents-approval-gates-audit-trails"
  - "2026-06-27-stripe-compliance-agents-observations-auditable"
oneIdea:
  title: "An agent earns trust by being checkable, not by being clever — every claim traced to evidence, every mutating action gated, every step recorded."
  body: "Stripe forces every agent conclusion to trace to a fetched observation, so a regulator can audit it. OpenGov and Intercontinental Exchange gate every data-changing action behind a human and record every step. The common move: design the audit trail and the gated surface before you ship, because the model being smart proves nothing about production."
stats:
  - n: "100+"
    label: "Stripe compliance agents now running in production"
  - n: "26%"
    label: "cut in Stripe's median compliance review handling time"
  - n: "~80%"
    label: "analyst time spent gathering documents, not assessing risk"
  - n: "96%+"
    label: "helpfulness rating — a help-the-human metric, not autonomy"
brief:
  - kind: story
    domain: "architecture-and-orchestration"
    source: "AWS / Stripe"
    url: "https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/"
    title: "How Stripe's compliance agents force tool outputs back as observations to stay auditable"
    body: "Stripe breaks each compliance review into a DAG of sub-tasks and grounds its ReAct agents by feeding every tool result back as an observation, so no conclusion rests on invented text. The result: 26% faster reviews, 96%+ helpfulness, and an audit trail regulators can follow. Humans keep final decisions."
    take: true
  - kind: story
    domain: "reliability"
    source: "OpenGov / ICE"
    url: "https://www.youtube.com/watch?v=4uFVSLgD2Q4"
    title: "Enterprise agents ship on approval gates and audit trails, not prototypes"
    body: "OpenGov gates every data-mutating tool call behind a human and runs code in ephemeral sandboxes; Intercontinental Exchange records every agent step for replay. Both teams say the same thing: the production work is the governance plumbing, not the model's intelligence."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "Anthropic / Cline"
    url: "https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk"
    title: "Agent memory is converging on plain files and an index"
    body: "Anthropic, Manus, Cline, and Cognition independently moved agent memory onto plain files the agent greps and reads, plus a lightweight index — treating vector search as a targeted optimization, not the default. Files are inspectable and compound across sessions; a May 2026 study confirms grep wins for verbatim spans while vector still wins for large, non-navigable corpora."
    take: false
  - kind: quote
    domain: "architecture-and-orchestration"
    source: "AWS / Stripe"
    url: "https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/"
    title: "If the model can't act on a fact it didn't observe, it can't confidently invent one — and the audit trail writes itself."
    attribution: "— on Stripe's grounding-by-observation pattern for auditable compliance agents"
    take: false
draft: false
---
