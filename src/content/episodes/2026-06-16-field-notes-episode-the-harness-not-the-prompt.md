---
title: "When the danger isn't the prompt — it's everything the agent can touch"
date: 2026-06-16
summary: "Three agent breaches this week — Meta's giveaway, a repo-open worm, an unvetted MCP config — all came from the harness, not the prompt."
audio: "/audio/field-notes-episode-the-harness-not-the-prompt.mp3"
seconds: 519
youtube: "https://youtu.be/4ymwOw8cuZA"
covers:
  - "2026-06-13-meta-support-agent-instagram-account-takeover"
  - "2026-06-13-miasma-worm-ai-agent-poisoned-microsoft-repo"
  - "2026-06-14-mcp-server-config-security-boundary"
oneIdea:
  title: "Every agent breach this week came from the harness — what the agent could touch — not from a clever prompt."
  body: "Meta's support agent gave away ~20,000 Instagram accounts to people who just asked. A worm fired the moment a coding agent opened a repo. An unvetted MCP config ran real code. None used prompt injection. The durable fix in all three is a guardrail in code, outside the model — not better instructions inside it."
stats:
  - n: "20,000"
    label: "Instagram accounts breached by simply asking Meta's AI support agent to relink emails"
  - n: "73"
    label: "verified, signed Microsoft packages laced with the Miasma credential stealer"
  - n: "28 KB"
    label: "stealer payload that grabbed cloud, Kubernetes, and password-manager creds, then spread"
  - n: "3,500+"
    label: "usernames taken over in the Meta account-recovery failure"
brief:
  - kind: story
    domain: "security"
    source: "NYTimes"
    url: "https://www.nytimes.com/2026/06/09/technology/instagram-hack-ai-bug.html"
    title: "Meta's support agent gave away 20k Instagram accounts when asked nicely"
    body: "Attackers took over roughly 20,000 Instagram accounts by asking Meta's AI support agent to relink emails. No prompt injection — just an eager agent wired to a privileged action with no hard identity check outside the model."
    take: true
  - kind: story
    domain: "security"
    source: "Ars Technica"
    url: "https://arstechnica.com/security/2026/06/for-the-2nd-time-in-weeks-microsoft-packages-laced-with-credential-stealer/"
    title: "Miasma worm steals creds the moment an AI agent opens a poisoned Microsoft repo"
    body: "73 verified Microsoft packages hid a credential stealer in auto-executing config files that fired when a developer opened them in Claude Code or Gemini CLI. Stolen Microsoft credentials meant the signature vouched for the malware too."
    take: false
  - kind: story
    domain: "security"
    source: "AAIF"
    url: "https://aaif.io/blog/three-key-operational-patterns-you-need-to-prevent-mcp-horror-stories/"
    title: "Treat an MCP server config as your security boundary, not settings"
    body: "Docker's two MCP horror stories show an unvetted config and a fully-permitted agent both cause real damage. A config launches processes and reads your filesystem — review it like code, and remember permission alone isn't safety."
    take: false
  - kind: quote
    domain: "security"
    source: "ANE"
    url: "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/"
    title: "An agent that will do anything you ask is, by default, an agent that will do anything an attacker asks."
    attribution: "— The week's lesson, drawn from the Meta account-recovery failure"
    take: false
draft: false
---
