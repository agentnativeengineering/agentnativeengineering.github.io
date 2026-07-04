---
title: "Pentera Turned Claude Desktop Into a Double Agent, and One in Four Repos Left the Door Open"
date: 2026-07-03
summary: "Agent config files are executable policy: Pentera weaponized synced preferences, and a scan of 34,266 repos found 1 in 4 orgs with gaps."
audio: "/audio/field-notes-episode-agent-config-boundary.mp3"
seconds: 517
youtube: "https://youtu.be/PYqtPO5ywdE"
covers:
  - "2026-07-02-claude-desktop-synced-preferences-injection"
  - "2026-07-02-agent-config-files-security-boundary"
  - "2026-07-02-loop-engineering-nested-agent-loops"
oneIdea:
  title: "Your agent's config file is executable policy inside your security boundary — review it like code that ships, not like a README."
  body: "Pentera Labs turned Claude Desktop into persistent command-and-control by poisoning its synced preferences, not its prompt — and Anthropic classified it as intended behavior, since preferences can run code by design. A separate Codacy scan of 34,266 repos found 1 in 4 orgs with gaps in these files, including 21 hardcoded secrets and 449 dangerous command permissions. Whatever the file grants, the agent acts on."
stats:
  - n: "34,266"
    label: "repos Codacy scanned for agent config file gaps"
  - n: "1 in 4"
    label: "organizations showed gaps in their agent config files"
  - n: "~1,150"
    label: "higher-severity security issues flagged, incl. 21 hardcoded secrets"
  - n: "~5,000"
    label: "config files with no explicit stop conditions or fallback paths"
brief:
  - kind: story
    domain: "security"
    source: "The Register"
    url: "https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692"
    title: "Pentera turned Claude Desktop into C2 by poisoning synced preferences"
    body: "Pentera Labs red-teamers compromised a victim's inbox and planted malicious instructions in Claude Desktop's account-wide synced preferences, turning it into persistent command-and-control. Because the preferences ride along on every session, the poison outlives any single conversation. Anthropic classified it as expected behavior, not a vulnerability."
    take: true
  - kind: story
    domain: "security"
    source: "Codacy"
    url: "https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files"
    title: "1 in 4 orgs showed gaps in their AI agent config files"
    body: "Codacy scanned 34,266 repositories and found about 1 in 4 organizations had gaps in agent instruction files like CLAUDE.md and AGENTS.md. The scan flagged ~1,150 higher-severity issues, including 21 hardcoded secrets, 449 dangerous command permissions, and 437 PII exposure risks. Nearly 5,000 files had no defined stop conditions."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "DeepLearning.AI"
    url: "https://www.deeplearning.ai/the-batch/issue-359"
    title: "Loop engineering — nested loops that let coding agents run for hours"
    body: "Andrew Ng frames 'loop engineering' as three nested loops at different speeds: a fast agentic coding loop that tests its own work, a slower developer-feedback loop, and a days-long external-feedback loop. Closing the inner loop lets a coding agent run productively for an hour without human QA, freeing the human for product decisions where they hold a context advantage."
    take: false
  - kind: quote
    domain: "security"
    source: "The Register"
    url: "https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692"
    title: "If your AI assistant can execute code by design, its config file is now privileged software — treat it like one."
    attribution: "— the lesson from Pentera's Claude Desktop red-team and Codacy's 34,266-repo scan"
    take: false
draft: false
---
