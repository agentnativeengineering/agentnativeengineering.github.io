---
title: "64.8% of agent-written Python PRs had no existing test executing the lines they changed"
date: 2026-08-03
summary: "An ICSME 2026 study of 4,882 agent-written pull requests found most Python ones had no existing test touching their changed lines, in the same fortnight DX's developer-experience data showed change confidence falling across 500+ organizations."
takeaways:
  - "Measure coverage on the changed lines of an agent's pull request before you merge it."
  - "Delivery instability was the second-largest effect DORA associated with AI adoption, behind individual effectiveness, and the effort saved writing code returns as a verification tax on reviewing it."
  - "Weight the error-handling paths, which the study found least covered, and watch median pull request size as the batch-size guardrail."
tags: ["evaluation", "test-coverage", "code-review", "delivery-instability"]
sourceName: "Test Coverage Analysis of Agentic Pull Requests (ICSME 2026)"
sourceUrl: "https://arxiv.org/abs/2607.18057"
draft: false
---
## What happened

An [ICSME 2026 study](https://arxiv.org/abs/2607.18057) posted 20 July measured five coding agents across 4,882 pull requests: existing tests cover "61.5% of agents' changed executable lines in Java and only 27.0% in Python, where 64.8% of PRs have no changed line executed by any existing test," and agents "include test changes in only 49.6% of PRs that change code under test files." On 22 July [DX reported](https://newsletter.getdx.com/p/the-state-of-ai-impact-in-engineering), from developer-experience data across 500+ organizations, that "Code Maintainability improved by 3.8%, whereas Change Confidence decreased by 6.1%," with median pull request size nearly doubled. Honeycomb's Fred Hebert [wrote the same day](https://www.honeycomb.io/blog/embracing-code-review-bottleneck) that "new code could be generated much faster than we could assimilate."

## Why it matters

Google's [DORA](https://services.google.com/fh/files/misc/dora-roi-of-ai-assisted-software-development-2026.pdf) names the shape: effort saved on boilerplate "is often replaced by a verification tax," and of every outcome it measured, "The effect on instability was second largest," behind only individual effectiveness. [Meta researchers](https://arxiv.org/abs/2607.29516) opened a paper on 31 July with the flat version — "AI coding agents are generating code at volumes that exceed the capacity of traditional peer review."

## How it works

1. **Score the diff.** Ask what fraction of the changed executable lines any test actually runs; a suite-level number hides a pull request nothing touches.
2. **Weight the error paths.** Error-handling constructs were the most consistently under-tested in the study, with "miss rates reaching 86.0% in Java and 81.0% in Python."
3. **Hold batch size.** DORA names version control and small batches as what lets a team "catch errors before they reach the user"; DX's doubled median pull request runs the other way.

> A passing build on an agent's pull request tells you nothing about the lines no test executed.

## The catch

The largest dataset in the window cuts against this: [220,612 closed PRs across 489 popular Python repositories](https://arxiv.org/abs/2607.21832) showed "agentic PRs show comparable or lower defect proneness than human PRs, with mostly non-significant differences," and the top agent's estimated merge rate (Claude, 84.3%) sits level with humans. Hebert's team kept its velocity by leaning into the review bottleneck rather than shrinking it. DORA expects a J-Curve — "a temporary productivity dip and period of instability associated with early adoption" — and reports the instability finding as an association drawn from its 2025 survey research — not proof of cause.

[Evaluation](/guide/evaluation/)

