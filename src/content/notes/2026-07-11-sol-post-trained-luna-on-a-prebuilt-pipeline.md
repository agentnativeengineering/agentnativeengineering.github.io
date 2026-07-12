---
title: "GPT-5.6 Sol post-trained a smaller model from a vague prompt — on a pre-built pipeline"
date: 2026-07-11
summary: "OpenAI says GPT-5.6 Sol autonomously post-trained the smaller Luna model from an under-specified Codex prompt, but the recipe already existed and its own system card rates Sol below the bar for self-improvement."
takeaways:
  - "Before you call an agent 'autonomous,' separate what it did unsupervised from what a pre-built harness and prior setup handed it — that difference is the real capability."
  - "OpenAI's Sol post-training Luna is a genuine autonomy milestone, but the recipe already existed and the agent adapted it, so the honest claim is a bounded speedup, not open-ended self-improvement."
  - "Judge a self-improvement result by task provenance: OpenAI's own system card says Sol collapsed to brittle strategies on harder ML-engineering tasks and rates it below the High self-improvement threshold."
tags: ["autonomy-and-cost", "autonomy", "self-improvement", "agents"]
sourceName: "The Decoder + OpenAI GPT-5.6 System Card"
sourceUrl: "https://the-decoder.com/openais-gpt-5-6-sol-autonomously-post-trained-the-smaller-luna-model-with-a-fairly-underspecified-prompt/"
sources:
  - title: "The Decoder — GPT-5.6 Sol autonomously post-trained Luna"
    url: "https://the-decoder.com/openais-gpt-5-6-sol-autonomously-post-trained-the-smaller-luna-model-with-a-fairly-underspecified-prompt/"
  - title: "OpenAI GPT-5.6 System Card"
    url: "https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf"
  - title: "Simon Willison — GPT-5.6"
    url: "https://simonwillison.net/2026/Jul/9/gpt-5-6/"
draft: false
---

## What happened

On [2026-07-10 The Decoder reported](https://the-decoder.com/openais-gpt-5-6-sol-autonomously-post-trained-the-smaller-luna-model-with-a-fairly-underspecified-prompt/) that OpenAI's GPT-5.6 Sol — given a "fairly under-specified prompt" through Codex — autonomously handled the training configuration, GPU selection, launch, and verification to post-train the smaller [Luna model](https://simonwillison.net/2026/Jul/9/gpt-5-6/), the cheapest of the new GPT-5.6 family. An OpenAI employee then clarified the recipe mostly existed already, so the real job was adapting it for Luna — "two staff researchers maybe an extra two weeks" of work.

## Why it matters

"Autonomous" is carrying a lot of weight in that sentence. The leverage wasn't a model inventing a training pipeline from nothing; it was an agent operating a harness and verification loop that already worked. If you can't separate what the agent did unsupervised from what the scaffolding handed it, you can't size the actual capability — or the actual risk.

## How it works

1. **A pre-built harness carried most of it.** Config, GPU choice, launch, and verify were steps the setup already supported; Sol adapted them for a new target model.
2. **The claim is bounded.** The employee's own estimate — roughly two researcher-weeks — frames it as a real speedup rather than open-ended self-improvement.
3. **Measured on real research tasks.** OpenAI's [system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf) scores self-improvement on end-to-end work like debugging 41 real internal research bugs and a post-training benchmark, rather than narrow puzzles.
4. **Provenance is the test.** A self-improvement number is only as trustworthy as where its tasks came from and how much scaffolding was pre-supplied.

> Before trusting an "autonomous" claim, separate what the agent did from what its harness already did for it.

## The catch

OpenAI's own [system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf) tempers the story: on harder ML-engineering benchmarks Sol "collapsed to narrow, brittle strategies," and OpenAI rates it below the "High" threshold for AI self-improvement under its Preparedness Framework. The load-bearing details — the two-researcher-weeks estimate and the "under-specified prompt" — trace to an OpenAI employee and the launch keynote rather than an independent reviewer, so hold them loosely until someone reproduces the result outside the lab.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
