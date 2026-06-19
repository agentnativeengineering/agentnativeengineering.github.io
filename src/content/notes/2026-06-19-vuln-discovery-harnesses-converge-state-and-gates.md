---
title: "Two vuln-discovery harnesses converge: state and gates, not a smarter model"
date: 2026-06-19
summary: "Cloudflare's Glasswing and Visa's open-source VVAH independently land on the same design — durable state, sub-25% context, and a threat-model-plus-PoC gate that cuts false-positive rejection from 40% to 11%."
takeaways:
  - "For agent jobs that span hundreds of long-lived investigations, put the durability and the gates in an external harness and treat the model as a swappable component."
  - "Cap each agent below 25% context so compaction doesn't silently drop findings."
  - "Gate every finding behind a threat model, a proof-of-concept, and a proposed patch — Cloudflare cut validation rejection from 40% to 11% that way."
tags: ["harness-engineering", "vulnerability-discovery", "orchestration", "false-positives"]
sourceName: "The Cloudflare Blog"
sourceUrl: "https://blog.cloudflare.com/build-your-own-vulnerability-harness/"
sources:
  - title: "Cloudflare: Build your own vulnerability harness (Project Glasswing)"
    url: "https://blog.cloudflare.com/build-your-own-vulnerability-harness/"
  - title: "Visa Vulnerability Agentic Harness (VVAH), open-sourced"
    url: "https://github.com/visa/visa-vulnerability-agentic-harness"
draft: false
---
## What happened

On 2026-06-18, Cloudflare published [Build your own vulnerability harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness/), the architecture behind Project Glasswing — a system that points large language models (LLMs) at code to find security bugs across a whole fleet of repositories. Their first lesson: a generic coding agent can't do this, because it "only holds one hypothesis at a time, fill[s] their context window after covering a sliver of a real repo, and then loses information during context compaction." So the work moved out of the model and into a durable **harness** — the orchestration, state store, and gates around the model. Five days earlier, on 2026-06-13, [Visa open-sourced VVAH](https://github.com/visa/visa-vulnerability-agentic-harness), a harness "built on learnings from Project Glasswing" that lands on nearly the same shape. Two independent teams converging is the signal.

## Why it matters

Run an LLM over a real codebase and you drown in false positives — plausible-sounding bugs that aren't real. Cloudflare reports validation rejection started at 40%; Visa flatly states "the bottleneck in AI-assisted vulnerability management is triage speed, not discovery." If you ship raw model output, you've moved the work, not removed it. The harness is what turns thousands of guesses into a trusted, reviewable queue — and Cloudflare's design "centers on the harness, not the model," so any frontier model plugs in.

## How it works

1. **Threat-model first.** Both teams require an explicit threat model before analysis, focusing the attack surface instead of scanning blindly.
2. **Persistence before parallelism.** Glasswing keeps state in an external SQLite store so hundreds of investigations survive across runs, can be re-scoped, deduplicated, and resumed.
3. **Cap context per agent.** Cloudflare keeps each agent below 25% context usage to dodge the compaction that loses findings.
4. **Adversarial cross-check.** Discovery and validation run on different models so they "check each other"; Visa uses multi-agent deterministic voting to the same end.
5. **Gate the finding.** Glasswing files nothing without a threat model, a proof-of-concept against untouched source, and a proposed patch.

> The harness is the bit that lasts; swap the model freely, but keep the state, the gates, and the adversarial review.

## What broke

Subagents alone failed: Cloudflare notes a prompt can't give you "persistence, deduplication, resumability, and eventually fleet-wide dependency tracing." The fix was harness engineering, not a better prompt — the threat-model + PoC + patch gate cut validation rejection from 40% to 11%, filtering ~20,799 raw candidates to ~7,245 actionable findings. Both teams keep a human in the loop: Glasswing blocks the Fixer from merging code automatically, and VVAH stresses findings are non-deterministic triage candidates requiring human review.

[Harness Engineering](/guide/harness-engineering/)
