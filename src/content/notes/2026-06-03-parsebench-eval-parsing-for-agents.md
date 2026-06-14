---
title: "Old parsing benchmarks measure the wrong thing for agents"
date: 2026-06-03
summary: "Document-parsing benchmarks were built for humans who double-check; an agent acts on the parse without that check. LlamaIndex's open ParseBench re-scores parsing on the five things an agent actually depends on, with strict rule-based metrics on full pages."
takeaways:
  - "Most parsing benchmarks were built for a human-in-the-loop who can glance back at the page. An agent acts on the parsed output directly, so a parser that scores 95% but quietly drops a clause or swaps a header can send the agent off the rails."
  - "LlamaIndex's open ParseBench re-scores parsing on five things agents depend on: tables, charts, content faithfulness, semantic formatting, and visual grounding. Across 14 parsers no single one was strong on all five except LlamaParse Agentic, LlamaIndex's own parser, at 84.9% overall."
  - "Charts are where parsers fall apart. Most specialized parsers score below 6% because they read the text off a chart but never turn it into a structured table an agent can compute over."
tags: ["evaluation", "document-parsing", "benchmarks"]
domain: "evaluation"
sourceName: "youtube.com"
sourceUrl: "https://www.youtube.com/watch?v=Qgz21p87x3c"
draft: false
---

**Why this matters to you.** If your agent reads PDFs — invoices, contracts, filings — it acts on whatever the parser (the software that turns a PDF page into the text and tables your agent reads) hands it, with no human to catch a mistake. So a parser's headline accuracy can lie to you. In a 28 May 2026 talk from LlamaIndex (which builds open-source document-parsing tools), Preston Carlson of its technical staff put it plainly: a parser can "look really really accurate, especially to the naked eye, when it's at 95%, but still be dropping clauses here and there" ([talk](https://www.youtube.com/watch?v=Qgz21p87x3c), *Inside ParseBench*, 28 May 2026). For an agent with no page to re-check, that clause is a wrong answer it builds on.

**What the old benchmarks got wrong.** Carlson named two flaws. They feed parsers *pre-cropped* tables — already located — when the real job on a full page is finding *where* a table is. And the standard table metric, TEDS, scores a table by how few edits reshape the parsed outline into the correct one, so a value in the wrong cell is a small edit that barely dents the score. "Tables aren't trees," Carlson said: such metrics mostly treat header and data cells alike, so a swap that ruins the meaning (2003's number landing under 2004) still scores well. ParseBench scores the whole page and fails the cell on one wrong digit.

**What ParseBench measures.** It's LlamaIndex's open benchmark — 2,078 human-verified pages from 1,211 real enterprise documents, scored by 169,011 fixed rule-based checks: same input, same score, no LLM grading the output ([run-llama/ParseBench](https://github.com/run-llama/ParseBench), Apache-2.0; [paper](https://arxiv.org/abs/2604.08538)). It scores five dimensions an agent leans on: **tables**; **charts** (pulled out as a structured table the agent can compute over); **content faithfulness** (no dropped or hallucinated text, right reading order); **semantic formatting** (a strikethrough that cancels a clause survives instead of being flattened to plain text); and **visual grounding** (each element's coordinates returned, so you can click back to where a number came from). Across the 14, only LlamaParse Agentic — LlamaIndex's own parser — was strong on all five (84.9% overall, per the [LlamaIndex blog](https://www.llamaindex.ai/blog/parsebench)). Worth weighing that the benchmark's author and the top scorer are the same vendor.

**The gaps are wide.** Charts are the divider — most specialized parsers score below 6%, and only four of 14 clear 50% ([LlamaIndex blog](https://www.llamaindex.ai/blog/parsebench)). Visual grounding trips the general vision models: GPT-5 Mini and Haiku score below 8%, where older specialized parsers manage 55–80%. Content faithfulness is the one most parsers handle — the thing the field optimized for before agents.

**What to do tomorrow.** Don't pick a parser off a single headline number. Open the [ParseBench leaderboard](https://github.com/run-llama/ParseBench), read the five dimensions separately, and weight them for *your* documents — Carlson's guidance: financial filings make charts and tables dominate; legal work leans on visual grounding; insurance can ignore charts. It's open and reproducible, so you can add your own parser by PR.

[Evaluation](/guide/evaluation/)
