---
title: "Send the accessibility tree with the screenshot so the agent already has the IDs"
date: 2026-08-07
summary: "Jason Liu's \"appshots\" ship an app's accessibility tree alongside the image so the model holds the channel and user IDs it needs — the same precompute-before-the-question move monday.com and TwelveLabs describe."
takeaways:
  - "Do the representation work before the question arrives: if the agent will need an ID to act, ship that ID with the capture instead of making it hunt for one."
  - "Precompute context on two clocks - a slow pass that learns a user's routines over weeks, plus a fast layer for what just became urgent - so the profile exists before anyone asks."
  - "Store primitives, not answers: ingest once, keep the retrievable pieces, and ground each one to an index like a timestamp so a single pass serves many later questions."
tags: ["memory-and-context", "context-engineering", "computer-use", "precomputed-context"]
sourceName: "Jason Liu (OpenAI)"
sourceUrl: "https://www.youtube.com/watch?v=il1c1a2FufU"
sources:
  - title: "Jason Liu, OpenAI — Setting Yourself Up for Success (Codex workshop)"
    url: "https://www.youtube.com/watch?v=il1c1a2FufU"
  - title: "monday.com — From Systems of Record to Systems of Context"
    url: "https://www.youtube.com/watch?v=Btk8wDUVs74"
  - title: "TwelveLabs — Video Has No Memory. Here's How We Built One."
    url: "https://www.youtube.com/watch?v=mOf-PP4mVjA"
draft: false
---
## What happened

In a workshop published 2026-07-24, [Jason Liu of OpenAI walked through how he runs knowledge work inside the Codex desktop app](https://www.youtube.com/watch?v=il1c1a2FufU). The piece worth stealing is what he calls "appshots": a capture that sends the model both the screenshot and the app's accessibility tree — the structured element list an OS already exposes for screen readers. Because that tree carries Slack channel and user IDs, the model never has to hunt for them; by his account it can act in a single tool call.

## Why it matters

A screenshot is pixels. An agent handed only pixels burns turns re-deriving identifiers the host app already knows, and every extra round trip is latency, tokens, and one more chance to message the wrong channel. Two talks from the same week reach the same principle from other directions: monday.com engineers describe moving their product [from a "system of record" to a "system of context"](https://www.youtube.com/watch?v=Btk8wDUVs74), precomputing a user's work model offline so it exists before the question is asked, and TwelveLabs' James Le argues a video memory layer should ["ingest once and reason many times"](https://www.youtube.com/watch?v=mOf-PP4mVjA), storing primitives, not just answers.

## How it works

1. **Capture structure, not just the surface.** Ship the machine-readable IDs alongside the image.
2. **Run two clocks.** monday.com pairs a slow batch pass that learns routines over weeks with a fast layer tracking what just became urgent.
3. **Store primitives and index them.** TwelveLabs grounds every claim to a timestamp, so one ingest serves many later questions.

> If the agent will need an ID to act, put the ID in the context at capture time rather than making it search.

## The catch

This is one engineer's workflow in one app, not a measured result, and it leans on that harness's compaction holding up across weeks-old threads. Structured captures can also run long and drift out of date, so you are trading context budget for tool calls — measure both. monday.com names its own limits: cold start for new users, the model lagging reality, and separating signal from noise.

[Memory & Context](/guide/memory-and-context/)
