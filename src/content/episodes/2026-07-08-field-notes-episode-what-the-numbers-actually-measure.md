---
title: "JetBrains Measured a Sixty-Five Percent Token Saving and Got Eight"
date: 2026-07-08
summary: "Microsoft coding agents spread by peers for a 24% PR lift, JetBrains' 65% token promise measured 8%, and model power stays latent till a tool unlocks it."
audio: "/audio/field-notes-episode-what-the-numbers-actually-measure.mp3"
seconds: 479
youtube: "https://youtu.be/reqo_Bq8ejo"
covers:
  - "2026-07-08-fable-capability-overhang-give-the-model-arms"
  - "2026-07-08-compressing-agent-prose-saves-8-percent"
  - "2026-07-08-coding-agent-adoption-peers-merged-prs-microsoft"
oneIdea:
  title: "A merged pull request measures output, not the value it delivered — so 24% more of them is a speed signal, not proof you shipped more that mattered."
  body: "Microsoft's study of tens of thousands of engineers found coding-agent adopters merged about 24% more pull requests over four months. But the authors flag that merged PRs are a proxy for output, not delivered value. Pair any velocity number with a quality signal before you call it ROI — the same lesson JetBrains hit when a 65% token promise measured 8%."
stats:
  - n: "24%"
    label: "more pull requests merged by Microsoft engineers who adopted coding agents, held four months"
  - n: "65%→8.5%"
    label: "advertised token saving vs measured, in JetBrains' Caveman A/B test"
  - n: "82"
    label: "real agentic coding tasks in JetBrains' paired A/B test"
  - n: "p=0.82"
    label: "sign test — terse output caused no measurable quality loss"
brief:
  - kind: story
    domain: "harness-engineering"
    source: "arXiv"
    url: "https://arxiv.org/abs/2607.01418"
    title: "Coding-agent adoption spread through peers and lifted merged PRs 24% at Microsoft"
    body: "A study of tens of thousands of Microsoft engineers found command-line coding agents spread through visible peer use, not mandates, and adopters sustained a roughly 24% merged-PR lift over four months. The authors caution that merged PRs measure output, not delivered value."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "JetBrains Blog"
    url: "https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/"
    title: "Compressing agent prose saves ~8.5%, not 65%: code and diffs dominate the tokens"
    body: "JetBrains A/B tested the Caveman terse-output skill on 82 real coding tasks and measured about 8.5% output-token savings against an advertised 65%. In agentic work the byte stream is dominated by code, diffs and tool calls the skill leaves verbatim; the real cost lever is input context."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "YouTube — AI Engineer"
    url: "https://www.youtube.com/watch?v=9fubhllmsBU"
    title: "Capability overhang: the Pokémon a chat model can't name until you give it a tool"
    body: "In 'A Field Guide to Fable,' Anthropic's Thariq Shihipar frames a model's latent, spiky 'capability overhang' — real gains live as much in the tools you give it as in the weights. A plain chat model fails to filter Pokémon names; hand it code execution and it fetches the list and scripts the answer."
    take: false
  - kind: story
    domain: "safety-and-governance"
    source: "Wired"
    url: "https://www.wired.com/story/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images-unless-you-opt-out/"
    title: "Meta ships Muse Image and defaults public Instagram profiles into it"
    body: "Meta launched Muse Image, its first in-house image model, wired into Instagram, WhatsApp and the Meta AI app. Public profiles are auto-opted-in, so anyone can tag a public username to generate images with that person's likeness, and opting out only blocks future generations."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "The Decoder"
    url: "https://the-decoder.com/copilot-goes-cheap-as-microsoft-phases-out-openai-and-anthropic-models-to-cut-costs/"
    title: "Microsoft starts routing Copilot to its own cheaper models to cut costs"
    body: "Microsoft has begun routing a share of Copilot prompts in Excel, Word and Outlook to its in-house MAI models instead of OpenAI and Anthropic, framed openly as reducing what it pays Anthropic. The tension is quality-for-price, as MAI-Thinking 1 has trailed the frontier labs on benchmarks."
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "arXiv"
    url: "https://arxiv.org/abs/2607.01418"
    title: "A merged pull request is not the same as the value it delivers."
    attribution: "— Microsoft researchers, on treating coding-agent output as a proxy, not proof of ROI"
    take: false
draft: false
---
