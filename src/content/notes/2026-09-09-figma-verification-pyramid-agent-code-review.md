---
title: "Figma routes agent code through a verification pyramid before any human looks at it"
date: 2026-09-09
summary: "Figma's engineering org pushes coding-agent review down a verification pyramid, letting linters, tests, and agent review handle most checks so humans only judge whether the code is worth building."
takeaways:
  - "Push verification down a pyramid: let linters, compilers, and unit tests catch most agent mistakes, encode judgment calls as automated checks and agent review, and save human review for whether the code is the right thing to build."
  - "The engineers with the most institutional knowledge become the slowest adopters and the biggest bottleneck, because they see every agent failure first and end up patching gaps with mental duct tape."
  - "A week of up-front planning that breaks work into small, independently verifiable phases turned roughly six weeks of work into about 20 reviewable pull requests."
tags: ["harness-engineering", "code review", "verification pyramid", "TDD"]
sourceName: "Figma (AI Engineer talk)"
sourceUrl: "https://www.youtube.com/watch?v=5Bn0xro2ol8"
sources:
  - title: "How to Get Your Org to Adopt Coding Agents (Without Shipping Garbage) — Eyal Blum, Figma"
    url: "https://www.youtube.com/watch?v=5Bn0xro2ol8"
draft: false
---
## What happened
In a talk published 2026-08-28, Figma engineer Eyal Blum described [the company's internal rollout of coding agents](https://www.youtube.com/watch?v=5Bn0xro2ol8). Teams saw early wins, "10x faster," on small tasks, then broke trust when the same habits hit bigger problems and agents produced "lots of bugs." Figma's fix: shift verification left, from humans to a layered pyramid of automated checks, so a person only judges whether the code is "the right thing to build."

## Why it matters
A review left only to humans doesn't scale once an org lets agents write most of the code, and unmarked AI-written text already caused one senior engineer real offense when he mistook it for a colleague's own analysis. Left unmanaged, the engineers who hold the most institutional context become the bottleneck: they see every agent failure first, end up patching gaps with what the talk calls "mental duct tape," and so adopt slowest.

## How it works
1. **Encode discoveries as tests.** Any pitfall an agent stumbles on becomes a deterministic check or unit test instead of a one-off human catch.
2. **Work test-first.** The team writes acceptance criteria before the agent codes, so the agent fits its implementation to the tests rather than tests to the implementation.
3. **Stack the pyramid.** Linting, compilers, and unit tests catch most errors; agent review checks encoded architectural standards; humans review only functionality and intent.
4. **Plan up front, then split small.** A week of writing, deciding, and peer review before code starts produced one plan that shipped as roughly 20 independently reviewable pull requests for six weeks of work.

> "The real skill is learning how to use AI correctly and put the right guardrails, the right prompting, and the right context in place to build at real scale."

## The catch
This is one org's account, not a benchmark, and Figma admits adoption stays uneven: some teams have transformed their workflow, others are still stuck in the failure phase. The pyramid also assumes an org can spend a week up front writing and peer-reviewing a plan, a hard sell for teams still chasing quick wins.

[\Harness Engineering](/guide/harness-engineering/)
