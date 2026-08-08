---
title: "The Top Model on Vercel's Security Benchmark Missed a Hundred and Sixty Bugs"
date: 2026-08-08
summary: "Vercel's DeepsecBench, a graph-memory reversal under a fixed budget, and MiniMax's reward-hacking checks: three evals hiding what they never measured."
audio: "/audio/field-notes-episode-deepsecbench-seventy-one-of-two-thirty-one.mp3"
seconds: 577
youtube: "https://youtu.be/QCZf-zdL3po"
covers:
  - "2026-07-24-graph-memory-lead-vanishes-under-a-context-budget"
  - "2026-07-27-best-model-missed-160-of-231-known-bugs"
  - "2026-08-08-minimax-checks-intermediate-submissions-to-catch-reward-hacking"
oneIdea:
  title: "A finding you can trust tells you nothing about the file the scan never opened."
  body: "On Vercel's DeepsecBench, the leading configuration reported 71 of 231 human-judged vulnerabilities with only three false positives — near-perfect precision, and 160 bugs never mentioned. Nothing in the output distinguishes 'this file is clean' from 'I never got there.' As precision climbs, the risk moves from noise you can see to silence you can't."
stats:
  - n: "71 / 231"
    label: "Findings the best DeepsecBench configuration reported out of the human-judged golden set"
  - n: "96.3%"
    label: "Precision of that leader — three false positives in the whole run"
  - n: "2.6M chars"
    label: "Retrieved context per query behind Graphiti's unbudgeted win on the PAIM benchmark"
  - n: "8.04 → 5.27"
    label: "Graph memory's score once retrieval budget was fixed: first place to last"
brief:
  - kind: story
    domain: "evaluation"
    source: "Vercel"
    url: "https://vercel.com/blog/deepsecbench-evaluating-model-performance-in-finding-cybersecurity-vulnerabilities"
    title: "The best vulnerability-finding model reported 71 of 231 known bugs at 96.3% precision"
    body: "Vercel pinned a real open-source codebase just before a batch of vulnerabilities were fixed, giving a fixed denominator of 231 human-judged findings. The top configuration of 25 tested reported 71 of them with three false positives, and nothing on the board cleared 31% recall. At that precision, the risk moves from noise you can see to the seven bugs in ten you never hear about."
    take: true
  - kind: story
    domain: "memory-and-context"
    source: "arXiv"
    url: "https://arxiv.org/abs/2607.16848"
    title: "Cap what agent memory retrieves and the knowledge graph drops from first to last"
    body: "On a scientific-memory benchmark over full papers, Graphiti won convincingly — while pulling 2.6M characters of retrieved context per query. Once retrieval budget was controlled, its score fell from 8.04 to 5.27, last of six, behind a plain chunk baseline at 7.25. Score memory systems at a fixed budget before you believe a leaderboard."
    take: false
  - kind: story
    domain: "evaluation"
    source: "MiniMax (AI Engineer panel)"
    url: "https://www.youtube.com/watch?v=AVMr9PMINyo"
    title: "MiniMax checks an agent's intermediate submissions to catch reward hacking"
    body: "MiniMax's RL research lead Olive Song said the hard part of post-training their open-weight M3 model was designing the environments, data and reward — plus validation checks that inspect the model's intermediate submissions, not only its final answer. A reward that reads just the end state is the one an agent learns to game. LatchBio's long-horizon tasks show the cost: about three people for a week each to author, with no model solving them yet."
    take: false
  - kind: story
    domain: "evaluation"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns/"
    title: "OpenAI hits pause on Astra after deciding it may be too good at hacking"
    body: "OpenAI suspended parts of development on Astra after internal evaluations found its agentic coding and cybersecurity skills advanced enough that it cannot rule out the 'critical' cyber tier of its own Preparedness Framework. Its response is isolated test environments, encrypted weights, chain-of-thought monitoring that halts risky activity, and capability testing with government agencies."
    take: false
  - kind: story
    domain: "evaluation"
    source: "The Decoder"
    url: "https://the-decoder.com/anthropic-loosens-fable-5s-biology-restrictions-but-keeps-the-guardrails-on-for-virology-and-toxicology/"
    title: "Anthropic cuts Fable 5's bogus biology blocks by about 85 percent"
    body: "Anthropic retuned the biology safety classifier on Fable 5, cutting false-positive refusals by roughly 85 percent after an earlier configuration blocked nearly all biology questions. Hard guardrails stay on virology, toxicology and molecular design, with access programs planned for vetted researchers."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Vercel"
    url: "https://vercel.com/blog/deepsecbench-evaluating-model-performance-in-finding-cybersecurity-vulnerabilities"
    title: "A finding you can trust tells you nothing about the file the scan never mentioned."
    attribution: "— Agent Native Engineering, on Vercel's DeepsecBench leaderboard"
    take: false
draft: false
---
