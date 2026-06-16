---
title: "Stop prompting coding agents one-shot; design the loops that prompt them"
date: 2026-06-16
summary: "Engineers running coding agents at scale are shifting from typing prompts to building scheduled, verifiable loops that prompt the agents — but only for tasks with a measurable end state."
takeaways:
  - "Loop only the feedback steps that have a measurable end state; keep yourself at the triage gate, not in every prompt."
  - "Open-ended tasks like strategy get worse when looped because there is no signal that says done."
  - "Wrap each loop in layered verification gates (lint, build, tests, browser checks, review agents) since human attention is now the bottleneck."
tags: ["harness-engineering", "coding-agents", "automation", "verification"]
sourceName: "Latent.Space"
sourceUrl: "https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking"
sources:
  - title: "Latent.Space: Loopcraft, the art of stacking loops"
    url: "https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking"
  - title: "Cameron Westland: the six loops I actually run"
    url: "https://cameronwestland.com/designing-loops-that-prompt-coding-agents/"
  - title: "Zack Proser (WorkOS): shipping when you walk away from your desk"
    url: "https://www.youtube.com/watch?v=so9l_MwS2yg"
draft: false
---
## What happened

In a post dated 2026-06-12, Latent.Space gathered a fast-spreading argument from three people who run coding agents heavily: Peter Steinberger, Boris Cherny (creator of Claude Code), and Andrej Karpathy. The shared claim is that you should [stop prompting coding agents directly and instead design the loops that prompt them](https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking) — a "loop" being an automation that re-invokes the agent on its own until a goal is met. Karpathy's framing: "remove yourself as the bottleneck... arrange it once and hit go."

The slogans are easy; the concrete version is rare. On 2026-06-09, engineer Cameron Westland published [the six loops he actually runs](https://cameronwestland.com/designing-loops-that-prompt-coding-agents/), with the real configs, mostly as scheduled OpenAI Codex automations. And at WorkOS, Zack Proser [described wiring Claude Code into Slack and Linear](https://www.youtube.com/watch?v=so9l_MwS2yg) so agents read messages, fix bugs, and confirm outcomes without him context-switching.

## Why it matters

Typing a prompt, waiting, reading the result, and typing the next one keeps you in every iteration. Westland and Proser both report the real constraint is no longer the agent — it is human attention. Proser's framing: you ship more than ever and are "fried by 11:00 a.m." from constant context-switching. The harness, not the prompt, is where the leverage now lives.

## How it works

1. **Pick a step with a measurable end state.** Westland loops only feedback steps he was already doing by hand, where "done" is checkable.
2. **Schedule or event-trigger the agent.** His PR babysitter watches CI and review comments, then fixes the issues it finds.
3. **Make the agent verify itself.** A demo-video skill writes a Playwright browser script, records the flow, and watches its own video for UI jank before declaring success.
4. **Keep watchers advisory.** Outer heartbeat loops scan backlogs and recent commits and propose work, but do not execute it — you stay at the triage gate.
5. **Stack gates, not trust.** Proser layers lint, build, tests, browser checks, and review agents around each loop.

> Don't loop a task that has no signal for "done" — strategy gets worse when you automate it.

## What broke

The failure mode is looping open-ended work. Westland warns that tasks like strategy degrade when looped because they have no measurable end state, so the agent churns. The fix is not a better prompt — it is scoping each loop to a step with a clear stop condition and a verification gate, and going "down a loop" to inspect when reliability drops. Westland also notes this is deliberately token-heavy, not cost-optimal.

[Harness Engineering](/guide/harness-engineering/)
