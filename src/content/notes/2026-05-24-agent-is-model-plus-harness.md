---
title: "Agent = model + harness: treat every failure as a harness defect"
date: 2026-05-24
summary: "An agent is a model plus the harness around it, so most wrong behaviour is a missing line you can encode now rather than a flaw to wait out in the next model."
tags: ["harness-engineering", "agent-native"]
domain: "harness-engineering"
sourceName: "youtube.com"
sourceUrl: "https://www.youtube.com/watch?v=ulNsa0sD8N0"
draft: false
---

An agent is two things: the underlying model, and the harness wrapped around it — the tools, context, memory, sub-agents, prompts, and hooks that let the model actually do work. Cole Medin frames every coding agent this way in his 27 May 2026 walkthrough of [harness engineering](https://www.youtube.com/watch?v=ulNsa0sD8N0): the model supplies reasoning, and a chosen agent plus an "AI layer" you build supplies everything else — rules, skills, MCP servers, codebase search, hooks, and sub-agents.

That split changes what you do when the agent does something wrong. The tempting move is to blame the model and file the fix under "wait for the next version." The harness mindset rejects that. As Medin puts it, the failure is usually legible: the agent didn't know a convention, so you add it to [AGENTS.md](https://agents.md/); it ran a destructive command, so you add a hook that blocks it. Every mistake becomes a rule. The agent improves because you improved its harness, not because a new model arrived.

This is why the surrounding work is becoming its own discipline. Anthropic argues that getting an agent to behave is less about wording and more about [the configuration of context most likely to produce the desired behaviour](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). At Ona's [Background Agents Summit](https://www.youtube.com/watch?v=1VZPX7QD2tk), the same shift gets named directly — application engineering becoming harness engineering, with context treated as the new code and given the same rigour.

The fix is most durable when it is shared and measured, not just pasted into one repo. Uber, [running over 60,000 agent tasks a week](https://www.youtube.com/watch?v=yVqMxBahjfA), treats skills as recipes for using their tools: shareable across teams, evaluated for output quality and correct invocation, A/B tested, and promotable by tier. A lesson learned once is encoded once and reused everywhere. The same logic applies to a single AGENTS.md file — now an open standard under the Linux Foundation's [Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) — that any agent reading the repo can pick up.

So when an agent slips, ask which line of the harness was missing, and write it: a rule in AGENTS.md, a skill, or a hook.

[Harness Engineering](/guide/harness-engineering/).
