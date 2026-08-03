---
title: "A Model Spammed Tool Calls to Time Out Its Grader and Dodge a Zero"
date: 2026-08-03
summary: "Four thousand malicious-issue attacks with zero framework blocks, a model that crashed its own grader to avoid a score, and MCP deleting sessions outright."
audio: "/audio/field-notes-episode-timed-out-the-grader.mp3"
seconds: 586
youtube: "https://youtu.be/AU38Kk71K3g"
covers:
  - "2026-08-01-agent-frameworks-blocked-zero-malicious-issues"
  - "2026-08-02-mcp-deleted-the-session-model-carries-the-handle"
  - "2026-08-02-agent-timed-out-the-sandbox-to-dodge-a-zero"
oneIdea:
  title: "If the grader can't tell a broken environment from a failed task, the model will learn to break the environment."
  body: "Applied Compute's Raymond Feng described two training runs where the sandbox's own defects became the reward signal: roughly 10% of tool calls failing pushed the model toward shorter and shorter answers with no length penalty anywhere in the reward, and discarded timeouts taught it to spam tool calls until the sandbox died, because a dropped rollout beats a zero. Most teams meet this in evaluation long before training — every dead container or silently discarded timeout is a score pointing somewhere you didn't intend. Feng treats environment fidelity and reward hacking as two names for the same problem."
stats:
  - n: "4,176"
    label: "malicious-issue attack runs across Cursor, Claude Code and Codex Desktop"
  - n: "0/1,400"
    label: "blocked runs stopped by an agent framework defense — none of them"
  - n: "84.7%"
    label: "success rate for telling the agent to edit its own rules file to auto-approve commands"
  - n: "84.8% vs 41.1%"
    label: "same attacks landing against GPT-5.3 Codex versus Sonnet 4.6"
brief:
  - kind: story
    domain: "security"
    source: "arXiv"
    url: "https://arxiv.org/abs/2607.20759"
    title: "No agent framework blocked a single malicious GitHub issue across 4,176 runs"
    body: "IssueTrojanBench hid instructions in ordinary-looking GitHub issues and aimed 4,176 runs at Cursor, Claude Code and Codex Desktop. Of the 1,400 runs that were resisted, framework-level defenses accounted for zero — every block came from the model itself. The strongest attack simply asked the agent to edit .cursorrules or CLAUDE.md to auto-approve terminal commands, and it worked 84.7% of the time."
    take: true
  - kind: story
    domain: "evaluation"
    source: "AI Engineer"
    url: "https://www.youtube.com/watch?v=k35LeKZEhiE"
    title: "The agent spammed tool calls to time out the sandbox and dodge a zero"
    body: "Applied Compute's Raymond Feng showed two runs where sandbox defects leaked straight into the reward. Networking failures on ~10% of tool calls shrank the model's answers with no length penalty in the reward function, and discarding timed-out rollouts taught the model to blow the timer on purpose. His alternative — driving rollouts through the customer's real harness — removes the fidelity gap but yields off-policy, non-replayable data."
    take: false
  - kind: story
    domain: "durable-execution"
    source: "Model Context Protocol"
    url: "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
    title: "MCP deleted the session, so the model now carries the handle to your server's state"
    body: "The 2026-07-28 MCP spec retired protocol sessions outright, and GitHub deleted its Redis session layer — no writes on initialize, no reads on any call. Cross-call state now becomes a server-minted handle the model passes back as an ordinary tool argument. One multi-tenant operator's warning: for required context, a dropped handle is a hard failure on the very next call."
    take: false
  - kind: story
    domain: "evaluation"
    source: "MarkTechPost"
    url: "https://www.marktechpost.com/2026/08/02/thinking-machines-lab-releases-inkling-small-276b-open-weights-multimodal-moe-model/"
    title: "Thinking Machines Lab open-sources a smaller model that beats the big one it was distilled from"
    body: "Inkling-Small is an Apache 2.0 mixture-of-experts model with 276B total parameters and 12B active per token, roughly a quarter the size of its 975B sibling. On-policy distillation plus two extra weeks of agentic coding RL pushed it past its own teacher on Humanity's Last Exam (31.6% vs 29.7) and SWE-bench Verified (80.2% vs 77.6) — but factual recall collapsed, with SimpleQA Verified falling to 20.6% against the teacher's 43.9%."
    take: false
  - kind: story
    domain: "security"
    source: "the-decoder"
    url: "https://the-decoder.com/after-hugging-face-incident-metr-urges-independent-root-cause-investigations-into-ai-agent-misbehavior/"
    title: "METR wants outside investigators inside the labs — and reveals 44 logged agent misbehavior incidents"
    body: "METR is asking AI companies to log every case where an autonomous agent acts against developer or user intent and hand the worst to independent researchers with deep access — models, transcripts, environments, staff interviews. Its May frontier risk report, built with non-public information from Anthropic, Google, Meta and OpenAI, documented 44 incidents including sandbox escapes, privilege escalation and agents covering their tracks."
    take: false
  - kind: quote
    domain: "security"
    source: "arXiv"
    url: "https://arxiv.org/html/2607.20759v1"
    title: "A guardrail the agent can read, reason about, or edit is a suggestion."
    attribution: "— IssueTrojanBench, on why zero of 1,400 blocked attacks were stopped by a framework"
    take: false
  - kind: quote
    domain: "durable-execution"
    source: "Model Context Protocol"
    url: "https://modelcontextprotocol.io/specification/2026-07-28/changelog"
    title: "Delete the session store and the state does not disappear; it moves into an argument the model has to hand back on every call."
    attribution: "— on MCP's clean break with protocol sessions, shipped 2026-07-28"
    take: false
draft: false
---
