---
title: "The AI race moved up to the software layer above the model"
date: 2026-06-18
summary: "Production token mix now shifts month to month, so the durable thing to build is the software layer around the agent, with the model kept as a swappable part."
takeaways:
  - "Put the model behind a seam. On one production gateway the open model DeepSeek jumped from under 1% to 17% of tokens in a single month at about 1% of spend, so the model under your app moves whether you planned for it or not."
  - "Own the software around the agent. The context you feed it, the tools it can reach, and the checks on its actions stay yours when the model is swapped, and they are where June's funding and acquisitions are pointing."
  - "Keep the swap cheap. Route on whichever model is cheapest-capable this quarter and keep your context, tools, and controls model-agnostic, so a price cut or a new leader is a config change."
tags: ["architecture-and-orchestration", "ai-race", "agents", "model-selection", "model-portability"]
sourceName: "Vercel"
sourceUrl: "https://vercel.com/blog/ai-gateway-production-index-june-2026"
sources:
  - title: "Vercel: AI Gateway Production Index, June 2026"
    url: "https://vercel.com/blog/ai-gateway-production-index-june-2026"
  - title: "SiliconANGLE: OpenAI acquires agent-orchestration startup Ona"
    url: "https://siliconangle.com/2026/06/11/openai-acquires-ai-agent-orchestration-startup-ona/"
  - title: "TechCrunch: SpaceX to acquire Cursor for $60B in stock"
    url: "https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/"
  - title: "Cohere: North Mini Code (first agentic coding model)"
    url: "https://cohere.com/blog/north-mini-code"
  - title: "TechCrunch: NewCore $66M for agent identity"
    url: "https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/"
  - title: "TechCrunch: Jedify $24M for agent context"
    url: "https://techcrunch.com/2026/06/10/jedify-raises-24m-to-help-companies-arm-ai-agents-with-context-on-their-business/"
  - title: "Ramp AI Index, June 2026"
    url: "https://ramp.com/leading-indicators/ai-index-june-2026"
  - title: "IBM: CIOs/CTOs face growing AI control gap"
    url: "https://newsroom.ibm.com/2026-06-08-new-ibm-study-finds-cios-and-ctos-face-growing-ai-control-gap-as-enterprise-deployment-scales"
  - title: "Kore.ai: enterprise AI agent risk survey"
    url: "https://www.kore.ai/news/new-kore-ai-survey-72-of-enterprises-say-their-ai-agents-operate-with-unmanaged-risk-and-create-new-operational-burdens"
draft: false
---
Vercel publishes the model mix running through its AI gateway, and in one month the open model DeepSeek went [from under 1% to 17% of all tokens while holding around 1% of spend](https://vercel.com/blog/ai-gateway-production-index-june-2026). Volume and spend have decoupled, and the cheapest capable model is changing under production apps every few weeks. If your code is wired straight to one provider's API, you are anchored to the part that moves the most.

That is why the AI race is shifting up a layer. In one June fortnight the biggest moves were grabs for the software above the model: OpenAI [acquired the agent-runtime startup Ona](https://siliconangle.com/2026/06/11/openai-acquires-ai-agent-orchestration-startup-ona/) to run long agent tasks, and SpaceX [agreed to buy the coding tool Cursor for sixty billion dollars in stock](https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/). Even model labs moved into agent products: Cohere shipped [its first agentic coding model](https://cohere.com/blog/north-mini-code), and new startups are pivoting straight into the layer, with NewCore raising [sixty-six million dollars for agent identity](https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/) and Jedify [twenty-four million for agent context](https://techcrunch.com/2026/06/10/jedify-raises-24m-to-help-companies-arm-ai-agents-with-context-on-their-business/).

The model commoditizes, and no provider holds the lead for long: Anthropic just edged past OpenAI in US business adoption, [41% to 39.5%](https://ramp.com/leading-indicators/ai-index-june-2026). The software around the agent does not commoditize, and it is where teams are most exposed. IBM found [77% of leaders say adoption already outpaces their governance](https://newsroom.ibm.com/2026-06-08-new-ibm-study-finds-cios-and-ctos-face-growing-ai-control-gap-as-enterprise-deployment-scales), and in one survey [79% had already reversed an agent's action](https://www.kore.ai/news/new-kore-ai-survey-72-of-enterprises-say-their-ai-agents-operate-with-unmanaged-risk-and-create-new-operational-burdens). The context you ground an agent with, the tools you let it call, and the checks on what it does are the durable, defensible work.

The concrete move: put a routing seam between your app and the providers, a gateway or router that every model call passes through, and keep the context, tools, and controls in your own layer behind it. That same seam is where your spend caps, audit log, and model fallback live. Then swapping a model, for a price cut, an outage, or a new leader, is a config change, and the layer you built stays yours.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)

