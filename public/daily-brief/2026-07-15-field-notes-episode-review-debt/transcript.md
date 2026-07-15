[curious] One million pull requests, all written by AI. Three times the security holes a human would've left. [pause] So when writing code costs almost nothing... what actually costs you now?

[warm] This is the Agentic Daily Brief.

Let's kick off with the news, because the hardware and the money both moved overnight.

OpenAI's first physical device is, uh, not what most people were guessing. According to Bloomberg's reporting, it's a screen-free smart speaker — pitched inside the company as a humanlike AI companion that lives in your home. It syncs with ChatGPT, it's got a personality, it reaches into your email and your digital life to make itself feel personal. And here's the odd part: it has moving mechanical parts, so it can physically move. Built by ex-Apple iPhone and Mac engineers. The bet's pretty clear — OpenAI wants a thing on your counter, not just an app on your phone.

[thoughtful] Meanwhile, in the regulation fight, DeepMind's Demis Hassabis is calling for a global watchdog for frontier AI — US-backed, modeled on the finance industry's own regulator, one that would review powerful models before they ship. He wants it running this year. The White House has signaled it wants no "FDA for AI." So that's a real collision brewing.

A few more, quick. Reflection AI, an open-model startup, just signed a one-billion-dollar deal for Nvidia chips through the European firm Nebius — part of this whole scramble to own your AI instead of renting it. Apple opened its rebuilt Siri to everyone in the iOS twenty-seven public beta. And a group called PrismML squeezed a twenty-seven-billion-parameter model down small enough to run on a laptop... or even a phone.

[curious] Okay. Now to the thread that actually ran through my whole week.

Picture this. Your coding agent is fast. Genuinely fast. It opens pull requests quicker than your team has ever shipped. Dashboard's green, throughput's up, everyone feels like they're winning. [pause] And that feeling? That's the trap.

At the AI Engineer World's Fair this month, the keynote speakers all landed on the same uncomfortable point. Raw model smarts is not the bottleneck anymore. One speaker put the gap between the best teams and the worst at thirty times. And she argued it comes down to one thing — not which model you picked. Reliability.

Here's the number that stopped me. One team reviewed a million AI-written pull requests. Well — reviewed and picked them apart. And the AI code carried about three times more auth-bypass holes. That's code that quietly lets a request skip the check that's supposed to ask, "wait, are you even allowed to do this?" [slow] Three times more. Same plausible-looking code. Three times the door left unlocked.

[thoughtful] And that's the whole thing, right? Models are great at plausible now. Plausible reads fine. Plausible passes the eyeball test. But plausible isn't safe, and it isn't correct — and the early speed you felt just quietly turns into debt you pay later.

[warm] The more important question isn't how fast the agent ships. It's whether anyone can still vouch for what it shipped.

Which brings me to the talk that put a hard number on exactly that gap.

[curious] Sachin Gupta is an engineer at eBay, and he's got a name for the thing nobody's tracking: review debt. It's the widening gap between the code your agents crank out and the code humans have actually read — or rather, actually understood and trusted.

He pulled the receipts. GitHub's own October report covers nearly every public pull request on Earth. Commits climbed twenty-five percent in a single year. [surprised] And over that same year, the review comments? Down twenty-seven percent. Production went one way. Attention went the other. Same twelve months.

[slow] Gupta said it in one line. The metrics you celebrate — pull-request count, size, cycle time — they tell you the speed of production. They do not tell you the speed of trust.

Once you hear that, the vanity numbers just fall apart. Count goes up when one clean change gets split into seven messy ones. A bigger average pull request isn't more value — it's bloat. Cycle time drops... because reviewers stopped pushing back. Every green number can be hiding its exact opposite.

[curious] So what did he actually do about it? He scores every pull request, zero to a hundred. Not with a model judging it — with five plain, deterministic signals. How big and tangled the change is. Whether the tests prove anything real. How many people's territory it touches. Whether the author bothered to write down why. Stuff you can check and explain, every single time.

Then he ran it across more than five hundred real pull requests. [pause] And here's the part I did not see coming. The review burden didn't track whether AI wrote it. It tracked how big and how complex the change was. [surprised] So the AI flag isn't the villain. A gnarly change is a gnarly change — whoever, or whatever, typed it.

[thoughtful] Which flips the fix on its head. The answer isn't "block the agents." It's the old discipline the score just drags into the light: one logical change per pull request, tests that actually mean something, and an author — human or agent — writing down the why.

[warm] And I'll be straight about the limits, because Gupta is. Those big industry figures are aggregate benchmarks, not eBay's own books. The five-hundred-pull-request scan is a demo across public code, not a controlled study. And the score is triage, not truth — a low score means less needs your eyes, not that the code is right. It points you at the risk. It doesn't clear it.

[curious] There's a talk worth queuing up on this exact nerve. Philipp Schmid, over at Google DeepMind, gave one called "Don't Ship Skills Without Evals." His point: most of the reusable skills people are handing their agents are themselves AI-written and never tested — and shipping those blind is the same review-debt trap, just one level up. His move was to test the outcome, not the path the agent took to get there. And doing that pushed his valid-code rate up to nearly ninety percent. Test what comes out, you know, not how it got there.

[warm] So before you go, one thing worth trying this week. Pull your ten biggest merges from the last few days. For each one, ask a dead-simple question: could someone on the team actually explain why this code is right? Not "did it pass" — why it's right. Count how many get a real answer. [pause] That number, uh — that's your review debt. And now you've got it.

[thoughtful] Because that's the question we opened on. When the writing gets nearly free, the cost doesn't vanish — it moves. A million pull requests, three times the unlocked doors, a green dashboard hiding all of it. The scarce thing now isn't code. It's someone who can still look you in the eye and [drawn out] vouch for it.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
