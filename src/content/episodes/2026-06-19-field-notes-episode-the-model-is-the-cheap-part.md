---
title: "The model is the cheap part: where agents actually break"
date: 2026-06-19
summary: "Three teams found the same thing: agents break in the software around the model, not the model — and that layer is what's worth owning."
audio: "/audio/field-notes-episode-the-model-is-the-cheap-part.mp3"
seconds: 454
youtube: "https://youtu.be/dJnP5WgxEUo"
covers:
  - "2026-06-16-rocket-close-supercharger-single-call-retrieval"
  - "2026-06-17-mcp-tools-fail-on-interface-clarity"
  - "2026-06-18-ai-race-moved-up-to-the-software-layer"
oneIdea:
  title: "Treat the model as the part you rent, and the software around it as the part you own."
  body: "Across three stories, every win came from the layer around the model, not the model. Rocket Close tripled agent speed by cutting round trips. A Bengaluru team fixed failures by rewriting tool interfaces. And on one gateway, a cheap model grabbed seventeen percent of usage at one percent of spend — proof the model commoditizes while your software layer is what you actually own."
stats:
  - n: "3x"
    label: "Rocket Close's agent latency drop — from cutting model round trips, not a faster model"
  - n: "~30%"
    label: "fall in contact-center calls and emails after Rocket Close deployed its agent"
  - n: "<1%→17%"
    label: "DeepSeek's jump in token share on Vercel's gateway, at about 1% of spend"
  - n: "41% vs 39.5%"
    label: "Anthropic edging OpenAI in US business adoption — the leader now flips monthly"
brief:
  - kind: story
    domain: "architecture-and-orchestration"
    source: "AWS"
    url: "https://aws.amazon.com/blogs/machine-learning/building-supercharger-how-rocket-close-optimized-title-operations-with-agentic-ai/"
    title: "Rocket Close cut agent latency 3x by reducing model round trips, not the model"
    body: "Rocket Close's title-examiner agent was slow. Instead of a faster model, the team redesigned retrieval so a query resolves in a single pass — cutting round trips for a 3x latency gain and a ~30% drop in contact-center load."
    take: true
  - kind: story
    domain: "architecture-and-orchestration"
    source: "AAIF"
    url: "https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/"
    title: "MCP tools fail on interface clarity, not model intelligence"
    body: "At the MCPDev Summit in Bengaluru, practitioners traced production agent failures to bad tool interfaces, not weak models. An agent sees only a tool's name, description, and schema — and a verbose description out-selects a sparse but better tool."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Vercel"
    url: "https://vercel.com/blog/ai-gateway-production-index-june-2026"
    title: "The AI race moved up to the software layer above the model"
    body: "June moves — OpenAI buying an agent-runtime startup, DeepSeek jumping to 17% of gateway tokens at ~1% of spend — show the model commoditizing while the software around the agent becomes the layer worth owning."
    take: false
  - kind: quote
    domain: "architecture-and-orchestration"
    source: "Pure Storage"
    url: "https://aaif.io/blog/til-at-mcpdev-summit-bengaluru-six-lessons-from-the-agentic-frontier/"
    title: "It's clearly not an intelligence problem. It's a problem about clarity. How clear the interface is."
    attribution: "— Yashasvi Misra, Pure Storage, on why her agent kept failing"
    take: false
draft: false
---
