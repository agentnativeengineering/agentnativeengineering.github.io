---
title: "A Panel of Cheap Models, a Scanner Beaten in an Hour, and the Why No Agent Can Invent"
date: 2026-06-22
summary: "A cheap model panel matched a frontier model at half cost, skill scanners fell in under an hour, and agents fabricate the why."
audio: "/audio/field-notes-episode-around-the-model.mp3"
seconds: 458
covers:
  - "2026-06-15-intent-debt-agents-fabricate-instead-of-fixing"
  - "2026-06-15-skill-scanners-failed-treat-marketplaces-untrusted-code"
  - "2026-06-21-panel-of-cheap-models-matches-frontier-at-half-cost"
oneIdea:
  title: "The value you get per token isn't decided by which model you pick — it's decided one layer up, in how you route the work."
  body: "OpenRouter's Fusion routed a prompt across a panel of cheap models, judged their answers, and synthesized one — landing within a point of a top-tier model at roughly half the cost on a hard benchmark. The lesson generalizes: cost and quality per token are captured at the orchestration layer, not by defaulting every call to the biggest model. The strongest teams spread workloads across models by cost, latency, and task complexity."
stats:
  - n: "64.7% vs 65.3%"
    label: "Cheap model panel vs frontier model on Perplexity's DRACO benchmark"
  - n: "~50%"
    label: "Cost of the panel relative to the single frontier model"
  - n: "<1 hour"
    label: "Time Trail of Bits took to bypass three of four major skill scanners"
  - n: "24x"
    label: "Projected growth in AI token usage by 2030"
brief:
  - kind: story
    domain: "security"
    source: "Trail of Bits"
    url: "https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/"
    title: "Skill scanners failed in under an hour: treat marketplaces as untrusted code"
    body: "Trail of Bits bypassed ClawHub's detector, Cisco's skill-scanner, and all three scanners in skills.sh using standard tricks in under an hour. A static scanner gives attackers unlimited retries and ignores natural-language payloads entirely. The only real defense is curating sources, pinning versions, and isolating the agent."
    take: true
  - kind: story
    domain: "harness-engineering"
    source: "Addy Osmani"
    url: "https://addyosmani.com/blog/intent-debt/"
    title: "Intent debt: the one thing agents fabricate instead of fixing"
    body: "Agents can pay down technical and comprehension debt on demand, but they can't generate intent — the why. When the reason is missing, a model invents a confident-sounding rationale, which is worse than admitting it doesn't know. Record the why at decision time in specs, ADRs, and an AGENTS.md ledger."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Decrypt"
    url: "https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap"
    title: "A panel of cheap models matched a frontier model at half the cost"
    body: "OpenRouter's Fusion fans a prompt out to a panel of cheaper models, judges where they agree and conflict, then synthesizes one grounded answer. On Perplexity's DRACO benchmark a budget panel scored within a point of Fable 5 at roughly half the cost. Value per token is captured at the orchestration layer."
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "Addy Osmani"
    url: "https://addyosmani.com/blog/intent-debt/"
    title: "An agent can't generate intent, because intent is the one input that has to come from you."
    attribution: "— Addy Osmani, Google Chrome engineering lead, on intent debt"
    take: false
draft: false
---
