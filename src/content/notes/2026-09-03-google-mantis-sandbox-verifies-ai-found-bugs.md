---
title: "Google's AI bug hunter must reproduce every vulnerability in a sandbox to count"
date: 2026-09-03
summary: "Google's open-source Mantis harness only reports an AI-found vulnerability once it reproduces the exploit in a sandbox, fixing the sub-7% true-positive rate that plagues naive AI code scanning."
takeaways:
  - "Don't trust an AI-found vulnerability until it's reproduced in a sandbox — naive AI code scanning runs under 7% true-positive rates and drowns triage in hallucinated bugs."
  - "Compress large codebases into a hierarchical file-to-directory-to-root summary tree before scanning; Google cut token overhead by over 85% this way while keeping structural context."
  - "Hand the harness human-curated context on which bug classes to ignore, and define sandbox vulnerability-acceptance criteria up front — automation alone isn't enough."
tags: ["security", "vulnerability-scanning", "sandboxing", "open-source"]
sourceName: "Google Cloud Blog"
sourceUrl: "https://cloud.google.com/blog/products/identity-security/getting-started-with-the-mantis-harness-to-find-and-fix-bugs/"
sources:
  - title: "Getting started with the Mantis harness to find and fix bugs"
    url: "https://cloud.google.com/blog/products/identity-security/getting-started-with-the-mantis-harness-to-find-and-fix-bugs/"
draft: false
---
## What happened
On 2026-09-02, Google security engineers Nick Galloway and Yulong Zhang [released Mantis](https://cloud.google.com/blog/products/identity-security/getting-started-with-the-mantis-harness-to-find-and-fix-bugs/), an open-source AI harness for finding and fixing software vulnerabilities, and shared how Google itself uses it. Their starting problem: naive AI code scanning produces hallucinated bugs and a true-positive rate under 7%. Mantis instead pairs critic and review agents with sandboxed reproduction — a candidate bug only counts once the harness actually triggers it in an isolated environment. Internally, the team says a short prompt pointing a coding agent at the Mantis framework has already surfaced real vulnerabilities across Google's repositories.

## Why it matters
An agent that "finds" a bug it can't demonstrate just shifts triage work onto a human, which is worse than not scanning at all. Requiring reproduction before a finding is trusted is what turns a noisy scanner into something a security team can act on.

## How it works
1. **Ground, don't guess.** Critic and review agents challenge each candidate finding, but the real filter is sandboxed reproduction — no working exploit, no reported bug.
2. **Mine the repo's own history.** Mantis reads past commits and security fixes to auto-generate architecture and threat-model docs, even when none exist.
3. **Compress before reasoning.** It builds a hierarchical summary tree — files roll into directory summaries, directories into a root summary — cutting token overhead by over 85% on large codebases while keeping structural context.
4. **Feed the lesson forward.** The `mantis-advise` skill reuses what Mantis learned so coding agents write secure code the first time, not just after review.

> A found vulnerability isn't real until the harness can reproduce it in a sandbox.

## The catch
Google is explicit that raw automation isn't enough: results improve substantially when you hand the harness human-curated context — which bug classes are never worth flagging — and build sandboxes with clear vulnerability-acceptance criteria upfront. That setup work is per-codebase and non-trivial, and the under-7%/85% figures are Google's own numbers on Google's own repos, not an independent benchmark.

[Security](/guide/security/)
