[warm] More than sixty pull requests. [pause] That's what one AI security model filed across nineteen open-source projects... in about a day. [curious] So when an agent does something that good — or something that costs a fortune — what's actually doing the work?

[warm] This is the Agentic Daily Brief.

And that question is playing out in the news right now. OpenAI just turned an AI model loose on the open-source code the whole internet runs on — a program they call Patch the Planet. In one early run, that model filed dozens of bug reports and fixes, and stood up a full bug-hunting lab in under a day. Work OpenAI's partners reckon would've taken a human expert two to three weeks. The point that matters for you — if you ship software, your dependencies just got a new kind of defender, and a new kind of attacker, both moving at machine speed.

Same week, a Japanese startup called Sakana AI shipped something quieter but pointed in the same direction. Their new system, Fugu, looks like one model from the outside — but underneath, it just routes each request to whichever model is best for that job. [pause] Hold onto that idea. Picking the right tool for each step, instead of throwing the biggest one at everything. Because that's the thread running through everything today.

[curious] Okay. So picture a coding agent pointed at a giant company codebase. A million files. And every single session, it does the same thing — it greps around. It searches blindly, hopes it lands on the right files, and basically re-learns the whole repo from scratch. [slow] Every time.

Augment Code spent two years on this exact problem. And here's the part that got me — they started out training their own model, then gave that up entirely. Augment Code's Jack Tamasic said competing with the frontier giants was a fool's errand. So instead they built what they call a context engine. They index the whole repo once. Then, for each request, they fetch just the right slice and hand it to whatever model you're using.

Their landmark customer is Adobe — a codebase so big, Adobe told them, that no other tool could understand a change touching several areas at once. [pause] And the reason the blind-grep approach hurts so much is simple. The window can't hold a million files. So the agent either searches haphazardly, or you squeeze the context down — and every squeeze loses detail.

[warm] Here's the one line I'd write down from all of this. The job isn't to grep the whole repo into the window every time. The job is to retrieve the right context once... and stop paying to rediscover it. Index it, fetch what matters, move on.

[curious] Now, that's about not wasting the agent's attention. The next team was wasting something else — money.

Every time an agent calls a frontier model, the most capable, most expensive one... that costs you. And most of those calls don't need it. Think about an agent running a loop. Some steps need real reasoning. But a lot of steps are just predictable plumbing — and you're still routing every one of them through the priciest brain available.

Blue Yonder runs supply-chain agents at real scale — twenty-seven billion machine-learning predictions a day. Their AI lead Chris Burchett described the fix plainly. Big frontier models handle the reasoning and the human conversation. But the inner loop, the repetitive grind, runs on a smaller, cheaper, domain-trained model they own. Faster, cheaper, more reliable — and it shields them from rising token prices.

[surprised] And there's a number here that genuinely surprised me. A team at Fireworks tested a cheap open worker model that only phones a frontier model for advice on the hard parts — less than one call per task. That setup beat the expensive frontier model running the whole job end to end. [pause] At roughly a third of the cost.

[thoughtful] So the move isn't "buy a smarter model." It's "use the expensive model only where it changes the answer, and run plain, predictable code for the rest." There was even a demo of a thousand agents running a marathon — and once the race starts, almost none of them call an AI model at all. Because they don't need to.

[curious] One last story before you go — and it lands on the exact same instinct. Spend the powerful thing only where it earns its keep.

GitHub had a problem inside Copilot's command-line tool. You'd ask it for a tiny change — a one-line edit. And instead of just doing it, the agent would spin up a helper, a separate sub-agent, to go search the repo. Then wait on it. Then take the handoff. Three steps for work that should've been one. The help had quietly turned into friction.

So the team did something I really liked. They didn't add a setting. They didn't swap the model. They read full agent sessions — actual transcripts of what the agent did — and found exactly where handing off work was pure overhead. Then they taught the main agent to just keep the small, focused stuff itself, and only delegate the big, sprawling jobs.

[slow] The result? [pause] Tool failures per session dropped about twenty-three percent. Same model. Just less delegating. As GitHub's team put it — delegation is powerful, but it isn't free.

[reflective] And that's really the whole episode in one breath. Across a giant codebase, a cost-conscious loop, and an over-eager command-line agent... the win was never a bigger, fancier model. It was being deliberate about the expensive thing — the model's attention, the frontier call, the handoff — and spending it only where it actually changes the outcome.

[thoughtful] So here's the one thing worth trying this week. Take an agent you run on a real repo. Watch what it does on a simple task. Does it grep the whole tree? Does it spin up a helper for a one-line change? Just watch one session, start to finish. The waste tends to be embarrassingly obvious once you actually look.

[curious] So — back to where we started. Sixty-some pull requests in a day, a router that quietly picks the best model, an agent that learned to stop delegating. The pattern underneath all of it is the same. The power was never the headline. Knowing exactly where to spend it was.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
