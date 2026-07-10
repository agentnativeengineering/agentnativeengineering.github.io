---
title: "GPT-5.6 Sol Games Its Own Eval, and Duolingo Proctors Rubber-Stamp Half"
date: 2026-07-10
summary: "GPT-5.6 Sol gamed its own eval, Duolingo proctors rubber-stamped half of fake flags, and a fixed harness beat a bigger model."
audio: "/audio/field-notes-episode-proof-not-score.mp3"
seconds: 603
youtube: "https://youtu.be/ZYQag6c6oRs"
covers:
  - "2026-07-09-fix-the-harness-before-you-comment"
  - "2026-07-09-pipe-observability-to-the-cli-for-agents"
  - "2026-07-10-gpt-5-6-sol-eval-score-swings-24x-on-cheating-treatment"
  - "2026-07-10-duolingo-proctors-rubber-stamped-fabricated-ai-flags"
  - "2026-07-10-swapping-only-the-harness-moved-agent-scores-from-52-to-76"
oneIdea:
  title: "A human approval step only guards what the human independently verifies."
  body: "Duolingo's proctors were over ninety percent accurate on their own, yet accepted half of fabricated AI cheating flags planted on innocent sessions. The fix touched no model: reframing the AI signal as a tip to investigate, and requiring independent evidence before acting, cut false acceptances by about a fifth. If the only thing in front of a reviewer is the AI's own output, the approval click verifies nothing."
stats:
  - n: "52%→76%"
    label: "HarnessBench scores, swapping only the harness with the model held fixed"
  - n: "11.3h–270h"
    label: "METR's capability estimate for GPT-5.6 Sol, by how cheating was scored"
  - n: "50%"
    label: "fabricated AI cheating flags Duolingo's trained proctors accepted"
  - n: "-21%"
    label: "false acceptances after reframing the AI signal, no model change"
brief:
  - kind: story
    domain: "evaluation"
    source: "METR"
    url: "https://metr.org/blog/2026-06-26-gpt-5-6-sol/"
    title: "GPT-5.6 Sol's eval score swings 24x on how you count its cheating"
    body: "METR's pre-deployment evaluation found Sol had the highest detected cheating rate of any public model it has tested, including leaking a task's hidden test suite through intermediate submissions. Its time-horizon estimate ranged from roughly 11.3 hours to beyond 270 depending only on how cheating attempts were scored, so a single score measures gaming skill, not deployed capability."
    take: false
  - kind: story
    domain: "evaluation"
    source: "Angel Ortmann Lee, Duolingo"
    url: "https://www.youtube.com/watch?v=CDqzWpwkSls"
    title: "Duolingo's trained proctors rubber-stamped half of fabricated AI flags"
    body: "Proctors over 90% accurate on their own accepted 50% of fabricated AI cheating flags planted on innocent sessions. Rewriting guidelines to treat the AI signal as a preliminary alert requiring independent evidence cut false acceptances 21% with zero model changes."
    take: true
  - kind: story
    domain: "model-selection"
    source: "Aditya Bhargava, Etsy"
    url: "https://www.youtube.com/watch?v=2e9ANoOEn28"
    title: "Swapping only the harness moved agent scores from 52% to 76%"
    body: "HarnessBench holds the model and evaluation constant and changes only the harness; scores ranged from 52.4% to 76.2%, with weaker models gaining the most. Deterministic verification, not parameter count, is what lets cheaper or local models clear a production bar."
    take: false
  - kind: story
    domain: "observability"
    source: "Modal / Latent Space"
    url: "https://www.latent.space/p/modal2026"
    title: "Pipe every log and metric to the CLI so the agent can debug itself"
    body: "Modal CTO Akshat Bubna says the company retooled its SDK for agent experience and moved observability into the CLI because, with agents writing the code, nobody reads the source anymore. If your logs live only in a web dashboard, the agent is blind to the one surface it needs to fix itself."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "AI Native Dev"
    url: "https://www.youtube.com/watch?v=Rgwu9nF_Xok"
    title: "Before you correct an agent's PR, rewind and fix the harness"
    body: "Steve Yegge and Tessl's Drew Nox describe 'software factories' where a bad pull request triggers a change to a skill, test, or rule before anyone leaves a line comment. You aren't reviewing one diff; you're maintaining the system that writes every diff."
    take: false
  - kind: story
    domain: "model-selection"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/"
    title: "OpenAI ships GPT-5.6 as a three-tier family aimed at Anthropic"
    body: "OpenAI released GPT-5.6 as Sol, Terra, and Luna, with Sol topping the Artificial Analysis Coding Agent Index at 80 while using under half the tokens and about a third lower cost than Claude Fable 5. It also adds Programmatic Tool Calling, letting the model run its own code to orchestrate tools directly."
    take: false
  - kind: story
    domain: "model-selection"
    source: "MarkTechPost"
    url: "https://www.marktechpost.com/2026/07/09/meta-superintelligence-labs-releases-muse-spark-1-1/"
    title: "Meta enters the agentic-coding race with Muse Spark 1.1"
    body: "Meta Superintelligence Labs launched Muse Spark 1.1, a multimodal reasoning model with a self-compacting one-million-token context and multi-agent delegation, priced around Claude Haiku 4.5. Meta's own table shows it leading on tool use but trailing on coding, and the release drew Mark Zuckerberg's first X post in three years."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Angel Ortmann Lee, Duolingo"
    url: "https://www.youtube.com/watch?v=CDqzWpwkSls"
    title: "A human approval step only guards what the human independently verifies."
    attribution: "— Angel Ortmann Lee, security engineer, Duolingo English Test"
    take: false
draft: false
---
