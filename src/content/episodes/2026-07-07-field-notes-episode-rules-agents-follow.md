---
title: "Microsoft's Skill File That Trains Like a Weight, and Dropbox's One-in-Eight Gap"
date: 2026-07-07
summary: "NVIDIA, Microsoft Research, and Dropbox each show a written rule for an agent only holds when something keeps checking or retraining it."
audio: "/audio/field-notes-episode-rules-agents-follow.mp3"
seconds: 508
youtube: "https://youtu.be/W5OTRXKySaM"
covers:
  - "2026-06-12-dropbox-agent-checks-prs-against-threat-models"
  - "2026-07-06-nvidia-pre-action-policy-check-agent-governance"
  - "2026-07-06-skillopt-trains-agent-skill-file-like-weights"
oneIdea:
  title: "A skill file optimized inside one coding agent, dropped into a different model untouched, lifted its score from 22 to 82 — the workflow knowledge transferred, not just the benchmark number."
  body: "Microsoft Research's SkillOpt treats an agent's markdown skill file as a trainable parameter, editing it against a measured reward instead of a hunch. The striking result is transfer: a spreadsheet skill learned in one harness worked in a completely different model with no retuning, lifting a 22-out-of-100 baseline to 82. That suggests these files capture reusable workflow knowledge, not benchmark-specific tricks."
stats:
  - n: "12%"
    label: "Share of Dropbox implementing PRs that linked back to their threat model"
  - n: "22→82"
    label: "A spreadsheet skill trained in one agent, dropped into another, lifted its score (SkillOpt)"
  - n: "80%"
    label: "Design reviews Dropbox's semantic search reconnected to their implementing PRs"
  - n: "69%"
    label: "Of those recovered links had no shared ID to grep for — findable only by meaning"
brief:
  - kind: story
    domain: "security"
    source: "NVIDIA"
    url: "https://developer.nvidia.com/blog/how-to-govern-autonomous-agents-in-enterprise-ai-factories/"
    title: "NVIDIA gates every agent action behind a pre-action policy check"
    body: "NVIDIA's reference design for enterprise agents enforces governance at runtime: default-deny networking, a credential proxy so the agent never sees raw secrets, signed policy bundles, and a check before every single action. The same load-bearing pieces show up independently at AWS and Microsoft, which is what makes them worth copying whoever you buy from."
    take: true
  - kind: story
    domain: "security"
    source: "Dropbox.Tech"
    url: "https://dropbox.tech/security/dropbox-mcp-dash-design-code-security"
    title: "Dropbox built an agent that checks PRs against their threat models"
    body: "Across 150 design reviews, only 12% of implementing PRs linked back to their threat model. Dropbox's agent retrieves the relevant threat model at code-review time and compares it against the diff — and retrieval was the hard half, with semantic search reconnecting 80% of reviews, 69% of them with no shared ID to grep for."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "Microsoft Research"
    url: "https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/"
    title: "SkillOpt trains an agent's skill file like model weights"
    body: "SkillOpt treats an agent's markdown skill file as a trainable parameter: an optimizer model reads execution traces and proposes small edits, keeping only ones that score strictly higher. A spreadsheet skill trained in Codex, dropped into Claude Code untouched, lifted the no-skill baseline from 22 to 82 — evidence the workflow knowledge transfers across models."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "Tencent"
    url: "https://the-decoder.com/tencent-releases-hy3-open-source-model-that-allegedly-matches-models-up-to-five-times-its-active-size/"
    title: "Tencent open-sources Hy3, a lean model it says punches above its weight"
    body: "Hy3 is an Apache-2.0 Mixture-of-Experts model with 295B total parameters but only ~21B active per token, which Tencent says matches models two to five times its active size. It also reports hallucinations dropping from 12.5% to 5.4%, and the open license means near-frontier quality at far lower inference cost."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "Zhipu AI"
    url: "https://the-decoder.com/zhipu-ai-launches-zcode-to-challenge-claude-code-and-openai-codex-at-a-fraction-of-the-cost/"
    title: "Zhipu launches ZCode, a cut-price rival to Claude Code and Codex"
    body: "ZCode is a coding environment built on Zhipu's open GLM-5.2 with a one-million-token context window, handling files, terminal, browser, and Git in one agent workflow. A Snowflake benchmark found GLM-5.2 nearly tied with Anthropic's Opus 4.7 after three attempts, raising competitive pressure on the paid coding agents engineers rely on."
    take: false
  - kind: quote
    domain: "security"
    source: "NVIDIA"
    url: "https://developer.nvidia.com/blog/how-to-govern-autonomous-agents-in-enterprise-ai-factories/"
    title: "Governance you can't enforce before the action is just a record of what went wrong."
    attribution: "— NVIDIA's Secure Agent Workspace reference design"
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "Microsoft Research"
    url: "https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/"
    title: "The only object that learns is a single markdown file."
    attribution: "— Microsoft Research, on SkillOpt"
    take: false
draft: false
---
