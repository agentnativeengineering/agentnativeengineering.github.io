---
title: "No agent framework blocked a single malicious GitHub issue across 4,176 runs"
date: 2026-08-01
summary: "IssueTrojanBench ran 4,176 malicious-issue attacks at Cursor, Claude Code, and Codex Desktop, and not one of the 1,400 blocked runs was stopped by an agent framework defense."
takeaways:
  - "Assume your agent framework's guardrails block nothing and put enforcement somewhere the agent cannot reach — across 4,176 attacks, not one refusal came from a framework defense."
  - "That makes model choice your security posture: the same attacks succeeded 84.8% of the time against GPT-5.3 Codex and 41.1% against Sonnet 4.6."
  - "The attack that worked 84.7% of the time simply told the agent to edit .cursorrules or CLAUDE.md to auto-approve terminal commands."
tags: ["security", "prompt-injection", "coding-agents", "guardrails"]
sourceName: "arXiv (Singh, Yang, Chen)"
sourceUrl: "https://arxiv.org/abs/2607.20759"
sources:
  - title: "IssueTrojanBench: Benchmarking AI Coding Agents Against Malicious Issue Requests"
    url: "https://arxiv.org/abs/2607.20759"
  - title: "IssueTrojanBench (full text, v1)"
    url: "https://arxiv.org/html/2607.20759v1"
  - title: "GitLost: How we tricked GitHub's AI agent into leaking private repos"
    url: "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/"
  - title: "Prompt-injection attacks against memory-based agents"
    url: "https://arxiv.org/abs/2607.14611"
draft: false
---
## What happened

On 22 July, Ankur Singh, Jinqiu Yang, and Tse-Hsun Chen published [IssueTrojanBench](https://arxiv.org/abs/2607.20759) — 696 adversarial artifacts grown from six seed issues in SymPy and requests, run across six agent-model configurations for [4,176 experimental runs](https://arxiv.org/html/2607.20759v1) against Cursor, Claude Code, and Codex Desktop. In 66.5% of them the malicious issue penetrated "all the guardrails (agent- and LLM-level)." Of the 1,400 runs that were resisted, the authors score [framework-level defenses at "0/1,400, 0%"](https://arxiv.org/html/2607.20759v1).

## Why it matters

Every block traced back to the model — a safety refusal, or the model's own judgment that alt-text was untrusted metadata. That makes model choice your security posture: the same attacks succeeded [84.8% of the time against GPT-5.3 Codex, 73.6% against GPT-5.4, and 41.1% against Sonnet 4.6](https://arxiv.org/html/2607.20759v1). The channel isn't theoretical — in July, Noma Labs filed [an issue on a public repository](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) with "no coding skills, access, or credentials" and had GitHub Agentic Workflows post a private repo's README as a public comment.

## How it works

1. **Your reviewers will never see it.** Payloads concealed in white-on-white text or HTML comments ["achieved the same 72.2% success rate as fully visible text"](https://arxiv.org/html/2607.20759v1) — the rate five of the six delivery vectors tied at. Only image alt-text fell off, to 16.7%.
2. **Your approval prompt is editable state.** Instructing the agent to edit `.cursorrules` or `CLAUDE.md` to [bypass terminal confirmation prompts](https://arxiv.org/html/2607.20759v1) succeeded 84.7% of the time, second only to installing a disguised PyPI package as a "mandatory prerequisite," at 96.6%.
3. **Telling the model it's data doesn't help.** The authors prepended a spotlighting instruction to treat external content as "untrusted data" rather than as instructions; [the defense "did not reliably prevent attack execution."](https://arxiv.org/html/2607.20759v1)

> A guardrail the agent can read, reason about, or edit is a suggestion.

## The catch

Six seed issues, two Python repositories, one task prompt, one phrasing strategy — the authors [flag both validity limits](https://arxiv.org/html/2607.20759v1) and note safety behavior "may change with subsequent updates," so read the per-model rates as a July 2026 snapshot. It also cuts against [a July study finding agents resist overwriting their own memory files](https://arxiv.org/abs/2607.14611) from untrusted content; the difference here is that the edit arrives as a step inside a task the agent was legitimately asked to do.

[Security](/guide/security/)
