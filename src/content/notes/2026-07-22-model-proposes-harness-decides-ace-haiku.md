---
title: "The model proposes, the harness decides — Microsoft's Ace runs on Haiku"
date: 2026-07-22
summary: "Microsoft's Ace voice tutor treats agent reliability as a control problem: a state machine owns the reasoning and hands the model one narrow per-turn contract, which let them run a small model instead of a frontier one."
takeaways:
  - "If your multi-step agent's reliability feels like a coin flip, pull the control flow out of the model: let a state machine own the steps and hand the model one narrow per-turn contract to execute and return."
  - "Doing this let Ace swap a frontier model for Haiku 4.5 and still meet expectations, cutting cost and hitting a ~950ms-to-first-speech latency budget."
  - "The scaffolding is the real cost — small models drift on long structure without strict rules — but you pay it once in code, not on every turn."
tags: ["reliability", "state-machine", "harness-engineering", "voice-agents"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=m24UKZomm7k"
sources:
  - title: "Don't Let the LLM Drive — Bahidika & Allou, Microsoft"
    url: "https://www.youtube.com/watch?v=m24UKZomm7k"
  - title: "Your Voice Agent Doesn't Need a Frontier Model — Allou & Bahidika"
    url: "https://www.youtube.com/watch?v=fnLBmfsI_Fg"
draft: false
---
## What happened

In a talk published 2026-07-20, Microsoft engineers Ornella Bahidika and Joel Allou described [Ace, a live AI voice tutor](https://www.youtube.com/watch?v=m24UKZomm7k), and argued that agent reliability "was never a prompting problem — it's a control problem." They model a lesson as a small state machine (intro, teach, check, grade, advance, wrap). Each step hands the model a narrow contract — do this one thing, return it — while a surrounding harness validates the response, advances the state, and decides what comes next. The model never decides where it is.

## Why it matters

Every shipped multi-step agent hits the same wall: it works near the demo, then a real user gets in and [halfway through the agent decides it's done, skips a step, or loops](https://www.youtube.com/watch?v=m24UKZomm7k). The reflex is to prompt harder and add more rules. Their point is that a model is brilliant at delivering a line but terrible at remembering it's on step three of six — so stop asking it to. Pull the reasoning out and the reliability stops being nondeterministic.

## How it works

1. **Harness owns progress.** A state machine tracks the current step and the legal next steps, not the model.
2. **One narrow contract per turn.** The model gets only the input for the current action and returns just that action's output.
3. **Three decisions stay outside the model.** When the lesson is done, whether the student actually learned, and what comes next are engineered in code.

> "The model proposes, but ultimately it is the harness that decides."

## The catch

The scaffolding is the cost. In a [companion talk](https://www.youtube.com/watch?v=fnLBmfsI_Fg) the pair are candid that small models drift on long structure without strict rules — but you pay for the rules once in code, not on every turn. That trade let them run [Haiku 4.5 instead of a frontier model](https://www.youtube.com/watch?v=m24UKZomm7k) and hit their real binding constraint: ~950ms to first speech, since a model that pauses a full second has already broken the conversation. Check your own latency budget before copying the pattern.

[Reliability](/guide/reliability/)
