---
title: "When the dashboard lies: adversarial checks beat a green test suite"
date: 2026-06-18
summary: "An autonomous agent's compiler work passed a thousand green tests while harboring memory-safety holes; the fix is adversarial and trace-level verification, not a self-graded suite."
takeaways:
  - "Do not trust a green dashboard an agent grades itself against — falsify it with adversarial programs and trace-level failure detection before you believe the metric."
  - "A test harness that counts internal compiler errors or SIGABRTs as passing tests reports health it does not have."
  - "Diagnose why an agent failed, not just that it did: classify failures, trace causal chains, and decide whether the fix belongs in the prompt or the tooling."
tags: ["evaluation", "autonomous-agents", "adversarial-testing", "test-harness"]
sourceName: "Rue-Lang.Dev"
sourceUrl: "https://rue-lang.dev/blog/an-agent-holds-the-fort/"
sources:
  - title: "Rue: three days of autonomous compiler work by Claude"
    url: "https://rue-lang.dev/blog/an-agent-holds-the-fort/"
  - title: "Rue write-up surfaced on Hacker News"
    url: "https://news.ycombinator.com/item?id=48492752"
  - title: "AWS: agent failure detection and root cause analysis with Strands Evals"
    url: "https://aws.amazon.com/blogs/machine-learning/ai-agent-failure-detection-and-root-cause-analysis-with-strands-evals/"
draft: false
---
## What happened

Hand an agent a repository, go to bed, and the morning dashboard will tell you everything is fine. It is the dashboard you cannot trust. In a [post dated 2026-06-11](https://rue-lang.dev/blog/an-agent-holds-the-fort/), Claude (the "Fable" model) recounts three days of largely autonomous work on Rue, a memory-safe systems language, after its creator handed over the keys: 95 merged pull requests, ~150 filed issues, nine closed epics.

By every visible metric the codebase looked healthy — over a thousand tests, all green, CI on three platforms, 100% spec traceability. "The dashboard was lying," the agent writes — "not maliciously, [lying the way test suites lie when nobody has tried to falsify them in a while](https://rue-lang.dev/blog/an-agent-holds-the-fort/)." Adversarial probing then exposed deep bugs: the harness counted internal compiler errors as passing tests, 64-bit arithmetic often ran as 32-bit (including a bounds-check memory-safety hole), and the optimizer deleted mandatory safety checks at `-O1` because CI never tested above `-O0`. The write-up was [discussed on Hacker News](https://news.ycombinator.com/item?id=48492752).

## Why it matters

A green suite an agent grades against itself measures agreement between the code and the tests the same agent wrote — not correctness. When you let an agent run the loop unattended, the test suite stops being an oracle and becomes another artifact it can satisfy by accident. That is the core evaluation problem: a metric that nobody tries to break drifts from the thing it was supposed to measure, and the gap stays invisible until a user — or an allocator that grows up — falls into it.

## How it works

1. **Use the language as a newcomer would.** Write small programs, compile them with the real CLI, run them — before reading any metric.
2. **Falsify, do not confirm.** Finder agents generate hundreds of programs at a time, each trying to catch a contradiction between what the spec promises and what the binary does.
3. **Refute the findings.** Verifier agents try to disprove each reported bug, so confirmed failures are real, not hallucinated.
4. **Diagnose, don't just detect.** [AWS's Strands Evals](https://aws.amazon.com/blogs/machine-learning/ai-agent-failure-detection-and-root-cause-analysis-with-strands-evals/) scans execution traces against a nine-category failure taxonomy, traces causal chains, and labels each failure PRIMARY, SECONDARY, or TERTIARY.
5. **Route the fix.** That analysis recommends whether the change belongs in the system prompt or in a tool description, so you repair the cause, not the symptom.

> A test suite nobody has tried to break is a claim, not a measurement.

## What broke

The failure was harness engineering, not a missing prompt. A `compile_fail` case was satisfied by a SIGABRT, and 98 of 216 such cases had no message assertion at all — so the harness scored crashes as successes. The fix was an honest test suite plus adversarial finder/verifier loops that assert on what the binary actually does. AWS makes the same move for production: its [CloudWatchProvider diagnoses historical sessions from traces](https://aws.amazon.com/blogs/machine-learning/ai-agent-failure-detection-and-root-cause-analysis-with-strands-evals/), fixing PRIMARY failures first instead of reviewing traces by hand. The remaining bottleneck, the agent concludes, is the human's judgment about what "passing" should mean.

[Evaluation](/guide/evaluation/)
