---
title: "Your model router could quietly put DeepSeek into a federal contract"
date: 2026-10-22
summary: "A Department of Homeland Security (DHS) order removes DeepSeek, and third-party products \"developed using DeepSeek implementations\", from federal civilian systems, so teams selling to government need to know which base model sits under every model and route they use."
takeaways:
  - "If you sell AI to the US government, you now need to show which base model sits under every model, fine-tune and router fallback in your stack, because the DeepSeek order reaches third-party products built on it."
  - "The order does not define \"developed using\", so treat fine-tunes and distillations of DeepSeek weights as in scope until DHS or the Cybersecurity and Infrastructure Security Agency (CISA) says otherwise."
  - "Gateways that pick a provider for you, like OpenRouter or Vercel AI Gateway, need a pinned allow-list for government-bound traffic."
tags: ["model-selection", "model-provenance", "compliance", "model-routing"]
domain: model-selection
sourceName: "Federal Register"
sourceUrl: "https://thefederalregister.org/documents/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive-branch-information-"
sources:
  - title: "Notice of Order Regarding Exclusion and Removal of DeepSeek Products From Federal Civilian Executive Branch IT Systems and Procurements (Federal Register 2026-21447)"
    url: "https://thefederalregister.org/documents/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive-branch-information-"
  - title: "DeepSeek deep-sixed at all US federal civilian agencies (The Register)"
    url: "https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010"
  - title: "DeepSeek-V4.1-Flash-1017 arrives just as the U.S. government bans it from agencies: what enterprises should do (VentureBeat)"
    url: "https://venturebeat.com/security/deepseek-v4-1-flash-1017-arrives-with-improved-benchmarks-just-as-the-u-s-government-bans-it-from-agencies-what-enterprises-should-do"
upstream: "aidailybrief/2026-10-20"
draft: false
---

## The Takeaway
A procurement ban based on where a model came from only works if you can answer, for every request your system serves, which base model produced the output.

## The details
- On 2026-10-20 the [Federal Register published DHS's order](https://thefederalregister.org/documents/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive-branch-information-) under the Federal Acquisition Supply Chain Security Act. It requires removal of "all DeepSeek and DeepSeek-affiliate products" and "third-party products and services developed using DeepSeek implementations" from federal civilian IT. The signed order appears only as images in the notice's appendix.
- Katie Moussouris of Luta Security told [The Register](https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010) that the order "doesn't say what 'developed using' means" and "could technically cover any model derived from DeepSeek."
- The same piece notes that [gateways like OpenRouter and Vercel AI Gateway pick a provider for you by default](https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010), so agencies could end up using DeepSeek models without meaning to.
- [VentureBeat](https://venturebeat.com/security/deepseek-v4-1-flash-1017-arrives-with-improved-benchmarks-just-as-the-u-s-government-bans-it-from-agencies-what-enterprises-should-do) argues that running the weights on a US server doesn't change the procurement answer. It advises asking vendors to name their base models, including fine-tunes, and where those models run.

## Why it matters
Any team selling to federal civilian agencies now carries the risk that a fine-tune, distillation or router fallback they never audited breaks their eligibility. A step the sources don't spell out: keep a model inventory that records the provider, base model and training lineage for each route, and pin government traffic to an explicit allow-list. The caveats are real. The scope language is unclear. Moussouris says the risks the order cites are mostly about data flowing to DeepSeek's servers in China, and that US hosting avoids most of them. The one weight-level finding VentureBeat cites, a 2025 NIST (National Institute of Standards and Technology) agent-hijacking test, covered older models.

[Model Selection](/guide/model-selection/)
