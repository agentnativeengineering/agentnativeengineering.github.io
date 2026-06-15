---
title: "Intent debt: the one thing your agents fabricate instead of fixing"
date: 2026-06-15
summary: "Addy Osmani argues agents can refactor code and rebuild comprehension on demand, but they invent the missing \"why\" — so write it down as specs, ADRs, and an AGENTS.md ledger."
takeaways:
  - "Write down the why at the moment you decide it — specs, ADRs, and AGENTS.md become the intent your agents read instead of fabricate."
  - "Agents can pay down technical and comprehension debt, but they cannot generate intent; a confident guess about why a system exists is worse than 'I don't know'."
  - "Parallel agents start cold every session, so every undocumented rationale gets re-paid across every agent at once."
tags: ["harness-engineering", "agents-md", "adr", "specs", "intent-debt"]
sourceName: "Addy Osmani"
sourceUrl: "https://addyosmani.com/blog/intent-debt/"
sources:
  - title: "The Intent Debt — Addy Osmani"
    url: "https://addyosmani.com/blog/intent-debt/"
draft: false
---
## What happened

In a [post dated 2026-06-05](https://addyosmani.com/blog/intent-debt/), Google Chrome engineering lead Addy Osmani names a third kind of debt that agentic coding makes the most expensive: intent debt. Drawing on Margaret-Anne Storey's Triple Debt Model, he splits software debt into three independent kinds — technical debt that [lives in your code](https://addyosmani.com/blog/intent-debt/), cognitive (comprehension) debt that lives in people's heads, and intent debt that lives in the artifacts recording *why* a system is built the way it is. His core claim: agents can pay down the first two on demand, but ["an agent can't generate intent, because intent is the one input that has to come from you."](https://addyosmani.com/blog/intent-debt/)

## Why it matters

When the "why" is missing, a model does not stop — it [invents "a confident-sounding reason, which is worse than admitting it doesn't know."](https://addyosmani.com/blog/intent-debt/) That is the wall: you cannot tell a fabricated rationale from a real one until it has shaped a refactor. And the cost compounds. Each agent ["starts most sessions cold"](https://addyosmani.com/blog/intent-debt/) with no tacit knowledge, so every gap you never wrote down gets paid repeatedly across every parallel agent you run. This is harness engineering: the fix is not a smarter model but a durable artifact the model can read.

## How it works

1. **Write specs, not implementations.** A good spec captures ["the goals, the constraints, the non-negotiables, and an explicit definition of done"](https://addyosmani.com/blog/intent-debt/) — the intent, not the code.
2. **Treat AGENTS.md as an intent ledger.** Use it as ["your intent ledger"](https://addyosmani.com/blog/intent-debt/), not auto-generated config the agent regenerates and ignores.
3. **Keep lightweight decision logs.** Record an ADR (Architecture Decision Record — a short note of a choice and its reasoning) at decision time.
4. **Pay at the cheap moment.** ["Recording why at the moment you decide costs almost nothing. Reconstructing it eight months later costs a fortune."](https://addyosmani.com/blog/intent-debt/)

> A guess about intent isn't the intent.

## What broke

The failure mode is silent: an agent fills the rationale gap with a plausible guess, and the [guess about intent is not the intent](https://addyosmani.com/blog/intent-debt/). The fix is not a better prompt but harness engineering — ["take the intent out of your head and put it somewhere an agent can read."](https://addyosmani.com/blog/intent-debt/) Specs, an AGENTS.md ledger, and ADRs turn rationale into a first-class input every parallel agent consumes, instead of one each agent re-fabricates from scratch.

[Harness Engineering](/guide/harness-engineering/)
