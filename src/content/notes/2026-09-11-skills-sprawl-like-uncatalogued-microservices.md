---
title: "Skills sprawl like uncatalogued microservices without a registry"
date: 2026-09-11
summary: "A QuantumBlack engineer's six-month simulation of 15 teams shows ungoverned agent skills duplicate and decay, while a versioned, owned registry converges cost and quality."
takeaways:
  - "Gate agent skills behind the same governance discipline you'd give microservices -- version, own, and catalog them -- or they duplicate and decay as models change."
  - "QuantumBlack's six-month simulation of 15 teams found ungoverned skill libraries drift into rising cost and falling quality, while a centralized registry with versioning and access control converges both back together."
  - "Progressive disclosure -- loading only the skill detail needed for the current step -- keeps skills cheap and composable as the library scales."
tags: ["harness-engineering", "agent skills", "governance", "MCP"]
sourceName: "QuantumBlack"
sourceUrl: "https://www.youtube.com/watch?v=M05vON8i0aI"
sources:
  - title: "AI-Native Organisations Run on Skills — Imad Touil, QuantumBlack"
    url: "https://www.youtube.com/watch?v=M05vON8i0aI"
draft: false
---
## What happened
In a talk published 2026-08-28, QuantumBlack (McKinsey's AI engineering arm) distinguished engineer Imad Touil argued that [agent skills — the reusable capability files an agent loads to do a task — are where an organisation's know-how actually lives now, and they're accumulating the same risks microservices did before anyone governed them](https://www.youtube.com/watch?v=M05vON8i0aI). His team ran a six-month simulation of 15 teams building skills independently: without shared governance, duplication, quality decay as underlying models changed, and no clear ownership piled up as cost and productivity drifted apart across teams. A centralized registry — with versioning, dependency tracking, access control, and evaluation — converged those same metrics back together.

## Why it matters
A skill is just a file, so nothing stops two teams from writing near-duplicate ones, or a skill silently rotting when the model behind it updates. That's the same lesson service teams learned the hard way: an artifact without an owner, a version, or a discoverability path becomes debt the moment more than one team touches it.

## How it works
1. **Catalog every skill.** A searchable registry, reachable via MCP (Model Context Protocol, the standard agents use to call tools) and CLI, replaces ad hoc file sharing.
2. **Version and own them.** Each skill gets an owner and a version history so a model upgrade doesn't quietly break downstream workflows.
3. **Load only what's needed.** Progressive disclosure pulls in a skill's detail on demand instead of stuffing it all into context up front, keeping token cost down.
4. **Gate access and evaluate continuously.** Access control plus evaluation against best practices catches drift before it compounds.

> Skills need the same governance discipline that microservices once required, or they become the next class of technical debt.

## The catch
This is one team's internal simulation, not a published benchmark or open dataset, and the registry tooling (skills marketplaces, auto-evolving skills) is described as still emerging rather than shipped and proven at scale.

[\Harness Engineering](/guide/harness-engineering/)
