---
title: "Your reviewer model may agree too easily: score sycophancy before you pick one"
date: 2026-10-22
summary: "Artificial Analysis's AA-PersonalityBench shows that models with similar accuracy can differ sharply in sycophancy, admitting uncertainty and length, and those differences decide which agent step each model fits."
takeaways:
  - "A model that rarely admits uncertainty and often agrees with you can still score well on accuracy, so check those traits before you make it your planner or reviewer."
  - "On AA-PersonalityBench's Transparency index, Claude Sonnet 5.5 scores 100 and Gemini 4 Argon scores 18, and Argon's responses average 790 words against 352 for GPT-6 Astra."
  - "The scores come from LLM judges on default, no-system-prompt behavior with no published human validation, so use the trait list as a rubric for your own evals, not as a ranking."
tags: ["model-selection", "sycophancy", "llm-as-judge", "benchmarks"]
domain: model-selection
sourceName: "Artificial Analysis"
sourceUrl: "https://artificialanalysis.ai/articles/aa-personalitybench"
sources:
  - title: "Announcing AA-PersonalityBench: measuring how AI models communicate"
    url: "https://artificialanalysis.ai/articles/aa-personalitybench"
  - title: "AA-PersonalityBench: AI Personality & Communication Style"
    url: "https://artificialanalysis.ai/evaluations/aa-personalitybench"
  - title: "AA-PersonalityBench ranks AI models on sycophantic traits"
    url: "https://cryptobriefing.com/aa-personalitybench-ranks-ai-sycophancy/"
  - title: "Artificial Analysis benchmarks how 36 AI models communicate"
    url: "https://runtimewire.com/article/artificial-analysis-personalitybench-language-model-style"
upstream: "aidailybrief/2026-10-20"
draft: false
---

## The Takeaway

A planner or reviewer that flatters the plan and never says "I'm not sure" can pass your accuracy evals and still let bad decisions through, so test for those traits on purpose.

## The details

- On 2026-10-19, Artificial Analysis [released AA-PersonalityBench](https://artificialanalysis.ai/articles/aa-personalitybench): 900 questions across 30 traits, sent with no system prompt. LLM judges compare two answers blind and pick the one that shows more of a trait. The verdicts are fit to Elo ratings (relative scores from head-to-head wins) and reported as percentile ranks with 95% confidence intervals.
- The traits roll up into [8 indexes](https://artificialanalysis.ai/evaluations/aa-personalitybench). Transparency includes Truthful, Admits Uncertainty, Disclaims Assumptions, Flags Nuances and inverted Sycophantic. Conviction includes Direct, Confident, Opinionated and Constructive Pushback. Slop measures filler.
- On [Transparency](https://artificialanalysis.ai/articles/aa-personalitybench), Claude Sonnet 5.5 scores 100, GPT-6 Astra 94 and Claude Opus 5.5 88. Gemini 4 Argon scores 18, with Admits Uncertainty at −2.0σ.
- Default length differs a lot: [Argon averages 790 words, Opus 5.5 571 and GPT-6 Astra 352](https://artificialanalysis.ai/articles/aa-personalitybench). On the trait fingerprints, [Muse Wonder](https://artificialanalysis.ai/evaluations/aa-personalitybench) leads on Friendly (+1.8σ) and sits below average on Direct.

## Why it matters

If you choose models for planning or review on accuracy alone, you may be choosing a yes-man. Teams that route agent steps to different models are affected most. Use the trait list as a rubric. A step the sources don't spell out: add cases where the input contains a planted flaw and score whether the model pushes back, and track word count for user-facing replies.

The caveats are real. The article [doesn't describe judge calibration or human agreement](https://artificialanalysis.ai/articles/aa-personalitybench). The scores reflect default behavior, which your system prompt will change. Index scores are relative, so they can move as new models are added. Coverage notes the LLM-judged scores [need caution before you apply them to real deployments](https://runtimewire.com/article/artificial-analysis-personalitybench-language-model-style).

[Model Selection](/guide/model-selection/)
