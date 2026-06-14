---
title: "Coordination is the missing primitive for agent swarms"
date: 2026-05-27
summary: "Runtime, orchestration, and triggers for multi-agent work are largely solved; coordinating who does what and where a human steps in is not, and reusing GitHub or a ticket tracker for it just hides the intervention points."
tags: ["multi-agent", "orchestration"]
domain: "architecture-and-orchestration"
sourceName: "suprmind.ai"
sourceUrl: "https://suprmind.ai/hub/insights/multi-agent-ai-news-week-of-may-19-25-2026-enterprise-orchestration-platforms/"
draft: false
---

In the week of May 19–25, five enterprise platforms — Salesforce, Microsoft Copilot Studio, ServiceNow, Notion, and Freshworks — each [shipped multi-agent orchestration as a core layer](https://suprmind.ai/hub/insights/multi-agent-ai-news-week-of-may-19-25-2026-enterprise-orchestration-platforms/), with governance built into the coordination itself: audit trails on every agent action, scoped permissions, human-in-the-loop controls. The shared bet, the roundup notes, is that "orchestration governance is eclipsing raw model capability as the primary buying criterion" — the gap practitioners have named all year.

Sketch the infrastructure for running coding agents at scale and most boxes are already filled in. Lou Bichard of Ona [walks through the stack](https://www.youtube.com/watch?v=5Sui_OnSRlY) and concludes that runtime is "pretty much a solved problem," orchestration is solved, and triggers — webhooks on a raised PR or a new Linear ticket — are too. The missing piece is coordination: how agents pick up tasks from each other, hand off work, and surface the moment a human should step in.

The trap is reaching for tools you already have. "GitHub is not a coordination layer for agents," Bichard argues — point a swarm at it and the pull requests, review threads, merge conflicts, and CI runs get "incredibly noisy for you as a human to make sense of where you should step in." Ona's own project, built on Linear, hit the same wall. The noise is the failure: it buries the one signal the human in the loop needs — where to intervene.

What ships instead is structure built for the problem. Luke Alvoeiro of Factory [describes a five-pattern taxonomy](https://www.youtube.com/watch?v=ow1we5PzK-o) — delegation, creator-verifier, direct communication, negotiation, broadcast — composed into long-running "missions" with explicit handoffs. Two findings carry the load: features run **serially**, parallelism confined to read-only work, because parallel writers "step on each other's changes"; and validation is "adversarial by design" — a fresh agent that never saw the code, since "tests written after implementation confirm decisions," not catch bugs.

Coordination is also where systems fail. The UC Berkeley [MAST taxonomy](https://arxiv.org/abs/2503.13657), drawn from over 150 annotated traces across seven frameworks, sorts 14 failure modes into three buckets — specification, inter-agent misalignment, and task verification — most of them cascading from coordination breakdowns, not raw model capability. IBM's framing is the other constraint: [go multi-agent](https://www.youtube.com/watch?v=kYkZI3oj2W4) when an error is costly enough to need verification, single-agent when it isn't.

When you scale a swarm, design the coordination layer deliberately. Borrowing GitHub or a tracker hides the signal you need.

[Architecture & Orchestration](/guide/architecture-and-orchestration/).
