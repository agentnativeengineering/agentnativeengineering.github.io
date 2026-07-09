---
title: "A Genome Agent Found the Diseases the Labs Missed, and Two More"
date: 2026-07-09
summary: "A blinded genome agent solved 19 rare-disease cases plus 2 more, while Vercel's production agent shows why identity beats raw smarts."
audio: "/audio/field-notes-episode-trust-where-it-matters.mp3"
seconds: 461
youtube: "https://youtu.be/h97spIxcWOQ"
covers:
  - "2026-07-07-genome-agent-cleared-every-healthy-case"
  - "2026-07-09-production-agent-own-identity-not-your-credentials"
oneIdea:
  title: "On any task where a wrong answer still looks reasonable, only a blinded test against the real answer proves your agent is actually right."
  body: "Gamow Labs ran its genome agent George-0.1 blind against a Baylor lab's confirmed diagnoses: it reproduced all 19 solved cases, added 2 more, and cleared every healthy relative. A general chatbot cleared only 6 of 20 healthy genomes. The gap wasn't reasoning — it was domain data-handling — and only the blinded gold standard could tell a plausible-looking answer from a correct one."
stats:
  - n: "19/26"
    label: "unsolved rare-disease cases George-0.1 reproduced that first-line labs missed"
  - n: "+2"
    label: "additional diagnoses the agent found beyond the human reanalysis lab"
  - n: "6/20"
    label: "healthy relatives ChatGPT 5.5 Pro cleared; George-0.1 cleared all 20"
  - n: "<3 min"
    label: "Vercel Agent: from alert to mitigated rollback, with human approval"
brief:
  - kind: story
    domain: "evaluation"
    source: "Gamow Labs"
    url: "https://gamowlabs.com/sota-genome-interpretation-with-agentic-ai.html"
    title: "A genome agent cleared every healthy case; ChatGPT cleared 30%"
    body: "In a blinded Baylor collaboration, Gamow Labs' George-0.1 reproduced 19 rare-disease diagnoses first-line labs missed, added 2 more, and returned zero false positives across 20 healthy relatives. General chatbots collapsed — ChatGPT 5.5 Pro cleared only 6 of 20 — not on reasoning but on domain data-handling like genome build and population priors."
    take: true
  - kind: story
    domain: "access-and-identity"
    source: "Vercel"
    url: "https://vercel.com/blog/vercel-agent"
    title: "Vercel, AWS, and Prime Radiant give agents their own short-lived identity"
    body: "Vercel Agent runs as its own read-only principal; to act, it earns a short-lived capability scoped to a single approved plan, then reverts. AWS and Prime Radiant landed on the same rule independently — a distinct identity plus least privilege — though Prime Radiant is blunt that compartmentalization reduces the underlying risk without removing it."
    take: false
  - kind: story
    domain: "model-serving"
    source: "xAI"
    url: "https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/"
    title: "xAI ships Grok 4.5, betting cheap-and-fast beats top-of-the-leaderboard"
    body: "Grok 4.5 is priced at $2 per million input and $6 per million output tokens, trailing Fable 5 and GPT-5.5 on coding benchmarks but needing roughly 4x fewer tokens than Opus. Elon Musk calls it an 'Opus-class' workhorse — the pitch being that price and efficiency matter more than a couple of benchmark points for agentic work."
    take: false
  - kind: story
    domain: "orchestration"
    source: "OpenAI"
    url: "https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/"
    title: "OpenAI rebuilds ChatGPT voice as a full-duplex model"
    body: "GPT-Live-1 replaces the old speech-to-text-to-speech chain with a single model that speaks and listens at once, handles interruptions, and translates live. It routes hard queries to GPT-5.5, signaling a push toward voice as a primary interface — though demos still showed rough edges."
    take: false
  - kind: quote
    domain: "access-and-identity"
    source: "Vercel"
    url: "https://vercel.com/blog/vercel-agent"
    title: "The safe default isn't a smarter agent — it's one that can only do the single thing you just approved."
    attribution: "— Vercel, on the Vercel Agent permissions model"
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Gamow Labs"
    url: "https://gamowlabs.com/sota-genome-interpretation-with-agentic-ai.html"
    title: "The general models didn't lack intelligence — they mishandled the data: wrong build, ignored priors, a filter that deleted the answer."
    attribution: "— Gamow Labs, on its blinded George-0.1 evaluation"
    take: false
draft: false
---
