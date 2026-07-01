---
title: "\"Hard to eval\" is a product smell: design for verification first"
date: 2026-07-01
summary: "With generation solved, verification is the binding cost — so make AI outputs checkable by design before you build evals or wire up reviewers."
takeaways:
  - "If your product is hard to eval, that is usually a design smell: an output users cannot verify forces them to redo the work, so make the answer checkable before you build evals."
  - "Generation is cheap and verification is now the bottleneck — AI pull requests reportedly take 4.6x longer to review because they look clean and confident regardless of correctness."
  - "The reviewer should be independent from the author: a same-family model shares training and therefore shares blind spots."
tags: ["evaluation", "verification", "code-review", "product-design"]
sourceName: "Hamel's Blog"
sourceUrl: "https://hamel.dev/blog/posts/eval-smell/"
sources:
  - title: "Hamel Husain: \"It's Hard to Eval\" Is a Product Smell"
    url: "https://hamel.dev/blog/posts/eval-smell/"
  - title: "The Audit Tax: verification is the new bottleneck (Temrel)"
    url: "https://spark.temrel.com/p/the-audit-tax-why-your-agent-made-you-slower-d4e0"
  - title: "Code review needs independence (CodeRabbit)"
    url: "https://www.coderabbit.ai/blog/code-review-needs-independence"
  - title: "The Agentic AI Engineer talk (Mutagent)"
    url: "https://www.youtube.com/watch?v=pSto5YaNGUo"
draft: false
---
## What happened

In a post dated 2026-06-29, evals practitioner [Hamel Husain argues that "it's hard to eval" is a product smell](https://hamel.dev/blog/posts/eval-smell/): if an AI output is hard for *you* to verify, it's hard for users too, who then redo the work to check it. Across three products he advised — an internal data agent, a lesson-plan generator, and a medical-report tool — the fix was the same: stop emitting one opaque answer and [expose checkable artifacts](https://hamel.dev/blog/posts/eval-smell/) — provenance and links back to sources, the queries and assumptions used, breakdowns to sanity-check, and explicit flags for what couldn't be verified.

## Why it matters

The whole cluster lands on one shift: generation is cheap now, so verification is the binding cost. A [June 2026 piece surfaced on Hacker News](https://spark.temrel.com/p/the-audit-tax-why-your-agent-made-you-slower-d4e0) calls it the "Audit Tax" — the agent writes a pull request in 90 seconds, you spend 90 minutes deciding whether to trust it, and it cites a report that AI PRs take 4.6x longer to review. Reviewing agent output is *harder* than reviewing a human's, because agent PRs look clean and confident regardless of correctness. Verification, not generation, is where your time and quality now leak.

## How it works

1. **Design the artifact for checking.** Emit provenance, the query, and diffs against a trusted reference so the user checks, not redoes ([Husain](https://hamel.dev/blog/posts/eval-smell/)).
2. **Layer cheap gates before expensive ones.** Deterministic typecheck/tests/lints, then a model reviewer against stated intent, then a human ([Temrel](https://spark.temrel.com/p/the-audit-tax-why-your-agent-made-you-slower-d4e0)).
3. **Keep the reviewer independent.** A same-family model shares blind spots ([CodeRabbit](https://www.coderabbit.ai/blog/code-review-needs-independence)).
4. **Build evals from real failures.** Cluster production traces into failure modes and feed remedies back ([Mutagent](https://www.youtube.com/watch?v=pSto5YaNGUo)).

> If your product is hard to eval, that's a design bug to fix before it's a metrics problem.

## The catch

Independence isn't free advice from a neutral party — [CodeRabbit's argument](https://www.coderabbit.ai/blog/code-review-needs-independence) that the model writing code shouldn't approve it (citing a 64.5% self-correction failure rate) is also a pitch for its own cross-family reviewer, so weigh the mechanism, not the vendor. And designing for verifiability doesn't remove the human grader; it just makes the check fast instead of a full redo.

[Evaluation](/guide/evaluation/)
