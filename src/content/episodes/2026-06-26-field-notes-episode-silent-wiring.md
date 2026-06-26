---
title: "Exit Code Zero, a Storefront With Nothing Behind It, and Keys Scattered Everywhere"
date: 2026-06-26
summary: "Three agent stories — a silent stale scaffold, gates that rubber-stamp, and scattered MCP credentials — all point to weak wiring, not a weak model."
audio: "/audio/field-notes-episode-silent-wiring.mp3"
seconds: 499
covers:
  - "2026-06-25-your-agent-scaffolded-a-2020-project"
  - "2026-06-25-mcp-asymmetry-blocks-second-order-servers"
  - "2026-06-25-every-agent-gate-must-trace-to-a-model-failure-mode"
oneIdea:
  title: "A probabilistic agent reviewing another isn't a control loop unless the gate can't be gamed and the critic comes in cold."
  body: "Copying the human review process but swapping in agents automates agreement, not verification — every downstream agent shares the builder's blind spot. Williams' rule: each gate must defend against a specific model failure mode, not a human one. And sycophancy becomes useful when you point it at refuting work instead of approving it."
stats:
  - n: "v1.11.0 vs v1.23.0"
    label: "agent silently scaffolded a 2020 SharePoint release instead of the current one"
  - n: "exit code 0"
    label: "the clean pass that masked a six-year version gap from the agent"
  - n: "1-directional"
    label: "MCP servers expose tools; clients can't expose back, scattering credentials across services"
brief:
  - kind: story
    domain: "reliability"
    source: "Microsoft Dev Blog"
    url: "https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020"
    title: "Your agent scaffolded a 2020 project and saw only exit code 0"
    body: "An agent ran an unpinned npx command, got a clean exit code, and silently scaffolded a six-year-old release. Runtime environments are invisible to agents, so a tool that fails silently becomes a hallucination surface. Fix: pin versions and verify the resolved version after scaffolding."
    take: false
  - kind: story
    domain: "reliability"
    source: "voodootikigod.com"
    url: "https://www.voodootikigod.com/series/adlc"
    title: "Every agent gate must trace to a model failure mode, not a human one"
    body: "Chris Williams argues copying the human SDLC with agents in the seats automates agreement, not verification. Every gate should defend against a specific model failure mode; if it only guards a human flaw, cut it. Aim sycophancy at an adversarial 'refute this' charter instead of 'looks good.'"
    take: true
  - kind: story
    domain: "architecture-and-orchestration"
    source: "aaif.io"
    url: "https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/"
    title: "MCP is one-directional, and that blocks agents that compose other servers"
    body: "MCP architect Jerome Swannack argues the protocol's asymmetry — servers expose tools, clients can't — stops agents from cleanly composing other servers, scattering credentials everywhere. His proposal: make MCP symmetric so the client becomes a credential switchboard. Not yet in the stable spec."
    take: false
  - kind: quote
    domain: "reliability"
    source: "Microsoft Dev Blog"
    url: "https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020"
    title: "Runtime environments are invisible to agents — it sees only 'command ran, exit code 0, files appeared.'"
    attribution: "— Microsoft developer engineers, on silent tool failure"
    take: false
draft: false
---
