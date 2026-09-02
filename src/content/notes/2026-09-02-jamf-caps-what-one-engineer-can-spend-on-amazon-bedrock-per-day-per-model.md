---
title: "Jamf caps what one engineer can spend on Amazon Bedrock, per day, per model"
date: 2026-09-02
summary: "AWS describes how Jamf built a serverless system that caps each engineer's daily Amazon Bedrock spend by model tier, restricting access to Anthropic's Claude Opus and Sonnet as spend approaches budget while leaving Claude Haiku always available."
takeaways:
  - "Capping generative AI spend per engineer, tier by model cost, is what let one company expand access instead of restricting it."
  - "Tiered enforcement beats a hard cutoff: deny the expensive model first, keep a cheap one always on, and engineers keep working."
  - "Treat your model pricing map as an operational artifact: price an unlisted model at the highest tier so it fails safe, then add its real rate."
tags: ["autonomy-and-cost", "tokenomics", "cost-control", "governance"]
sourceName: "AWS Machine Learning"
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/tokenomics-at-scale-how-jamf-built-real-time-spend-enforcement-for-amazon-bedrock"
sources:
  - title: "AWS Machine Learning: Tokenomics at scale: How Jamf built real-time spend enforcement for Amazon Bedrock"
    url: "https://aws.amazon.com/blogs/machine-learning/tokenomics-at-scale-how-jamf-built-real-time-spend-enforcement-for-amazon-bedrock"
draft: false
---
## The Takeaway
Capping generative AI spend per engineer, tier by model cost, is what let one company say yes to giving more people access to it.

## The details
- On 2026-09-01, AWS's Machine Learning blog described how Jamf, which manages Apple devices for more than 76,000 organizations, built a production system enforcing per-engineer daily spending caps on [Amazon Bedrock](https://aws.amazon.com/bedrock/).
- Per AWS, the system denies an engineer access to Anthropic's Claude Opus once they hit 80% of their daily budget and blocks Claude Sonnet at 100%, but never blocks the cheaper Claude Haiku, so engineers can keep working.
- AWS reports that Lambda, DynamoDB, and S3 together cost well under $10 a month for hundreds of engineers, while flagging Amazon Athena, which computes the per-user spend view, as the line item that needs sizing since its bill scales with scan scope and run frequency.
- AWS says restrictions take effect within minutes with no re-authentication required, and that a Slack slash command lets admins grant time-boxed exceptions that are logged to DynamoDB with an audit trail and expire automatically via a TTL attribute.
- AWS frames it as a "counterintuitive" strategic insight that the hard per-user cap made Jamf's leadership comfortable expanding Bedrock access rather than pulling it back.

## Why it matters
This is a pattern any engineering org handing engineers agentic coding tools on Bedrock can copy directly, since AWS published the sample code alongside the post. The catch is that AWS has a direct stake in the story: the whole enforcement loop runs on its own services, so the sub-$10/month figure is a vendor's account of its own product, not an independent audit. Teams adopting this should expect to spend real effort sizing the one line item AWS flags as variable, Athena, before they trust the total.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
