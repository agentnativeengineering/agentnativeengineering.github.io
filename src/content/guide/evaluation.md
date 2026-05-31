---
title: "Evaluation"
order: 10
question: "How do you know it still works — before your users find out it doesn't?"
summary: "For non-deterministic systems, the eval harness plays the role the test suite and SLO dashboard play for deterministic software. Grade the trajectory, gate releases in CI, and turn every failed production trace into a regression case."
principles:
  - "No eval harness, no production: evals are the reliability gate for non-deterministic systems."
  - "Grade the trajectory, not just the final answer — or the agent will game the test."
  - "Every failed production trace becomes tomorrow's regression case."
tools:
  - "LLM-as-judge (calibrated)"
  - "Golden datasets"
  - "CI eval gates (Promptfoo, DeepEval, Braintrust)"
updated: 2026-05-30
draft: false
---

You can't unit-test your way to a deterministic agent — it is non-deterministic *between runs,
even with identical prompts.* So the discipline that tells you whether the system still works is
not the test suite; it is the eval harness. In 2025–2026, the teams shipping agents reliably tend
to have strong evaluation infrastructure, not the newest models.

## The pain

The harness is the gate. As one survey of 100+ deployments puts it, *"the evaluation harness often
determines whether the project ships to production at all."* Anthropic frames it operationally:
automated evals are *"especially useful pre-launch and in CI/CD, running on each agent change and
model upgrade as the first line of defense against quality problems,"* and regression evals
*"should have a nearly 100% pass rate."* Google calls the discipline AgentOps and is blunt about
why unit tests don't cut it: *"because agentic systems are non-deterministic, standard unit tests
are insufficient… evaluate an agent's 'trajectory' — its step-by-step reasoning."*

Two traps recur. The first is grading only the **outcome**: Anthropic distinguishes the
*transcript* (the full record of tool calls and reasoning) from the *outcome* (final state) and
warns *"the agent shouldn't be able to easily 'cheat' the eval."* The second is trusting an
unconvincing judge: an **LLM-as-judge** can reach *>85% agreement with humans — but only after
calibration* on a labelled set, and judges carry documented biases (length, order). Eugene Yan's
warning lands here: *"buying or building yet another evaluation tool won't save the product"* if you
skip the process — error analysis, looking at the data, eval-driven development.

There's a third, quieter trap: green evals that don't move the product. Teams report improving a
judge score 15% with *no* change in whether the agent completed the task — a sign the eval measures
the wrong thing. Real agent SLOs tie to task outcomes: task success, tool-call error rate, loop
containment, p95 latency per turn.

## What production demands

- **An eval harness before launch**, operating at span (one step) and trace (whole task)
  granularity. (MUST)
- **Trajectory evaluation**, not just final-answer scoring — judge the sequence of tool calls and
  decisions so the agent can't cheat. (MUST)
- **A golden dataset** (often ~50–100 expert-validated cases) as the anchor, covering core
  features, past-bug regressions, and known edge cases. (MUST)
- **CI gate:** evals run on every agent/prompt/model change and block the merge when scores drop;
  the regression suite should pass at ~100%. (MUST)
- **Calibrated LLM-as-judge:** validate the judge to high human agreement before trusting it; binary
  pass/fail beats fuzzy 1–5 scales. (SHOULD)
- **Continuous eval on production traces:** sample live traces, score them, and convert failures
  into new eval cases. (SHOULD)

## Patterns

Error analysis first (it tells you *what* to evaluate) → golden set → calibrated judge → CI gate →
production sampling that feeds back. Pairwise judging and order-swapping to control judge bias.
Treat trajectory eval pass rate as a first-class production signal alongside uptime and latency.

## Open-source building blocks

CI eval gates: Promptfoo, DeepEval (pytest-style); Braintrust as release control. RAG-specific
scoring: Ragas. Tracing that feeds evals: Langfuse, Arize Phoenix (see
[Observability](/guide/observability/)).

## Demo → production

A demo is judged by a human eyeballing a few outputs the day it ships. The production agent has a
golden set, a calibrated judge, and a CI job that re-runs the suite on every change and **blocks
the deploy** when the score regresses — and every incident in prod adds a case to the set.

## Verify it

Change the model or a prompt and try to ship. Does something **stop the deploy** when quality
regresses — a CI eval gate with a real pass threshold — or does the change ship unverified?

## Sources

- Anthropic — [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (transcript vs outcome; "first line of defense" in CI/CD; ~100% regression pass; don't let the agent cheat).
- Google Cloud — [Startup technical guide: AI agents](https://cloud.google.com/blog/topics/startups/startup-guide-ai-agents-production-ready-ai-how-to) (AgentOps; non-determinism; evaluate the trajectory).
- Hamel Husain — [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) & [LLM-as-a-judge](https://hamel.dev/blog/posts/llm-judge/) (error analysis; >85% agreement after calibration).
- Eugene Yan — [An LLM-as-judge won't save the product](https://eugeneyan.com/writing/eval-process/) ("Look at the data"; eval-driven development).
- Towards Data Science — [A 12-metric eval harness from 100+ deployments](https://towardsdatascience.com/building-an-evaluation-harness-for-production-ai-agents-a-12-metric-framework-from-100-deployments/) ("determines whether the project ships at all").
