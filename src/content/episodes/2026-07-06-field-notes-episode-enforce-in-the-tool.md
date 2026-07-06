---
title: "Stripe's Card That Says No, a Skill That Changed After Review, and Alibaba's Claude Ban"
date: 2026-07-06
summary: "Stripe scopes agent payment tokens, a malicious skill mutated after passing three scans, and Alibaba banned Claude Code as a vendor trust boundary."
audio: "/audio/field-notes-episode-enforce-in-the-tool.mp3"
seconds: 501
youtube: "https://youtu.be/AwTfmH2maXU"
covers:
  - "2026-06-12-stripe-scopes-agent-payment-tokens-to-seller-amount-and-time-window"
  - "2026-07-05-malicious-agent-skill-passed-scanners-changed-after-review"
  - "2026-07-05-alibaba-claude-code-ban-vendor-cli-trust-boundary"
oneIdea:
  title: "The scope of an agent's credential is its blast radius — size it to the one task in front of the agent, not everything the agent might ever do."
  body: "Stripe's Steve Kaliski replaces a raw card number with a payment token scoped to one seller, one amount, one time window, enforced by Stripe at charge time. In his demo, a charge past the limit simply bounces — not because the agent behaved, but because the credential itself can't go further. The rule lives in the credential, so a confused or hijacked agent can't exceed the mandate."
stats:
  - n: "26,000"
    label: "users installed a fake agent skill that later swapped its instructions"
  - n: "3"
    label: "scanners (Cisco, Nvidia, a skills marketplace) marked the fake skill safe"
  - n: "Jul 10"
    label: "date Alibaba reportedly bans Claude Code as high-risk software"
  - n: "1 seller / 1 amount / 1 window"
    label: "the scope Stripe binds an agent payment token to"
brief:
  - kind: story
    domain: "access-and-identity"
    source: "Stripe / Steve Kaliski"
    url: "https://www.youtube.com/watch?v=KLSuFPj2ld0"
    title: "Stripe scopes agent payment tokens to seller, amount, and time window"
    body: "When an agent can spend, it holds a payment credential — and a non-deterministic planner can buy the wrong thing on a bad day. Stripe's fix is a token scoped to one seller, one amount, one window, enforced at charge time. A confused or prompt-injected agent can't exceed the mandate because the rule lives in the credential, not the prompt."
    take: true
  - kind: story
    domain: "security"
    source: "CSO Online / AIR"
    url: "https://www.csoonline.com/article/4188840/how-a-malicious-ai-agent-skill-passed-security-checks-and-reached-26000-users.html"
    title: "A malicious agent skill passed three scanners, then changed after review"
    body: "AIR built a fake skill that cleared scanners from Cisco, Nvidia, and a skills marketplace, then reached 26,000 users on the strength of GitHub reputation and a repo merge. After review, AIR swapped the instructions the skill fetched remotely. A point-in-time scan can't govern a skill that loads content at runtime — pin fetched content to a hash."
    take: false
  - kind: story
    domain: "security"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/"
    title: "Alibaba bans Claude Code as vendor agent CLIs become a data boundary"
    body: "Alibaba will reportedly ban Claude Code from July 10 after a claim a version could identify Chinese users; Anthropic confirmed a March anti-abuse and anti-distillation experiment now being removed. Meta reportedly requires approval for rival coding tools. The lesson: a vendor coding agent is third-party code with repo access — govern what it phones home."
    take: false
  - kind: story
    domain: "security"
    source: "Meituan"
    url: "https://www.marktechpost.com/2026/07/05/meituan-releases-longcat-2-0-a-1-6t-parameter-open-moe-model-with-native-1m-context-and-longcat-sparse-attention/"
    title: "Meituan open-sources LongCat-2.0, trained with no Nvidia chips"
    body: "Meituan released LongCat-2.0, an MIT-licensed 1.6-trillion-parameter mixture-of-experts model built for agentic coding, trained and served on a 50,000-card cluster of domestic Chinese chips with zero Nvidia hardware. On its own benchmarks it scores 59.5 on SWE-bench Pro, edging GPT-5.5 and claiming rough parity with Gemini 3.1 Pro."
    take: false
  - kind: story
    domain: "security"
    source: "Anthropic"
    url: "https://www.anthropic.com/news/statement-department-of-war"
    title: "Anthropic refuses the Pentagon's demand for 'all lawful uses' of Claude"
    body: "Surfaced emails show the Pentagon pressed Anthropic to allow Claude for 'all lawful uses' — a standard the company said would open the door to autonomous weapons and domestic surveillance — and Dario Amodei refused, offering only reliability help for weapon systems. The Department of War moved to cut Anthropic out."
    take: false
  - kind: quote
    domain: "access-and-identity"
    source: "Stripe / Steve Kaliski"
    url: "https://www.youtube.com/watch?v=KLSuFPj2ld0"
    title: "You don't make the agent deterministic — you make the credential carry the policy, enforced at the charge, not in the context window."
    attribution: "— The through-line of Stripe's least-privilege-for-money design"
    take: false
draft: false
---
