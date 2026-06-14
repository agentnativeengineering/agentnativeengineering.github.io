---
title: "The credit card that tells your AI no \u2014 and the threat models nobody checked"
date: 2026-06-12
summary: "Stripe scopes agent payment tokens to one seller, amount, and time window so the card itself enforces the rule, and Dropbox builds an MCP agent that surfaces threat models at code review after finding only twelve percent of implementing changes ever linked back \u2014 plus headlines on OpenAI buying Ona, Prometheus's twelve-billion-dollar round, Google's FBI lawsuit, DeepMind's multi-agent safety fund, and Mistral's raise."
audio: /audio/field-notes-episode-the-card-that-says-no.mp3
seconds: 468
covers:
  - 2026-06-12-dropbox-agent-checks-prs-against-threat-models
  - 2026-06-12-stripe-scopes-agent-payment-tokens-to-seller-amount-and-time-window
brief:
  - kind: story
    domain: "access-and-identity"
    source: "youtube.com"
    url: "https://www.youtube.com/watch?v=KLSuFPj2ld0"
    title: "Stripe scopes agent payment tokens to seller, amount, and time window"
    body: "Stripe's Steve Kaliski explains how shared payment tokens, an HTTP 402 machine payments protocol, and the Agentic Commerce Protocol keep a non-deterministic agent planner from spending outside a Stripe-enforced mandate."
  - kind: story
    domain: "security"
    source: "dropbox.tech"
    url: "https://dropbox.tech/security/dropbox-mcp-dash-design-code-security"
    title: "Dropbox built an agent that checks PRs against their threat models"
    body: "Dropbox found only 12% of implementing PRs link back to their threat model, so it built an MCP+Dash agent that retrieves the relevant security requirements at code-review time and compares them against the diff."
draft: false
---

The evening edition — today's AI headlines from the news desks, then the main episode.
