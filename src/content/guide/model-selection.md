---
title: "Model Selection"
order: 2
phase: "build"
question: "Which model should each step run on — and how do you keep that choice right as the models keep changing?"
summary: "The model is not one decision; it's a per-step one. Match capability to the task, default to the lightest model that clears the bar, reserve the frontier for genuinely hard reasoning, and re-benchmark as the lineup shifts — yesterday's right pick is tomorrow's waste."
principles:
  - "Default to the lightest model that clears the task; premium models cost more and run slower at scale."
  - "Reserve the most capable model for complex reasoning, multi-step coding, and high-stakes analysis — not for everything."
  - "Re-benchmark on your own evals as models change; the right choice drifts every few months."
tools:
  - "LiteLLM (routing + fallback)"
  - "RouteLLM (learned routing)"
  - "vLLM / Ollama (self-host)"
updated: 2026-06-14
draft: false
---

A production agent rarely needs one model. A run is a sequence of steps — classify, plan, call a
tool, summarise — and they don't all need the same horsepower. Treating "which model" as a single
global setting is how teams end up paying frontier prices to format JSON.

## The pain

The default instinct is to wire the best model into everything and move on. It works in the demo
and then the bill, the latency, and the rate limits all arrive together in production. The opposite
mistake is just as common: locking in a cheap model six months ago and never re-checking, long after
a newer, smaller model would beat it on both quality and price.

## What production demands

- **Set a quality baseline with the strongest model, then optimise down.** OpenAI's guide recommends
  prototyping with the most capable model to establish what "good" looks like, then substituting
  smaller models where they hold the bar. (SHOULD)
- **Match capability to the step, not the app.** Anthropic's guidance is to weigh the latency and
  cost of more capable models against the task — agentic systems "trade latency and cost for better
  task performance," so spend it only where it pays. (SHOULD)
- **Decide on your own evals, not a public leaderboard.** A benchmark average doesn't predict your
  task; gate the choice on the [evaluation](/guide/evaluation/) harness. (MUST)
- **Re-benchmark on a schedule.** The frontier moves monthly; a quarterly re-check keeps you from
  overpaying for a model a smaller one has caught. (SHOULD)

## Patterns

The durable pattern is a **router**: a cheap, fast model handles the easy majority and escalates the
hard minority to a stronger one. LMSYS's RouteLLM showed a learned router can preserve most of the
strong model's quality while shifting a large share of traffic to a cheaper one. Pair routing with
**fallback** (on error or timeout, retry on an alternate provider) so no single model is your uptime.

## Open-source building blocks

Put a gateway in front of the models so the choice is config, not code: **LiteLLM** gives one API
across providers with routing, fallbacks, and per-key budgets; **RouteLLM** adds learned
strong/weak routing. For self-hosting, **vLLM** serves open-weight models at throughput and
**Ollama** runs them locally for development and cheap, private inference.

## Demo → production

A demo hardcodes the flagship model in every call. The production version routes: a small model
triages and drafts, the flagship is reserved for the steps that genuinely need it, and a fallback
provider absorbs an outage — all behind a gateway you can re-point without a redeploy.

## Verify it

Take your eval set and run it twice: once on the flagship, once on a model a tier down. If the
cheaper model holds your quality bar on most cases, you've found your default — and a number that
tells you exactly when to escalate.

## Sources

- OpenAI — [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) (establish a baseline with the most capable model, then substitute smaller ones where quality holds).
- Anthropic — [Building effective agents](https://www.anthropic.com/research/building-effective-agents) (capable models trade latency and cost for performance; spend it deliberately).
- LMSYS — [RouteLLM](https://github.com/lm-sys/RouteLLM) (learned routing between a strong and a weak model to cut cost while preserving quality).
- [LiteLLM](https://github.com/BerriAI/litellm) (unified API, routing, fallbacks, per-key budgets across providers).
- [vLLM](https://github.com/vllm-project/vllm) (high-throughput self-hosted inference for open-weight models).
