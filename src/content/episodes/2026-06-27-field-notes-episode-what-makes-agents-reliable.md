---
title: "GitHub's Qubot Got Three Times Sharper, and an Open Model Crossed the Line"
date: 2026-06-27
summary: "Curated context made GitHub's Qubot 3x sharper, GLM-5.2 crossed the open-agent line, and a sandbox can't contain an agent's credentials."
audio: "/audio/field-notes-episode-what-makes-agents-reliable.mp3"
seconds: 504
covers:
  - "2026-06-26-sandboxes-dont-solve-agent-credential-authorization"
  - "2026-06-26-open-model-crosses-agent-reliability-line"
  - "2026-06-26-curated-context-makes-analytics-agent-accurate"
oneIdea:
  title: "An agent's accuracy lives in the context you curate, not the retrieval you bolt on."
  body: "GitHub's internal Qubot agent kept picking the wrong table until domain experts hand-curated the context describing which table, grain, and filter was correct. That curated knowledge made it roughly 3x faster at returning the right answer — with the same model. Siemens and AWS reached the same conclusion independently: without business context, agents give confident wrong answers."
stats:
  - n: "3x"
    label: "Faster at the right answer once GitHub curated Qubot's context by hand"
  - n: "91% vs 57%"
    label: "GLM-5.2 reached real libraries far more often than the closed model it beat"
  - n: "~25%"
    label: "More code GLM-5.2 generated, eating its cheap-per-token price"
  - n: "8 H200s"
    label: "Hardware to run a frontier-class open model locally — so routing wins"
brief:
  - kind: story
    domain: "memory-and-context"
    source: "GitHub Blog"
    url: "https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/"
    title: "Curated context, not just retrieval, is what makes an analytics agent accurate"
    body: "GitHub's internal Qubot agent kept picking the wrong table until experts hand-curated domain context onto its data tiers. That made it about 3x faster at returning the right answer — the same model, better-fed. Siemens and AWS hit the identical wall independently."
    take: true
  - kind: story
    domain: "model-selection"
    source: "Interconnects"
    url: "https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open"
    title: "An open-weight model just crossed the agent-reliability line"
    body: "GLM-5.2 from Z.ai is the first open model that runs reliably as a general agent in coding harnesses, turning model choice into a build-vs-route decision. But it generated ~25% more code and took roughly double the time, so cheap-per-token isn't cheap-per-task."
    take: false
  - kind: story
    domain: "access-and-identity"
    source: "Permit.io"
    url: "https://www.permit.io/blog/coding-agent-sandboxes-credentials"
    title: "Sandboxes don't solve coding-agent credential authorization"
    body: "A locked container contains an agent's code execution, not its authority. The real blast radius is the credentials it holds — tokens that can merge to main or deploy prod. The fix: zero standing permissions, granted just-in-time and auto-expired."
    take: false
  - kind: quote
    domain: "access-and-identity"
    source: "Permit.io"
    url: "https://www.permit.io/blog/coding-agent-sandboxes-credentials"
    title: "An agent doesn't need a kernel escape if it already has a token that can merge to main, trigger production deploy, or read secrets from a vault."
    attribution: "— Or Weis, Permit.io"
    take: false
draft: false
---
