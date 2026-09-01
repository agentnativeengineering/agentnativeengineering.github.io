---
title: "Where your judgment lives once agents make code cheap"
date: 2026-09-01
summary: "As agents make implementation cheap, durable per-topic docs and shared decision logs — not chats or a growing CLAUDE.md — become the scarce record of judgment."
tags: []
draft: false
---
## What happened
Every's [Kieran Klaassen](https://www.youtube.com/watch?v=_ehJyfHg1Vk) says he hasn't written a line of code this year, yet ships Cora, an AI-native email client thousands trust with their inbox, built solo on Rails and React, in a talk published 2026-08-20. He traces the bottleneck as it moved: first bad code, then bad plans, then deciding what to build, and finally memory. Cora's CLAUDE.md, the instructions file an agent reads at session start, got too big to manage, so he moved reusable knowledge into per-topic solution documents stored in the repo, more token-efficient long-term because the answer is already written down instead of re-derived every session.

## Why it matters
[Ref's Matt Dailey](https://www.youtube.com/watch?v=Kz4QJmNrVXU) names the failure mode this guards against: velocity sickness, the stress of a team suddenly 10x faster with agents but not more impactful — too many pull requests to review, agent bankruptcy where abandoned sessions lose their reasoning and force a redo, and critical decisions quietly ceded to an agent because no human tracked why. Once implementation is cheap, the scarce resource is a durable record of judgment, and neither a chat transcript nor a growing instructions file holds it well.

## How it works
1. **Capture, don't repeat.** Klaassen's rule: never re-explain the same judgment twice — extract it into a document the next task can read.
2. **Close the loop.** His cycle is brainstorm, plan, work, review, polish, compound; the compound step writes learnings back into the repo.
3. **Share the doc, not the chat.** Dailey's decision layer is a persistent, shared doc holding state and key decisions, so agents run as stateless actions spawned from shared context instead of isolated chats.

> Once agents make code cheap, the thing worth protecting is where your judgment lives between sessions.

## The catch
Both talks describe infrastructure they built themselves — a solo builder's repo convention and a CEO's own product category — so neither is validated at team scale beyond their own systems. Klaassen concedes the tax: roughly half his time goes to teaching the system rather than shipping, a cost that pays off only if the documented judgment gets reused.

[Memory & Context](/guide/memory-and-context/)
