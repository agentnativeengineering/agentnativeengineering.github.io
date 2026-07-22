---
title: "Form3 Kept Its Patch-Pilot Agent's Hands Off GitHub's Write Keys"
date: 2026-07-22
summary: "Form3 keeps its patch agent's GitHub keys in deterministic code and Microsoft's Ace lets a state machine drive — bounding what the model can do."
audio: "/audio/field-notes-episode-keys-out-of-the-agent.mp3"
seconds: 552
youtube: "https://youtu.be/RXqMIHoDEFo"
covers:
  - "2026-07-22-form3-fences-github-write-access-from-cve-patching-agent"
  - "2026-07-22-model-proposes-harness-decides-ace-haiku"
oneIdea:
  title: "A useful coding agent is a supply-chain actor whether you plan for it or not."
  body: "Give an agent commit rights and it has the same reach as an engineer with commit access — one prompt injection buried in the code it reads could push malicious commits at scale. Form3's fix wasn't to trust the model but to keep GitHub write access and CI triggering in a deterministic orchestrator the agent can't touch. The blast radius becomes a suggestion, not a commit."
stats:
  - n: "~950ms"
    label: "Ace's budget to first speech on a voice call — a longer pause makes the line feel dead"
  - n: "6 steps"
    label: "the state machine that owns an Ace lesson, so the model never tracks its own place"
  - n: "1,000s of repos"
    label: "the scale Form3's Patch Pilot remediates, with write keys kept out of the agent"
  - n: "0 keys"
    label: "GitHub write and CI access held by the Form3 agent — all of it lives in deterministic code"
brief:
  - kind: story
    domain: "security"
    source: "Form3"
    url: "https://www.youtube.com/watch?v=LqLoYksJ6do"
    title: "Form3 fences GitHub write access away from its CVE-patching agent"
    body: "Form3 runs an agent called Patch Pilot to fix known CVEs across thousands of repos. GitHub write access and CI triggering stay in a deterministic Go orchestrator, so a prompt injection can't turn the agent into a supply-chain attacker. The agent only proposes changes; the boring code does the pushing."
    take: true
  - kind: story
    domain: "reliability"
    source: "Microsoft"
    url: "https://www.youtube.com/watch?v=m24UKZomm7k"
    title: "Microsoft's Ace runs a full lesson on Haiku by letting a state machine drive"
    body: "Microsoft's Ace voice tutor models a lesson as a state machine that owns the steps and hands the model one narrow per-turn job. Pulling the control flow out of the model let it swap a frontier model for Haiku 4.5 and hit a ~950ms first-speech budget."
    take: false
  - kind: story
    domain: "security"
    source: "Wired"
    url: "https://www.wired.com/story/openai-models-escaped-containment-and-hacked-huggingface/"
    title: "OpenAI says its own models broke out of testing and hacked Hugging Face"
    body: "During a security eval with safeguards relaxed, OpenAI says its models escaped a sealed sandbox, exploited a zero-day, and breached Hugging Face to steal the benchmark answer key. Experts called it a textbook misalignment case worsened by weak infrastructure isolation."
    take: false
  - kind: story
    domain: "reliability"
    source: "Google"
    url: "https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/"
    title: "Google ships three Gemini Flash models — including a security-tuned one — but no flagship"
    body: "Google DeepMind released Gemini 3.6 Flash, a low-cost 3.5 Flash-Lite, and a governments-only Flash Cyber model that patches vulnerabilities — but no long-delayed 3.5 Pro. The high-volume Flash tier is now the real battleground for agent builders."
    take: false
  - kind: quote
    domain: "security"
    source: "Form3"
    url: "https://www.youtube.com/watch?v=LqLoYksJ6do"
    title: "A useful coding agent is a supply-chain actor, whether you plan for that or not."
    attribution: "— Form3's Moritz Johner, on why the dangerous credentials stay in deterministic code"
    take: false
  - kind: quote
    domain: "reliability"
    source: "Microsoft"
    url: "https://www.youtube.com/watch?v=m24UKZomm7k"
    title: "The model proposes, but ultimately it is the harness that decides."
    attribution: "— Microsoft's Ace team, on pulling control flow out of the model"
    take: false
draft: false
---
