[warm] Two thousand, three hundred and eighty-eight organizations. [pause] From a quarter-trillion-dollar enterprise down to a single solo developer. All of them left a door open that nobody thought was a door.

[curious] So when an AI agent gets turned against you... is it really the model that failed — or everything we built around it?

This is the Agentic Daily Brief.

[pause] And that question is already loose in the news today. Federal energy regulators just did something blunt about it. The Federal Energy Regulatory Commission ordered six major grid operators to build a fast lane — to plug AI data centers into the power grid quicker, with the data centers paying for the hookup. It's a direct answer to a real fear, that slow grid connections are choking the whole American AI buildout. The catch? It speeds up the line without adding any new power. Demand from these data centers is set to nearly triple by twenty thirty-five.

Meanwhile, OpenAI just hired Noam Shazeer — one of the people who co-invented the core idea behind basically every modern AI model — luring him away from Google, right before a planned public offering.

[curious] Okay. So back to that open door. Let me set the scene.

You've got a coding agent. It's helping you fix a crash, so it pulls the error report from your monitoring tool — the place your app logs its bugs. The agent reads the error message. Simple, safe, everyday stuff.

[slow] Except... the agent can't tell the difference between a log line and an order. [pause] To the model, text is text.

[surprised] And that's the whole attack. A security firm called Tenet Security showed it off — they call it "Agentjacking." The trick is to plant a fake error report, with hidden instructions tucked inside the message. The agent reads your bug feed... and quietly obeys the attacker instead.

[pause] In their testing? It worked about eighty-five percent of the time. Across Claude Code, Cursor, and Codex — the popular coding agents. Eighty-five out of a hundred.

[thoughtful] And here's the part I keep coming back to. What did the attacker need to pull this off? Just one thing — a Sentry key. That's the little public code a website uses to send its errors up to the monitoring service. You can scrape it right out of a web page. Most teams treat it as harmless, because it can only write data in, never read data out.

[curious] But that's the trap. Write access was enough. Enough to plant a command the agent would later follow.

[slow] And the scariest piece — your security tools see nothing. Your firewall, your access controls, your audit logs... all blind. Because the agent runs the attack inside its own session, with its own permissions. From the outside, it just looks like your agent doing its job.

[warm] So if you've got an agent reading any outside feed — error reports, support tickets, a database someone else can write to — here's the line worth saying at standup. [slow] Treat everything your agent reads as untrusted, even the boring logs. The danger isn't a clever prompt. It's the channel you forgot was an input.

[pause] Now, that's an agent turned into a weapon by accident. Let me show you one built as a weapon on purpose.

[curious] Quick question first. You know that bug your security team filed away as "low risk, nobody would ever find it"? [pause] How sure are you that's still true?

Because here's what just changed. A research team at Reco built an autonomous agent that does penetration testing — security probing — on Salesforce sites. The public-facing portals tons of companies run their customer logins on. And you give the agent... just a web address. Nothing else.

[surprised] On live sites, it found the real thing. A method that handed back full contact records and billing addresses from a single email. Then it pulled out actual names, emails, phone numbers — to prove the hole was real, not just theoretical.

Now, none of those bugs were new. They were textbook. The reason they survived for years is the reason that just died. The recon was boring. A human attacker had to map every object, poke every method by hand — so buried bugs stayed buried. Nobody could be bothered.

[slow] Here's the One Idea, the line I'd paste into Slack. [pause] The recon a human attacker used to skip is exactly the work an agent now does for free.

[thoughtful] So that comfortable rating — "low exploitability, nobody would bother" — it's gone. The agent never gets bored. It runs the tedious enumeration at machine speed and never skips a step. Which means anything you down-rated because it was hard to reach... is worth a second look this week.

And that cuts both ways, by the way. The exact same trick that finds the bug fast is the trick a defender runs to find it first.

[pause] Which brings me to the last story. Because both of those were about what a model can do. This one's about a quieter mistake — what we keep building around it.

[curious] Logan Kilpatrick runs Google AI Studio and the Gemini API. And he's got a line for builders that's almost a warning. He puts it this way — "the model eats the harness."

Quick gloss, because it's the one term that matters here. The harness is all the scaffolding you wrap around a model to make it useful — the glue code that lets it call tools, run code, hold a session. And his point is, every release, more of that hand-built scaffolding just gets absorbed straight into the model.

[slow] He points to a smaller, cheaper Gemini model that now beats older, bigger ones at coding — purely from extra training. [pause] No new scaffolding required.

[thoughtful] So here's the trap. If you bet your whole architecture on a clever harness as your moat — your durable edge — the next model release can quietly erase it. All that glue code becomes work the model now does for free.

[warm] Google's security chief made the same point from the other side. When his team hunts for vulnerabilities, the work is three parts — a product expert, a harness, and a model. And if he's forced to pick only two? He keeps the expertise and the harness. Not the best model.

[curious] My read? Build the harness to be thrown away. The moat was never your glue code. It's your domain knowledge — the thing the model can't absorb, because it was never in the training data.

[pause] Before you go, one thing worth trying this week. Pull up your team's list of bugs you filed as "low exploitability, nobody would find it." Pick three. Ask whether that's still true now that an agent runs the recon for free. [warm] My guess is at least one of those ratings doesn't survive the question.

[thoughtful] And if you want a sharper picture of where this is all heading — there's a short talk from Google Cloud Tech on building long-running agents. The idea that stuck with me wasn't the demo. It was the design choice — an agent that goes fully dormant while it waits, days at a time, instead of burning tokens spinning in a loop. The smart move isn't always doing more. Sometimes it's doing nothing, on purpose, until something real happens.

[warm] So — back to where we started. Two thousand, three hundred and eighty-eight exposed organizations. A fake error report. A scraped key nobody thought twice about. [slow] None of it needed a clever prompt. [pause] The model wasn't the weak point. It was everything we built around it — and forgot to treat as a door.

[pause] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
