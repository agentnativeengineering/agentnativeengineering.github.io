---
title: "Memory poisoning: when an agent's own memory becomes the attack surface"
date: 2026-06-15
summary: "A poisoned long-term memory persists across sessions and is treated as trusted ground truth, so defend it with provenance, trust-partitioned stores, and retrieval-drift monitoring."
takeaways:
  - "Trust-score and tag provenance on every memory at ingestion, partition stores by trust level, and monitor retrieval-source distributions for drift -- don't treat what the agent 'remembers' as ground truth."
  - "Memory poisoning is temporally decoupled: the malicious input lands weeks before the damage, so single-session monitoring sees nothing wrong."
  - "On incident, quarantine poisoned entries rather than deleting them and trace downstream influence through derived-from dependency graphs."
tags: ["memory-and-context", "memory-poisoning", "security", "rag"]
sourceName: "WorkOS"
sourceUrl: "https://workos.com/blog/ai-agent-memory-poisoning"
sources:
  - title: "WorkOS: Memory and context poisoning in AI agents"
    url: "https://workos.com/blog/ai-agent-memory-poisoning"
draft: false
---
## What happened

In a [post dated 2026-06-09, WorkOS](https://workos.com/blog/ai-agent-memory-poisoning) laid out a threat class that hits the one thing most agent defenses assume is safe: the agent's own long-term memory. The post leads on two pieces of December 2025 research. [MemoryGraft](https://workos.com/blog/ai-agent-memory-poisoning) plants malicious entries through benign-looking content -- a README in a repo, a doc in a shared folder. The agent reads it, stores a summary as a "successful experience," and weeks later retrieves that poisoned playbook and imitates the malicious pattern, "believing it's following its own proven playbook." The [MINJA attack](https://workos.com/blog/ai-agent-memory-poisoning), presented at NeurIPS 2025, is worse: it corrupts memory through nothing but normal queries -- no store access, no elevated privileges -- at over 95% injection success against production agent architectures. WorkOS files this as OWASP ASI06, memory and context poisoning.

## Why it matters

This is the line between agentic security and chatbot security. A chatbot starts every session clean; an agent with persistent memory (a vector store, a RAG -- retrieval-augmented generation -- knowledge base, a conversation summary, a facts database) carries its past into every future decision. Two properties make it nasty. It is temporally decoupled: the attacker crafts the input in February, a different user triggers retrieval in April, and no single moment looks suspicious. And memory carries implicit trust -- the agent treats "I know X from past experience" as ground truth, skipping the skepticism it applies to "the user says X." That is exactly D4's concern: what the agent remembers, on purpose.

## How it works

1. **Validate at ingestion.** Trust-score content before it becomes a memory, so unvetted text never lands as fact.
2. **Track provenance.** Record where every memory came from, so you can later identify and trace poisoned entries.
3. **Partition by trust.** Separate stores by trust level, user, and agent, with system memory read-only.
4. **Decay the unvalidated.** Apply temporal decay so unconfirmed memories fade instead of compounding.
5. **Monitor for drift.** Baseline retrieval-source distributions and decision patterns, then watch for deviation.

> Prompt injection ends when the session closes; a poisoned memory activates weeks later and is treated as the agent's own proven experience.

## What broke

The failure is that input-level defenses do not cover memory -- poisoned entries bypass them precisely because they are retrieved, not received. The fix is operational, not a better prompt. WorkOS's incident-response play: use provenance to identify poisoned entries, trace downstream influence through derived-from dependency graphs, quarantine rather than delete (deleting destroys the audit trail and may break dependent memories), audit decisions made during the exposure window, and revalidate the rest of the store. It frames scoped credentials and audit logging as bounding the blast radius, not preventing the poisoning.

[Memory & Context](/guide/memory-and-context/)
