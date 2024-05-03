*First pass, just taking notes on what doesn't make sense and making quick Google searches for smaller topics. Will do a second pass later on more technical topics once done with 3Blue1Brown's neural networks course + fast.ai.*

https://www.youtube.com/watch?v=UTuuTTnjxMQ
https://www.dwarkeshpatel.com/p/sholto-douglas-trenton-bricken


in order to have better context, the model has to get better at learning how to learn: better compression of information into meaningful units enables longer contexts. In some sense, focusing on longer context kind of proxies intelligence.
Quadratic attention costs?
MLP?
Residual stream?: imagine you’re in a boat (query) going down a river. You have little streams that are coming off the river (attention heads and mlps). The working memory of the model (kind of like the RAM of the model). 
Forward passes?
Hill climbing?
The brain is recurrent?

Residual stream in the cerebellum: there’s a direct path and an indirect path, for extra information. It’s like attention in the brain. 

Softmax?

Is most intelligence pattern matching? Think about it, and search it up. 

Zvi - What about the costs of training orders-of-magnitude bigger models? Does this break recursive intelligence explosion? It’s a breaking mechanism. We should be trying hard to estimate how much of this is automatable. I agree that the retraining costs and required time are a breaking mechanism, but also efficiency gains could quickly reduce those costs, and one could choose to work around the need to do that via other methods. One should not be confident here.

Zvi - Understanding what goes wrong is key to making AI progress. There are lots of ideas but figuring out which ideas are worth exploring is vital. This includes anticipating which trend lines will hold when scaled up and which won’t. There’s an invisible graveyard of trend lines that looked promising and then failed to hold.

Zvi - A lot of good research works backwards from solving actual problems. Trying to understand what is going on, figuring out how to run experiments. Performance is lots of low-level hard engineering work. Ruthless prioritization is key to doing high quality research, the most effective people attack the problem, do really fast experiments and do not get attached to solutions. Everything is empirical.

Compute and taste are limiting factors to AI researchers

Human brain is 30 to 309 trillion synapses, GPT is estimated at 1 Trillion parameters. That’s not a 1-1 mapping but it’s definitely plausible that these models are smaller than the brain.

The human brain actually might not be more sample efficient or maybe not as much as we think. A lot of things are hardwired + coevolution of language

Original scaling laws paper: larger models leads to more sample efficiency, which makes sense. 

Related to above: Zvi- Bigger models allow you to minimize superposition (overloading more features onto less parameters), making results less noisy, whereas smaller ones are under parameterized given their goal of representing the entire internet. Speculation that superposition is why interpretability is so hard. I wonder if that means it could get easier with more parameters? Could we use ‘too many’ parameters on purpose in order to help with this? - Zvi

Superposition: if your data is high dimensional and sparse (any given data point doesn’t appear often), your model will learn a compression strategy (superposition) so that it can pack more features than it has parameters.
Trenton think that this could be why interoperability is hard
If you project activations into a higher dimensional space and enforce a sparsity penalty (basically like undoing superposition and returning it to a high dimensional and sparse state), activations become a lot cleaner.
Is model training where you ensure that it’s triaging based on higher quality tokens through synthetic data by an existing model good because you now have to train on less tokens and therefore have more parameters “available”. Or is it the other way around, you’re making more happen with a smaller amount and so there’s actually more superposition.

What’s distillation? Distilled models?

Adaptive Compute: if a question is harder, spend more cycles thinking about it. Chain of thought (?) is a proxy for this because of forward passes(?).
KV values?

Did not understand a single thing from 1:10:00-1:22:00

What’s steganography?

If adaptive compute is solved, model size doesn’t really matter and if models have sufficiently long context windows, fine tuning might be irrelevant.

Language evolved to be good at encoding information about the world in a way that was quick to learn (for children) which is why it’s easier? Other modalities have to put a lot more thought into what they’re predicting and what the representations are. 

There’s evidence to suggest that when you train on math, the model gets better at entity recognition.
Getting better at code makes the model better at thinking. 

Induction heads?
What are systems as sholto talks about?

Sholto and Trenton backstories: Both of them are incredibly agentic people. If they face a roadblock they'll just go ahead and solve the entire thing vertically instead of sitting around and waiting for it to get fixed. Worked on a lot of interesting things themselves and got hired by putting themselves out there and having luck strike.

