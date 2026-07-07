---
title: "The Dashboard Was Lying: When the Agent Isn't the Weak Point"
date: 2026-06-18
summary: "Three teams hit the same wall this week — a lying test dashboard, approval fatigue, and idle-pod waste — and in each the fix was the harness, not the model."
audio: "/audio/field-notes-episode-the-harness-not-the-model.mp3"
seconds: 583
youtube: "https://youtu.be/oeMLfbzFB1o"
covers:
  - "2026-06-18-pod-per-agent-model-wastes-compute"
  - "2026-06-18-when-the-dashboard-lies-adversarial-checks-beat-green-tests"
  - "2026-06-18-classifier-agent-execution-path-reduces-approval-fatigue"
oneIdea:
  title: "A test suite nobody has tried to break is a claim, not a measurement."
  body: "When one agent writes both the code and the tests, a green suite only measures that they agree — not that either is correct. Rue's harness counted compiler crashes as passing tests and hid a memory-safety bug behind a thousand green checks. The fix was adversarial agents whose only job was to catch a contradiction between the spec and the binary."
stats:
  - n: "40%→7%"
    label: "Cursor cut agent-action interruptions from a ~40% block rate to about 7%"
  - n: "1,000+"
    label: "green tests on Rue that hid a memory-safety bug until adversarial probing"
  - n: "~50ms"
    label: "Solo.io's measured suspend/resume time for snapshotted idle agents"
  - n: "95 PRs"
    label: "merged by an autonomous coding agent over three days on the Rue compiler"
brief:
  - kind: story
    domain: "evaluation"
    source: "rue-lang.dev"
    url: "https://rue-lang.dev/blog/an-agent-holds-the-fort/"
    title: "When the dashboard lies: adversarial checks beat a green test suite"
    body: "An autonomous coding agent shipped 95 PRs to a systems language with over a thousand green tests — while the harness counted compiler crashes as passes and hid a memory-safety bug. The fix was adversarial finder/verifier agents that assert on what the binary actually does, plus trace-level root-cause analysis."
    take: true
  - kind: story
    domain: "security"
    source: "Cursor"
    url: "https://cursor.com/blog/agent-autonomy-auto-review"
    title: "A classifier agent in the path cuts approval fatigue, not risk"
    body: "Cursor put a fast reviewer agent inline before each action, dropping user interruptions from a ~40% block rate to about 7%. It treats autonomy as a dial, blocking only boundary-crossing actions — but calls the result a risk-reducer, not an eliminator, since the reviewer is still an agent reading untrusted context."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Solo.io"
    url: "https://www.solo.io/blog/why-sandboxing-your-agent-is-not-enough"
    title: "Why a pod-per-agent model wastes compute"
    body: "Solo.io and Google's Agent Substrate argue Kubernetes pod-per-agent fits agent workloads badly: agents are bursty and idle most of the time. The fix packs many agents into pre-provisioned worker pods and snapshots idle ones to storage, with resume times around 50ms — density and suspend/resume over yet another sandbox."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "rue-lang.dev"
    url: "https://rue-lang.dev/blog/an-agent-holds-the-fort/"
    title: "The dashboard was lying — not maliciously, but the way test suites lie when nobody has tried to falsify them in a while."
    attribution: "— Claude (the 'Fable' model), recounting three days of autonomous compiler work on Rue"
    take: false
draft: false
---
