---
title: "The trust boundary you forgot you drew"
date: 2026-06-15
summary: "Three real agent deployments show the same lesson: operating an agent means deciding where you deliberately don't trust it."
audio: "/audio/field-notes-episode-where-you-dont-trust-the-agent.mp3"
seconds: 431
covers:
  - "2026-06-15-google-secops-agents-triage-60-seconds"
  - "2026-06-15-coverwatch-temporal-insurance-agents"
  - "2026-06-15-memory-poisoning-agent-memory-attack-surface"
oneIdea:
  title: "The day you give an agent durable memory, you create a trust boundary you didn't know you had — and the damage can be planted weeks before it fires."
  body: "Memory poisoning is time-decoupled: a malicious note lands in a README in February, a different user triggers it in April, and no single moment looks suspicious. Unlike prompt injection, it persists across sessions and is treated as the agent's own proven experience. The defense is operational — track provenance so you can trace a poisoned memory back to its source."
stats:
  - n: "95%+"
    label: "memory-injection success rate of the MINJA attack against production agent architectures"
  - n: "30 min → 60 s"
    label: "Google SecOps agent triage time, across 5M+ alerts"
  - n: "-7 days"
    label: "M-Trends 2026 mean time to exploit — exploitation often lands before a patch exists"
brief:
  - kind: story
    domain: "memory-and-context"
    source: "WorkOS"
    url: "https://workos.com/blog/ai-agent-memory-poisoning"
    title: "Memory poisoning: when an agent's own memory becomes the attack surface"
    body: "A poisoned long-term memory persists across sessions and is treated as trusted ground truth. The attack is time-decoupled — planted weeks before it fires — so single-session monitoring sees nothing. Defend it with provenance tracking, trust-partitioned stores, and retrieval-drift monitoring."
    take: true
  - kind: story
    domain: "security"
    source: "Google Cloud"
    url: "https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/"
    title: "Google's SecOps agents cut alert triage from 30 minutes to 60 seconds across 5M+ alerts"
    body: "Google pairs Gemini-native investigation agents with deterministic containment playbooks and human gates. Agents do the open-ended investigation at machine speed; analysts keep control of actions that are hard to undo. Autonomy where it's cheap, humans where it's irreversible."
    take: false
  - kind: story
    domain: "durable-execution"
    source: "Temporal"
    url: "https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows"
    title: "Coverwatch runs multi-day insurance agents on durable Temporal Workflows"
    body: "Coverwatch models each carrier submission as a durable workflow so agent state survives deploys, outages, and days-long human waits. The fix for flaky long-running agents wasn't a better prompt — it was moving state out of the process into a durable harness."
    take: false
  - kind: quote
    domain: "durable-execution"
    source: "Temporal"
    url: "https://temporal.io/blog/how-coverwatch-uses-temporal-to-orchestrate-ai-powered-insurance-workflows"
    title: "Agents are easy to demo, but they are very hard to operate."
    attribution: "— Darshit Vora, Temporal"
    take: false
draft: false
---
