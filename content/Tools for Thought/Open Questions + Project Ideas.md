Some questions I'm thinking about and projects I want to work on in the somewhat distant future. 

#### AI
*Disclaimer: I have only been getting into AI recently, so all of these thoughts might already exist or be extremely stupid. I'm just trying to take advantage of the fact that I'm new to the field while I still am, because newcomers can often question things that others take for granted. Would especially love being contacted for these if you have any feedback!*
- How do humans operate without well-defined goals, and could that be extrapolated to alignment? 
	- [This](https://evanjconrad.com/posts/world-models) suggests a somewhat interesting approach. Bias it excessively towards loving humanity at first???
- How many "parameters" did evolution give us? Many people talk about how humans can learn things in much less time and with less data than models, but I suspect that much of the architecture for that learning was already in place because of evolution.
- To what extent does understanding natural language help a model build an accurate model of the world? 
- Related to the last: [[Scaling|how far can scaling take us without any major architecture advances]]?
- I like Sakana AI's [idea of using evolution](https://sakana.ai/evolutionary-model-merge/). Where else could that apply?
	- Natural selection for data? I don't know what you would be selecting on, but it seems interesting.
- [[The Busy Person's Introduction to Large Language Models#System 1 vs. System 2|How can we give LLMs System 2s]]?
- [[The Busy Person's Introduction to Large Language Models#Self-improvement|How do we unlock the step 2 of LLMs?]] 
	- Right now, they can only be as good as the best humans at writing, conversing, and almost even "thinking". This might not seem that bad until you read something like [[Thinking, Fast and Slow]] and realize how many shared cognitive biases we have.
- Guiding AI to do what you want while coding is hard, because plain English is not always the highest fidelity [[Notation|notation]] for your thoughts. What does a programming language for working with AI-generated code look like? Deep explorations into prompt engineering techniques would be useful for this.
	- Building off this idea, could something like an AI language be used to wrap "general" AIs like GPTs around narrowly trained AIs instead of just using clever prompting engineering techniques on top of GPT like many companies seem to be doing today? This could help with the issue that you want most public-facing narrow AI applications to understand text well, but training for that understanding reduces the narrowness. Basically, user passes in text -> converted by a general AI into the language -> narrow AI -> narrow AI gives output in language -> general AI spits it out for the user. 

#### Human-Computer Interaction/Tools for Thought 
- As more people become creators with AI, search becomes increasingly important (at least until training becomes so cheap that everyone can have personalized agents creating content tailor-made for them). Google has been starting to feel crummy as a user experience for several years now, and I think search experiences in general will continue to get worse without significant overhauls into the core ideas behind search. I think we need a new [Anatomy of a Large-Scale Hypertextual Web Search Engine](https://research.google/pubs/the-anatomy-of-a-large-scale-hypertextual-web-search-engine/). What does this look like?
	- [[An RLHF-Ranker Crawler Thing]] as a potential approach?
- What does a note-taking system look like that is [[Notetaking for thinking|fundamentally built around thinking]]? So far, I think it's a highly effective [[Building a better memory system|memory]] [[#Memory Systems|system]] + some of [these ideas by Linus Lee](https://thesephist.com/posts/nav/).

##### Memory Systems
- The core ideas behind spaced repetition systems (automated scheduling for something repetitive based on your choices) could and (I believe) should be generalized to other aspects of life (I explore some of these in [[Spaced everything]]). What does an effective system that helps you do this look like?
	- Update: Though not exactly what I was originally envisioning, I think something like [Dot](https://new.computer/)is a promising approach. 
- "What does a memory system look like for a driven creative genius who is an expert with the system?" 
> Software design so often focus on the first few hours of someone's experience. Yet what you really want is to max out the experience someone is having in their thousandth or ten thousandth hour of use. Pianos seem designed primarily for experts and only incidentally for beginners. If you were designing the piano with modern software design practice in mind it would have 8 white keys, no black keys, and no pedals. It'd be easy to play some simple songs, and that's it. What we're really looking for is ideas which can be the foundation for long-run improvement, with an extraordinarily high ceiling. - [Michael Nielsen](https://michaelnotebook.com/bbms/index.html)
- How should search evolve as "[spatial computing](https://www.apple.com/newsroom/2024/04/apple-vision-pro-brings-a-new-era-of-spatial-computing-to-business/#:~:text=Customized%20Workspaces%20for%20Productivity,workspaces%20and%20enhance%20everyday%20productivity.)" emerges? I think just putting standard 2d search into a 3d environment feels *wrong*. There's something about search that feels inherently 3d to me. 
	- [[Search of the future|Some exploration into this idea]]
- Programming languages are fairly high fidelity [[Notation|notation]] for your thoughts. What does a programming language for ideas look like? [Inspiration](https://thesephist.com/posts/structured-thought/)
- What can the idea of using the [concept of feeds for good](https://uxdesign.cc/hijack-your-feed-2b9070d13a0d). Outside of tasks, what about a [media playlist](https://sirupsen.com/playlists) of sorts? Even further, outside of Twitter, I love feeds as an interaction design choice. What do read-it-later apps, email, etc look like as feeds?
#### Other
- #consciousness !!!
- To what extent is human knowledge inherently dual use? Michael Nielsen presents a disturbingly compelling case here: https://michaelnotebook.com/xrisk/ (cmd/ctrl-f "dual use"). 
	- This is difficult for me, because my ambition has been to discover/create big things that can (within reasonable constraints) empower many people to do more of what they want to do. However, in the long-run 
- In direct contradiction with that; "As a general matter, a lot of oral knowledge in the world is still not readily available, and reflection on this fact might lead one in many interesting directions. One obvious application is helping people more readily understand the present state of affairs in different domains. If I want to know “how we’re doing” in, say, antiviral drug development, I could spend a few hours hunting for top researchers, email a few, and perhaps get on calls to obtain their candid assessments. Are we making good progress? What are the most important open problems? What’s holding things back? And so on. How can we make all of this knowledge publicly available across all fields?" -> https://marginalrevolution.com/marginalrevolution/2019/12/work-on-these-things.html
	- For the most part, the issue here is that it's just not worth it for most frontier researchers to be spending much of their time writing this down. Some ways that we can work on this:
		- Use [Distill](https://distill.pub/) as inspiration: how can we make it more worth it for frontier researchers to contribute?
		- Having contributors who spend a lot of time with frontier researchers (assistants, interns, etc)?
		- Cultivating a centralized community of motivated people who go out and do what Tyler Cowen did and make it public for whatever fields interest them?
- Poverty is a major concern for me. The inability to live the way you want is terrible. [[Poor Economics|While avoiding dangerous "miracle" solutions]], how can we help the poor? Economists are working hard on this, and I need to spend more time understanding their research + not forget about the poor while I go off chasing AI dreams that overwhelmingly benefit the already privileged. 

