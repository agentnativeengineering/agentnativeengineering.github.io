---
title: "Give each shopping agent its own account profile, a spending cap and no payment access"
date: 2026-10-23
summary: "Walmart's new rules for third-party shopping agents give each agent its own profile, require shopper approval by default, allow optional spending caps, and keep payment methods out of reach: a delegation model agent builders can design against."
takeaways:
  - "When an agent spends someone else's money, give it its own identity with a cap the customer sets, and keep payment credentials out of its reach entirely."
  - "Walmart requires shopper approval by default; autonomous buying is opt-in, up to limits such as $50, $100 or $200, and Walmart can still ask for approval within the cap."
  - "Walmart has not published how it enforces intent scoping or the caps, so builders should still enforce their own limits on the agent side."
tags: ["access-and-identity", "delegated-authorization", "agentic-commerce", "spending-limits"]
domain: access-and-identity
sourceName: "Walmart Corporate"
sourceUrl: "https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers"
sources:
  - title: "Making It Possible for Agents to Shop on Behalf of Customers (Walmart)"
    url: "https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers"
  - title: "While Amazon blocks AI agents, Walmart rolls out the welcome mat (TechCrunch)"
    url: "https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/"
  - title: "Walmart launches tools for AI agents to shop for customers (Reuters via KSL)"
    url: "https://www.ksl.com/article/51639372/walmart-launches-tools-for-ai-agents-to-shop-for-customers"
upstream: "aidailybrief/2026-10-22"
draft: false
---

## The Takeaway
If an agent can spend a customer's money, give it its own identity inside the customer's account, a cap the customer sets, and no access to payment details. Then a mistake costs no more than the cap and can be undone.

## The details
- On 2026-10-21 Walmart [announced Agent Profiles](https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers), rolling out within a month. Each agent gets its own profile in the customer's account, and its purchases show up separately from the customer's own orders.
- Approval is on [by default](https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers). Customers can instead let an agent buy up to a limit such as $50, $100 or $200, and Walmart "may require additional approvals" even under that limit.
- Walmart's [terms for agents](https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers) bar them from receiving card details or changing payment methods, from acting beyond what the shopper intends, and from seeing more data than the task needs. Agents that break the terms are blocked.
- Agents connect through the Agent Gateway, an [MCP (Model Context Protocol) server](https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers) that starts as a beta for companies and developers. Walmart's returns process applies "including if an agent doesn't act as intended." Meanwhile [Amazon has been blocking](https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/) third-party shopping agents.
- Customers can [revoke an agent's access at any time](https://www.ksl.com/article/51639372/walmart-launches-tools-for-ai-agents-to-shop-for-customers). Reuters reports the program is open to all account holders, with no Walmart+ membership needed.

## Why it matters
Walmart [likens this to adding an authorized user to a credit card](https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/). It is a sound default for anyone building purchasing agents or the merchant APIs behind them. A separate identity, a cap, no payment access and a way to undo mistakes limit the damage a confused or hijacked agent can do. The caveat: Walmart has [described the rules but not the mechanism](https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers). Nothing published yet shows how "shopper intent" is checked, or whether the caps rely on OAuth scopes, delegation tokens or server-side rules. So enforce your own per-agent cap and confirmation step on the agent side too, and don't rely on the merchant's checks alone.

[Access & Identity](/guide/access-and-identity/)
