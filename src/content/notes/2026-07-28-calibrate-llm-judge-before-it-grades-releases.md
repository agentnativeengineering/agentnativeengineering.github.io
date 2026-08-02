---
title: "The LLM judge scoring your releases has to pass a human-labeled test first"
date: 2026-07-28
summary: "Five Airbnb engineers published their eval-driven development practice, in which every LLM-as-judge evaluator is itself calibrated against a human-labeled golden set before it is trusted to score the system."
takeaways:
  - "Calibrate every LLM judge against a human-labeled golden set that includes bad examples before you let it gate a release."
  - "An uncalibrated judge is worse than no judge at all, because it hands you false confidence in a score you are already shipping on."
  - "Airbnb's recipe is 50-100 golden examples that must include bad ones, agreement in the high 80s to 90s measured with Cohen's kappa or Krippendorff's alpha, and a hard stop when human experts disagree on a label."
tags: ["evaluation", "llm-as-judge", "calibration", "eval-driven-development"]
sourceName: "The Airbnb Tech Blog"
sourceUrl: "https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788"
draft: false
---
## What happened

On 28 July 2026, five Airbnb engineers published their [eval-driven development](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788) practice, ["the GenAI analogue of test-driven development"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788). The starting move is manual: run the prototype through ["100 examples (synthetic is fine). Then read the outputs"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788), categorize the mistakes, build the evaluators from those. Then the graders get graded — ["A virtual judge that hasn't been calibrated is worse than no judge at all, because it gives you false confidence."](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788)

## Why it matters

Evals stop trailing the work once the evaluator is itself a thing under test. That adds three artifacts to the workflow: a human-labeled golden set, a named final [human decision-maker](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788) on what counts as good, and a stop rule for when the humans can't agree — ["if your experts disagree on a label, stop"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788). For agents the burden is heavier, since ["a correct final answer can mask a broken reasoning path"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788).

## How it works

1. **Read before you measure.** 100 prototype outputs and traces, mistakes categorized, evaluators built from the observed failures instead of a generic "helpfulness" score.
2. **Few, sharp judges.** ["3–5 well-calibrated LLM-as-judge evaluators beat 20–30 noisy ones"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788), each targeting ["one specific correctness dimension"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788).
3. **Calibrate against humans.** A golden set of ["50–100 examples"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788) that ["MUST include bad examples"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788), agreement targeted in the ["high 80s-90s"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788) with Cohen's kappa or Krippendorff's alpha, then [recalibrated periodically as failure modes evolve](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788).

> The number a judge gives you is worth exactly the human agreement you measured behind it.

## The catch

Airbnb's tidy 78% → 88% agreement jump comes from a walkthrough they label ["fictionalized and simplified"](https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788) — the post prescribes the bar rather than reporting one it hits in production. And clearing that bar still doesn't make a judge safe to optimize against: in [a 15 July paper on table recognition](https://arxiv.org/abs/2607.13347), judge scores driving a refinement loop made the output worse. On FinTabNet, ["every judge policy has negative recovery: the output selected by the judge is on average worse than the first output"](https://arxiv.org/html/2607.13347v1), though recovery stayed positive on the paper's second dataset.

[Evaluation](/guide/evaluation/)
