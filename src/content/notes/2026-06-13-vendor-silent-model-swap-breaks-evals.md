---
title: "When a vendor silently swaps the model under you, your evals stop meaning anything"
date: 2026-06-13
summary: "Anthropic's Fable 5 launch silently degraded and rerouted outputs for some requests with no visible refusal — so the model you benchmarked was no longer the model serving your traffic."
takeaways:
  - "Pin and re-run a golden eval set against live traffic on every model release, because a vendor can change what serves your requests without changing the model name or returning a refusal."
  - "Silent routing and degradation break benchmarks: you tested one model and got another, with no signal that it happened."
  - "Treat \"no visible refusal\" as a worse failure than an explicit refusal — an unflagged downgrade is invisible to your monitoring."
tags: ["evaluation", "model-routing", "anthropic", "regression"]
sourceName: "The AI Daily Brief"
sourceUrl: "https://aidailybrief.ai/e/2026-06-11/transcript.md"
sources:
  - title: "The AI Daily Brief — why Fable 5's launch was so controversial (2026-06-11)"
    url: "https://aidailybrief.ai/e/2026-06-11/transcript.md"
  - title: "The AI Daily Brief — Fable 5 launch, guardrails, and silent routing (2026-06-10)"
    url: "https://aidailybrief.ai/e/2026-06-10/transcript.md"
  - title: "The AI Daily Brief — US government shuts down Fable 5 (2026-06-13)"
    url: "https://aidailybrief.ai/e/2026-06-13/transcript.md"
  - title: "The Decoder — Amazon and others triggered the Fable crackdown"
    url: "https://the-decoder.com/amazon-and-five-other-companies-reportedly-triggered-the-government-crackdown-on-anthropics-fable-model/"
draft: false
---
## What happened

If you run a model in production, you assume the thing you benchmarked is the thing that answers your users. The Fable 5 launch broke that assumption. On 2026-06-11, [The AI Daily Brief](https://aidailybrief.ai/e/2026-06-11/transcript.md) called Anthropic's new Fable 5 the most controversial model release ever — and the most inflammatory part was an engineering one. For requests that *resembled* frontier-LLM development, the plan was to silently degrade output via prompt modification, steering vectors, or fine-tuning, with **no visible refusal and no model fallback signal**. The day-before [launch coverage](https://aidailybrief.ai/e/2026-06-10/transcript.md) adds the routing detail: biology, cybersecurity, and "distillation" requests were quietly rerouted to the older Opus 4.8. Anthropic reversed the silent approach within 24 hours, telling Wired it made the wrong trade-off.

## Why it matters

The critics' line is the whole lesson: the model you tested is no longer the model you get. Your eval suite — a fixed set of inputs you score to catch regressions — ran against one model; production served a degraded or substituted one, with nothing in the response saying so. A refusal you can detect and alert on. A silent downgrade looks like a normal answer that is quietly worse, and it sails past every monitor you have. This disproportionately hit independent researchers and startups whose work merely *looked* like frontier development.

## How it works

1. **Pin a golden set.** Keep a fixed list of representative prompts with known-good scored outputs.
2. **Re-run on every release.** Treat a new model version, or even the same name on a new day, as a regression event, not a free upgrade.
3. **Probe for routing.** Include prompts in your set that sit near a vendor's guardrail categories; a sudden quality drop there is your routing canary.
4. **Score quality, not just pass/fail.** A silent downgrade still returns a parseable answer; only a graded score catches it.
5. **Diff against prod traffic.** Sample real responses and compare to your eval baseline, not just to each other.

> A refusal you can alert on; a silent downgrade is a regression with the alarm wires cut.

## What broke

The fix was harness-level, not prompt-level: make the safeguard *visible* — refuse, or reroute to a named weaker model — so a caller can detect it. The deeper risk stayed. As [The Decoder](https://the-decoder.com/amazon-and-five-other-companies-reportedly-triggered-the-government-crackdown-on-anthropics-fable-model/) reported, by 2026-06-13 a US export-control order forced Fable 5 offline entirely within hours, and the [emergency episode](https://aidailybrief.ai/e/2026-06-13/transcript.md) confirmed access was cut for all foreign nationals. Whether by quiet swap or sudden suspension, the model under your application can change without warning — so your eval baseline has to be yours, pinned, and re-run.

[Evaluation](/guide/evaluation/)
