---
title: "A Production Database Gone in Nine Seconds, and the Permission Nobody Scoped"
date: 2026-06-25
summary: "A nine-second database deletion, an agent emailing strangers, and 80% of agent code that's plumbing — why agent safety lives in structure."
audio: "/audio/field-notes-episode-the-structure-around-the-model.mp3"
seconds: 501
youtube: "https://youtu.be/IMVw1bvpK74"
covers:
  - "2026-06-13-harness-not-model-decides-production-reliability"
  - "2026-06-13-intersection-rule-agent-delegated-access"
  - "2026-06-14-force-agents-through-egress-proxy"
oneIdea:
  title: "Delegation alone won't save you — a privileged user hands the agent a high ceiling, so you must cap the agent's reach at the agent itself."
  body: "When an agent runs as the user, it inherits every permission the user holds — which is how a coding agent deleted a production database in nine seconds without being compromised. The fix WorkOS describes is the intersection rule: at every action, scope the agent to the overlap of its own role and the user's live permissions, never the union. The smaller circle wins, always."
stats:
  - n: "9 seconds"
    label: "Time a coding agent took to delete a Railway production database via an account-scoped token"
  - n: "~80%"
    label: "Share of production agent code that is reliability, observability, and durable-state plumbing"
  - n: "29M"
    label: "New hardcoded secrets found in public GitHub commits in 2025 (GitGuardian)"
brief:
  - kind: story
    domain: "access-and-identity"
    source: "WorkOS"
    url: "https://workos.com/blog/delegated-access-ai-agents"
    title: "The intersection rule: scope an agent to the overlap of its role and the user's permissions"
    body: "When an agent runs with the invoking user's full token, a misread instruction can do anything the user can — including delete a production database in nine seconds. The fix is the intersection rule: scope every tool call to the overlap of the agent's role and the user's live permissions, never the union, and fail closed on authorization errors."
    take: true
  - kind: story
    domain: "security"
    source: "simedw.com"
    url: "https://simedw.com/2026/06/05/proxy-agents/"
    title: "Force agents through an egress proxy, not env vars"
    body: "Proxy environment variables don't contain an agent — honoring them is up to the client, and six lines of code bypass them with a raw socket. Real containment is a network-enforced single outbound path through an inspecting proxy that injects secrets in flight, so the agent only ever holds placeholders."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "YouTube / Grid Dynamics + Temporal"
    url: "https://youtube.com/watch?v=-0Ly0cjPdjM"
    title: "The harness, not the model, decides production agent reliability"
    body: "Roughly 80% of production agent code is reliability, observability, retries, and durable state — not the business logic anyone set out to write. Two teams converge on the same lesson: the model is interchangeable, so spend your engineering on the harness, including encoding recurring review corrections as deterministic checks the agent runs itself."
    take: false
  - kind: quote
    domain: "access-and-identity"
    source: "WorkOS"
    url: "https://workos.com/blog/delegated-access-ai-agents"
    title: "When an AI agent deletes a production database, it usually had permission to do it."
    attribution: "— Maria Paktiti, WorkOS, on why most agentic security incidents aren't breaches"
    take: false
draft: false
---
