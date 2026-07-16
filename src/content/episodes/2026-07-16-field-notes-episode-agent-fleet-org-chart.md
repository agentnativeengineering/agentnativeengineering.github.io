---
title: "One Engineer, Six Live Agents, and the Fix Was an Org Chart"
date: 2026-07-16
summary: "Two builders hit the same wall scaling agents — the human becomes the bottleneck — and both fixed it by routing work up a layer, not with a bigger model."
audio: "/audio/field-notes-episode-agent-fleet-org-chart.mp3"
seconds: 586
youtube: "https://youtu.be/qxQYtvTLO0I"
covers:
  - "2026-07-16-tokens-arent-fungible-give-each-token-a-job"
  - "2026-07-16-running-an-agent-fleet-makes-you-the-bottleneck"
oneIdea:
  title: "Tokens aren't fungible: give each one a job — advise, execute, or dream — and the leverage moves up to how you route work, not how much scaffolding you hand-wire."
  body: "Anthropic's Angela Jiang argues different tokens should get different jobs, composed into a strategy layer above the low-level harness. It's the same instinct Kyle Lee hit running a fleet of coding agents: once you pass a few, no smarter model saves you — the win comes from organizing the work above it. Route work to the right agent, and the right token, and only review what reaches the top."
stats:
  - n: "5-6"
    label: "Live coding agents before one human becomes the scheduler, memory, and reviewer"
  - n: "3"
    label: "Machines Kyle Lee runs his agent fleet across every day"
  - n: "6→1"
    label: "Contexts he juggled in his head, versus what he holds after the org chart"
  - n: "3"
    label: "Anthropic's abstraction layers: knowledge, execution, coordination"
brief:
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Kyle Lee, KRAFTON"
    url: "https://www.youtube.com/watch?v=4kYl2_mqmnQ"
    title: "Running an agent fleet makes you the bottleneck; an org chart pulls you out"
    body: "Kyle Lee of KRAFTON runs coding agents across three machines and found that past five or six, he'd silently become their scheduler, memory, and reviewer. His fix: a real role hierarchy in software — CEO, VP, manager, worker — where context flows down in slices and only top results reach him, plus per-agent state in files so work survives a crash."
    take: true
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Angela Jiang, Anthropic"
    url: "https://www.youtube.com/watch?v=Fsi2b4PrjZk"
    title: "Anthropic: tokens aren't fungible — give each one a job"
    body: "Anthropic's Angela Jiang argues each token should be assigned a role — advise, execute, or dream — and composed into a strategy layer that sits above the low-level harness. As models get more steerable, rigid scaffolding can be deleted and the leverage moves up to how you route and compose the model with itself."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Wired"
    url: "https://www.wired.com/story/thinking-machines-lab-releases-its-first-model-inkling/"
    title: "Mira Murati's Thinking Machines Lab ships Inkling, an open-weight giant"
    body: "The startup founded by ex-OpenAI leaders released Inkling, a roughly 975-billion-parameter mixture-of-experts model, with full weights under a permissive Apache 2.0 license. The lab admits it isn't best-in-class and pitches it as a customizable base organizations tune themselves — a bet that open, tailored models beat closed flagships."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "MIT Technology Review"
    url: "https://www.technologyreview.com/2026/07/15/1140514/meet-gpt-red-an-llm-super-hacker-openai-built-to-make-its-models-safer/"
    title: "OpenAI built GPT-Red, an internal AI super-hacker, to attack its own models"
    body: "OpenAI revealed GPT-Red, a model that automates red-teaming by relentlessly attacking its other systems in a self-play dojo. Training GPT-5.6 against it cut successful prompt-injection attacks from over 90 percent down to under 23 percent."
    take: false
  - kind: quote
    domain: "architecture-and-orchestration"
    source: "Kyle Lee, KRAFTON"
    url: "https://www.youtube.com/watch?v=4kYl2_mqmnQ"
    title: "I'm not running agents anymore. I've become the scheduler, the memory, and the reviewer."
    attribution: "— Kyle Lee, KRAFTON, on hitting the wall running a personal fleet of coding agents"
    take: false
draft: false
---
