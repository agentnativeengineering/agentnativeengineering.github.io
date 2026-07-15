---
title: "A Million AI Pull Requests Carried Three Times the Security Holes"
date: 2026-07-15
summary: "When code generation is nearly free, the bottleneck becomes trust — measure review debt directly instead of believing throughput dashboards."
audio: "/audio/field-notes-episode-review-debt.mp3"
seconds: 523
youtube: "https://youtu.be/DkmbWvxWmnM"
covers:
  - "2026-07-15-reliability-is-the-real-bottleneck-for-ai-teams"
  - "2026-07-15-score-every-pr-to-surface-review-debt"
oneIdea:
  title: "PR count, size, and cycle time measure the speed of production, not the speed of trust."
  body: "eBay's Sachin Gupta argues the metrics teams celebrate all climb for the wrong reasons: count rises when one change splits into seven, a bigger PR is bloat, cycle time drops when reviewers stop pushing back. His fix is to score every pull request zero to a hundred on five deterministic signals so review effort tracks change complexity, not who or what wrote the code."
stats:
  - n: "30x"
    label: "productivity gap between leading and lagging AI teams, per a WF2026 keynote"
  - n: "3x"
    label: "more auth-bypass vulnerabilities in AI code, across ~1M PRs reviewed"
  - n: "-27%"
    label: "review comments fell while commits rose 25% the same year (GitHub, Oct 2025)"
  - n: "31%"
    label: "more PRs now merge with no review at all (Faros AI 2026 benchmark)"
brief:
  - kind: story
    domain: "evaluation"
    source: "Sachin Gupta, eBay"
    url: "https://www.youtube.com/watch?v=TJPInBjhE4Q"
    title: "Score every pull request 0-100 to surface hidden review debt"
    body: "eBay's Sachin Gupta names review debt: the gap between code agents generate and code humans have actually reviewed. His fix scores every PR on five deterministic signals so scrutiny tracks change complexity. Across 524 PRs, review burden followed complexity, not AI authorship."
    take: true
  - kind: story
    domain: "reliability"
    source: "AI Engineer World's Fair"
    url: "https://www.youtube.com/watch?v=4sX_He5c4sI"
    title: "The 30x productivity gap between AI teams comes down to reliability"
    body: "WF2026 keynotes converged: raw model capability is no longer the bottleneck — verification is. One put the gap between leading and lagging teams at 30x. A review of a million AI-written PRs found roughly three times more auth-bypass vulnerabilities."
    take: false
  - kind: story
    domain: "reliability"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/07/14/openais-first-hardware-device-is-reportedly-a-screenless-speaker-that-can-move/"
    title: "OpenAI's first device is reportedly a movable, screenless home speaker"
    body: "Per a Bloomberg report, OpenAI's debut hardware is a screen-free smart speaker pitched as a humanlike AI companion that lives in the home, syncing with ChatGPT and tapping a user's digital life. It even has mechanical parts that let it physically move."
    take: false
  - kind: story
    domain: "reliability"
    source: "The Verge"
    url: "https://www.theverge.com/tech/965270/google-deepmind-demis-hassabis-global-ai-watchdog"
    title: "DeepMind's Hassabis calls for a US-led global watchdog for frontier AI"
    body: "Demis Hassabis proposed an independent, industry-funded but US-backed standards body, modeled on financial regulator FINRA, to review frontier models before release. The plan runs against White House signals that there will be no 'FDA for AI.'"
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Sachin Gupta, eBay"
    url: "https://www.youtube.com/watch?v=TJPInBjhE4Q"
    title: "They tell you the speed of production. They do not tell you the speed of trust."
    attribution: "— Sachin Gupta, software engineer at eBay, on why throughput metrics hide review debt"
    take: false
draft: false
---
