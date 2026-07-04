[warm] Fifteen hundred serious software flaws in one month — three and a half times the record, found by AI hunting bugs itself. [pause] So what makes that flood useful, not just loud?

[warm] This is the Agentic Daily Brief.

Start with that number, because it's the whole mood of the week. Epoch AI charted roughly fifteen hundred high-severity flaws reported by twenty-one different organizations in June. [pause] More than three and a half times the previous monthly high. And it traces straight to AI models that now go looking for bugs by themselves — Anthropic's program alone has reportedly surfaced over ten thousand serious flaws. The problem isn't that they're wrong. It's that they're finding holes faster than anyone can patch them.

[thoughtful] Meanwhile, Mistral put out a free, open-weight model called Leanstral that writes formal, machine-checked proofs — and it reportedly beat one of Anthropic's top models on a finance-math test at roughly one-seventh the cost. So the tools are getting sharper AND cheaper at the same time. Which sets up the real tension I want to sit with today.

[curious] So picture this. You hand one of these models your own codebase and tell it — go find the dangerous bugs before someone else does. That's exactly what the security firm Trail of Bits did, with a new OpenAI model built for security work. They pointed it at zlib. [pause] If you've never heard the name, zlib is the little compression library sitting quietly inside... [slow] basically everything — your browser, your phone, half the internet's plumbing.

[surprised] And here's what got me. They didn't, I mean, tell it how to hunt. The obvious move is to read the source code — but zlib has been picked over by experts for decades. There's almost nothing left to find by reading. The model, uh, worked that out for itself. Decided reading was a waste, and instead built its own bug-hunting lab in a single day — the kind of setup that used to take a skilled researcher weeks.

[thoughtful] But the detail Trail of Bits actually cared about wasn't the speed. It was one moment where the model found a crash... and then threw it away. [pause] Called it noise. Because that particular crash could never actually be triggered in the real world — it was real, but unreachable. And that's the whole game, right? An AI that reports every technically-valid crash just buries the maintainers — the volunteers keeping this stuff alive — under junk they have to sort by hand. The signal came from a rule baked into the goal: only bugs someone could really reach count.

[slow] The value of an agent bug-hunter lives in the rules you give it about what counts — not in how many crashes it can trigger. [pause] The tooling used to be the moat. That's gone now. What's left, the thing you actually own, is the discipline you write into the objective.

[curious] Fine — so the model can find the bug and know which bugs matter. Good. But there's a second question hiding underneath, and it's a nastier one. When one of these agents actually acts on something live — who did it, exactly, and were they allowed to?

[thoughtful] This one comes from Solo.io, working with a stack of big telecom names — uh, Telefónica, Vodafone, and others — letting autonomous agents operate on real, live network gear. [pause] Now sit with the stakes there for a second. These aren't agents suggesting an edit in a sandbox. They can change the network your phone call is running on. [surprised] And agents almost never act alone — one plans, hands off to another, which calls a third across the system.

[curious] So when something goes wrong, "the AI did it" is a useless answer. Which agent? Acting under whose authority? Allowed to touch what? Their whole point — and honestly it's the line I keep coming back to — is that before you ask how CAPABLE an agent is, you have to be able to prove which one acted and what it was permitted to do. [pause] Otherwise you don't have autonomy you can trust. You've got fingers-crossed automation.

[thoughtful] The way they did it — give every single agent its own verifiable identity, like a badge it can't fake, and check what it's allowed to touch at the door, not in the instructions. So a hijacked agent gets stopped at its boundary, and the record of what it tried survives. [warm] I'll be fair, though — this was an award-winning demo across a few clusters, not something running the whole phone network tomorrow. The idea is what travels: treat each agent as its own accountable identity, whatever gear you're on.

Okay. Away from live networks, into something much quieter — and, honestly, more surprising to me. What if the way you've been steering these models is now... holding them back?

[thoughtful] Anthropic says it cut roughly eighty percent — um, eighty — of the system prompt behind Claude Code — the standing set of instructions that shapes how a coding agent behaves. [pause] Eighty percent, gone. And the reason, from an engineer there named Tariq Shihipar, flips the old instinct on its head. For years the move was to add MORE — more examples, more "never do this" rules. [surprised] His take? With the newest, most capable models, those examples start to constrain the thing. His words — it's "more imaginative than the examples we give it."

[curious] Think about what that means for anyone building on these models. That careful example you wrote to show the model what good looks like? [pause] On a capable-enough model, it can pin the output BELOW what the thing would've done on its own. You're not guiding it. You're capping it.

[thoughtful] Now — the honest limit here. This is one engineer describing one internal setup, not a clean before-and-after you can go reproduce. And he's careful to say prompt length isn't a straight line — it grew as models got better at following instructions, and it's shrinking again now. So the lesson isn't "shorter always wins." The real move is to test it on your own work: strip the examples and the hard rules, and check whether the quality actually holds before you trust that less is more.

[warm] Step back across all three. A model that hunts bugs, but only counts the ones that matter. An agent on a live network that has to prove who it is. And a prompt that got smaller because the model outgrew the guardrails. The through-line? The raw power kept climbing — and the work quietly moved to the judgment around it. What counts, who's accountable, when to get out of the way.

[curious] Here's one thing worth trying this week. Take the longest, most rule-heavy prompt you've got — the one crammed with examples and "never do this" lines. Pull out one example. Run your real tasks. [pause] See if the quality holds, or maybe even rises. It's the cheapest way to find out if your guardrails are helping... or quietly holding the thing back.

And if you want the idea underneath all this, there's a good short talk from How I AI, building a repeatable benchmark to replace gut-feel model checks. The takeaway that stuck with me: [warm] stop trusting the vibe, and measure the model against the tasks you actually care about. Same spirit as everything today — the judgment is the job.

[warm] Back to that flood we opened on. Fifteen hundred flaws in a month, found by machines that never tire. [pause] The models got scary good at finding the holes. What still had to be built by hand was everything around it — which bugs count, who's allowed to act, and when to trust the thing enough to let go.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. See you next time.
