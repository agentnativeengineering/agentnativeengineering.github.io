[warm] Ninety-six percent of engineers don't fully trust the code AI writes. Half ship it anyway. [curious] So when an agent does the work... what's the part that's still yours?

[warm] This is the Agentic Daily Brief.

Now, um, the loudest thing overnight came out of China. Moonshot AI shipped Kimi K three — an open model with two-point-eight trillion parameters, the biggest open-weight model yet to come out of a Chinese lab. In its own benchmarks it's brushing right up against the top closed models, and even beating a few of them. [curious] The catch? It's noticeably pricier than the last one — Moonshot's basically saying the era of dirt-cheap Chinese AI is over. Full weights land on the twenty-seventh.

One more headline, and it matters if you've ever wanted an agent to actually do things for you — uh, book a flight, manage an account. OnePassword now lets Anthropic's Claude use your saved logins without ever seeing the passwords. It slips the login and the two-factor code through a channel the model can't read, and you approve each task with a fingerprint. Handing an agent your credentials safely has been one of the big blockers, and that's a real crack in it.

Here's a number that sets up the whole show. A survey of a hundred and fifty-seven companies found half of them had already shipped an agent that passed every internal test... and then failed a real customer in production. Passed the exam, flunked the job. [pause] Which lands us right on a question Addy Osmani has been chewing on.

So picture the two-a.m. page. Your agent followed the runbook exactly, and something still broke. [curious] Who answers for it? Osmani, in a talk this week, gave a line I keep coming back to. "The agent can follow your runbook," he said, "but it can't inherit the consequences."

Think about what that actually means. The agent can investigate, write the code, run the tests, file the report. What it can't do is accept the risk. It owns no blast radius. When the questions come — who understood the policy, who signed off — an agent isn't in the room.

But the trap he flags, [surprised] that one honestly stopped me. A Wharton study found that when the AI was wrong, seventy-three percent of people went with the wrong answer anyway — and felt more sure doing it. He calls it cognitive surrender. Borrowed confidence. You stop forming your own view because the machine sounds certain.

His rule is blunt. Explain it, or don't ship it. Not that a person types every line — [thoughtful] that ship has sailed — but that someone understands the change well enough to defend it. Because making generation cheaper doesn't make review any cheaper. The agent got faster; the person still has to own the verdict, right?

Okay. So if the durable job is owning the call, what does the agent actually need from you to be any good? [curious] Turns out, not more intelligence — or rather, not the kind everyone keeps chasing.

Prukalpa Sankar, who founded a data company called Atlan, gave a talk that reframed this for me. Her team could stand up a new agent in about five minutes. But giving it the business context to be accurate? That, she said, took forever. Over six months they built around three hundred of these skills — little packets of know-how — feeding forty agents.

Then the skills started rotting. [surprised] One agent's competitive research fed another's positioning, which fed the sales pitch. Every time one learned something new, it quietly broke the one downstream. Marketing changed the story, and the website's sales agent? Still pitching last quarter's version. Nobody knew which agent was running on stale truth.

Her point cuts deep. Model intelligence has jumped something like a thousandfold in a decade. The messy business context — the playbooks, the norms, the stuff in the head of an analyst who might quit next week — has barely budged. [slow] That gap is why only about one in five AI projects ever reaches production. The blocker was never the model. I mean — it's the knowledge you never wrote down. So she treats context like code: versioned, owned, with a maintainer, so you always know what broke and who fixes it.

One more story before we get out. Let's talk about the wiring — the plumbing that plugs agents into your tools and data. There's a standard for it called MCP, and this week its next spec did something you rarely see. It removed things.

Three features, gone. And the reason is the interesting part. Take one of them: it let a server ask the client to please stay inside certain folders. Sounds like a guardrail, right? [surprised] But the client didn't have to listen. It was a polite suggestion dressed up as a boundary. So the authors pulled it — along with two others that just overlapped tools already doing the job better.

[thoughtful] The principle underneath is worth stealing. A protocol should only carry what it can actually enforce. Guidance that looks like a rule, but isn't one, is worse than no rule — because people trust it. Nothing breaks today; the change is advisory. But it's a rare bit of discipline. Shrinking on purpose, so the wiring only promises what it can keep.

Before you go, one small thing worth trying this week. Pick one agent you lean on. Ask yourself the Osmani question: if it shipped something wrong tomorrow, could you explain the change well enough to defend it? If the answer's no, you don't have an agent problem. You have an ownership gap. Close that one first.

One talk for the drive home, if you want it — Zhengyao Jiang of Weco has a good one. His autonomous research agent, Aiden, actually topped a real OpenAI hiring challenge, out-scoring the best humans. But his takeaway isn't "the agents win." It's that as machines get good at execution, the human skill that gets more valuable is designing the evaluation — deciding what "good" even means. Humans move up the stack, he says, not out of it.

So, one thing I'd love back from you. If you run an agent in production — what's your "explain it or don't ship it" line? Where do you draw it? I read every reply.

We opened asking what part of the work is still yours when the agent does it. [warm] Three answers today, really. The verdict you can be answerable for. The context only you can keep current. And the boundary you can actually enforce. The agent runs straight through all of it — [slow] but it can't stand behind any of it. That part's still yours.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
