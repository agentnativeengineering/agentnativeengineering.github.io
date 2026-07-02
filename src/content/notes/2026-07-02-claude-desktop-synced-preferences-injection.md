---
title: "Pentera turned Claude Desktop into C2 by poisoning synced preferences"
date: 2026-07-02
summary: "Pentera Labs red-teamers weaponized Claude Desktop's synced account preferences into persistent command-and-control, showing why an agent's config is now privileged software."
takeaways:
  - "An agent that can execute code by design makes its synced config a privileged attack surface: whoever can write to its preferences inherits its permissions."
  - "The dangerous injection surface is the settings that replicate across devices, not the chat prompt you watch."
  - "Sandbox agents and monitor assistant config and synced settings for changes, since the vendor may treat code execution as intended behavior rather than a bug."
tags: ["security", "prompt-injection", "confused-deputy", "mcp"]
sourceName: "The Register"
sourceUrl: "https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692"
sources:
  - title: "The Register: Red teamers turned Claude Desktop into a double agent"
    url: "https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692"
draft: false
---
## What happened

On 2026-07-01, The Register reported that [Pentera Labs red-teamers turned Claude Desktop into a persistent command-and-control agent](https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692) by compromising a victim's email inbox and planting malicious instructions in the account-wide personal preferences that Claude Desktop syncs across every device. Because those preferences ride along on every session, the poisoned text kept steering the assistant to reach for command-capable tools (like a connected MCP — Model Context Protocol — server) and act on the attacker's behalf. Anthropic classified the report as [expected functionality rather than a vulnerability](https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692): preferences, skills, and connectors "can execute code through Claude Desktop by design."

## Why it matters

This is the confused-deputy problem made concrete: the agent has your permissions, and anyone who can write to its synced config inherits them. The injection surface isn't the chat box you watch — it's the settings that quietly replicate to every machine, so one compromised inbox becomes durable, low-noise access that outlives a single session.

> If your AI assistant can execute code by design, its config file is now privileged software — treat it like one.

## The catch

The fix isn't a patch, because [Anthropic says this is intended behavior](https://www.theregister.com/security/2026/07/01/red-teamers-turned-claude-desktop-into-a-double-agent-to-do-their-evil-bidding/5264692). Pentera's own recommendation is operational: treat AI desktop apps as privileged software, monitor synced settings and assistant configuration for changes, and sandbox the agent so a poisoned preference can't spawn a shell. Verify what config surfaces your agent trusts on every run before assuming the visible prompt is the only input.

[Security](/guide/security/)
