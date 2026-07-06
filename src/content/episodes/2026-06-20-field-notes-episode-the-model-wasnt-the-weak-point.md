---
title: "The Model Wasn't the Weak Point — Everything Around It Was"
date: 2026-06-20
summary: "Three security lessons where the real risk lived in the harness around the model, not the model itself."
audio: "/audio/field-notes-episode-the-model-wasnt-the-weak-point.mp3"
seconds: 584
youtube: "https://youtu.be/Ph_vZibRyIA"
covers:
  - "2026-06-16-model-is-absorbing-the-harness"
  - "2026-06-19-autonomous-llm-agent-found-salesforce-data-exposure"
  - "2026-06-19-sentry-error-data-hijacked-coding-agents"
oneIdea:
  title: "The recon a human attacker used to skip is exactly the work an agent now does for free."
  body: "For years, teams triaged buried Salesforce bugs as 'low exploitability' because a human attacker would have to grind through tedious enumeration to reach them. An autonomous pentest agent runs that grind at machine speed and never gets bored, so the cost of reaching a weak endpoint collapses. That retires 'nobody would bother to find this' as a reason to defer a fix."
stats:
  - n: "85%"
    label: "How often a fake Sentry error hijacked Claude Code, Cursor, and Codex in testing"
  - n: "2,388"
    label: "Exposed organizations Tenet found, from a $250bn enterprise to solo developers"
  - n: "URL only"
    label: "All a Salesforce pentest agent needed to find live data-exposure bugs"
  - n: "2 of 3"
    label: "Forced to pick, Google's CISO keeps expertise and harness over the best model"
brief:
  - kind: story
    domain: "security"
    source: "Tenet Security"
    url: "https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/"
    title: "Sentry error data hijacked Claude Code, Cursor, and Codex 85% of the time"
    body: "A coding agent can't tell error-monitoring data from instructions, so a fake Sentry event becomes a command it runs — inside its own trust boundary, where your WAF and audit logs see nothing. All an attacker needs is a public, write-only Sentry DSN scraped from a web page. Tenet found 2,388 exposed organizations."
    take: true
  - kind: story
    domain: "security"
    source: "Reco"
    url: "https://www.reco.ai/blog/hacking-salesforce-sites-with-an-llm-agent"
    title: "An autonomous LLM agent found real Salesforce data-exposure bugs from just a URL"
    body: "Given only a web address, Reco's pentest agent surfaced guest-readable Apex methods and blind SOQL injection on live Salesforce sites, then extracted real PII to prove each was exploitable. The recon a human used to skip is exactly the work an agent does for free — retiring 'low exploitability' as a reason to defer a fix."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "Google DeepMind"
    url: "https://www.youtube.com/watch?v=cMAs8z2dehs"
    title: "The model is absorbing the harness — so don't build for lock-in"
    body: "Logan Kilpatrick argues 'the model eats the harness': scaffolding you hand-build keeps getting absorbed into the model, so betting your architecture on a proprietary harness for lock-in is the wrong bet. Google's CISO adds that, forced to pick two of expert/harness/model, he keeps expertise and harness — not the best model."
    take: false
  - kind: quote
    domain: "security"
    source: "Reco"
    url: "https://www.reco.ai/blog/hacking-salesforce-sites-with-an-llm-agent"
    title: "The recon a human attacker used to skip is exactly the work an agent does for free."
    attribution: "— Nitay Bachrach, Reco security research"
    take: false
draft: false
---
