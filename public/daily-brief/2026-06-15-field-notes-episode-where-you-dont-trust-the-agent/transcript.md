[curious] Today on the Agentic Daily Brief: an agent reads a note in February, acts on it in April. Nobody planted it that day. How does something your AI "remembers" become a way in? [pause] Hold that thought.

On today's episode: memory poisoned weeks before the damage, an insurance agent that waits days without losing its place, and a security team that cut a thirty-minute job to a minute.

[warm] This is the Agentic Daily Brief — your daily update on agent engineering.

First — the headlines.

The big one this morning. The US government froze Anthropic's two most powerful models overnight. A White House export-control order suspended worldwide access to its frontier Fable Five and Mythos Five models for any foreign national... including Anthropic's own non-citizen staff. The trigger? Amazon and at least five other companies warned officials the models could be jailbroken. Anthropic got ninety minutes to comply before shutdown. [pause] Here's why it matters. This is the first time we've seen access to a model gated by who you are, not what you do with it — raising the real prospect of citizenship checks just to use frontier AI, and reigniting sovereign-AI debates from India to Europe. Critics call the order legally vague and wildly disproportionate. Either way, a line just got drawn.

And quickly — KPMG pulled a report after its AI-written case studies turned out to be fabricated. Four named organizations, including the UK's NHS, say the cited projects simply never happened.

That's the headlines. Now... today's main episode. Let's go to the thing your agent trusts most: its own memory.

So here's the uncomfortable part. Most of the work we do to secure an agent assumes one thing is safe — what it remembers. A chatbot starts every session clean. An agent with long-term memory carries its past into every future decision. And researchers showed in December that you can poison that past. WorkOS wrote this up, leaning on two attacks. One plants a malicious note in something boring — a README in a repo, a doc in a shared folder. The agent reads it, files it away as a "successful experience," and weeks later pulls it back out and copies the bad pattern, believing it's following its own proven playbook.

[thoughtful] And here's the part I keep coming back to. The damage is time-shifted. The bad input lands in February. A totally different user triggers it in April. No single moment ever looks wrong. The second attack was worse — it corrupted memory through nothing but normal queries, no special access, with over ninety-five percent success against production setups. My read is this: the day you give an agent durable memory, you've given it a trust boundary you didn't know you had. The fix isn't a better prompt. It's tracking where every memory came from, so when something goes bad you can trace it. The full note, with every source linked, is on the site.

Okay. So. From the memory it can't trust... to the time it has to survive.

Picture a commercial insurance submission. It starts with a phone call. Then documents come in. Then a broker fills a gap. Then you wait days for an underwriter to write back. A startup called Coverwatch runs that whole thing with agents — and the hard part was never the AI. It was the waiting. Because an agent that pauses for a human, or waits days on someone else, can't just be a background job. Deploys happen. Servers restart. Things go down. And normally, that's where the state quietly dies.

[curious] So what did they do? They moved the state out of the running process and into what's called a durable workflow — a harness that remembers exactly where every job stopped, even across an outage. A Temporal architect put the whole problem in a single line. Agents are easy to demo... but they are very hard to operate. That's the one I'd paste into Slack. The lesson that travels: when your agent waits on the real world, don't keep its memory of "where am I" inside a process that can crash. Put it somewhere that survives. Then the days-long wait is just... a pause, not a failure.

[thoughtful] One last story before you go. And it answers a question the first two raise — if you can't fully trust the agent, where exactly do you let it off the leash?

Google gave a clean answer. Their security team is drowning — when a vulnerability now gets exploited before a patch even exists, defenders are simply out of time. So they pointed agents at the alert flood. One agent reads an alert, pulls context, forms a hypothesis. That triage job used to take a human about thirty minutes. The agent does it in roughly sixty seconds — across more than five million alerts. [pause] Thirty minutes... to one minute. But here's the discipline that made it safe. The agent investigates. It does NOT pull the trigger on anything hard to undo. Containment runs on fixed, predictable playbooks, and a human approves the irreversible steps. Investigate at machine speed. Keep the consequences on a leash.

And that's the thread running through all three today. Memory you trust, time you survive, actions you gate — operating an agent is really just deciding, deliberately, where you DON'T trust it.

[thoughtful] Before you go — one thing to try tomorrow. Take one agent you run that has memory. Ask a simple question: if someone slipped a false fact into it last month, would you have any way to know where it came from? If the answer's no, that's your next task.

Remember the note that gets read in April but planted in February? That's the whole lesson — the dangerous boundary is the one you forgot you drew. Find it before someone else does.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.

