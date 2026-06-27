---
title: "Enterprise agents ship on approval gates and audit trails, not prototypes"
date: 2026-06-27
summary: "Two teams running agents in production say the same thing: mutating actions need human approval gates, sandboxes, and recorded audit trails before any feature ships."
takeaways:
  - "Any agent action that mutates real data should pass through a human-in-the-loop approval gate before it executes, not after."
  - "Prototypes are easy; the production work is the governance plumbing -- approval gates, sandboxed execution, CI evals, and recorded audit trails."
  - "Record every agent step so you can replay, debug, and prove what the agent actually did."
tags: ["reliability", "human-in-the-loop", "approval-gates", "enterprise-agents"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=4uFVSLgD2Q4"
sources:
  - title: "OpenGov: How we built and scaled OG Assist in production"
    url: "https://www.youtube.com/watch?v=4uFVSLgD2Q4"
  - title: "Intercontinental Exchange on enterprise-grade agentic AI at scale"
    url: "https://www.youtube.com/watch?v=8dAcMPHUEYU"
draft: false
---
## What happened

In a talk published 2026-06-26, OpenGov engineer Gabe De Mesa described how the team [built and scaled OG Assist](https://www.youtube.com/watch?v=4uFVSLgD2Q4), an agent embedded across the company's government ERP products (budgeting, procurement, permitting). The agent reads what is on the screen and makes tool calls against live product data. The safety design is concrete: [human-in-the-loop approval gates for any mutating tool call, ephemeral sandboxes for code execution and file creation, and automated CI evals against real completions](https://www.youtube.com/watch?v=4uFVSLgD2Q4). At Intercontinental Exchange, AI leader Anand Pradhan made the [same point at the Databricks Data+AI Summit](https://www.youtube.com/watch?v=8dAcMPHUEYU): prototypes are easy, but enterprise scale demands checkpointing, logging, security, and recorded audit trails before shipping.

## Why it matters

An agent that can mutate ERP records or originate a loan is a system that can do real damage at scale. The wall both teams hit is that a working demo proves nothing about production. Reliability comes from the plumbing around the model -- gates, sandboxes, and evals -- not from the model being smart. ICE records [every agent step to enable replay and pattern recognition](https://www.youtube.com/watch?v=8dAcMPHUEYU); OpenGov gates every write behind a human approval.

> The agent can be brilliant on most calls and wrong on a trivial one, so every mutating action gets gated and every step gets recorded.

## The catch

Approval gates trade autonomy for safety, and they only work if the gated set is exhaustive -- a single ungated mutating path defeats the whole scheme. Both talks are conference accounts, not audited postmortems, so the failure rates behind these defenses are not public. The lesson holds regardless: decide your gated surface and your audit trail before the feature ships, because retrofitting governance onto a live agent is far harder than building it in.

[Reliability](/guide/reliability/)
