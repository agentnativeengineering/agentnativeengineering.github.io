---
title: "Your agent can read every line and still not know why any of it is there"
date: 2026-07-11
summary: "Alongside cognitive debt, Margaret-Anne Storey names a second hidden cost of AI-written code — intent debt, the missing rationale that humans and agents both need to change a system safely."
takeaways:
  - "Externalize the why — the goals, constraints, and rejected alternatives behind the code — where changes happen, so intent survives the author and an agent can reason about it."
  - "Cognitive debt is eroded understanding in people; intent debt is missing rationale in the artifacts, and an agent evolving code from what's written is blind to the constraints no one wrote down."
  - "Capture rationale in the specs, ADRs, comments, and agent-facing files, because as agents make more changes, unrecorded intent becomes the thing that breaks."
tags: ["harness-engineering", "intent-debt", "documentation", "agents"]
sourceName: "Margaret-Anne Storey — arXiv & interview"
sourceUrl: "https://www.youtube.com/watch?v=WkBPX-oDMnA"
sources:
  - title: "Understanding is the new bottleneck — Geoffrey Litt (talk)"
    url: "https://www.youtube.com/watch?v=WkBPX-oDMnA"
  - title: "From Technical Debt to Cognitive & Intent Debt — Storey (arXiv)"
    url: "https://arxiv.org/abs/2603.22106"
  - title: "The Hidden Cost of AI-Generated Code — Storey (interview)"
    url: "https://www.youtube.com/watch?v=tIPbqipc88U"
  - title: "Programming as Theory Building — Peter Naur (1985)"
    url: "https://pages.cs.wisc.edu/~remzi/Naur.pdf"
draft: false
---

## What happened

As AI agents write and change more code, teams are naming the hidden costs. In a [2026-07-10 talk](https://www.youtube.com/watch?v=WkBPX-oDMnA), Geoffrey Litt put *cognitive debt* — eroded human understanding — on the map. But in a [March 2026 paper](https://arxiv.org/abs/2603.22106) and a [May interview](https://www.youtube.com/watch?v=tIPbqipc88U), University of Victoria professor and SPACE co-author Margaret-Anne Storey names a second one: **intent debt** — "the absence of externalized rationale that developers and AI agents need to work safely with code."

## Why it matters

An agent can read every line and still not know why any of it is there — which constraint is load-bearing, which value is a deliberate choice, what was tried and rejected. When that rationale lives only in someone's head, both humans and agents are one confident edit away from breaking an invariant no one wrote down.

## How it works

1. **Two different debts.** Cognitive debt is eroded understanding in people; [intent debt](https://arxiv.org/abs/2603.22106) is missing rationale in the artifacts — Storey frames both as software health beyond technical debt.
2. **Agents make it acute.** An agent evolves code from what is written down; unrecorded goals and constraints are simply invisible to it.
3. **Externalize the why.** Record rationale, goals, and constraints where the code changes — specs, ADRs, comments, the files agents read — so intent outlives the person who held it.

> Cognitive debt is what your team forgot; intent debt is what no one ever wrote down.

## The catch

Storey's framing is recent and largely conceptual — the [paper](https://arxiv.org/abs/2603.22106) is a position piece rather than a measured result, and "intent debt" is a freshly named term that isn't yet established practice. [Peter Naur's decades-old point](https://pages.cs.wisc.edu/~remzi/Naur.pdf) that a program is really a theory in its developers' heads is the same wound; what's new is that agents now inherit the code without the theory.

[Harness Engineering](/guide/harness-engineering/)
