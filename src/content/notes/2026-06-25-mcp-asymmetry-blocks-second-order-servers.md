---
title: "MCP is one-directional, and that blocks agents that compose other servers"
date: 2026-06-25
summary: "An original MCP architect argues the protocol's asymmetry — servers expose tools, clients can't — is what stops agents from cleanly composing other agents, and proposes making the client a credential switchboard."
takeaways:
  - "MCP is asymmetric: servers expose tools and clients call them, but clients can't expose tools back to servers — so any agent that orchestrates other MCP servers has to scatter auth tokens and OAuth flows across every downstream service."
  - "Making MCP symmetric turns the client into a switchboard: a sub-agent makes a tool call, the client routes it to the right server and handles the credentials, instead of every agent server holding its own keys."
  - "The wider field is converging on the same question — where tools and credentials live — with some pushing config server-side and others pushing typed tool contracts into the client runtime."
tags: ["architecture-and-orchestration", "mcp", "multi-agent", "credentials"]
sourceName: "Agentic AI Foundation"
sourceUrl: "https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/"
sources:
  - title: "AAIF: MCP's Missing Half — Why Second-Order Servers Don't Exist Yet"
    url: "https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/"
  - title: "Vivgrid: Decouple prompts, tools, and models from the agent client"
    url: "https://vivgrid.com/decoupling-prompts-tools-models-from-agent-client"
  - title: "Focused Labs: Enterprise AI agents are leaving the server"
    url: "https://focused.io/lab/enterprise-ai-agents-are-leaving-the-server"
draft: false
---
## What happened

In [a talk written up on 2026-06-17](https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/), Jerome Swannack — one of the original architects of MCP (Model Context Protocol, the standard for connecting AI clients to tools) — named a gap he calls "second-order" servers. A normal MCP server connects a client to an external system: read a doc, post a message. A second-order server instead operates on the MCP layer itself — it connects a client to its *other* MCP servers, like a research agent that needs your Slack, email, and calendar servers at once. Today that doesn't compose cleanly, because [MCP is asymmetric](https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/): servers can be called, but clients cannot.

## Why it matters

The asymmetry pushes every wiring problem onto credentials. To let an agent server reach your other servers, you spread auth tokens across services, run a separate OAuth flow per server, or embed API keys in the agent. Trust ends up [distributed across the system instead of centralized](https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/), and the user gets a fragile chain of auth prompts. Complexity that belongs in the client leaks into every server.

> Make MCP symmetric and the client becomes a switchboard — the agent makes a tool call, the client routes it and owns the credentials.

The wider field is circling the same boundary from both sides. Vivgrid argues prompts, tools, and models should [leave the client and become server-side config](https://vivgrid.com/decoupling-prompts-tools-models-from-agent-client) so you can fix behavior without an app release. Focused Labs argues the opposite drift — that agents are [moving into the client runtime](https://focused.io/lab/enterprise-ai-agents-are-leaving-the-server), where typed tool contracts gate actions against live app state and permissions.

## The catch

Symmetric MCP is a proposal, not shipped: Swannack [demonstrated it](https://aaif.io/blog/mcps-missing-half-why-second-order-servers-dont-exist-yet/) with a Docker-based VM over symmetric transport and a permission UI, and points to MCP Draft-spec work moving this way — but it isn't in the stable protocol. The convergence is the real signal: prove out where credentials and tool definitions should live before betting an architecture on it.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
