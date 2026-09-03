---
title: "Skill files cut Lease End's week-long bug fixes down to an hour"
date: 2026-09-03
summary: "Lease End swapped a fine-tuned intent classifier for a Markdown skills-and-tools framework, cutting bug-fix cycles from a week to under an hour and beating the fine-tuned model's accuracy."
takeaways:
  - "Encoding behavior as editable skill files instead of fine-tuned weights turns a week-long fix cycle into an hour-long one, because you edit text instead of retraining a model."
  - "Fine-tuning bought Lease End accuracy but also a \"calcification tax\": lock-in to one model version and one workflow, since training data doesn't transfer cleanly across model versions or providers."
  - "Together AI's Hallmark skill shows the same pattern outside classification: encoding design rules as context let a cheaper open model match frontier-model output quality."
tags: ["harness-engineering", "skills", "fine-tuning", "model-agnostic"]
sourceName: "Lease End (YouTube)"
sourceUrl: "https://www.youtube.com/watch?v=4loPnxvWWhg"
sources:
  - title: "Your Fine-Tuned Model Is Tech Debt — Dan Bjornn, Lease End"
    url: "https://www.youtube.com/watch?v=4loPnxvWWhg"
  - title: "The Missing Layer: Design Taste in AI Agents — Hassan El Mghari, Together AI"
    url: "https://www.youtube.com/watch?v=7GMKdpLsxwU"
draft: false
---
## What happened
In a talk published 2026-08-20, Lease End senior data scientist Dan Bjornn described [replacing a fine-tuned classifier with a model-agnostic skills framework](https://www.youtube.com/watch?v=4loPnxvWWhg) for the app that routes auto-lease buyout customers to sales. The original system used supervised fine-tuning to classify customer intent (talk now, schedule later, opt out) and drove $12M in revenue at a 50x ROI — but a single misclassification, like a model announcing "I'm calling you right now" after a customer merely acknowledged a next-day appointment, took roughly a week to fix: gather examples, label, retrain, chase regressions. The team rebuilt the same logic as skills, tools, and resources stored as Markdown files in an S3 bucket, cutting the fix cycle from about a week to under an hour, beating the fine-tuned model's accuracy, and lowering total cost despite higher per-message API pricing.

## Why it matters
Bjornn calls the trap the "calcification tax": fine-tuning didn't buy vendor independence, it locked the team into one model version and one 2024 workflow, because training data formats and volumes differ across models and providers. A specialized model becomes a maintenance liability the moment behavior needs to change, which is the daily reality of production agents.

## How it works
1. **Encode behavior as context, not weights.** Intent-classification logic moved from fine-tuned parameters into skill files an agent reads at runtime.
2. **Ship fixes as text edits.** A bad rule is fixed by editing a Markdown file and redeploying, not retraining a model.
3. **Corroborated by design skills too.** Together AI's Hassan El Mghari built [a similar skill, Hallmark](https://www.youtube.com/watch?v=7GMKdpLsxwU), that encodes UI anti-patterns as rules a cheaper open model follows, producing landing pages viewers couldn't reliably distinguish from Opus output — the same pattern of putting judgment in editable context instead of a trained-in model.

> Fine-tune only when you literally cannot call a frontier model — and even then, only if the benefit beats the calcification tax.

## The catch
This isn't free: Lease End's per-message API cost went up, and the win depended on frontier models already being capable enough at the task without training. For tasks with hard latency or cost ceilings that a small fine-tuned model uniquely solves, the tax may still be worth paying — the lesson is to weigh it explicitly rather than reach for fine-tuning by default.

[\Harness Engineering](/guide/harness-engineering/)
