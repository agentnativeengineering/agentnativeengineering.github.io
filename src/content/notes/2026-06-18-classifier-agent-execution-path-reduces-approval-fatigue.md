---
title: "A classifier agent in the execution path reduces approval fatigue, not risk"
date: 2026-06-18
summary: "Cursor put a fast reviewer agent inline before each action to cut approval prompts from 40% to a 7% interruption rate — but it calls the result a risk-reducer, not an eliminator."
takeaways:
  - "Gate agent actions by stakes, not by a blanket approve-everything switch: an inline reviewer should let low-risk actions run and stop only when one crosses a real boundary."
  - "Asking for permission too often is its own failure mode — repeated prompts train users to click through, so a reviewer that blocks 40% of actions trains people to stop reading."
  - "A second agent reviewing actions reduces risk but cannot eliminate it; treat the classifier as a dial you tune on labeled traffic, not a guarantee."
tags: ["security", "agent-autonomy", "prompt-injection", "approval-fatigue"]
sourceName: "Cursor Blog"
sourceUrl: "https://cursor.com/blog/agent-autonomy-auto-review"
sources:
  - title: "Cursor: Governing agent autonomy with Auto-review"
    url: "https://cursor.com/blog/agent-autonomy-auto-review"
draft: false
---
## What happened

A local coding agent runs near your files, credentials, environment variables, MCP (Model Context Protocol) tools, and sometimes production systems. Give it autonomy and it gets more useful; give it too much and it can take an action you never intended. The obvious fix — ask the user before every action — has a hidden failure mode.

In a [post dated 2026-06-11](https://cursor.com/blog/agent-autonomy-auto-review), Cursor's David Gomes and Travis McPeak described Auto-review, which treats autonomy "more like a dial than a switch." The core idea: the agent should "move freely when the stakes are low, but slow down when its next action crosses a meaningful boundary."

## Why it matters

[Cursor's own framing](https://cursor.com/blog/agent-autonomy-auto-review) names the real wall: "asking for permission too often creates its own safety problem. After enough repeated prompts, people stop reading carefully, and the approval flow becomes less meaningful." That is approval fatigue, and it is a security problem, not a UX nitpick — a permission dialog that fires constantly trains the human to click through the one that matters. Some enterprise customers had previously seen [roughly 40% of actions blocked](https://cursor.com/blog/agent-autonomy-auto-review), the kind of friction that defeats the gate it was meant to be.

## How it works

1. **A reviewer sits inline.** A specialized [classifier agent](https://cursor.com/blog/agent-autonomy-auto-review) judges each action in context before it runs, asking whether it matches the user's intent and what the cost of being wrong is.
2. **It inspects the workspace.** The reviewer can call ReadFile, Grep, Glob, and ListDir to gather context rather than guess.
3. **It avoids added latency.** It runs in the [same RPC stream](https://cursor.com/blog/agent-autonomy-auto-review) as the parent agent.
4. **A block becomes feedback, not a popup.** When it blocks, it [returns an explanation](https://cursor.com/blog/agent-autonomy-auto-review) to the parent agent, which can often pick a safer, narrower path on its own.
5. **It is tuned on real traffic.** The team built evals from ~12 hours of internal sessions, deduplicated into [6,122 labeled rows](https://cursor.com/blog/agent-autonomy-auto-review) plus synthetic worst-case data.

> The classifier catches actions that need scrutiny and lets the agent keep working when there is a safer way — a risk-reducer, not an elimination of risk.

## What broke

The naive design — prompt on everything, or block at a 40% rate — breaks because humans habituate. Cursor's tuned reviewer now [blocks around 4% of actions](https://cursor.com/blog/agent-autonomy-auto-review), and only about 7% of Auto-review chats reach a user interruption, because most blocks resolve as feedback to the agent. They also watched for "[flapping](https://cursor.com/blog/agent-autonomy-auto-review)" — unstable, inconsistent decisions on the same action. The honest caveat is the load-bearing one: [Cursor calls it](https://cursor.com/blog/agent-autonomy-auto-review) "a risk-reducer rather than an elimination of risk." A reviewer agent is still an agent reading untrusted context, so treat it as a tunable control with a residual failure rate, not a wall. The fix is harness engineering — an inline, context-aware gate tuned on labeled traffic — not a stricter prompt.

[Security](/guide/security/)
