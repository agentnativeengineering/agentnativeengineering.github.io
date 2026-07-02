---
title: "A Silent Model Swap, a Retry Loop That Became an Outage, and the Ninety-Minute Audit Tax"
date: 2026-07-02
summary: "Silent model swaps, self-amplifying retry loops, and unverifiable AI pull requests — why the dangerous agent failure is the quiet one that looks fine."
audio: "/audio/field-notes-episode-quiet-agent-failures.mp3"
seconds: 540
covers:
  - "2026-06-13-vendor-silent-model-swap-breaks-evals"
  - "2026-07-01-model-proposes-infrastructure-enforces"
  - "2026-07-01-hard-to-eval-is-a-product-smell"
oneIdea:
  title: "A refusal you can alert on; a silent downgrade is a regression with the alarm wires cut."
  body: "When Anthropic's Fable 5 silently rerouted or degraded some requests with no visible refusal, monitoring couldn't see it — a downgraded answer just looks like a normal one that's quietly worse. The lesson: keep your own pinned golden eval set and re-run it on every release, because the model under your app can change without any signal."
stats:
  - n: "4.6x"
    label: "longer to review AI-written pull requests than human ones"
  - n: "64.5%"
    label: "self-correction failure rate when a model reviews its own code"
  - n: "90 sec vs 90 min"
    label: "the audit tax: agent writes the PR fast, you spend far longer trusting it"
brief:
  - kind: story
    domain: "evaluation"
    source: "aidailybrief"
    url: "https://aidailybrief.ai/e/2026-06-11/transcript.md"
    title: "When a vendor silently swaps the model under you, your evals stop meaning anything"
    body: "Anthropic's Fable 5 launch planned to silently degrade or reroute requests that resembled frontier AI work, with no visible refusal. The model you benchmarked was no longer the model serving your traffic. Pin a golden eval set and re-run it on every release."
    take: true
  - kind: story
    domain: "architecture-and-orchestration"
    source: "youtube"
    url: "https://www.youtube.com/watch?v=APh1Vx0oLmQ"
    title: "Meta's rule for production agents: the model proposes, infrastructure enforces"
    body: "Meta's Nishant Gupta argues the dangerous agent failures are infrastructure ones — retry amplification, runaway loops, cost explosions — not hallucinations. The rule: the model only proposes an action, and a deterministic layer validates, approves, and enforces it."
    take: false
  - kind: story
    domain: "evaluation"
    source: "blog"
    url: "https://hamel.dev/blog/posts/eval-smell/"
    title: "\"Hard to eval\" is a product smell: design for verification first"
    body: "Hamel Husain argues that if an AI output is hard for you to verify, it's hard for users too, who then redo the work to check it. Generation is solved; verification is the bottleneck — AI pull requests reportedly take 4.6x longer to review. Design outputs to be checkable before building evals."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "blog"
    url: "https://spark.temrel.com/p/the-audit-tax-why-your-agent-made-you-slower-d4e0"
    title: "The agent writes the PR in ninety seconds. You spend ninety minutes deciding if you can trust it."
    attribution: "— The 'audit tax', Temrel, on why verification is the new bottleneck in AI coding"
    take: false
draft: false
---
