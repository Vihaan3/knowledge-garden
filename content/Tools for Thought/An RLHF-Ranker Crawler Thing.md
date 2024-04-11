#### Manifesto
As more people become creators with AI, search becomes increasingly important (at least until training becomes so cheap that everyone can have personalized agents creating content tailor-made for them). Google has been starting to feel crummy as a user experience for several years now, and I think search experiences in general will continue to get worse without significant overhauls into the core ideas behind search. A new [Anatomy of a Large-Scale Hypertextual Web Search Engine](https://research.google/pubs/the-anatomy-of-a-large-scale-hypertextual-web-search-engine/).

#### My Current Answer
I want to build a search engine that indexes based off the rankings provided by an LLM crawler trained via RLHF. A way to minimize this cost (at least until compute becomes cheaper) is to simply have specific crawlers that represent different groups/types of interests, and you can set initial interests similar to how you do when you log into Reddit. This combination of interests will create your initial index, and periodic feedback and adaptation to how your interests seem to be changing will result in new indexing (probably weekly/bi-weekly). 

##### Quick Tests and Tasks 
1. Understand everything about search in-depth (taking [notes on this](https://michaelnielsen.org/blog/lecture-course-the-google-technology-stack/) is a good place to start)
2. (Not so quick) Build an initial proof of concept with a system that can be trained through RLHF to rank individual articles
3. Play around with full-text and semantic search
4. Practice building a crawler with a wonky ranking mechanism


See [[Building an RLHF Ranker-Crawler Thing]] for more technical details.