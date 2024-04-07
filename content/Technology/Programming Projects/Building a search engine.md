Scope of the project: As of rn, I just want to do semantic search over my information garden. Later, I want to index a few specific websites that are important to me, and then I'll branch out further from there.

Data Pipeline:
Website data somehow -> OpenAI API embeddings -> Pinecone API

Search Pipeline: search query -> OpenAI API embeddings -> Pinecone API -> Display search results

Future: full-text search engine 

https://lunrjs.com/