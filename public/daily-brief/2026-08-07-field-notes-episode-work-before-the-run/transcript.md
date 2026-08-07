[warm] An uncalibrated grader is worse than no grader at all. [pause] That's Airbnb's engineers, writing last week. [curious] So how do you actually know your AI is any good?

[warm] This is the Agentic Daily Brief.

Two moves landed overnight. Start with the loud one. OpenAI is taking the meter off ChatGPT — from next week, text chats go unlimited for everybody, free tier included, with a new default model called Luna underneath. [pause] What makes that possible isn't generosity. It's price. [slow] Luna runs about twenty cents per million tokens through the API... cheap enough to hand an open tab to more than a billion people a week and not flinch. OpenAI also says factual errors are roughly sixty percent less common than in the model it replaces — their own evaluations, so hold that number lightly.

Meanwhile, OpenAI, Amazon, Microsoft, Cursor and Vercel all signed onto one portable package format for agent plugins, so a capability you build once should just run inside Codex or Cursor or Copilot, instead of getting rebuilt for every vendor's folder layout.

[curious] Now — cheap tokens are lovely at the consumer end. Inside a company running agents all day, the bill looks very different. Your best model is doing your hardest work, and it's also the one that costs the most. And you can't tell up front which parts of the job actually need it.

The first instinct is to sort by task type. Easy questions to the cheap model, hard ones to the expensive model, done. Engineers from Cognition, NVIDIA and OpenRouter got on a panel this week and said, um, that mostly doesn't hold. Why not? Because difficulty won't sit still. In one session a developer moves from asking questions, to writing the feature, to debugging it at two in the morning. Same session. Wildly different work.

So Cognition's co-founder described what they run inside Devin instead. The frontier model never leaves. It stays resident for the whole session as the planner and the watcher, while cheaper models do the typing underneath it. They also keep one warm helper agent going rather than spinning up a crowd of them, so nobody's re-reading the same history over and over. [surprised] Their claim? About, uh, forty percent off the cost of frontier-level intelligence. Same work — the expensive model just got moved from typist to supervisor.

[thoughtful] Where this breaks: small is not automatically cheap. OpenRouter's warning was blunt. Put a small model on work it hasn't really seen, and it flails, retries, drags out a long trajectory, and your total spend goes up, not down. Also, that forty percent is Cognition's own router on Cognition's own workload. Check it against your traces before you put it in a budget.

Which leaves a hole, right? A planner supervising the work all day sounds great. But how would you know if it were quietly doing a bad job?

Mostly, teams answer that with another model. One model grades the other one's output, the score lands in a dashboard, the dashboard says the number went up, and you ship. [pause] Five Airbnb engineers published their version of this in late July, and the first step is refreshingly un-clever. Run a hundred outputs. Then read them. Yourself. Sort the mistakes into piles, and build your graders out of the failures you actually saw — not out of some generic sense of helpfulness.

[surprised] Then the graders get graded. Before an automated judge goes anywhere near a release, Airbnb calibrates it against a human-labeled set — fifty to a hundred examples, and they're emphatic that it has to include bad ones. Agreement with the humans has to land in the high eighties or better.

There's a stop rule in there I really like: if your own experts disagree about what the right label is... you stop. You don't have a judge problem yet. You have a definition problem.

The number a judge gives you is worth exactly the human agreement you measured behind it.

[thoughtful] The more important question isn't whether your eval score went up this week — it's whether anyone has checked the thing producing that score. An uncalibrated judge doesn't leave you where you started. It leaves you worse off: confident, holding a number, shipping.

And even a calibrated one isn't automatically safe to optimize against. A paper out in July on reading tables took judge scores and fed them into a refinement loop — score the output, pick the best one, try again. On one of the two datasets, every single judging policy showed what the authors call negative recovery. [slow] The output the judge picked was, on average, worse than the very first one it saw. I mean — the grader was right often enough to trust, and still wrong in a direction that hurt.

Okay. Last one — away from scoring, into something much smaller and very practical.

[curious] Picture a screenshot of your Slack. You look at it and you see a channel, a person, a message. [pause] The model looks at the same image and sees... pixels. Which means before it can do a single useful thing, it burns turns working out which channel that even is. Every one of those turns is latency, spend, and one more chance to post in the wrong room.

Jason Liu, at OpenAI, ran a workshop on how he does his real daily work inside the Codex app, and the piece worth stealing he calls appshots. When he grabs the screen, he sends the picture and the accessibility tree — that's the structured list of on-screen elements your operating system already publishes for screen readers. That list carries the channel and user IDs. So the model isn't hunting for an identifier, you know. It already has one. By his account, it acts in a single tool call.

[thoughtful] Same instinct, longer clock: the engineers at monday dot com described precomputing a picture of your work in the background, over weeks, so that when you finally ask "what should I focus on", the answer is already sitting there. TwelveLabs' James Le put the same idea about video memory this way — ingest once, reason many times. Store the pieces, not the answers.

[sighs] Worth saying plainly, though: this is one engineer's workflow, not a measured result. Structured captures run long, and they go stale, so you're trading context budget against tool calls — measure both sides. Still, the rule underneath costs you nothing to adopt. If the agent will need an identifier to act, put the identifier in the picture.

[curious] One talk worth your time, if there's commute left. Google Cloud Tech ran a conversation called "What is tokenmaxxing?" — tokenmaxxing being the habit of burning as many tokens as you possibly can, on the assumption that more tokens means more work getting done. The speakers push back on that. Their argument is that today's pricing largely shields you from what the inference actually costs, and that as real scarcity shows up, people will get a lot choosier about which tasks are worth it.

[warm] Before you go, one thing worth doing this week. Take whatever your agent shipped most recently. Pull twenty of its outputs and read them — not the scores, the outputs. Write the mistakes down in categories. Then ask whether the graders you already have would have caught a single one of them.

[slow] So — how do you tell whether any of it is working? [pause] Not from the number on your dashboard this morning. You know because of the work somebody did before the run — a hundred outputs read by a human, a planner kept in the room, an identifier packed in with the picture. Confidence gets bought earlier than you'd think, and it gets bought by hand.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
