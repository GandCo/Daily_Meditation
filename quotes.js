const entries = [
  // Day 1 - Jan 1
  {
    quote: "You are not the product of your circumstances. You are the product of your decisions.",
    attr: "Stephen Covey",
    framing: "Every January 1st carries the same quiet weight: the sense that something new is possible. Not because the calendar changed, but because you decide it does. Decisions compound. What you choose today becomes the person you're looking at in five years.",
    prompt: "What decision have you made recently that's already paying off?"
  },
  // Day 2 - Jan 2
  {
    quote: "Your current habits are perfectly designed to deliver your current results.",
    attr: "James Clear",
    framing: "This isn't criticism, it's a diagnostic. The system is working exactly as built. If the results aren't right, the system needs adjusting, not more willpower applied to a broken process.",
    prompt: "What habit have you stuck with lately that's quietly producing a good result?"
  },
  // Day 3 - Jan 3
  {
    quote: "Plans are worthless, but planning is everything.",
    attr: "Dwight Eisenhower",
    framing: "The plan won't survive contact with reality. Planning will. The thinking you do before the chaos starts, the contingencies you've walked through, the clarity you've built... that's what carries you. Not the document.",
    prompt: "When did you recently adapt on the fly and have it work out?"
  },
  // Day 4 - Jan 4
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    attr: "Steve Jobs",
    framing: "This one hits differently when you stop reading it as motivation and start reading it as warning. How much of what fills your week actually belongs to you? How much is obligation, expectation, or inertia from a version of you that no longer exists?",
    prompt: "What's something you've chosen for yourself lately, and how has it gone?"
  },
  // Day 5 - Jan 5
  {
    quote: "The best way to have a good idea is to have lots of ideas.",
    attr: "Linus Pauling",
    framing: "Creativity isn't a faucet you turn on. It's a muscle you warm up by showing up repeatedly without judgment. The bad ideas are the price of admission for the good ones. Don't curate before you generate.",
    prompt: "What idea have you acted on recently, even in a small way?"
  },
  // Day 6 - Jan 6
  {
    quote: "If you can imagine someone surpassing you, you should do it yourself.",
    attr: "Paul Graham",
    framing: "The gap between where you are and where you can be is not a threat. It's an invitation. If you can see it, you can close it. The vision of a better version of yourself is a map drawn from the future.",
    prompt: "Where have you already raised your standard recently, even slightly?"
  },
  // Day 7 - Jan 7
  {
    quote: "Where your fear is, there is your task.",
    attr: "Carl Jung",
    framing: "This is one of the most useful tools in the kit. Identify what you've been avoiding and you've just identified where the growth is. The avoidance is the signal, not the stop sign.",
    prompt: "What have you recently done despite the fear, and how did it go?"
  },
  // Day 8 - Jan 8
  {
    quote: "Focus on things that are small enough to change, but big enough to matter.",
    attr: "Kat Cole",
    framing: "Most of us either aim too small or too large. The sweet spot is the thing that's actually within reach AND actually moves the needle. Find that intersection every day.",
    prompt: "What's a small thing you did lately that ended up mattering more than expected?"
  },
  // Day 9 - Jan 9
  {
    quote: "There is nothing but the present moment.",
    attr: "",
    framing: "The past is a story. The future is a projection. The only place anything actually gets done is right here, in this moment. Not next week, not when the timing is better. Now.",
    prompt: "What have you tackled recently instead of deferring it to 'later'?"
  },
  // Day 10 - Jan 10
  {
    quote: "Never link your confidence to your abilities. Link it to your intentions.",
    attr: "Ed Mylett",
    framing: "Abilities are uncertain, situation-dependent, and constantly tested. Intentions are yours. When confidence is built on what you intend to do rather than what you're certain you can do, it becomes unshakeable.",
    prompt: "What intention have you followed through on recently, regardless of outcome?"
  },
  // Day 11 - Jan 11
  {
    quote: "We suffer more in imagination than in reality.",
    attr: "Seneca",
    framing: "The Roman Stoics understood something neuroscience confirmed two thousand years later: most of what we dread never happens, and even when it does, it lands lighter than the anticipation. The suffering is almost always in the preview, not the feature.",
    prompt: "What did you dread recently that turned out easier once you actually faced it?"
  },
  // Day 12 - Jan 12
  {
    quote: "In school you are graded on every test. In life, you can choose the tests you take, even if they always play to your strengths.",
    attr: "James Clear",
    framing: "One of the great freedoms of adulthood that most people never fully claim is the freedom to be excellent at specific things rather than adequate at everything. Life rewards depth. School rewarded breadth.",
    prompt: "Where have you leaned into your strengths recently, and what came of it?"
  },
  // Day 13 - Jan 13
  {
    quote: "You get better at what you practice. Everything is practice.",
    attr: "James Clear",
    framing: "This changes everything when it lands. Not just the obvious things, the workouts, the skills. The patience you practice, the attitude you practice, the small daily decisions you practice. They all compound. What are you training for right now?",
    prompt: "What have you been quietly getting better at through repetition?"
  },
  // Day 14 - Jan 14
  {
    quote: "The gift of a beginner is fresh eyes. The longer you're in a field, the harder it is to perceive new truths.",
    attr: "James Clear",
    framing: "Expertise is a two-sided coin. The same experience that makes you effective builds filters that screen out things a newcomer would see immediately. The antidote isn't abandoning what you know. It's occasionally pretending you don't.",
    prompt: "When did you recently see something with fresh eyes and it paid off?"
  },
  // Day 15 - Jan 15
  {
    quote: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
    attr: "Steve Jobs",
    framing: "This is the permission slip most of us need. Not every decision comes with a clear rationale. Not every detour is a mistake. The thread only becomes visible in retrospect. Trust the move, not just the map.",
    prompt: "What decision that felt uncertain at the time now looks like the right move?"
  },
  // Day 16 - Jan 16
  {
    quote: "History is a vast early warning system.",
    attr: "Norman Cousins",
    framing: "Every challenge you're navigating right now has been navigated before, by someone, in some form. The answers are almost always already out there. The question is whether you're curious enough to look for them before deciding you're on your own.",
    prompt: "What have you recently learned from someone else's experience that helped you?"
  },
  // Day 17 - Jan 17
  {
    quote: "Success is not the key to happiness. Happiness is the key to success.",
    attr: "Albert Schweitzer",
    framing: "The sequencing matters enormously. If you're waiting to feel good until after you've achieved the thing, you may be waiting a very long time. Satisfaction found in the work itself is what creates the endurance to actually get there.",
    prompt: "What part of your recent work have you genuinely enjoyed doing?"
  },
  // Day 18 - Jan 18
  {
    quote: "Everybody can be great because everybody can serve.",
    attr: "Martin Luther King Jr.",
    framing: "Greatness is often conceived as something rare, reserved for the exceptional. But King offered a more democratic definition: it's available to anyone willing to contribute something to someone else. Scale doesn't determine significance.",
    prompt: "How have you served someone recently, even in a small way?"
  },
  // Day 19 - Jan 19
  {
    quote: "A problem well stated is a problem half-solved.",
    attr: "Charles F. Kettering",
    framing: "Most people move too quickly from 'there's a problem' to 'here's the solution.' The quality of the solution is almost entirely determined by the quality of the question that preceded it. Slow down on the diagnosis.",
    prompt: "What problem have you recently gotten clearer on just by naming it precisely?"
  },
  // Day 20 - Jan 20
  {
    quote: "Things that have never happened before happen all the time.",
    attr: "Morgan Housel",
    framing: "We use history to prepare for the future, which is the right instinct. But the future also contains events outside any prior framework. The preparation that matters most isn't having seen it before. It's being the kind of person who adapts when you haven't.",
    prompt: "What unfamiliar situation have you recently handled well, even without a playbook?"
  },
  // Day 21 - Jan 21
  {
    quote: "Priorities should normally be considered as a singular word. The moment you have many priorities, you have none.",
    attr: "Frank Slootman",
    framing: "Organizations and individuals alike lose years to the illusion of multiple priorities. One clear priority, relentlessly protected, beats five competing ones every time. This is one of the most underused management insights there is.",
    prompt: "What's the one priority you've actually protected recently, and how did that pay off?"
  },
  // Day 22 - Jan 22
  {
    quote: "Time kills all deals.",
    attr: "Frank Slootman",
    framing: "Momentum is perishable. In business, in relationships, in decisions. The longer a thing sits without movement, the more likely it is to die. Not because anything changed, but because nothing did. Motion protects momentum.",
    prompt: "What have you kept moving recently instead of letting it stall?"
  },
  // Day 23 - Jan 23
  {
    quote: "Revenue is for vanity. Profit is for sanity.",
    attr: "Tommy Mello",
    framing: "This applies far beyond the income statement. There's a version of this for time, energy, relationships. Volume is easy to measure and easy to celebrate. Margin, the actual return on what you're putting in, is the real scorecard.",
    prompt: "Where have you recently chosen quality of return over sheer volume?"
  },
  // Day 24 - Jan 24
  {
    quote: "Our greatest opportunities are not out in the open, but rather tucked away behind challenging and unappealing barriers, which we must overcome in order to access the possibilities.",
    attr: "Gaston Sanchez",
    framing: "The reason the best opportunities are still available is because they're uncomfortable to pursue. If they were easy, they'd already be taken. The barrier is the filter. Getting through it is the advantage.",
    prompt: "What barrier have you recently pushed through to reach something worthwhile?"
  },
  // Day 25 - Jan 25
  {
    quote: "Nobody accomplishes anything significant alone. But nobody accomplishes anything significant by accident either.",
    attr: "James Clear",
    framing: "These two truths have to be held together. Dependency on others doesn't mean passivity. The work of building relationships, recruiting allies, and coordinating effort... that's not soft. That's the actual job.",
    prompt: "Who have you recently leaned on, or leaned in for, to make something happen?"
  },
  // Day 26 - Jan 26
  {
    quote: "If you're thinking without writing, you only think you're thinking.",
    attr: "Leslie Lamport",
    framing: "Writing forces precision. The thought that feels complete in your head almost always turns vague the moment you try to put it on paper. The act of writing is not capturing the thought. It is completing it.",
    prompt: "What have you recently written down that clarified your thinking?"
  },
  // Day 27 - Jan 27
  {
    quote: "You can charge for effort or for value. Value is the real driver for any relationship.",
    attr: "Gaston Sanchez",
    framing: "When you lead with effort, you've handed the other side a lever to negotiate with. When you anchor on value delivered, you've changed the conversation entirely. The question is never 'how hard did this take?' It's 'what did this make possible?'",
    prompt: "Where have you recently led with value instead of effort, and had it land well?"
  },
  // Day 28 - Jan 28
  {
    quote: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.",
    attr: "Rainer Maria Rilke",
    framing: "The terror of this line is also its liberation. Nothing needs to be permanent, not the difficulty, not even the joy. Life is movement, not destination. The only thing required is to keep going.",
    prompt: "What difficult feeling have you recently moved through instead of staying stuck in?"
  },
  // Day 29 - Jan 29
  {
    quote: "You don't go to the fight with what you want. You go to the fight with what you've got.",
    attr: "Will Harris",
    framing: "The fantasy of optimal conditions is one of the most reliable ways to avoid starting. You never have everything you want going in. Neither does anyone else. The ones who win are the ones who go anyway.",
    prompt: "What have you recently started without waiting for ideal conditions?"
  },
  // Day 30 - Jan 30
  {
    quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    attr: "Heraclitus",
    framing: "Change is not the exception. It is the condition. The river and you are both moving. What worked before may not apply now, not because you failed, but because the context has changed. Stay current with who you're becoming.",
    prompt: "Where have you recently updated an old approach to fit a new situation?"
  },
  // Day 31 - Jan 31
  {
    quote: "The choice to do something or do nothing is our own, as will be the resulting journey.",
    attr: "Gaston Sanchez",
    framing: "There's no neutral position. Inaction is itself a choice, with its own consequences, its own trajectory. You are always authoring something. The question is whether you're doing it on purpose.",
    prompt: "What have you recently chosen deliberately instead of letting it happen by default?"
  },
  // Day 32 - Feb 1
  {
    quote: "Become genuinely interested in other people.",
    attr: "Dale Carnegie",
    framing: "Not politely interested. Not strategically interested. Genuinely. The difference is immediately apparent to the other person and to you. Real curiosity about another human being is one of the most disarming and connecting things you can offer.",
    prompt: "Who have you recently shown real curiosity toward, and how did it change things?"
  },
  // Day 33 - Feb 2
  {
    quote: "If you are wrong, admit it quickly and emphatically.",
    attr: "Dale Carnegie",
    framing: "Speed matters here. The longer you defend a wrong position, the more it costs everyone: credibility, time, trust. A fast, clean admission of error is not weakness. It's one of the most powerful leadership moves there is.",
    prompt: "What have you recently admitted you were wrong about, and how did that go?"
  },
  // Day 34 - Feb 3
  {
    quote: "Humans don't mind hardship; in fact they thrive on it. What they mind is not feeling necessary.",
    attr: "Sebastian Junger",
    framing: "This reframes why so many people in comfortable circumstances feel empty. The problem was never the comfort. It was the removal of a clear reason to be needed. Meaning comes from contribution, not consumption.",
    prompt: "Where have you recently felt genuinely necessary to someone or something?"
  },
  // Day 35 - Feb 4
  {
    quote: "The world doesn't open up into dimensions of hope and possibility when I sing alone. That happens only when I'm surrounded by others and what we're making combines into something greater.",
    attr: "Stacy Hawn",
    framing: "There's a reason choirs produce something no single voice can. The harmonic of collaboration isn't additive, it's multiplicative. Even when all the players are good individually, there's something only the group can create.",
    prompt: "What have you recently built with others that you couldn't have built alone?"
  },
  // Day 36 - Feb 5
  {
    quote: "Never sink to the point where you judge yourself by what someone else thinks of you.",
    attr: "Will Harris",
    framing: "Other people's opinions are data. They are not verdicts. The moment you hand someone else your internal scorecard, you've made your sense of self dependent on a variable you can't control.",
    prompt: "Where have you recently held your ground despite someone else's opinion of you?"
  },
  // Day 37 - Feb 6
  {
    quote: "A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you have always known you could be.",
    attr: "Tom Landry",
    framing: "The most valuable feedback you've ever received probably stung going in. Comfort-confirming feedback maintains you. Discomfort-inducing feedback grows you. Seek out the people willing to tell you the truth.",
    prompt: "What honest feedback have you recently acted on?"
  },
  // Day 38 - Feb 7
  {
    quote: "Missing out is exactly what gives our decisions value. When we decide something, it's important to go all in, without lamenting we could have been doing something else.",
    attr: "Gaston Sanchez",
    framing: "FOMO is the enemy of commitment. Every choice closes other doors, and that's not a loss, that's what choice means. The cost of a decision is its alternatives. Own that cost instead of resenting it.",
    prompt: "What decision have you recently gone all-in on without looking back?"
  },
  // Day 39 - Feb 8
  {
    quote: "Talk in terms of the other person's interests.",
    attr: "Dale Carnegie",
    framing: "This sounds like a tactic. It isn't. It's a discipline that forces genuine empathy. Before you make your case, before you ask for anything, do you actually understand what matters to the other person? Not what you think should matter. What actually does.",
    prompt: "When did you recently make a conversation about the other person's interests, and it worked?"
  },
  // Day 40 - Feb 9
  {
    quote: "Don't merely make or do something. Create a story some people really want to hear. Then make it easy for them to show it off and find the others.",
    attr: "Michael Chaffin",
    framing: "This is the difference between building something functional and building something that spreads. Utility gets used. Story gets shared. If you want something to move, give people a reason to talk about it.",
    prompt: "What have you recently built or done that people naturally wanted to talk about?"
  },
  // Day 41 - Feb 10
  {
    quote: "Make the other person feel important, and do it sincerely.",
    attr: "Dale Carnegie",
    framing: "The sincerely part is everything. Performative recognition is easy and immediately detectable. People know when they're being managed. Genuine recognition, given because you actually mean it, changes the room.",
    prompt: "Who have you recently made feel genuinely important, and how did they respond?"
  },
  // Day 42 - Feb 11
  {
    quote: "Be a good listener. Encourage others to talk about themselves.",
    attr: "Dale Carnegie",
    framing: "Most of us listen to respond, not to understand. The two are very different experiences for the other person. When you genuinely listen, without formulating your reply, something opens up in the conversation that was impossible before.",
    prompt: "When did you recently listen well enough to hear something you'd have otherwise missed?"
  },
  // Day 43 - Feb 12
  {
    quote: "Your belief has to be greater than everyone else's doubt in you.",
    attr: "Ed Mylett",
    framing: "Doubt from outside is noise. Doubt from inside is the real threat. The people who build things against the odds aren't necessarily more talented. They've simply decided that their internal conviction outranks external skepticism.",
    prompt: "Where has your own belief recently outweighed someone else's doubt?"
  },
  // Day 44 - Feb 13
  {
    quote: "Buying your kids the best will never replace giving your kids your best.",
    attr: "James Clear",
    framing: "There's a substitution that happens quietly when resources grow: presence gets traded for provision. This isn't just a parenting truth. It's a leadership truth, a friendship truth, a partner truth. What you give can rarely substitute for who you are when you show up.",
    prompt: "When did you recently show up with your presence rather than a substitute for it?"
  },
  // Day 45 - Feb 14
  {
    quote: "You aren't wealthy until you have something money can't buy.",
    attr: "Garth Brooks",
    framing: "List what money can't buy: peace of mind, genuine relationships, the respect of people you respect, time you actually enjoyed, health maintained rather than purchased. Which of those do you have? Which are you neglecting?",
    prompt: "What have you recently gained that money couldn't have bought?"
  },
  // Day 46 - Feb 15
  {
    quote: "Family and friends are priceless.",
    attr: "",
    framing: "Not a sentiment. A fact. The most studied predictor of long-term wellbeing across cultures and income levels is the quality of personal relationships. Not wealth, not achievement. Connection.",
    prompt: "When did you last invest real time in a relationship that matters, and how did it feel?"
  },
  // Day 47 - Feb 16
  {
    quote: "Struggle is part of the human condition. Without a little of it we get weaker. Without challenge we don't have enough stimulus to survive. We shrink as a species.",
    attr: "Will Harris",
    framing: "Comfort isn't the enemy. But comfort at the expense of challenge will cost you more than it gives. The same way a muscle grows through resistance, character and capacity grow through difficulty. Lean in.",
    prompt: "What recent struggle has already made you noticeably stronger or sharper?"
  },
  // Day 48 - Feb 17
  {
    quote: "At the end, we are our choices.",
    attr: "Oki Matsumoto",
    framing: "The biography of your life is being written one decision at a time. Not the big dramatic moments, mostly the small repeating ones. Who you're becoming is the accumulated weight of what you've been choosing.",
    prompt: "What choice from this past week are you proud to have made?"
  },
  // Day 49 - Feb 18
  {
    quote: "Let the other person feel that the idea is his or hers.",
    attr: "Dale Carnegie",
    framing: "The best collaboration often requires ego detachment. If the idea gets implemented and produces the right result, does it matter whose name was on it? The outcome, not the credit, is the point. Leaders who understand this multiply their influence.",
    prompt: "Where have you recently let go of credit to get a better outcome?"
  },
  // Day 50 - Feb 19
  {
    quote: "No amount of sophistication is going to allay the fact that all your knowledge is about the past and all your decisions are about the future.",
    attr: "Ian Wilson, former GE Executive",
    framing: "Every model, every framework, every lesson learned is backward-looking. That's not a flaw, it's the nature of knowledge. What it means is that certainty is always incomplete. Act from your best analysis, then stay ready to update.",
    prompt: "Where have you recently updated your thinking based on new information?"
  },
  // Day 51 - Feb 20
  {
    quote: "Waiting for circumstances to change so you can feel better is like staring into a mirror and waiting for your reflection to smile first.",
    attr: "Doug Skoke",
    framing: "Emotions don't follow circumstances as reliably as we assume. More often, the internal state creates the conditions it expects. You can choose the posture before the environment earns it, and sometimes that's how you change the environment.",
    prompt: "When did you recently choose your mindset before circumstances improved, and it worked?"
  },
  // Day 52 - Feb 21
  {
    quote: "Try honestly to see things from the other person's point of view.",
    attr: "Dale Carnegie",
    framing: "Honest is the load-bearing word. Not tactically, not to find weaknesses in their position. To actually understand what the world looks like from where they're standing. Most conflict dissolves when this happens with sincerity.",
    prompt: "When did you recently understand someone else's position well enough to defuse a conflict?"
  },
  // Day 53 - Feb 22
  {
    quote: "Humility prompts leaders to question their assumptions, seek outside opinions, and look outward and upward instead of inward.",
    attr: "Col. E. John Teichert",
    framing: "George Washington trembled when he took office. Not from weakness, but from genuine understanding of how much he didn't know and how much was at stake. That combination, high stakes and high humility, is where the best leadership comes from.",
    prompt: "What assumption have you recently questioned that turned out to need it?"
  },
  // Day 54 - Feb 23
  {
    quote: "One roadblock almost never ruins you. There might not be 1000 ways to accomplish something, but there is almost always more than one way. Know what you want. Be flexible about how to get there.",
    attr: "James Clear",
    framing: "Flexibility on method, clarity on destination. People who collapse at obstacles have conflated the path with the goal. The goal remains. The path is just a hypothesis.",
    prompt: "Where have you recently changed your method but kept the goal, and had it work?"
  },
  // Day 55 - Feb 24
  {
    quote: "Every thought a person dwells upon, whether he expresses it or not, either damages or improves his life.",
    attr: "Leo Tolstoy, Calendar of Wisdom",
    framing: "The quality of your thinking is upstream of everything else. Not just what you decide, but what you dwell on. The inner monologue running in the background is either building you up or wearing you down, often without your awareness.",
    prompt: "What thought have you recently replaced with a better one?"
  },
  // Day 56 - Feb 25
  {
    quote: "The only way to get the best of an argument is to avoid it.",
    attr: "Dale Carnegie",
    framing: "This is counterintuitive for people who are good at arguing. But the relationship cost of a won argument is almost always greater than the benefit. You rarely change a mind through debate. You change it through trust.",
    prompt: "Where have you recently let go of 'winning' to protect the relationship?"
  },
  // Day 57 - Feb 26
  {
    quote: "Use experiences to become.",
    attr: "",
    framing: "Not just to have. Not just to get through. To become. Every difficult experience contains a version of you that's more capable and more wise, if you're willing to do the extraction work. Events don't transform you. How you process them does.",
    prompt: "What recent experience have you actually learned and grown from, not just survived?"
  },
  // Day 58 - Feb 27
  {
    quote: "Begin with praise and honest appreciation.",
    attr: "Dale Carnegie",
    framing: "The instinct in difficult conversations is to lead with the problem. Carnegie's insight was that opening with what's genuinely working creates a receptive state. People hear criticism better when they don't feel attacked first.",
    prompt: "When did you recently open a hard conversation with genuine appreciation, and it helped?"
  },
  // Day 59 - Feb 28
  {
    quote: "You can't wait until life isn't hard anymore before you decide to be happy.",
    attr: "Nightbird",
    framing: "Life will always have something hard in it. That's not a phase you're passing through. If happiness is contingent on difficulty ending, the wait is permanent. Decide first. The circumstances follow the decision more than they precede it.",
    prompt: "Where have you recently chosen to be happy despite ongoing difficulty?"
  },
  // Day 60 - Mar 1
  {
    quote: "Our brain grows more when we fail and learn from it, especially after age 25. Mistakes are the doorway for neuroplasticity and for learning.",
    attr: "Andrew Huberman",
    framing: "Mistakes aren't just survivable after 25. They're required for growth. The neurochemicals that enable adult neuroplasticity are released not by getting things right, but by getting them slightly wrong and then correcting. Failure is the mechanism, not the obstacle.",
    prompt: "What mistake have you recently made and actually grown from?"
  },
  // Day 61 - Mar 2
  {
    quote: "Incremental learning as an adult is absolutely essential. How you make and process small errors is the secret to learning as an adult.",
    attr: "Andrew Huberman",
    framing: "Big dramatic breakthroughs are memorable. But the actual work of adult learning happens in small corrections, slight adjustments, gradual calibrations. The person who processes a hundred small errors well will outlearn the person waiting for big revelations.",
    prompt: "What small correction have you recently made that's already paying off?"
  },
  // Day 62 - Mar 3
  {
    quote: "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works.",
    attr: "John Gall",
    framing: "In business, in process, in life: start simple. Make it work. Then add complexity only where the simple version runs out. Don't build the cathedral before you've built the chapel.",
    prompt: "What have you recently kept simple that's working well as a result?"
  },
  // Day 63 - Mar 4
  {
    quote: "Your first anything will be bad. But you can't make your 100th without making your first. Put your ego aside, and start.",
    attr: "",
    framing: "Perfectionism is just fear in a respectable outfit. The first version doesn't have to be good. It has to exist. Everything else, all the improvement, all the iteration, is built on top of having started.",
    prompt: "What have you recently started, imperfectly, instead of waiting to be ready?"
  },
  // Day 64 - Mar 5
  {
    quote: "If you do what you've always done, you'll get what you've always got. If you want to make a difference, do it different.",
    attr: "Will Harris",
    framing: "Identical inputs produce identical outputs. That's not pessimism, it's physics. If the results need to change, something in the inputs needs to change. The question isn't whether to change. It's what, specifically, to change.",
    prompt: "What have you recently done differently that's already changing your results?"
  },
  // Day 65 - Mar 6
  {
    quote: "Take your expertise and apply it to something new. The longer you're in a field, the harder it is to perceive new truths.",
    attr: "James Clear",
    framing: "Cross-pollination is one of the most underrated sources of innovation. Your expertise applied to a familiar domain produces incremental gains. The same expertise applied somewhere new produces breakthroughs, both for the new field and for your own thinking.",
    prompt: "Where have you recently applied something you know to a new or unexpected situation?"
  },
  // Day 66 - Mar 7
  {
    quote: "I didn't come this far to only come this far.",
    attr: "Arlan Hamilton",
    framing: "This is what momentum looks like as a decision, not a feeling. You may not always feel like pressing forward. But what you've already paid, in time, in sacrifice, in showing up, sets a standard for what the next chapter is worth.",
    prompt: "What have you recently pushed through because of how far you'd already come?"
  },
  // Day 67 - Mar 8
  {
    quote: "Doubt is a strong drug. It gets in your bloodstream. You lose your hope, you lose your soul, you lose the whole thing. I rise.",
    attr: "Paradocks",
    framing: "Doubt is not neutral. It's active. It works on you even when you're not paying attention. The antidote isn't suppression. It's a conscious decision: to rise anyway. Not because the doubt is gone, but because the intention is louder.",
    prompt: "What have you recently kept rising toward despite doubt?"
  },
  // Day 68 - Mar 9
  {
    quote: "Leverage as a benefit: it's not a cost savings, but rather an extension of ability.",
    attr: "Gaston Sanchez",
    framing: "Most people think about leverage as efficiency, doing more with less. The better frame is amplification. You're not getting more done for less money. You're extending your reach into things your time alone could never touch.",
    prompt: "Where have you recently used leverage to extend your reach, not just save time?"
  },
  // Day 69 - Mar 10
  {
    quote: "The best technology in the world cannot overcome a mediocre team. A motivated, gritty team can move mountains.",
    attr: "Peter A. High",
    framing: "We spend enormous energy optimizing tools and systems. The highest-leverage investment is almost always in the people and the culture. Talent and conviction outperform process every time when the stakes are high enough.",
    prompt: "Who on your team has recently gone beyond what was asked, and did you recognize it?"
  },
  // Day 70 - Mar 11
  {
    quote: "One way to stand out is to look for pockets of low competition. Excellence often hides at the edges.",
    attr: "James Clear",
    framing: "The crowded path feels safer because there's proof it works. But it's crowded precisely because so many people are walking it. The edges, the unfashionable niches, the unsexy problems, are where genuine differentiation lives.",
    prompt: "Where have you recently found an edge by avoiding the crowded path?"
  },
  // Day 71 - Mar 12
  {
    quote: "There are still strong people, but only those who choose to be.",
    attr: "Paul Graham",
    framing: "Strength used to be built by necessity. Now it's built by decision. The same applies to discipline, resilience, character. None of these are automatically produced by the world anymore. They all require the deliberate choice.",
    prompt: "What strength have you recently built on purpose?"
  },
  // Day 72 - Mar 13
  {
    quote: "If you aren't liking the current result, don't abandon that equation, just change the order of operations, and watch the result change.",
    attr: "Gaston Sanchez",
    framing: "Before you tear it all down, try rearranging it. The same inputs in a different sequence often produce dramatically different outputs. The problem is sometimes not what you're doing but when and in what order.",
    prompt: "What have you recently reordered, rather than given up on, and seen it work?"
  },
  // Day 73 - Mar 14
  {
    quote: "Many of us were told as children we could be whatever we wanted. Now that we're grown up, we actually have the skillset to live those dreams, albeit a little differently.",
    attr: "Gaston Sanchez",
    framing: "The dream doesn't expire. It matures. The version available to you now, with decades of real experience behind you, may be more powerful than the one you imagined at twenty. Don't dismiss what you wanted once just because it looks different now.",
    prompt: "What old aspiration have you recently revived in a new form?"
  },
  // Day 74 - Mar 15
  {
    quote: "Experience shows me that I no longer have to do everything. I now have the wisdom to focus my energy and effectively direct the efforts of others to create a far greater impact than I ever could alone.",
    attr: "Gaston Sanchez",
    framing: "This is one of the most important transitions a leader ever makes: from being the person who does everything to being the person who multiplies. It requires ego surrender. It produces exponential results.",
    prompt: "Where have you recently directed others' efforts instead of doing it all yourself, with good results?"
  },
  // Day 75 - Mar 16
  {
    quote: "We don't get a chance to do that many things, and every one should be really excellent. Because this is our life.",
    attr: "Steve Jobs",
    framing: "Scarcity clarifies. When you recognize how few projects you'll actually have capacity to do well in a life, the ones that don't deserve your best start to fall away naturally. Excellence requires selectivity. Selectivity requires honesty about what matters.",
    prompt: "What have you recently said no to in order to protect something more important?"
  },
  // Day 76 - Mar 17
  {
    quote: "Drop by drop, your glass is full. Drop by drop, your bucket is full. Drop by drop, you are standing in an ocean. Just keep at it my friend.",
    attr: "",
    framing: "Accumulation is invisible in real time. You can't see the ocean filling from a single drop. But the drops are the only mechanism. This is true of savings, of skill, of reputation, of relationships. One drop at a time.",
    prompt: "What have you been steadily building, drop by drop, that's starting to show?"
  },
  // Day 77 - Mar 18
  {
    quote: "Design your life so you are graded on your strengths. Maintain a baseline so weak areas don't hold you back, but play where you're built to win.",
    attr: "James Clear",
    framing: "Most systems will try to grade you on everything. Your job is to design as much of your life as possible around the tests you're built to ace. That's not avoidance. It's strategy.",
    prompt: "Where have you recently played to your strengths and had it clearly work?"
  },
  // Day 78 - Mar 19
  {
    quote: "Be wary of jobs that lure you in with financial and social wealth, but rob you of time wealth and physical wealth.",
    attr: "",
    framing: "They're listed in order of excitement but reverse order of priority. When your health fails, everything else becomes irrelevant. When your time is fully consumed, there's nothing left to enjoy. The inversion is the trap.",
    prompt: "Where have you recently protected your time or health instead of trading it away?"
  },
  // Day 79 - Mar 20
  {
    quote: "What do we do every single day that most others wouldn't dream of? That's the question worth asking.",
    attr: "",
    framing: "The extraordinary often lives so close to normal that you stop seeing it. The habits and standards you maintain without thinking are often precisely what differentiates you. Recognize them. Amplify them.",
    prompt: "What have you done recently, almost without thinking, that's actually exceptional?"
  },
  // Day 80 - Mar 21
  {
    quote: "Every thought you dwell on either damages or improves your life.",
    attr: "Leo Tolstoy, Calendar of Wisdom",
    framing: "Return to the upstream principle. Inputs determine outputs. The thoughts you feed, consciously or not, become the mood you operate from, the decisions you make, the way people experience you.",
    prompt: "What dominant thought this week have you deliberately chosen on purpose?"
  },
  // Day 81 - Mar 22
  {
    quote: "Both optimists and pessimists contribute to our society. The optimist invents the airplane and the pessimist the parachute.",
    attr: "Gil Stern",
    framing: "Hold both the possibility and the contingency. Unbounded optimism without risk-thinking is recklessness. Pure pessimism without possibility is paralysis. The effective operator brings both to the table.",
    prompt: "Where have you recently balanced optimism with a real contingency plan?"
  },
  // Day 82 - Mar 23
  {
    quote: "The obstacle is the way.",
    attr: "Marcus Aurelius",
    framing: "Not 'the obstacle is in the way.' The obstacle IS the way. Every constraint, every difficulty, every closed door contains within it the precise path forward, if you're willing to stop fighting the obstacle and start studying it.",
    prompt: "What obstacle have you recently turned into the actual path forward?"
  },
  // Day 83 - Mar 24
  {
    quote: "Live in day-tight compartments.",
    attr: "Dale Carnegie",
    framing: "Worry is almost always about a different time than right now: yesterday's mistake or tomorrow's uncertainty. Carnegie's instruction is to close those compartments and operate fully in today. Not as avoidance. As focus.",
    prompt: "When did you recently stay focused on today instead of yesterday or tomorrow, and it helped?"
  },
  // Day 84 - Mar 25
  {
    quote: "You have to start developing experiential wisdom seasons or years before the shit hits the fan.",
    attr: "Will Harris",
    framing: "Preparation has a long runway. You can't build the reserves the day you need them. The reading you do today, the relationships you invest in, the skills you practice: all of that is pre-positioned capital for a future you can't fully see yet.",
    prompt: "What capability have you been building that's already starting to pay off?"
  },
  // Day 85 - Mar 26
  {
    quote: "Curiosity is your greatest ally.",
    attr: "",
    framing: "Not ambition, not talent, not connections. Curiosity. It's the engine beneath all of them. The curious person asks better questions, finds unexpected paths, and stays engaged when others quit. It's also the one trait that keeps compounding as you use it.",
    prompt: "What has your curiosity recently led you to that was worth it?"
  },
  // Day 86 - Mar 27
  {
    quote: "To live only for some future goal is shallow. It's the sides of the mountain which sustain life, not the top. Here's where things grow.",
    attr: "Robert Pirsig, Zen and the Art of Motorcycle Maintenance",
    framing: "The summit is a moment. The climb is a life. Most of what you'll remember, most of what forms you, happens in the middle of the ascent. The process is not the price of admission. It is the thing.",
    prompt: "What part of your current climb have you actually enjoyed lately, not just the summit?"
  },
  // Day 87 - Mar 28
  {
    quote: "Get all the facts. Weigh all the facts, then come to a decision. Once a decision is reached, act.",
    attr: "Dale Carnegie",
    framing: "Most people skip the third step. They gather, they analyze, they deliberate... and then they deliberate some more. The decision loop is incomplete until you actually move. Decide and act in the same motion.",
    prompt: "What decision have you recently made and then actually acted on right away?"
  },
  // Day 88 - Mar 29
  {
    quote: "We can see the strength and potential and talent eluding their own vision. We must also be willing to do this for ourselves.",
    attr: "Gaston Sanchez",
    framing: "We are consistently more generous with others than with ourselves. We see possibility in people we love that they can't see. The practice is applying that same generous vision inward. You deserve the same coaching you'd give someone you believe in.",
    prompt: "Where have you recently given yourself the same generous encouragement you'd give a friend?"
  },
  // Day 89 - Mar 30
  {
    quote: "No suffering is forever.",
    attr: "",
    framing: "Not as comfort. As fact. Even the most sustained difficulties are finite. The problem is that in the middle of them, they feel permanent. That feeling is not evidence of permanence. It's just the experience of being in the middle.",
    prompt: "What difficulty have you recently pushed through, proving it wasn't permanent?"
  },
  // Day 90 - Mar 31
  {
    quote: "We never know when the ride is over.",
    attr: "Gaston Sanchez",
    framing: "Most people operate as though they have unlimited runway. They defer the important conversations, the meaningful work, the things they actually want to do. The ride ends without announcement. This is not morbid. It's clarifying.",
    prompt: "What have you done recently because you treated the day as genuinely precious?"
  },
  // Day 91 - Apr 1
  {
    quote: "Great leaders don't start by figuring out what they want from others. They start by figuring out what they can offer.",
    attr: "",
    framing: "Service-first leadership isn't soft. It's strategically and relationally superior. The leader who enters every room asking 'what can I bring?' builds more trust, more loyalty, and ultimately more results than the one asking 'what can I get?'",
    prompt: "What have you recently offered someone without being asked?"
  },
  // Day 92 - Apr 2
  {
    quote: "People DO judge a book by its cover. If we present things in a slipshod manner, they will be perceived as slipshod; if we present them in a creative, professional manner, we impute the desired quality.",
    attr: "Apple Marketing Philosophy, Markkula (1977)",
    framing: "This isn't about superficiality. It's about respect. The care you put into how something is presented signals how much you care about the thing itself. Presentation is not separate from substance. It's part of it.",
    prompt: "What have you recently presented with more care than usual, and noticed the difference?"
  },
  // Day 93 - Apr 3
  {
    quote: "In order to do a good job of the things we decide to do, we must eliminate all the unimportant opportunities.",
    attr: "Apple Marketing Philosophy, Markkula (1977)",
    framing: "Focus is not a time management tactic. It's a strategic decision about what you're willing not to do. The organizations and people who do great work almost universally got there by ruthless elimination, not by trying to do more.",
    prompt: "What have you recently said no to that freed up real capacity?"
  },
  // Day 94 - Apr 4
  {
    quote: "We will truly understand their needs better than any other company.",
    attr: "Apple Marketing Philosophy, Jobs and Markkula (1977)",
    framing: "Empathy as competitive advantage. Not as a soft skill but as a core strategy. The one who understands the customer's actual problem, not the one they describe but the one underneath, builds the product that wins.",
    prompt: "Where have you recently understood someone's real need better than expected, and it showed?"
  },
  // Day 95 - Apr 5
  {
    quote: "Everything looks like a failure in the middle.",
    attr: "Rosabeth Moss Kanter",
    framing: "This may be the most useful single piece of leadership knowledge for anyone building something. The middle is hard. The results aren't visible yet. The effort is peaking. Doubt is maximum. This is the moment most people quit, which is exactly why the ones who don't win.",
    prompt: "What are you in the middle of that's actually further along than it feels?"
  },
  // Day 96 - Apr 6
  {
    quote: "Ask questions instead of giving direct orders.",
    attr: "Dale Carnegie",
    framing: "Questions do something orders can't. They engage the other person's thinking. They make the conclusion feel discovered rather than dictated. They invite ownership. And they often surface information you didn't have that changes the answer.",
    prompt: "When did you recently ask instead of tell, and get a better result?"
  },
  // Day 97 - Apr 7
  {
    quote: "If you are not having the time of your life, you're in real trouble.",
    attr: "David Mamet",
    framing: "Not as pressure to be performatively happy. As a reality check. Life is short, specific, and yours. If the dominant experience is not something you'd choose if you could choose, that's diagnostic information. What needs to change?",
    prompt: "What moment recently made you feel like you're actually enjoying this life?"
  },
  // Day 98 - Apr 8
  {
    quote: "Throw down a challenge.",
    attr: "Dale Carnegie",
    framing: "People respond to being challenged. Not to being pushed or pressured, but to the genuine invitation to prove something they believe about themselves. A well-placed challenge unlocks effort that no incentive or instruction can produce.",
    prompt: "Who have you recently challenged, or been challenged by, in a way that raised the bar?"
  },
  // Day 99 - Apr 9
  {
    quote: "Live your life each day as you would climb a mountain. Climb slowly, steadily, enjoying each passing moment; and the view from the summit will serve as a fitting climax for the journey.",
    attr: "Harold V. Melchert",
    framing: "The summit is real and worth having. But the metaphor is the journey. The view from the top only means something because of the climb that preceded it. The suffering and the scenery are not opposites. They're the same story.",
    prompt: "What part of your current climb have you actually paused to enjoy recently?"
  },
  // Day 100 - Apr 10
  {
    quote: "There is no shortage of amazing ideas. The scarcity is in those willing to bring those ideas to fruition.",
    attr: "",
    framing: "Ideas are abundant. Execution is rare. Every field is full of people who know what should be done. Far fewer actually do it. The people who do the work, imperfectly and persistently, are not more gifted. They are more committed.",
    prompt: "What idea have you recently actually executed instead of just discussing?"
  },
  // Day 101 - Apr 11
  {
    quote: "The feelings are real, but the fear is bullshit.",
    attr: "",
    framing: "The emotion is valid. The fear as a signal that you shouldn't proceed is usually not. Fear arrives before anything genuinely dangerous and before anything genuinely important. Its presence is not evidence that the thing is wrong.",
    prompt: "What has fear told you not to do recently that you did anyway?"
  },
  // Day 102 - Apr 12
  {
    quote: "Give the other person a fine reputation to live up to.",
    attr: "Dale Carnegie",
    framing: "This is one of the most powerful leadership tools in existence. When you publicly attribute a quality to someone, they work to deserve it. People perform toward the version of themselves they believe others see. Build the right image.",
    prompt: "Who have you recently named a strength in, and how did they respond?"
  },
  // Day 103 - Apr 13
  {
    quote: "You are not alone.",
    attr: "",
    framing: "Not as a motivational statement but as a factual one. Whatever you're navigating, whoever you're trying to become, whatever you're afraid of, someone else has been there. They made it. The path exists.",
    prompt: "Who have you recently reached out to, or been reached out by, that reminded you you're not alone?"
  },
  // Day 104 - Apr 14
  {
    quote: "Unjust criticism is often a disguised compliment.",
    attr: "Dale Carnegie",
    framing: "When your work is ignored, it's invisible. When it's criticized harshly, you've entered someone's consciousness enough to provoke a reaction. Criticism, especially disproportionate criticism, is often a sign you've done something that matters.",
    prompt: "What criticism have you recently received that actually confirms you're doing something that matters?"
  },
  // Day 105 - Apr 15
  {
    quote: "It's not the same river and he's not the same man.",
    attr: "Heraclitus",
    framing: "Return to this one periodically. The situation has changed. You have changed. Applying yesterday's assumptions to today's reality is how intelligent people end up systematically wrong.",
    prompt: "Where have you recently caught yourself using an outdated assumption and corrected it?"
  },
  // Day 106 - Apr 16
  {
    quote: "Let go of what you cannot change. Recognize that some things are just out of our control, and that's okay. Focus on what you can change.",
    attr: "Shikita ga nai",
    framing: "The Japanese concept of shikita ga nai is not resignation. It's a precise allocation of energy. Fighting the unchangeable costs everything and produces nothing. Releasing it is not giving up. It's clearing the lane.",
    prompt: "What have you recently let go of that was outside your control, freeing up energy?"
  },
  // Day 107 - Apr 17
  {
    quote: "Keep busy.",
    attr: "Dale Carnegie",
    framing: "Carnegie's most deceptively simple advice. Not busy as distraction. Busy as antidote. Anxiety, rumination, and despair rarely survive sustained purposeful action. Motion is its own medicine.",
    prompt: "What activity have you recently used to pull yourself out of a low moment?"
  },
  // Day 108 - Apr 18
  {
    quote: "A motivated, gritty team can move mountains and create innovative products that will substantially improve the performance of the company.",
    attr: "Peter A. High",
    framing: "Motivation is often treated as a soft HR concern. It's actually a hard operational advantage. A team that genuinely believes in what it's doing outperforms a better-resourced team that doesn't, consistently, across every study on the subject.",
    prompt: "What have you recently done to lift the morale of a team or group you're part of?"
  },
  // Day 109 - Apr 19
  {
    quote: "Kindness is free.",
    attr: "",
    framing: "This is as basic as it gets, and as consistently underused. The friction cost of most acts of kindness is near zero. The relational return is disproportionate. And unlike most assets, it doesn't deplete when you spend it.",
    prompt: "What small act of kindness have you recently offered someone?"
  },
  // Day 110 - Apr 20
  {
    quote: "Try not to become a person of success, but rather try to become a person of value.",
    attr: "Albert Einstein",
    framing: "Success is measured from the outside. Value is built from the inside. The difference is not semantic. Success can be circumstantial, timed, borrowed. Value is what remains when the circumstances change.",
    prompt: "What value have you recently created that would matter even without recognition?"
  },
  // Day 111 - Apr 21
  {
    quote: "You're capable of way more than you can fathom.",
    attr: "",
    framing: "Not as flattery. As a structural observation about human self-perception. We tend to underestimate long-run capacity because we benchmark against current limitations. The compound growth of effort over time routinely exceeds what the early version of us thought was possible.",
    prompt: "Where have you recently surprised yourself with what you were capable of?"
  },
  // Day 112 - Apr 22
  {
    quote: "Find peace in imperfection. Find joy in the imperfections that make life unique.",
    attr: "Wabi-sabi",
    framing: "Japanese aesthetics has a name for this: wabi-sabi, the beauty of the imperfect, the unfinished, the transient. Perfectionism is a Western imposition on a world that was never designed to be perfect. Learn to see the value in the rough edges.",
    prompt: "What imperfect thing have you recently made peace with, or even come to appreciate?"
  },
  // Day 113 - Apr 23
  {
    quote: "Everyone has a different timeline and unique path. Focus on your own progress rather than measuring yourself against others.",
    attr: "Oubaitori",
    framing: "Cherry blossoms don't bloom on the same schedule. The concept of oubaitori reminds us that comparison to another's timeline is a category error. Their race is not your race. Run your own.",
    prompt: "Where have you recently focused on your own progress instead of comparing to someone else's?"
  },
  // Day 114 - Apr 24
  {
    quote: "Show emotional maturity and self-control, even when faced with challenges. Be patient, resilient, and understanding.",
    attr: "Gaman",
    framing: "Gaman: enduring the seemingly unbearable with patience and dignity. This is not suppression. It's the capacity to hold difficulty without being distorted by it. That steadiness is leadership at its core.",
    prompt: "Where have you recently held steady with patience under real pressure?"
  },
  // Day 115 - Apr 25
  {
    quote: "Always seek to improve. Even small changes can add up and make a big impact over time.",
    attr: "Kaizen",
    framing: "Kaizen, continuous improvement, sounds modest. In practice it's one of the most powerful operating philosophies ever developed. Toyota built the most reliable manufacturing system in history out of the discipline of making things 1% better every day.",
    prompt: "What small improvement have you made recently that's starting to add up?"
  },
  // Day 116 - Apr 26
  {
    quote: "The moment you have many priorities, you have none.",
    attr: "Frank Slootman",
    framing: "Return to this one. It deserves repetition. Look at your calendar this week. Count the things labeled 'priority.' Now ask which one actually is. The rest are just tasks.",
    prompt: "What have you protected as your one true priority recently?"
  },
  // Day 117 - Apr 27
  {
    quote: "Seek patterns and the meaning behind them.",
    attr: "",
    framing: "Patterns are the language through which experience speaks. The recurring obstacle, the repeated relationship dynamic, the same mistake in different contexts. When you start seeing patterns, you stop being surprised by them. And then you can change them.",
    prompt: "What pattern have you recently noticed and started to change?"
  },
  // Day 118 - Apr 28
  {
    quote: "Discover your purpose. Determine the reason you wake up each morning. This is what gives life meaning.",
    attr: "Ikigai",
    framing: "Ikigai is found at the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. Most people live fully in one or two of those quadrants. The full convergence is rare and worth pursuing.",
    prompt: "Which part of your ikigai have you recently leaned into more?"
  },
  // Day 119 - Apr 29
  {
    quote: "Tell your story so vividly that people feel it. Then make it easy for them to find the others like them.",
    attr: "",
    framing: "This is how movements work, whether they're business movements or social ones. The story creates the magnet. The community forms around the magnet. First tell it well. Then build the gathering place.",
    prompt: "What story about your work have you recently told more clearly, and who responded to it?"
  },
  // Day 120 - Apr 30
  {
    quote: "When the student is ready the teacher will appear. When the student is truly ready the teacher will disappear.",
    attr: "Tao Te Ching (Shu-Ha-Ri)",
    framing: "Mastery moves through stages. First you follow exactly. Then you begin to experiment. Then you transcend the framework entirely and create your own. The danger is staying too long in stage one because it feels safe.",
    prompt: "Where have you recently moved beyond someone else's framework into your own?"
  },
  // Day 121 - May 1
  {
    quote: "There will always be a reason to slow down just a little. But the time, effort, passion, and injuries you've been through are beyond reason. So when reason taps you on the shoulder, RUN FASTER.",
    attr: "",
    framing: "This is written for runners but true for builders. The excuses accumulate precisely as momentum builds. Every reason to stop is more persuasive than the last. That's not a sign to stop. That's a sign to accelerate.",
    prompt: "What have you recently pushed through instead of slowing down for a good excuse?"
  },
  // Day 122 - May 2
  {
    quote: "If you're going to sail your own ship, you're going to have to fight a few fires.",
    attr: "Will Harris",
    framing: "Owning your own direction comes with a price: you're also the fire department. Independence doesn't mean smooth sailing. It means you've traded the certainty of someone else's path for the freedom, and the responsibility, of your own.",
    prompt: "What fire have you recently handled well as the cost of running your own thing?"
  },
  // Day 123 - May 3
  {
    quote: "And you're gonna fail, and you're gonna fail, and you're gonna fail, and you're gonna fail, and then you're going to win. And that's life.",
    attr: "Jocko Willink",
    framing: "The sequencing is important. Not failure OR success. Failure THEN success. The failures aren't detours from the path. They are the path. Every person you admire for what they've built has a longer failure list than a success list.",
    prompt: "What recent failure is already turning into a step toward a win?"
  },
  // Day 124 - May 4
  {
    quote: "You haven't lost the fight when you get knocked down. You've lost the fight when you don't get up.",
    attr: "Will Harris",
    framing: "Getting knocked down is not the test. Everyone gets knocked down. The test is what happens in the seconds after. The will to get back vertical, even slowly, even imperfectly, is the entire difference.",
    prompt: "Where have you recently gotten back up after being knocked down?"
  },
  // Day 125 - May 5
  {
    quote: "Much of what you think matters actually doesn't.",
    attr: "",
    framing: "Not as cynicism. As relief. The vast majority of things you worry about, the perceived slights, the missed opportunities, the things you said awkwardly, they are invisible to others and irrelevant to your actual trajectory. You're often tracking noise.",
    prompt: "What have you recently stopped worrying about once you realized it didn't matter much?"
  },
  // Day 126 - May 6
  {
    quote: "The idea that you're going to live most of your life doing a thing for the express purpose of stopping it, and then start to enjoy your mythical retirement reward... that's the root of all craziness.",
    attr: "Mike Rowe",
    framing: "The deferred life plan is one of the most seductive and dangerous frameworks ever sold to ambitious people. Enjoyment is not a reward for suffering through. It's a practice you start now or you don't start at all.",
    prompt: "What have you recently enjoyed now instead of deferring to 'someday'?"
  },
  // Day 127 - May 7
  {
    quote: "What if we paused to consider what we do every single day that most others wouldn't dream of? What is it that makes us extraordinary? And how might we lean into it?",
    attr: "",
    framing: "Extraordinary is not exotic. It's the consistent practice of something uncommon, done so regularly you've stopped noticing it. The habits and standards you maintain without fanfare may be your greatest professional asset.",
    prompt: "What ordinary daily habit of yours have you recently recognized as actually exceptional?"
  },
  // Day 128 - May 8
  {
    quote: "Every day, we make a thousand little compromises. Most of them are invisible. The goal is not to avoid all compromises but to notice them.",
    attr: "Seth Godin",
    framing: "The compromise you make consciously is a decision. The one you make unconsciously is drift. Awareness doesn't mean perfection. It means you're the author of your standards rather than the passive inheritor of entropy.",
    prompt: "What small compromise have you recently caught yourself making, and adjusted?"
  },
  // Day 129 - May 9
  {
    quote: "Your current suffering does not define you, but it can refine you.",
    attr: "",
    framing: "Suffering is not a verdict. It's a forge. What comes out of it depends entirely on what you do with it while it's happening. The raw material is the same. The outcome depends on the craftsman.",
    prompt: "What are you currently going through that's already refining you in some way?"
  },
  // Day 130 - May 10
  {
    quote: "How you make and process small errors is the secret to learning as an adult.",
    attr: "Andrew Huberman",
    framing: "The scale of the error is almost irrelevant. A small mistake processed well produces more growth than a catastrophe you survive but don't examine. Build the habit of the post-game review: what happened, what you'd do differently, what you keep.",
    prompt: "What small recent mistake have you already debriefed and learned from?"
  },
  // Day 131 - May 11
  {
    quote: "Life IS about the little things.",
    attr: "",
    framing: "Not the moments you put on a highlight reel. The everyday texture of life is made of small things. The quality of a morning. A good conversation. Work that felt worthwhile. The small things, attended to, are what a good life is actually made of.",
    prompt: "What small good thing this week have you actually paused to notice?"
  },
  // Day 132 - May 12
  {
    quote: "Fill your mind with thoughts of peace, courage, health, and hope.",
    attr: "Dale Carnegie",
    framing: "Input shapes output. You don't maintain a positive mindset by suppressing negative thoughts. You crowd them out with better ones. It's an active practice, not a passive result.",
    prompt: "What have you been feeding your mind lately that's producing better thinking?"
  },
  // Day 133 - May 13
  {
    quote: "Success is not a result of spontaneous combustion. You must set yourself on fire.",
    attr: "Reggie Leach",
    framing: "Results don't happen to you. You ignite them. No one is coming to light the match. The energy, the initiative, the decision to begin, those are yours to generate. Everything else follows from that.",
    prompt: "Where have you recently generated your own momentum instead of waiting for it?"
  },
  // Day 134 - May 14
  {
    quote: "Count your blessings, not your troubles.",
    attr: "Dale Carnegie",
    framing: "The mind has a negativity bias. Left unchecked, it will spend three times more energy on what went wrong than what went right. Gratitude is not naive. It's a deliberate correction to a hardware problem.",
    prompt: "What blessing have you recently actually counted instead of taking for granted?"
  },
  // Day 135 - May 15
  {
    quote: "There is no shortage of amazing ideas. The scarcity is in those willing to bring those ideas to fruition.",
    attr: "",
    framing: "Execution is the moat. Not intelligence, not creativity, not connections. The person willing to do the unglamorous work of bringing something from idea to reality is far rarer than the person with a great idea.",
    prompt: "What's the smallest step you've recently taken on an idea you'd been sitting on?"
  },
  // Day 136 - May 16
  {
    quote: "The only way to get the best of an argument is to avoid it.",
    attr: "Dale Carnegie",
    framing: "This is not about conflict avoidance. It's about understanding what arguments actually accomplish. Very rarely does the better argument change the other person's mind. A better relationship creates the conditions where minds can change.",
    prompt: "Where have you recently chosen the relationship over winning an argument?"
  },
  // Day 137 - May 17
  {
    quote: "Emulate children who tend to 'do, then learn' instead of the adult way of 'learn, then do.'",
    attr: "",
    framing: "Children learn to walk by falling constantly. They don't study walking first. They attempt, fail, adjust, attempt again. Adults invert this and spend years preparing for things they could have learned faster by simply starting.",
    prompt: "What have you recently learned faster by just doing it instead of preparing more?"
  },
  // Day 138 - May 18
  {
    quote: "Perseverance enables things to happen.",
    attr: "Gaston Sanchez",
    framing: "Not talent. Not strategy. Perseverance. You were ready to leave. You stayed. You made a connection. Connections turn into opportunities. Opportunities turn into outcomes. None of it happens if you leave.",
    prompt: "What have you recently stayed with, right when you were tempted to leave?"
  },
  // Day 139 - May 19
  {
    quote: "You have to act as if you are a force of nature and try to bend the universe in your desired direction, while remaining pleasant and open to help along the way.",
    attr: "James Clear",
    framing: "Conviction and openness held simultaneously. Not the arrogance of certainty and not the passivity of accommodation. The force of nature that is also receptive. This is what effective people look like in practice.",
    prompt: "Where have you recently pushed hard toward something while staying open to help?"
  },
  // Day 140 - May 20
  {
    quote: "It is not enough. It is never enough.",
    attr: "",
    framing: "This is the productive dissatisfaction that drives growth. Not self-criticism. Not despair. The honest recognition that there is always a further edge, always more to understand, always a better version of what you're building. The restlessness is the engine.",
    prompt: "What have you recently pushed to a new level instead of settling?"
  },
  // Day 141 - May 21
  {
    quote: "The best investment you can make is in yourself.",
    attr: "Warren Buffett",
    framing: "Buffett means this across the full range: your capabilities, your knowledge, your communication, your judgment. That investment pays interest for the rest of your life. Every other investment has a cap. This one doesn't.",
    prompt: "What investment in yourself have you actually followed through on recently?"
  },
  // Day 142 - May 22
  {
    quote: "If you do what you've always done, you'll get what you've always got.",
    attr: "Will Harris",
    framing: "Returning to this. Because inertia is powerful and it compounds. The things you don't change keep producing the same results. Not better results because you're working harder at them. The same ones.",
    prompt: "What pattern have you recently broken that was producing a stale result?"
  },
  // Day 143 - May 23
  {
    quote: "Great things are not done by impulse, but by a series of small things brought together.",
    attr: "Vincent van Gogh",
    framing: "Van Gogh produced over 2,000 artworks in roughly a decade of serious work. Not through sporadic bursts of genius. Through relentless, daily, often exhausting production. The body of work is built one piece at a time.",
    prompt: "What small piece of a bigger body of work have you added to recently?"
  },
  // Day 144 - May 24
  {
    quote: "Never stop counting your blessings.",
    attr: "",
    framing: "Gratitude is not a November exercise. It's a daily recalibration. When you stop counting, the mind defaults to deficit. When you count deliberately, even briefly, something shifts in how you move through the rest of the day.",
    prompt: "What have you recently taken a moment to genuinely appreciate?"
  },
  // Day 145 - May 25
  {
    quote: "Speak softly and carry a big stick; you will go far.",
    attr: "Theodore Roosevelt",
    framing: "The combination of low decibel and high conviction. The person who doesn't need to perform their strength is often the one with the most of it. Restraint in expression paired with serious capability is the most formidable combination in any room.",
    prompt: "Where have you recently let quiet confidence do the work instead of overexplaining?"
  },
  // Day 146 - May 26
  {
    quote: "What we fear doing most is usually what we most need to do.",
    attr: "Tim Ferriss",
    framing: "This lines up exactly with Carl Jung: where the fear is, there is the task. Fear, as a navigational tool, is pointing at the thing. Not to stay away from it. To go directly toward it.",
    prompt: "What have you recently done specifically because it scared you?"
  },
  // Day 147 - May 27
  {
    quote: "Don't think 'what's the cheapest way' or 'what's the fastest way.' Think 'what's the most amazing way to do it?'",
    attr: "Richard Branson",
    framing: "Most of us have been trained to optimize for cheap and fast. Branson's question resets the frame. Sometimes the most amazing version is also the most defensible, the most memorable, the one that creates real separation from everyone else doing it the efficient way.",
    prompt: "What have you recently done the amazing way instead of just the efficient way?"
  },
  // Day 148 - May 28
  {
    quote: "Be the change you wish to see in the world.",
    attr: "Gandhi",
    framing: "Not a bumper sticker sentiment. A practical operating principle. If you want more directness around you, be more direct. If you want more accountability, hold yourself accountable first. The change starts with the model.",
    prompt: "Where have you recently modeled the change you want to see, before asking it of others?"
  },
  // Day 149 - May 29
  {
    quote: "Anything worthwhile to your heart will elicit fear and self-doubt. This is your cue to proceed.",
    attr: "",
    framing: "The stakes signal. If something matters enough to frighten you, it matters. The fear is not a reason to stop. It's the indicator that you've found something worth doing.",
    prompt: "What have you recently proceeded on despite the fear and self-doubt it stirred up?"
  },
  // Day 150 - May 30
  {
    quote: "Keep busy. Don't fuss about trifles.",
    attr: "Dale Carnegie",
    framing: "The small irritants and minor grievances will always be there. The question is how much of your attention they deserve. Fussing about trifles is expensive, not because the trifles matter, but because the attention they consume does.",
    prompt: "What trifle have you recently let go of instead of fussing over it?"
  },
  // Day 151 - May 31
  {
    quote: "The quality of your life is a direct reflection of the quality of your questions.",
    attr: "Tony Robbins",
    framing: "Not the quality of your answers. Your questions. The ones you ask yourself in the morning, the ones you bring to your work, the ones you ask the people around you. Better questions produce better thinking, which produces better decisions.",
    prompt: "What better question have you recently asked yourself or someone else?"
  },
  // Day 152 - Jun 1
  {
    quote: "Refresh, redefine, and reinvigorate your efforts. You are choosing to define your own operating environment and terms of success.",
    attr: "Gaston Sanchez",
    framing: "Mid-year energy. The first half is behind you. The second half belongs to you. This is the moment to choose deliberately rather than drift forward. Not a reset, a reinvention with everything you've already learned.",
    prompt: "What have you already refreshed or redefined for yourself recently?"
  },
  // Day 153 - Jun 2
  {
    quote: "Do not imitate others.",
    attr: "Dale Carnegie",
    framing: "The most efficient path to mediocrity is to copy the most successful version of someone else. It produces a perfect replica of someone who already exists. The world has no use for a second you. Build the original.",
    prompt: "Where have you recently done something your own way instead of copying someone else's?"
  },
  // Day 154 - Jun 3
  {
    quote: "What's the most amazing way to do it?",
    attr: "Richard Branson",
    framing: "Return to this question. Not as an invitation to complexity, but as a challenge to your default mode. Adequate is invisible. Remarkable is remembered. What would remarkable look like in whatever you're building today?",
    prompt: "What have you recently elevated from adequate to genuinely remarkable?"
  },
  // Day 155 - Jun 4
  {
    quote: "Grit is passion and perseverance for very long-term goals.",
    attr: "Angela Duckworth",
    framing: "Duckworth's research found that the single best predictor of long-term success was not IQ, not talent, not background. It was grit: the combination of caring deeply enough about something to keep going through the hard parts, over years, not days.",
    prompt: "What long-term goal have you recently kept grinding on through a hard stretch?"
  },
  // Day 156 - Jun 5
  {
    quote: "Even if you don't have all the things you want, be grateful for the things you don't have that you don't want.",
    attr: "Bob Dylan",
    framing: "This is the full accounting. Not just what you have vs. what you want. Also what you don't have that would make things worse. The absence of bad things is a form of abundance that almost always goes unrecognized.",
    prompt: "What bad thing are you glad you don't currently have in your life?"
  },
  // Day 157 - Jun 6
  {
    quote: "The most important investment you can make is in yourself.",
    attr: "Warren Buffett",
    framing: "Return to this at the halfway point of the year. The skills you've built, the thinking you've sharpened, the capabilities you've expanded: these compound. Everything else is asset management. This is asset creation.",
    prompt: "What capability have you built in recent months that you're proud of?"
  },
  // Day 158 - Jun 7
  {
    quote: "In good times or bad, extract a lesson. Failures forge heroes, not successes.",
    attr: "",
    framing: "The hero's journey is always through difficulty, not around it. The question after every failure isn't 'how do I avoid this happening again?' It's 'what did I become by going through this?'",
    prompt: "What lesson have you recently extracted from something that didn't go well?"
  },
  // Day 159 - Jun 8
  {
    quote: "Your life will change when you change your mind.",
    attr: "",
    framing: "Not when circumstances change. Not when other people change. When you change your interpretation of the situation, the situation itself shifts, because your choices, your attention, your energy, all realign.",
    prompt: "What interpretation have you recently shifted that changed how things went?"
  },
  // Day 160 - Jun 9
  {
    quote: "Nobody accomplishes anything significant alone.",
    attr: "James Clear",
    framing: "The rugged individual is a myth that distracts good people from building the teams and coalitions that great things actually require. Who do you need around you that you haven't recruited yet?",
    prompt: "Who have you recently recruited or leaned on to get something significant done?"
  },
  // Day 161 - Jun 10
  {
    quote: "Access to knowledge and education is more available now than at any point in history. Harness this opportunity and help yourself.",
    attr: "",
    framing: "The barrier to learning has essentially been eliminated. What remains is the barrier of attention and priority. You have access to everything. The question is whether you're treating that access as the asset it is.",
    prompt: "What have you recently taught yourself using resources that were freely available?"
  },
  // Day 162 - Jun 11
  {
    quote: "The alignment between marketing, product, and culture is an unbeatable operating strategy.",
    attr: "gapingvoid",
    framing: "When what you say, what you build, and how you operate internally are all the same thing, you have achieved something almost no organization manages. Consistency across those three dimensions is not just good PR. It's structural advantage.",
    prompt: "Where have you recently brought what you say and what you do into better alignment?"
  },
  // Day 163 - Jun 12
  {
    quote: "Reinventing yourself helps you embrace your best, truest self.",
    attr: "",
    framing: "Reinvention is not abandonment. It's excavation. The version of you that's been obscured by accumulated habits, outdated identities, and roles that no longer fit isn't lost. It's waiting under the layers.",
    prompt: "What old habit or role have you recently shed that no longer fit you?"
  },
  // Day 164 - Jun 13
  {
    quote: "Trying to honestly see things from the other person's point of view will distinguish you from most people.",
    attr: "Dale Carnegie",
    framing: "Perspective-taking is rare. Most of us do a cognitive exercise we call empathy but which is actually projection: imagining how WE would feel in their situation. Real perspective-taking means starting from their values, their history, their priorities.",
    prompt: "Where have you recently understood someone deeply instead of just projecting onto them?"
  },
  // Day 165 - Jun 14
  {
    quote: "Simplicity is the hardest thing.",
    attr: "gapingvoid",
    framing: "Every complex thing started simple. Every bloated thing was once lean. The relentless pressure is toward complexity, toward more, toward covering all the bases. The discipline of returning to simplicity is a practice, not a starting point.",
    prompt: "What have you recently simplified that had gotten too complicated?"
  },
  // Day 166 - Jun 15
  {
    quote: "The measure of intelligence is the ability to change.",
    attr: "Albert Einstein",
    framing: "Not raw intelligence. Adaptability. The willingness to update your model when evidence demands it. Rigidity masquerades as principle. Real principle is the goal; flexibility is in the path.",
    prompt: "Where have you recently updated your position when the evidence called for it?"
  },
  // Day 167 - Jun 16
  {
    quote: "You'll never meet the same version of me. I grow every day.",
    attr: "Trei McMullen",
    framing: "This is both aspiration and commitment. To be in a state of continuous becoming. Not restless change for its own sake. Deliberate, directional growth that makes you slightly different today than you were yesterday.",
    prompt: "What made you slightly different today than you were yesterday?"
  },
  // Day 168 - Jun 17
  {
    quote: "Don't worry about the past.",
    attr: "Dale Carnegie",
    framing: "The past is the only thing you can do absolutely nothing about. Examining it for lessons is valuable. Living in it, replaying what went wrong, is simply expensive. Extract the lesson. Release the tape.",
    prompt: "What past event have you finally stopped replaying, having taken its lesson?"
  },
  // Day 169 - Jun 18
  {
    quote: "Create happiness for others.",
    attr: "Dale Carnegie",
    framing: "Not as obligation. As strategy for your own wellbeing. The research on subjective happiness consistently shows that giving, contributing, and creating positive experiences for others is one of the most reliable paths to feeling good yourself.",
    prompt: "Whose day have you recently made better with a small deliberate act?"
  },
  // Day 170 - Jun 19
  {
    quote: "Ask yourself: what is the worst that can possibly happen? Prepare to accept the worst. Try to improve on the worst.",
    attr: "Dale Carnegie",
    framing: "This is the cognitive antidote to catastrophizing. Name the worst case specifically. Examine it. Decide if you can survive it. Usually you can. Once you've accepted the floor, all the space above it becomes workable.",
    prompt: "What feared outcome have you recently faced head-on and found you could handle?"
  },
  // Day 171 - Jun 20
  {
    quote: "The longest journey you'll ever take is the 18 inches from your head to your heart.",
    attr: "Andrew Bennett",
    framing: "Knowing the right thing and feeling it are different. Living from principle requires that the knowledge land in your body, not just in your reasoning. The integration of the two is where conviction comes from.",
    prompt: "What have you recently moved from knowing intellectually to actually living out?"
  },
  // Day 172 - Jun 21
  {
    quote: "There are still strong people, but only those who choose to be.",
    attr: "Paul Graham",
    framing: "Strength used to be built by necessity. Now it's built by decision. The same applies to discipline, resilience, character. None of these are automatically produced by the world anymore. They all require the deliberate choice.",
    prompt: "What strength are you currently building on purpose, and how's it going?"
  },
  // Day 173 - Jun 22
  {
    quote: "Excellence often hides at the edges.",
    attr: "James Clear",
    framing: "The crowded center is where the mediocre safe plays live. The edges are uncomfortable, underexplored, and often dismissed. Which is precisely why the excellence lives there. You can't find it by staying in the middle.",
    prompt: "Where have you recently found an edge others were ignoring?"
  },
  // Day 174 - Jun 23
  {
    quote: "With age comes experience, and the ability to discern where our energy should be focused. When paired with a growth mindset, experience multiplies the value of our actions.",
    attr: "Gaston Sanchez",
    framing: "Experience alone is not wisdom. Experience plus reflection plus application is wisdom. The people who've lived a lot and changed little have confounded the raw material with the finished product.",
    prompt: "What hard-won experience have you recently put to good use?"
  },
  // Day 175 - Jun 24
  {
    quote: "It is not enough. It is never enough.",
    attr: "gapingvoid",
    framing: "Return to this as the first half of the year closes. Use it not as self-flagellation, but as direction. There's more available. More to give. More to build. The next level exists. You can see it from here.",
    prompt: "What have you built in the first half of this year that you're genuinely proud of?"
  },
  // Day 176 - Jun 25
  {
    quote: "What you think, you become. What you feel, you attract. What you imagine, you create.",
    attr: "Buddha (attributed)",
    framing: "The directional arrow in this quote is important: it runs from internal to external. The inner state precedes the outer result. Your attention, your beliefs, your expectations shape the actions you take, which shape the world you're living in.",
    prompt: "What have you recently imagined for yourself that's already starting to take shape?"
  },
  // Day 177 - Jun 26
  {
    quote: "The choice to do something or do nothing is our own, as will be the resulting journey.",
    attr: "Gaston Sanchez",
    framing: "Return to this before the second half of the year begins. You are not carried by circumstance. You are choosing, constantly, either actively or by default. The half-year ahead will be the product of the choices you make starting now.",
    prompt: "What choice have you recently made or affirmed that's shaping your next six months?"
  },
  // Day 178 - Jun 27
  {
    quote: "Do not go where the path may lead. Go instead where there is no path and leave a trail.",
    attr: "Ralph Waldo Emerson",
    framing: "Trail-making is uncomfortable, slower, and lonelier than path-following. It's also the only way to build something original. The path already exists because someone else already went there. If you want to go somewhere new, you start without a map.",
    prompt: "Where have you recently gone off the well-worn path to make something original?"
  },
  // Day 179 - Jun 28
  {
    quote: "You are who you've been looking for.",
    attr: "",
    framing: "Not a call to arrogance. A call to recognition. The mentor, the solution, the answer, the next step: very often it's not elsewhere. It's in the person who already knows the problem and has been accumulating the tools to solve it.",
    prompt: "What problem have you recently solved yourself instead of waiting on someone else?"
  },
  // Day 180 - Jun 29
  {
    quote: "We never know when the ride is over.",
    attr: "Gaston Sanchez",
    framing: "End with this one. Not as warning but as invitation. The ride is still going. Right now. Today. Whatever you've been waiting to do, say, build, give, try... the ride is still going. The window is open. Go.",
    prompt: "What have you done recently, right now, instead of waiting for someday?"
  }
];
