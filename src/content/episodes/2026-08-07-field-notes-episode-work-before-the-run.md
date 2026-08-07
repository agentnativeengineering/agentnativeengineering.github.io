---
title: "Airbnb Makes Its LLM Judges Pass a Human-Labeled Test Before They Can Gate a Release"
date: 2026-08-07
summary: "Cognition keeps a frontier planner resident while cheap models type; Airbnb calibrates its LLM judges against human labels before they gate a release."
audio: "/audio/field-notes-episode-work-before-the-run.mp3"
seconds: 557
youtube: "https://youtu.be/Btrxg-5xkrc"
covers:
  - "2026-07-28-calibrate-llm-judge-before-it-grades-releases"
  - "2026-08-07-frontier-planner-cheap-models-do-the-typing"
  - "2026-08-07-send-the-accessibility-tree-with-the-screenshot"
oneIdea:
  title: "The number an LLM judge gives you is worth exactly the human agreement you measured behind it."
  body: "Airbnb's engineers calibrate every LLM-as-judge evaluator against a human-labeled golden set of fifty to a hundred examples — bad ones included — targeting agreement in the high 80s to 90s before that judge is allowed to score a release. Their line is that an uncalibrated judge is worse than no judge, because it hands you false confidence in a score you are already shipping on. And clearing the bar still doesn't make a judge safe to optimize against: in a July table-recognition paper, judge-driven refinement made outputs worse than the first attempt on one dataset."
stats:
  - n: "~40%"
    label: "Cognition's claimed cut in the cost of frontier-level intelligence with Devin Fusion"
  - n: "50–100"
    label: "human-labeled golden examples Airbnb calibrates each LLM judge against"
  - n: "high 80s–90s"
    label: "judge-to-human agreement Airbnb targets, via Cohen's kappa or Krippendorff's alpha"
  - n: "3–5"
    label: "well-calibrated judges beat 20–30 noisy ones, per Airbnb's write-up"
brief:
  - kind: story
    domain: "evaluation"
    source: "Airbnb Tech Blog"
    url: "https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788"
    title: "The LLM judge scoring your releases has to pass a human-labeled test first"
    body: "Five Airbnb engineers published their eval-driven development practice: read a hundred prototype outputs by hand, build evaluators from the mistakes you actually saw, then calibrate each judge against fifty to a hundred human-labeled examples that must include bad ones. Agreement targets sit in the high 80s to 90s, and there's a stop rule — if your own experts disagree on a label, you have a definition problem, not a judge problem."
    take: true
  - kind: story
    domain: "model-selection"
    source: "The State of Model Routing panel"
    url: "https://www.youtube.com/watch?v=QHBjufYK8TA"
    title: "Cognition keeps a frontier planner watching while cheap models do the typing"
    body: "Engineers from Cognition, NVIDIA and OpenRouter argued that routing by task type breaks because difficulty shifts mid-session. Cognition's answer is a frontier model resident for the whole session as planner and monitor, with cheaper models handling implementation — a setup they claim cuts the cost of frontier-level intelligence about 40%."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "Jason Liu, OpenAI Codex workshop"
    url: "https://www.youtube.com/watch?v=il1c1a2FufU"
    title: "Send the accessibility tree with the screenshot so the agent already has the IDs"
    body: "Jason Liu's \"appshots\" ship an app's accessibility tree alongside the screen capture, so the model holds the Slack channel and user IDs instead of burning turns hunting for them. Same precompute-before-the-question move monday.com describes when it builds a user's work model offline, and TwelveLabs frames as ingest once, reason many times."
    take: false
  - kind: story
    domain: "model-selection"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/"
    title: "OpenAI makes ChatGPT text chats unlimited for free users and installs a new default model"
    body: "From next week OpenAI removes caps on text conversations across all tiers, including Free and Go, swapping in GPT-5.6 Luna as the default with a Think button for harder questions. Luna runs around twenty cents per million tokens in the API — the efficiency that makes unlimited chat affordable past a billion weekly users."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Airbnb Tech Blog"
    url: "https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788"
    title: "A virtual judge that hasn't been calibrated is worse than no judge at all, because it gives you false confidence."
    attribution: "— Airbnb engineering, on eval-driven development"
    take: false
draft: false
---
