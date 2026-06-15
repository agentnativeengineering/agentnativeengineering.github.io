[curious] Today on the Agentic Daily Brief: an attacker poisons your AI's memory in February and triggers the damage in April. How do you defend a system lying to itself for weeks? [pause] Hold that thought.

On today's episode: the agent that trusts its own memory too much, insurance bots that wait days without losing their place, and security triage cut from half an hour to a minute.

[warm] This is the Agentic Daily Brief — your daily update on agent engineering.

First — the headlines.

Researchers behind a new benchmark called SWE-Explore — a team that includes Shanghai Jiao Tong University — published findings today on where AI coding agents actually break down. Here's the setup. When you ask a coding agent to fix a bug, it has to find the right code first. And the good news is, it does. Agents like Claude Code, Codex, and OpenHands reliably land on the correct file. [pause] But here's where it falls apart. Of the specific lines that actually need changing, they cover only about fourteen to nineteen percent. So they're in the right room, looking at the wrong wall. And swapping in a stronger model doesn't fix it. The repairs reliably fail when the agent can see fewer than half of the core code regions. The takeaway the researchers point to is almost counterintuitive — the answer isn't smarter filtering. It's reading MORE code, not less.

That's the headlines. Now... today's main episode.

[thoughtful] Let me start with the thing that genuinely unsettled me. You've built an agent with a long-term memory — it remembers what worked, so it gets better over time. Now... what if someone could write a false memory into it? Not hack it. Not jailbreak it. Just leave a note where the agent will pick it up and decide, on its own, to keep it.

That's the attack the security team at WorkOS laid out this month. Picture a harmless-looking file — a README in a shared repo. The agent reads it, summarizes it as a "successful experience," and files it away. Weeks pass. Then a totally different user gives the agent a similar task, it retrieves that poisoned memory, and it imitates the bad pattern — believing it's following its own proven playbook.

[curious] And here's the part that got me. One research attack they cite corrupted an agent's memory through nothing but normal queries. No special access. And it landed more than ninety-five percent of the time against real production setups.

So why is this so much harder than ordinary prompt injection? Two reasons. The damage is time-delayed — the bad input lands weeks before anything goes wrong, so no single moment ever looks suspicious. And the agent trusts its own memory. When the user says something, the agent stays a little skeptical. When it remembers something, it treats that as ground truth. That's the whole problem. The thing the agent trusts most is the thing the attacker rewrites.

And that hands us straight into the next question — what happens when an agent has to stay alive not for weeks of memory, but for days of real-world waiting?

Okay. So. Away from the attacker, into a San Francisco insurance startup. A company called Coverwatch runs AI agents that handle commercial insurance submissions. And one submission doesn't finish in a tidy little request. It starts with a customer call, the agent prepares the paperwork, then a human broker fills the gaps, and then... it waits. Sometimes days, for an underwriter to respond.

Here's the engineering problem nobody warns you about. Real agents wait on people. And while they wait, your servers redeploy, an API goes down, a process dies. So what holds the agent's place in line through all of that?

Coverwatch's answer was to stop treating the agent's work as a disposable background job and instead make the whole submission durable — its state lives outside the process, so it survives crashes and deploys and resumes exactly where it stopped. A Temporal architect's line stuck with me. He said agents are easy to demo, but they're very hard to operate. [pause] That gap — easy to demo, hard to operate — is the real story of agents in production right now.

And nobody is feeling that gap harder than the people defending against attacks. Which brings me to Google.

[curious] Quick question before the number. How long does it take a human analyst to triage a single security alert — read it, pull the context, decide if it's real? About thirty minutes. Now Google put a Gemini-native agent on that job. [pause] It does it in roughly sixty seconds. Across more than five million alerts.

But the part that actually matters isn't the speed. It's where Google drew the line. The agent does the open-ended investigation — the reading, the hypothesis-forming, the stuff where being fast is cheap. But the moment you reach an action that's hard to undo — actually containing a threat, locking something down — a human approves it. The agent proposes; the person decides.

And honestly, that's the same lesson hiding in all three of today's stories. We keep wanting agents to be trusted, autonomous, on their own. But the teams shipping this for real are doing the opposite. They put the agent where mistakes are cheap and reversible — investigating, drafting, retrieving — and they put a human or a hard rule wherever a mistake sticks. The poisoned memory, the insurance bind, the irreversible containment. Same shape, three times.

[thoughtful] Before you go — one thing to try tomorrow. Pick one agent you run. Ask one question: if its memory or its state got quietly corrupted three weeks ago, would you even know? If the answer is no, that's your weak spot — start there.

Remember that attacker who poisons the memory in February and triggers it in April? That's the whole lesson today. The agent trusts what it remembers more than what you tell it — so the thing to watch isn't the prompt. It's everything the agent quietly carries forward.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.

