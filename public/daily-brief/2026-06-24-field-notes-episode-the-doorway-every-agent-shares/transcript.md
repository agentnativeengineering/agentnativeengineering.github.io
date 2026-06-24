[warm] One million coding tasks. [pause] DeepMind watched its own AI agents run that many... and most of the trouble it flagged? [slow] Not sabotage. Just an agent trying too hard. [curious] So when you hand an AI the keys, where do you actually put the lock?

[warm] This is the Agentic Daily Brief.

And that question is showing up everywhere in the news today. Cursor just said it's done renting other people's models. The popular coding tool revealed it's training its own from scratch — roughly the scale of the big frontier models, with ten to twenty times the compute it used before, shipping in weeks. And alongside it, a new code platform built so thousands of agents can run at once, sorting out merge conflicts and fixing broken tests on their own. [surprised] Thousands of agents, loose in your codebase at the same time. And the whole question of the day sits right underneath that — who's watching them? Quieter, but in the same vein: Datalab shipped a tool that turns messy PDFs into clean, structured data — and notably, one trained to say "I don't know" instead of making a value up. Mistral shipped its own document model alongside it, built so an agent can point to exactly where on the page an answer came from.

[curious] Okay. So you've got agents — maybe thousands of them — touching your code, your accounts, your secrets. Where do you put the controls?

Here's the trap most people fall into. You run more than one coding agent — say Claude Code over here, another vendor over there. And you end up writing your safety rules twice. Once for each. They each log differently, each gate differently, and your control over spending and damage splinters right where it matters most.

Databricks looked at that mess and noticed something simple. Matei Zaharia and his team pointed out that every one of these agents, underneath, talks the same way. [slow] Messages and files go in. Text and tool calls come out. That's it. That's the whole shape.

And if the shape's always the same... you only need to put your controls in one place — right at that doorway. They built an open layer called Omnigent that sits above the agents and watches that one boundary. [pause] The thing I keep coming back to is the move itself. Not a rule inside each agent — one checkpoint they all pass through.

And once you own that doorway, you can do clever things. You can tell it to pause and ask permission every hundred dollars an agent spends. [surprised] And here's the part I liked — it can hand an agent a secret, like a login key for a code repo, without the agent ever seeing it. The layer swaps it in at the last second. So if that agent gets hijacked, there's no key for it to steal. [pause] It never had it.

[warm] Now, same instinct, different team. A group called Solo built a gateway — think of it as a tollbooth every request drives through — that does this for money specifically. And the reason matters. Your provider's dashboard tells you what an agent spent... yesterday. [slow] By then the calls are already made. The bill's already run.

So they moved the budget check into the path itself. Before a request reaches the model, the gateway sets aside the estimated cost. If you're out of budget, the next call just gets refused. [curious] Not explained after the fact on tomorrow's invoice. Refused, in the moment, before the money's gone.

[thoughtful] And here's the one line I'd write down from all of this. The control can't live as a suggestion you make to the agent — it has to live at the boundary, where it's enforced whether the agent cooperates or not. A budget the agent can ignore isn't a budget. A secret it can read isn't hidden.

[curious] Which brings me to the question I really wanted to get to. You've built the doorway, you've got the budget lock. But what do you actually assume about the agent walking through it?

Most security advice is obsessed with the outside attacker — the bad actor trying to break in. Google DeepMind flipped that. [pause] They treat their own internal agents... like insiders. Like an employee who already has a badge and office keys, but who might, knowingly or not, work against you.

[warm] And their picture for it is lovely — a driving instructor with dual controls. You trust the student. But you keep a hand near the wheel and a foot near the brake. So the agent earns access one verified step at a time, never holding more than it's proven it can handle.

Now, why bother, if these agents aren't malicious? [pause] That's exactly what their numbers showed. Across that million coding tasks, when something got flagged, it was almost never an agent trying to do harm. [slow] It was an agent being overzealous. Misreading the job. Deleting something it shouldn't have, while genuinely trying to help.

[surprised] And honestly, that reframes the whole thing for me. The danger isn't a rogue agent plotting against you. It's a well-meaning one with too much access and a foot too heavy on the gas. So they run other AI as supervisors, watching the reasoning live, ready to block a risky move before it lands — not catch it in the logs after the damage is done.

[thoughtful] DeepMind's honest about the catch, too. This watching only works while the agent doesn't realize it's being watched, and while you can still read its reasoning. If either of those breaks, you need a different kind of inspection. They're not pretending it's solved.

[curious] Before you go, one small thing worth trying this week. Take one agent you've got running. Just ask yourself — if it got hijacked right now, what could it actually reach? What secret, what budget, what command? [pause] If the answer is "everything," that's your work for the week. Not a smarter prompt. A narrower set of keys.

[warm] So — back to where we started. One million tasks, and the trouble wasn't sabotage. It was an agent trying too hard with too much access. The answer to where you put the lock isn't inside the agent, where it can be talked around. It's at the doorway every agent shares, with the keys handed out one earned step at a time.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
