---
title: "You can't read an agent like code, so mine its production traces"
date: 2026-08-16
summary: "LangChain's applied research lead argues agent behavior can't be reasoned about statically the way code can, so improvement becomes a loop of mining production traces — queried as an external store, not loaded into context."
takeaways:
  - "You cannot tell from a diff whether a prompt, tool or orchestration change helped, so validate every change against real production traces instead of reading the code."
  - "Traces are too many and too long to load wholesale; give the agent tools to query the trace store as an external object rather than paying input tokens to ingest it."
  - "Single-response rubrics miss the failures that only appear over a trajectory: forgetting context, not recognizing the task is done, and looping."
tags: ["observability", "traces", "continual-learning", "evals"]
sourceName: "LangChain"
sourceUrl: "https://www.youtube.com/watch?v=CvRngaQZQ3Y"
sources:
  - title: "LangChain: Improving Agents is a Data Mining Problem (talk)"
    url: "https://www.youtube.com/watch?v=CvRngaQZQ3Y"
  - title: "Arize AI: From LLM-as-a-Judge to Agent-as-a-Judge (talk)"
    url: "https://www.youtube.com/watch?v=q2JrUKBMf0w"
draft: false
---
## What happened

In a [talk published 2026-08-12](https://www.youtube.com/watch?v=CvRngaQZQ3Y), Vivek Trivedy, who leads applied research at LangChain, argued that improving an agent is a data mining problem. You can read a block of Python and reason about what it does; an agent is prompts, tools, skills, hooks, middlewares and sometimes other agents, and "it's really really hard for humans to reason about how certain prompts that they change are actually going to affect agent behavior at scale." So the loop is: ship it, store a trace of every tool call and message, mine those traces, then run experiments against them.

## Why it matters

A prompt or tool change is unreviewable. No diff tells you whether the agent got better, and the effect varies by domain, so the only ground truth is what it did in production. Arize AI's Aparna Dhinakaran [reports the same](https://www.youtube.com/watch?v=q2JrUKBMf0w) from building Alex, their in-product agent: the failures that mattered were forgetting context, not recognizing when a task was done, and getting stuck in loops. A fixed rubric over a single response misses all three, because the trajectory differs on every interaction.

## How it works

1. **Ship first.** An agent only produces useful data once it runs in a real environment.
2. **Store the whole trace.** Every tool call, output message, API and CLI invocation.
3. **Query, don't load.** Reading millions of long traces multiplies input token cost and overruns the context window, so [Trivedy](https://www.youtube.com/watch?v=CvRngaQZQ3Y) pushes agents that query the trace store as an external object instead of ingesting it.
4. **Use dense signals.** Score changes against past traces with graded feedback, not pass/fail.

> Agent behavior can't be read off a diff, so the trace store is the only place it exists.

## The catch

Both speakers sell tooling here, so treat the framing as interested. [Trivedy](https://www.youtube.com/watch?v=CvRngaQZQ3Y) is candid about cost: harness engineering informed by reading traces took him far (he describes matching Opus-level trace judging with cheaper open models on Harvey's legal benchmark), but once it plateaus, fine-tuning a base model on a narrow task trades token cost for hardware cost. His order is harness engineering, then fine-tuning, then more harness engineering.

[Observability](/guide/observability/)
