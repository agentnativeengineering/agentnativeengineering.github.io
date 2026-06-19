[warm] An agent that kept failing to cancel orders. [pause] The team's first move? Blame the model — tweak the prompt, drop the temperature. But what if the model was never the problem... so where does an agent actually break?

[warm] This is the Agentic Daily Brief.

[pause] And that question — is it the model, or everything around it — is playing out at the very top of the industry right now.

[curious] Here's the headline. At the G seven this week, world leaders pushed back on America's AI off-switch. After the US abruptly cut foreign access to Anthropic's most advanced models, leaders like France's Macron and India's Modi warned that any economy built on American AI now sits behind a kill switch Washington can flip overnight. So they started hashing out a "trusted partners" plan — durable access for select nations and firms. [slow] A fight over one company's exports just became a fight over who controls AI itself.

And in a quieter note — OpenAI showed off a way to predict how a model will misbehave before it ships, by replaying old conversations and watching what it does. [pause] We'll get back to that idea — testing the model — because today is really about the opposite. The stuff around the model.

[curious] So let's start in the place where this gets concrete. A title agency. Now, title examiners — the folks who check property records before you buy a house — used to spend hours digging through county rules and state guides, jumping between systems. So Rocket Close, inside Rocket Companies, built an agent to do that digging for them.

And it worked. [pause] Calls and emails to their contact center dropped by about a third. But early on, the thing was slow. And here's the move I want you to notice. When an agent feels slow, the instinct is — get a faster model, right? [slow] They didn't.

[surprised] They made it three times faster... by cutting how many times it talked to the model at all. See, every time an agent stops, picks a tool, calls it, and waits — that's a full round trip. And they stack up. So they redesigned it to answer a question in one pass instead of five. [warm] Same model. A third of the wait.

[thoughtful] AWS, who wrote this up with them, put the lesson plainly — when an agent feels slow, count its round trips before you reach for a bigger model. [pause] That's the whole idea. The speed wasn't in the brain. It was in the plumbing.

[curious] Which lands us right on the question that title agency was quietly answering — if the model isn't the bottleneck, what is? [pause] And there's a community of people building agents who've been screaming the answer.

Picture an engineer in Bengaluru, at the first big summit on this stuff. [pause] She built a support agent. It kept failing to cancel orders. So she did what we all do — tweaked the prompt, adjusted the settings, blamed the AI. [slow] None of it worked.

[surprised] The real problem? The agent couldn't understand the tool it was supposed to use. [pause] Because here's the thing a lot of people miss. When an agent reaches for a tool — a database, an API, whatever — it doesn't read your documentation. It can't. It sees three things, and only three. The tool's name, a short description, and the shape of the data it expects.

So if that's badly written, the agent isn't confused — it's blind. [pause] She put it this way — "It's clearly not an intelligence problem. It's a problem about clarity." [warm] The interface IS the system.

And the failure mode that got me? [pause] A longer, wordier tool description will beat a shorter, better one. [surprised] Not because it's better — because more words give the model more to match against. So your bloated tool out-competes your good one. The description quietly rigs the choice.

[thoughtful] One engineer there — from a tools company called Arcade — said the most common mistake is people take a standard API spec, "wrap it, and call it an MCP." That's the open standard for handing tools to an agent. And in his words, that "gives it the utmost chances to fail." Because that spec was written for human programmers. The agent reads it raw.

[curious] So zoom out with me for a second. Faster agents — fix the round trips. Smarter agents — fix the interface. [pause] In both cases, the win was in the software around the model, not the model. [warm] And it turns out the entire industry just made the same bet, with a lot more money.

[curious] Because this June, the AI race split in three directions at once. [pause] And the part everyone assumed was the prize — the model itself — is starting to look like a commodity. Here's the number that stopped me. On one major gateway, a model called DeepSeek jumped from under one percent of usage... to seventeen percent. At about one percent of the spend.

[slow] Cheap, capable, and it swapped in almost overnight. The adoption leader now flips month to month. So if you wired your whole app straight to one provider, you've anchored yourself to the fastest-moving, most replaceable piece of the stack.

[curious] And watch what the big players are actually buying. OpenAI bought an agent-runtime startup. Other labs are snapping up the tools that wrap around models — the coding harnesses, the context engines, the identity layers. [pause] Nobody's getting rich selling the raw model. The value moved up, into the software you build around it.

So here's my read, and it ties the whole day together. Treat the model as the part you rent — and the software around it as the part you own. Route every call through one gateway you control, so swapping a model is a config change, not a rewrite. Keep your context, your tools, your guardrails in your own code. [slow] Because the model will change next month. Your layer shouldn't have to.

[curious] So, one thing worth trying this week. Next time an agent of yours misbehaves — before you touch the prompt or reach for a bigger model — go read your tool descriptions the way the agent reads them. [pause] Just the name, the description, the data shape. Nothing else. [warm] Ask yourself, honestly — could a stranger figure out what this does from only that? If not, you've probably found your bug.

[pause] An agent that couldn't cancel an order. A team that tripled their speed without a faster model. A whole industry quietly betting the model is the cheap part. None of it was about the brain. The agent broke where we built around it — and that's exactly where you fix it.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
