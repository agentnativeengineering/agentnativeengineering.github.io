---
title: "Google's SecOps agents cut alert triage from 30 minutes to 60 seconds across 5M+ alerts"
date: 2026-06-15
summary: "Google Security Operations pairs Gemini-native investigation agents with deterministic containment playbooks and human gates, keeping autonomy where it is cheap and analysts where actions are irreversible."
takeaways:
  - "Let agents do the open-ended investigation, but bind containment to deterministic playbooks and gate irreversible actions behind a human."
  - "Measured production results matter more than capability claims: report the alert volume and the before/after time, as Google did with 5M+ alerts and 30-min to 60s triage."
  - "When you cannot patch the code, close the gap with detection: audit your coverage against a real attack's entry and exit points and fill the blind spots."
tags: ["security", "agentic-soc", "threat-detection", "human-in-the-loop"]
sourceName: "Google Cloud Blog"
sourceUrl: "https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/"
sources:
  - title: "Google Cloud: detecting and containing AI-powered threats with SecOps agents"
    url: "https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/"
draft: false
---
## What happened

In a [post dated 2026-06-10](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/), Google Cloud Security described how Google Security Operations — its security operations center (SOC) platform — runs three Gemini-native agents against live alert streams. The number that travels: a Triage and Investigation agent (now generally available) that [cut a typical 30-minute manual analysis to about 60 seconds across more than 5 million alerts](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/). Two preview agents flank it — a Detection Engineering agent that turns new exploitation patterns into detection rules, and a Threat Hunting agent that retroactively searches historical telemetry for stealthy compromises.

## Why it matters

The reason this is an agent problem and not a dashboard problem: defenders are out of time. Google cites [M-Trends 2026 finding that the mean time to exploit has dropped to roughly minus seven days](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/) — exploitation often lands before a patch exists — and the [2026 Verizon DBIR finding that only 26% of CISA Known Exploited Vulnerabilities were fully remediated](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/), with a 43-day median to patch. When you cannot patch the code you run, detection and fast response are the only controls left. That is the security domain's core trade-off: bound the blast radius without stalling the analyst.

## How it works

1. **Split investigation from action.** Dynamic agents do the open-ended work — reading alerts, pulling context, forming a hypothesis — while [deterministic playbooks handle containment](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/), where predictability matters.
2. **Gate the irreversible.** [Analysts stay in control of high-impact actions](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/); the agent proposes, a human approves the steps that are hard to undo.
3. **Generate detections continuously.** The Detection Engineering agent translates new exploitation patterns into custom rules and [validates them with synthetic events](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/) before they go live.
4. **Hunt backward.** The Threat Hunting agent re-scans petabytes of past telemetry for compromises that earlier rules missed.

> Let the agents investigate at machine speed, but keep containment deterministic and the irreversible actions behind a human.

## What broke

The concrete test was coverage, not cleverness. Google had the Detection Engineering agent [audit its rules against the Axios npm supply-chain attack (UNC1069)](https://cloud.google.com/blog/products/identity-security/detecting-and-containing-powered-threats-with-google-security-operations-agents/) and it surfaced blind spots: the NPM postinstall dropper entry point and the command-and-control exit were both uncovered. The fix was harness work — closing those gaps with custom YARA-L detection rules — not a better prompt. Google's headline "70% reduction in breach risk" is its own platform claim; the durable, portable lesson is the audit method: take a real attack, map its entry and exit, and fill what your detections miss.

[Security](/guide/security/)
