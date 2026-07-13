[curious] DoorDash replayed a thousand changes past an AI reviewer. One pass caught a hundred sixty-four bugs. Staged, five hundred four. So how do you know your AI tools are winning?

[warm] This is the Agentic Daily Brief.

Anthropic did something this week that widens what a coding agent can touch. They gave Claude Code — their coding agent — a built-in browser. It can open a web page, read it, click, and type. So it can pull real docs off a site, or work an issue tracker, without reaching for a separate tool. There's a safety net around it — a classifier screens anything it tries to write, and it's hard-blocked from buying things or making accounts without your say-so. And organizations can gate it behind an allowlist, or switch it off completely.

[curious] There's also a smaller research result that hints where all this is heading. A team at Alaya Lab and Shanghai Jiao Tong University threw out an agent's ever-growing chat log and handed it a structured memory instead. It started winning a card game the transcript-based agents lost every single time — while burning a tiny fraction of the tokens.

[warm] So — back to DoorDash, and that pile of a thousand pull requests. Here's the problem they were staring at. If you run an AI code reviewer in production, the number everyone watches is the acceptance rate — how often people take its comments. Sounds fair, right?

Except think about what that number can, and can't, see. It counts the comments people accepted, and the ones they waved off. But it has no way to record the bug the reviewer never mentioned. Or the clean code it rightly stayed quiet on. um... the misses just don't show up anywhere.

[thoughtful] Acceptance rate can't record the bug your reviewer missed — so a reviewer can look great in production while quietly missing most of what actually matters.

DoorDash built a thing they call DashBench. They took roughly a thousand of their own past changes — including ones that got reverted or hotfixed, where you know for a fact something broke — and replayed them. Now you can score a reviewer honestly, because you already know the answers.

[surprised] They went one step further. They didn't even trust their own human labels. Their engineers disagreed with each other — human feedback, they found, was valuable but frequently wrong. So they triangulated: the human notes, the model's findings, and a separate AI judge, and then re-argued every case where those three disagreed. That's how careful you have to be just to pin down what "right" even means here.

[slow] The design that won? It surprised me. It wasn't one big powerful model doing a careful pass. It was staged — a cheap, fast scout that just flags suspicious spots, then a heavier reviewer that digs into each lead and drops the ones that don't hold up. Noticing and verifying, split into two jobs. That staged version found five hundred and four real problems where a strong single pass found a hundred and sixty-four. Roughly three times the catch.

[curious] There's a catch to the catch, though, and DoorDash is honest about it. That coverage isn't free. The staged reviewer cost about five times the dollars, and four times the wait, per pull request. And no single setup won everything — one led on catching bugs, another on not crying wolf. Even the best only caught about eighty percent of the critical stuff. So if you're trusting a thumbs-up rate right now, here's the real takeaway — you can't tell a better reviewer from a worse one by watching which comments get accepted. You have to replay the real cases.

[thoughtful] Which cracks open a bigger, more uncomfortable question. If the easy number lies about your code reviewer... what else is it lying about?

[warm] Glean's founder, Arvind Jain, sat for an interview this week and called engineering productivity the fuzziest job there is to measure. And here's what he's seeing across a lot of companies. Coding got faster. People are writing way more lines of code. But — or rather, and this is the part that stopped me — the actual shipping speed of the products hasn't moved at all.

[slow] Sit with that. More code. Same shipping.

[surprised] There's a study that nails it. A research group called METR ran a randomized trial — experienced developers, on codebases they knew cold. With AI help, they were measurably slower. And they were sure they'd been faster. Slower... and convinced they'd sped up.

[thoughtful] The lesson people keep having to relearn — a productivity framework named this back in twenty twenty-one — is that AI moves the metrics that are easy to count and easy to fool. Lines of code. Pull requests. Percent written by AI. Count those, and AI always looks like a win. The DORA research group said it plainly this year — AI amplifies whatever's already there. Individual output climbs while the stability of what you actually deliver lags behind.

There's a quieter cost too, one those metrics can never see. Researchers call it cognitive and intent debt. Is your team's shared understanding of the system slowly eroding — because the AI wrote the code, and nobody quite holds the "why" anymore? A lines-of-code chart will never once flag that.

[warm] My read? If a metric jumps the second you switch AI on, it's probably measuring activity, not value. And the honest fix is boring. Pick a baseline before you roll AI out. Then watch the things output can't fake — how often you ship, how often you break it, the real cost per merged change. I mean, without that baseline, as one measurement expert put it, there's no measurement — just a growing bill.

[curious] And that bill? Jain has a theory about where a surprising amount of it actually goes. When you wire an agent up to your company's systems — crudely, he says, through a tangle of loosely-connected plumbing — and then hand it a task, the model has to go assemble its own context first. Hunt around. Figure out which materials it even needs. Pull them together. And most of the tokens get burned right there, before the agent does one scrap of the real work.

[thoughtful] Read that back. You're paying full reasoning prices for the model to go fetch things. Jain's own company felt it. Glean built a triage agent that automatically handled about ninety-five percent of their production issues. Genuinely useful. It also ran about a million dollars a month — more than the on-call team whose job it took over.

His fix isn't a bigger model. It's to engineer what you feed the agent up front, so it starts a task already stocked with the right materials — instead of paying to rediscover them on every single call. Now, weigh it — he sells exactly this. But it's checkable. Instrument where your tokens really go. If most are burned gathering context rather than reasoning, well — a smarter model won't save you. A better-fed one will. That's the thread straight back to those researchers and their card game — structured memory beat the bloated transcript, at a fraction of the cost.

[warm] So, one thing worth trying this week. On your next AI rollout — or one you've already got running — instrument where the tokens actually go on a real task. Just look. How much is the model reasoning, and how much is it hunting for context before it even starts? That one number tells you whether the fix you need is a smarter model... or a better-fed one.

[curious] And one talk worth watching. Jack Cable — he co-founded a security firm and used to advise CISA, the US cyber agency — gave a talk called "The AI bugpocalypse is here." The idea that stuck with me: as AI writes and reviews more and more of our code, don't play whack-a-mole, patching bugs one at a time. Go for systemic fixes — like rewriting a critical library into a memory-safe language once, so a whole class of bugs just can't happen anymore. He reckons most code will be AI-reviewed within a year.

[thoughtful] Back to where we started. A thousand pull requests, and the number everyone trusted couldn't see the bugs that mattered most. That's the thread running through all of it. The wins that are easy to count — comments accepted, lines written, tickets closed — are exactly the ones AI puffs up. The wins that actually matter hide behind a baseline you have to set on purpose. [warm] Count only the easy thing, and you'll prove yourself an ROI you might not even have.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
