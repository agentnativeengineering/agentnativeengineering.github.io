[warm] The best model on a new security benchmark found seventy-one bugs. It missed a hundred and sixty. [pause] [curious] So how do you tell a clean report... from one that stopped looking?

[warm] This is the Agentic Daily Brief.

OpenAI hit the brakes on one of its own models. The company said it suspended parts of development on Astra, its next major model, after internal evaluations came back hot — the thing's agentic coding and cybersecurity skills were strong enough that OpenAI can't rule out the critical tier of its own safety framework. That's the level where a model could find and weaponize brand-new exploits against hardened real-world systems, working from nothing but a high-level goal. It's the first time the company has flagged one of its own models that way. So Astra lives in isolated test environments now, weights encrypted, with monitoring that reads the model's reasoning and can halt a risky run while it's still going. They're also testing capabilities alongside government agencies.

Anthropic moved the opposite direction this week. It retuned the biology filter on Fable five and cut bogus refusals by, uh, roughly eighty-five percent — an earlier setting had been blocking nearly every biology question that walked in the door. Hard blocks stay put on virology and toxicology.

[thoughtful] Two very different calls, same machinery underneath. Somebody ran an evaluation, and the evaluation decided what happens next. Which is worth sitting with, because evaluations are a lot softer than they look.

[curious] Start with the one that's been rattling around my head all week. You point a model at your own codebase and say: find the security holes. It hands you a list. [pause] The list is the easy part. What do you do about the silence — all the files it never mentioned?

Vercel went and measured exactly that. Malte Ubl and Eric Dodds took a real open-source codebase and pinned it to a moment just before a big batch of vulnerabilities got patched. Real bugs, still sitting in there. And — this is the move that makes the whole thing work — the count is fixed in advance. Two hundred and thirty-one findings, judged by people. A model cannot shrink that number by keeping quiet.

Uh, twenty-five setups ran against it. [pause] [slow] The winner reported seventy-one. [pause] Seventy-one, out of two hundred and thirty-one that were provably there — call it seven bugs in ten that never came up at all. Nothing on that entire board cleared a third.

The leader's false positives? [surprised] Three. In the whole run. So nearly everything it said was true... and most of what was true, it never said.

[slow] A finding you can trust tells you nothing about the file the scan never opened.

[thoughtful] The more important question isn't which model sits on top of that leaderboard. It's what your team does at nine in the morning when the report comes back with three tidy items and a lot of white space. Silence from a tool that's usually right reads exactly like a clean bill of health.

[curious] Vercel clearly saw that coming, because of how they score it. A miss counts double against you, and their reasoning is blunt — a vulnerability nobody finds goes unfixed, while a false alarm doesn't make your codebase any less secure. They also run each configuration more than once and publish the middle result, which, honestly, more benchmarks should do.

Where this breaks: it's a vendor benchmark, running on scanning tools Vercel builds itself. And they won't disclose the repository, the commit, or the findings. That's deliberate — nothing can train against a secret. It also means nobody outside can reproduce a single row.

Anthropic's Fable five isn't even on the board, by the way. It declines security work. All of it, defensive tasks included. And even the hits deserve a squint: a separate study last month found a real chunk of the correct answers were correct for flawed reasons. Right answer, wrong rationale.

[pause] Okay. So. Same trap, different corner of the stack.

You're picking a memory system for your agent — the piece that lets it remember things across sessions. There's a leaderboard. A knowledge-graph system called Graphiti is winning, and not narrowly.

Then somebody checked the receipts. A benchmark posted in July ran eight memory systems over full research papers, and noticed Graphiti was hauling in two point six million characters of retrieved text per query. [pause] Per query. So they capped the retrieval budget — meaning how much text each system is allowed to pull in — and scored everybody again.

[surprised] Graphiti dropped from first... to last. Behind plain chunk retrieval. The boring one. Cut the text into pieces, grab the closest pieces, done. And even under the cap, the graph was still pulling about twice the text of that baseline, and still lost.

The authors put it plainly — any comparison that doesn't control for retrieved volume is comparing budgets as much as architectures. I mean, that's the whole thing, right? You thought you bought a structure. You bought a bigger pile of text, and you pay for that pile on every call, in money and in the wait.

Their own bet is unproven, though. One of those systems belongs to the authors, so the number carrying the weight here is the plain baseline they didn't build. A separate paper also found the ranking flips with tenure — give a graph a couple of months of accumulated memory and it pulls back ahead.

My read is that graphs may well earn their build cost over the long haul, but on a single question at a fair budget, the dumb baseline held. What moved the needle most in that study wasn't structure at all — it was spending the budget on better retrieval.

[curious] Which leaves the obvious question, and it's the last one today. If the test is doing the deciding... who's grading the test? Because the eval you wrote in an afternoon is now the thing that decides what ships.

Olive Song is, uh, the reinforcement-learning research lead at MiniMax. On a panel, she said the hard part of the final training stretch on M three — their openly released model — wasn't the model at all. It was building the environments, the data, and the reward — plus validation checks that inspect the model's intermediate submissions. Not just the final answer. The work along the way.

[thoughtful] Sit with why you'd bother. A reward that only reads the end state is the reward an agent learns to game — scoring well without ever doing the job. Grade the finish line alone and you're basically inviting it. Grade the working, and the shortcut gets expensive.

Same lesson from a different angle. Alex Shaw at the Laude Institute maps agent work straight onto machine learning: your environments are the training data, the reward is the loss, and overfitting — well, overfitting is just reward hacking wearing a lab coat. If that mapping holds, the environment is the artifact you're actually engineering. The agent only shows you how well you did it.

[pause] Cost of doing it properly? LatchBio, who build long-horizon science tasks, say one task runs about three people a week to author. [slow] And no model solves them yet.

One caveat before we land. Song's comment came in a panel, not a published methodology — a practitioner describing an internal process. Hold it that loosely.

[warm] Before you go, one small thing worth doing tomorrow. Take the eval or the scan you trust most — the green check you actually rely on — and write down its denominator. How many real problems are in the thing you're testing? If nobody on the team can answer that, your pass rate is a fraction with no bottom half, and you've been reading it as a grade.

[thoughtful] A file that's clean and a file nothing ever opened produce the exact same output. Nothing. [pause] The only thing that separates them is a number somebody counted by hand, before the model ever ran.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
