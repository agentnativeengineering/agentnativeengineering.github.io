---
title: "California's fraud agent replays its event log to defend a decision in court"
date: 2026-08-30
summary: "California's DFPI, Anterior, and .txt all landed on the same spine for agents under audit: an append-only event log as the system of record, from which replay, audit trails, and evals fall out."
takeaways:
  - "Make the append-only event log your system of record, so replaying the exact events behind a past decision gives you audit trails, debugging, and evals from one mechanism."
  - "Keep sensitive payloads in separate immutable object storage from the event stream, so engineers can orchestrate and debug without seeing regulated data."
  - "The trade-off is real: append-only storage buys reproducibility and pays for it in harder reads."
tags: ["architecture-and-orchestration", "event-sourcing", "audit-trail", "replay"]
sourceName: "YouTube"
sourceUrl: "https://www.youtube.com/watch?v=2WZsT-znFTQ"
sources:
  - title: "Rachna Srivastava (DFPI): an air-gapped AI fortress for consumer data"
    url: "https://www.youtube.com/watch?v=2WZsT-znFTQ"
  - title: "Anterior: why your enterprise tech stack isn't ready for AI agents"
    url: "https://www.youtube.com/watch?v=mav15aW9lLM"
  - title: "Rémi Louf (.txt): agent frameworks considered harmful"
    url: "https://www.youtube.com/watch?v=KHudyx5wW3U"
draft: false
---
## What happened

In a talk published 2026-08-29, Rachna Srivastava of the California Department of Financial Protection and Innovation [described the air-gapped AI system her team runs for fraud investigation](https://www.youtube.com/watch?v=2WZsT-znFTQ) — fully offline, no network path out. The constraint is a courtroom: "in the court, the defense attorney has only one job, to attack the system that we have built." So the spine is an event log. Kafka preserves event ordering so they can replay from a checkpoint as proof, and Apache Iceberg rebuilds the exact state behind a decision years later.

## Why it matters

If your log is a byproduct of debugging, you can show which model calls happened but not the state the agent saw. [Anterior, which sells agentic AI to US health insurers](https://www.youtube.com/watch?v=mav15aW9lLM), argued in a 2026-08-19 talk that pilots collapse when audit trails, sensitive-data handling, and evals are bolted on afterward — so they make the append-only event log the source of truth and let compliance-grade audit trails fall out of the storage paradigm.

## How it works

1. **Append events, derive state.** Each step is an immutable event; state is a projection you rebuild, which is what makes [replay from a checkpoint](https://www.youtube.com/watch?v=2WZsT-znFTQ) possible.
2. **Keep payloads out of the stream.** [Anterior stores records separately in schema-driven immutable object storage](https://www.youtube.com/watch?v=mav15aW9lLM), so engineers debug without seeing protected health information.
3. **Replay for evals.** [Replaying the same events against a tweaked prompt or model](https://www.youtube.com/watch?v=mav15aW9lLM) scores it against the human's output, inside the customer environment.
4. **Let topology emerge.** At .txt, [agents declare the typed events they accept and emit](https://www.youtube.com/watch?v=KHudyx5wW3U), so fan-in and fan-out come from the log rather than an explicit graph.

> When the log is the system of record, replaying a past decision is just reading it back.

## The catch

Append-only makes reads harder, and [Anterior names that trade-off directly](https://www.youtube.com/watch?v=mav15aW9lLM). Srivastava's case against cloud — the Cloud Act, FedRAMP and SOC 2 as "just paper" — follows from her evidentiary bar, not a general verdict. And [.txt's system](https://www.youtube.com/watch?v=KHudyx5wW3U) is one engineer's, about 20 internal agents after a month: corroboration, not proof at scale.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)

