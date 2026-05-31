---
title: "Why Agent Native Engineering exists"
date: 2026-05-21
summary: "An open community for building, operating, and engineering with AI agents in production — built on existing open protocols, and organised around one loop: build, operate, then let agents do the engineering."
tags: ["meta", "agent-native"]
draft: false
---

Agent-Native Engineering is an open community for building, operating, and engineering with AI agents in production. It builds on existing open protocols and open-source projects rather than starting over. The work forms a loop: build agents, operate them reliably, and let them take on the engineering work themselves — so they help build and run the next ones.

That sentence is the whole project. Here is what each part means in practice, and why it needs a community rather than another framework.

**Build on what exists.** The protocols and runtimes are converging — MCP and A2A for tools and agents, a cloud-native tier (kagent, KServe, the Kubernetes Agent Sandbox, agentgateway) for running them, OpenTelemetry for tracing. We don't reinvent these. The [reference architectures](/architectures/) show how to compose them, favouring multi-vendor, foundation-governed projects with real production adoption.

**Operate them reliably.** This is the part with the least written guidance and the most real failures — and they keep coming. Just this month: a Claude.ai prompt-injection [exfiltration](https://www.oasis.security/blog/claude-ai-prompt-injection-data-exfiltration-vulnerability) (27 May), Microsoft's [AI-cost reckoning](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/) (22 May), and three [MCP database flaws](https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/) (13 May). The [field guide](/guide/) turns failures like these into domains — durable execution, autonomy and cost, security, and eight more — grounded in what actually happened, not theory.

**Let agents do the engineering.** Once an agent is reliable, it can take on real work, and the loop closes: the agents you build and operate help build and run the next ones. This site is the worked example — drafted by agents, edited by humans.

One rule holds it together: every claim links to its source. If we can't source it, it doesn't go in.
