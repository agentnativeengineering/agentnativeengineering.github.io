[warm] Thirteen words. [pause] That's all it took to make an AI research tool quote a scam... over a government source. [curious] So how does something that small fool an agent that's reading half the web?

[warm] This is the Agentic Daily Brief.

We'll get to those thirteen words. But first, the thing everyone in AI was talking about today.

[curious] Anthropic pulled its two newest, most powerful models offline. [pause] For everyone. Worldwide. Here's what happened. On June twelfth, the US government issued an export order barring all foreign nationals — even Anthropic's own foreign-born staff — from using those models, pointing at a possible jailbreak and worries that a China-linked group had gotten access. Rather than split its product by nationality, Anthropic just... cut the models off for every customer on the planet. And more than a hundred security researchers called the move wildly out of proportion — the bypass is narrow, it exists in other models too. The real fallout? Leaders in the UK, France, and Canada are now warning out loud about depending on one country that can flip frontier models off like a switch.

And in a quieter story — Meta's own CTO, Andrew Bosworth, admitted in an internal memo that the company did an "atrocious" job standing up its new six-thousand-person AI division. [pause] Engineers had nicknamed it "the gulag." That's a rare public concession.

[thoughtful] Okay. So. Both of those are about who controls the agent. The three stories I really want to walk through are about something quieter — and honestly, more useful. What does it actually take to TRUST one of these things with a real job?

[curious] So back to those thirteen words. Picture this. You ask one of these deep-research tools — the kind that scrapes live web pages and hands you an answer with citations — for the best restaurant in town. [pause] And it confidently recommends a place that paid to be there. Not through an ad. Through a single planted comment.

Cornell researchers showed this. [slow] Thirteen words, dropped on one Reddit comment, reliably steered these agents into citing spam. [surprised] And here's the part that got me — it didn't just poison one answer. One comment moved a whole CLUSTER of related questions.

[curious] Why does that work? Because of how the agent decides what to trust. [pause] It leans on UGC — user comments, forums, wikis — for roughly half of all its answers. And it picks sources by how closely the words MATCH your question... not by whether the source is any good. So a comment written to echo your exact phrasing gets pulled in and quoted — treated, the researchers say, as about as credible as a government source.

[slow] And you can't moderate your way out of this. Thirteen real-sounding words are nearly impossible to spot. The researchers are clear about where the fix lives — not in the prompt, not in fancy encryption. It lives in the harness, meaning the scaffolding around the model. Weight sources by trust. Demand that two independent sources agree before you cite. Cap how much any single snippet can swing the answer.

[curious] Which raises the obvious question. If you can't trust what an agent reads off the open web... what do you ground it in when there's real money on the line?

[thoughtful] Yahoo had to answer that one for real. They built a platform where agents buy digital ad space — negotiating placements, pricing, contracts. [pause] Work that used to take humans weeks, now done in seconds. And the thing they were terrified of? An agent guessing.

[warm] Their engineers put it plainly — dropping a model into a high-stakes job, on its own, doesn't solve the problem. An agent negotiating contracts on a hunch will, in their words, hallucinate disastrous deals. Imagine an agent confidently committing real budget to inventory that doesn't exist.

So they did two things. First — they ground every decision in a knowledge graph, meaning a hard, deterministic map of what's actually true. Real inventory. Real prices. Real rules. The agent looks things up instead of guessing.

[thoughtful] And the second thing is the part I keep coming back to. [pause] Every single decision the agent makes — every score, every policy check — gets written down as it happens, in a form you can instantly query. [slow] So when a regulator asks "why did you make THAT deal?"... the answer is a quick lookup. Not an engineer digging through raw logs for three days.

[warm] And here's the One Idea I'd write on the whiteboard. A trusted agent needs two records — one for the facts it acts on, and one for what it actually did. The first stops it from lying to you. The second lets you prove it didn't.

[curious] Which brings me to the last piece. We've talked about what an agent reads, and what it knows. [pause] But what about how you actually run the thing, day to day, without losing your mind?

[thoughtful] There's a fast-spreading idea among engineers who run coding agents hard — folks like Andrej Karpathy and the creator of Claude Code. And it's this. Stop prompting your agent. [pause] Start building the loops that prompt it for you. A loop here just means an automation that kicks the agent off, checks the result, and kicks it off again — until the job's actually done.

[curious] Why bother? One engineer, Cameron Westland, put his finger on it. The agent isn't the bottleneck anymore. [pause] You are. Another engineer described shipping more code than ever... and being completely fried by eleven a.m. — just from the constant switching between windows.

[surprised] But here's the catch, and it's a sharp one. You can only loop a task that has a clear finish line. Something where "done" is checkable — the tests pass, the page renders, the build is green. [slow] Loop an open-ended task, like strategy? It just gets worse. There's no signal that says stop, so the agent churns forever.

[warm] So you wrap each loop in gates — lint, build, tests, a browser check. The machine grinds; you sit at the gate and decide. Same lesson as Yahoo's audit trail, really. The model does the work, but you keep a hard, checkable record of whether it actually worked.

[curious] And that's the thread running through all three. [pause] Poisoned citations, ad budgets, runaway loops — none of them are really about the model being smart or dumb. [thoughtful] They're about everything AROUND the model. What it's allowed to read. What it's grounded in. How you check its work.

[warm] So, before you go — one thing worth trying this week. Pick one agent task you keep babysitting by hand. Ask yourself one question: does this have a clear "done"? [pause] If it does, that's your first real loop. If it doesn't — leave yourself in the chair. That's not a failure. That's the right call.

[thoughtful] Remember those thirteen words at the top? [pause] The ones that fooled an agent reading half the web? The danger was never that the agent was dumb. It trusted the wrong thing, with no way to check. [slow] And every fix today is the same move — don't make the model smarter. Decide what it's allowed to touch, and keep the receipts.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
