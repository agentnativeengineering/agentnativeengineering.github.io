---
title: "Why Maven Clinic makes two AI models agree before touching a refund"
date: 2026-09-01
summary: "Maven Clinic ties AI reliability to reversibility: a missed booking can fail and retry, but a reimbursement claim needs two models to agree before it executes."
takeaways:
  - "Classify AI failures by whether they're reversible before deciding how much verification they need: a missed booking can retry, but a wrong reimbursement decision can't be undone, so it gets cross-model agreement checks and a human handoff."
  - "Maven Clinic runs hundreds of integration tests requiring roughly a 90% pass rate, backed by rubric-based auto-evaluation and a team that manually spot-checks live conversations."
  - "Code review adapted too: a 500-line PR guideline and stacked PRs keep AI-assisted changes reviewable instead of rubber-stamped."
tags: ["reliability", "hallucination", "evaluation", "code-review"]
sourceName: "Maven Clinic (AI Engineer)"
sourceUrl: "https://www.youtube.com/watch?v=WJRdLNhrsLQ"
sources:
  - title: "Dan Feng, Maven Clinic — How to build an AI-Native Health Company"
    url: "https://www.youtube.com/watch?v=WJRdLNhrsLQ"
draft: false
---
## What happened
In a talk published 2026-08-19, Dan Feng of [Maven Clinic](https://www.youtube.com/watch?v=WJRdLNhrsLQ) described the digital health company's two-year shift from a traditional engineering org to what Feng calls an "AI-native" one, built around an internal orchestration layer called Maven Intelligence. The concrete reliability rule underneath it: classify every AI failure by whether it can be undone. A missed appointment booking is tolerable, so it just gets retried. A reimbursement claim is not, so before the system acts on one, two different models have to independently agree on the outcome, and any disagreement routes to a human.

## Why it matters
Most reliability advice treats every failure the same and reaches for one blanket fix — more retries, more guardrails, a bigger eval suite. Maven's team instead spends its verification budget where being wrong is expensive to reverse, which is the cost that actually matters once an agent is touching real money and real appointments.

## How it works
1. **Classify by reversibility.** Every AI-driven action gets sorted into tolerable-to-fail (a booking) or not (a reimbursement decision) before it ships.
2. **Reversible actions run light.** These get standard checks and simply retry on failure.
3. **Irreversible actions get cross-model agreement.** A second, independent model must concur before the system commits; disagreement hands off to a person instead of executing.
4. **Continuous eval backs both.** Hundreds of integration tests must clear roughly a 90% pass rate, alongside rubric-based auto-evaluation and a dedicated team spot-checking live conversations.

> Tolerate failure where it's cheap to undo; require two models to agree where it isn't.

## The catch
Feng didn't disclose which model pair is used for agreement checks or the exact rubric thresholds behind the eval suite, and a 90% integration-test pass rate is a target, not proof the system won't hallucinate in production. Maven still keeps a dedicated team manually spot-checking live conversations as a backstop — an implicit admission that automated evals alone aren't sufficient for the irreversible cases.

[Reliability](/guide/reliability/)
