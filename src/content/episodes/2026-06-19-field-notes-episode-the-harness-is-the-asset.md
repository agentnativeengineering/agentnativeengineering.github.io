---
title: "When agents pull off something hard, it's the scaffolding doing the work"
date: 2026-06-19
summary: "Three teams show the same lesson: the harness — state, gates, verification — not the model, is what makes agents reliable."
audio: "/audio/field-notes-episode-the-harness-is-the-asset.mp3"
seconds: 442
youtube: "https://youtu.be/uROizbGh0j4"
covers:
  - "2026-06-19-mimo-code-long-horizon-state"
  - "2026-06-19-verification-gated-harnesses-self-improving-lab"
  - "2026-06-19-vuln-discovery-harnesses-converge-state-and-gates"
oneIdea:
  title: "The harness is the part that lasts: swap the model freely, but keep the state, the gates, and the second opinion."
  body: "Cloudflare and Visa independently built the same prove-it-first gate that cut false-positive rejection from 40% to 11%. Nvidia ran the same self-improvement harness across three different coding agents. The model was always the interchangeable component; the scaffolding was the durable engineering."
stats:
  - n: "40%→11%"
    label: "Cloudflare's false-positive rejection rate after adding a threat-model + proof + patch gate"
  - n: "16.6%→25.2%"
    label: "Yield lift on a drug-making reaction by OpenAI/Molecule.one's near-autonomous chemist over 10,080 reactions"
  - n: ">65%"
    label: "MiMo Code's win rate vs. the leading rival once tasks pass 200 steps"
  - n: "<25%"
    label: "Context cap per agent in Glasswing, so compaction doesn't silently drop findings"
brief:
  - kind: story
    domain: "harness-engineering"
    source: "Cloudflare Blog"
    url: "https://blog.cloudflare.com/build-your-own-vulnerability-harness/"
    title: "Two vuln-discovery harnesses converge: state and gates, not a smarter model"
    body: "Cloudflare's Glasswing and Visa's open-source VVAH independently landed on the same design — durable external state, sub-25% context per agent, and a threat-model-plus-proof-plus-patch gate. That gate cut Cloudflare's validation rejection from 40% to 11%, filtering roughly 20,800 raw candidates to about 7,200 actionable ones."
    take: true
  - kind: story
    domain: "harness-engineering"
    source: "Ars Technica"
    url: "https://arstechnica.com/ai/2026/06/ai-coding-agents-can-autonomously-direct-robot-training/"
    title: "Verification-gated harnesses let coding agents self-improve a real lab overnight"
    body: "Nvidia's ENPIRE harness let coding agents direct physical-robot training unattended overnight, keeping a change only when it raised the measured success rate. The same harness ran across three different coding agents. OpenAI's near-autonomous chemist showed the twin pattern, lifting reaction yield from 16.6% to 25.2% — with humans still in the gate."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "Xiaomi MiMo"
    url: "https://mimo.xiaomi.com/blog/mimo-code-long-horizon"
    title: "How Xiaomi's MiMo Code holds state across 200+ step coding tasks"
    body: "MiMo Code keeps a stateless model coherent over hundreds of steps by offloading memory to a single-writer subagent and checkpointing at fixed context-budget fractions — around 20%, 45%, 70% — well before the window fills. Once tasks pass 200 steps, MiMo reports a win rate above 65% against the leading rival."
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "Visa VVAH"
    url: "https://github.com/visa/visa-vulnerability-agentic-harness"
    title: "The bottleneck in AI-assisted vulnerability management is triage speed, not discovery."
    attribution: "— Visa, on its open-source vulnerability agentic harness (VVAH)"
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "Xiaomi MiMo"
    url: "https://mimo.xiaomi.com/blog/mimo-code-long-horizon"
    title: "The model itself is stateless — each call starts from a blank slate, and all continuity is provided by the runtime."
    attribution: "— Xiaomi's MiMo team, on long-horizon coding agents"
    take: false
draft: false
---
