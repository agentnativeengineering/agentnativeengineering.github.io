---
title: "A Clean Repo That Runs Malware, and a Silent Six-Figure Trade"
date: 2026-07-01
summary: "A clean repo that runs malware, a silent six-figure trade, and Portkey's trust-boundary map: agent risk lives between the pieces, not in the model."
audio: "/audio/field-notes-episode-trust-boundaries-silent-failures.mp3"
seconds: 566
youtube: "https://youtu.be/5bDFj1UXsMg"
covers:
  - "2026-06-30-clean-repo-tricks-coding-agent-into-running-malware"
  - "2026-06-30-agent-vulnerability-trust-boundary-failure"
  - "2026-06-30-production-agents-fail-silently-debug-by-trace"
oneIdea:
  title: "Every agent attack is the same shape: a trust boundary between two parts of different authority that nobody made the infrastructure responsible for guarding."
  body: "Portkey maps the four classic agent attacks — prompt injection, identity spoofing, budget bombs, and tool poisoning — to a single failure: an undefined line between components that trust each other differently. Because the model picks tools at runtime from text the developer never wrote, identity, budget, and authority can't live in the model. They have to be enforced by infrastructure at each boundary."
stats:
  - n: "$190,000"
    label: "a $1,000 stock order the agent turned into 1,000 shares — with a clean 200 OK"
  - n: "30ms"
    label: "how fast the broker API returned success on the wrong trade — zero alerts"
  - n: "4"
    label: "classic agent attacks Portkey maps to one undefined trust boundary each"
  - n: "3"
    label: "failure buckets to triage first: quality, reliability, efficiency"
brief:
  - kind: story
    domain: "security"
    source: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/security/clean-github-repo-tricks-ai-coding-agents-into-running-malware/"
    title: "A clean GitHub repo can make Claude Code run malware it never saw"
    body: "0DIN, Mozilla's GenAI bug-bounty platform, showed a repo with no malicious code steering an AI coding agent into auto-running a payload. A package fails on first run, tells the agent to run a recovery command, and that command fetches and executes an attacker-controlled script from a DNS record — invisible to scanners, reviewers, and the agent. Fix: agents should show the full execution chain before running, and treat third-party setup instructions as untrusted code."
    take: true
  - kind: story
    domain: "security"
    source: "Portkey"
    url: "https://portkey.ai/blog/why-every-agent-vulnerability-is-a-trust-boundary-failure/"
    title: "Treat every agent vulnerability as a trust-boundary failure"
    body: "Portkey reframes agent security around trust boundaries: an agent is a loop where the model picks tools at runtime from text the developer never wrote, so identity, budget, and authority can't live in the model. The four common attacks each map to one undefined boundary. No single control covers everything — draw your agent's boundaries and ask which infrastructure component owns each."
    take: false
  - kind: story
    domain: "observability"
    source: "AWS"
    url: "https://aws.amazon.com/blogs/machine-learning/debugging-production-agents-with-amazon-bedrock-agentcore-observability/"
    title: "Production agents fail silently — debug by trace, not by re-running the prompt"
    body: "Agents return wrong answers and loop without crashing, and the bad run usually can't be reproduced. AWS's Bedrock AgentCore team and Microsoft engineers argue debugging must move to recorded node-level traces, not a fresh re-run of the prompt. Don't chase bitwise determinism — record each node's input/output envelope so a single trace becomes a rerunnable test case."
    take: false
  - kind: quote
    domain: "observability"
    source: "Microsoft (Chawla & Koul)"
    url: "https://www.youtube.com/watch?v=Lc8zRh9muoY"
    title: "Teams waste weeks chasing bitwise determinism when the real goal is replayability — record the run, don't freeze the model."
    attribution: "— Tisha Chawla & Susheem Koul, Microsoft"
    take: false
draft: false
---
