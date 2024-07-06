---
tags:
  - meta-thinking
  - literature-note
---
A way of reasoning that standardizes updating your beliefs in response to new information. Connected to [[Trapped Priors]]. 

H = hypothesis
E = evidence
Prior: P (H)
Likelihood: P (E | H)
### Going progressively deeper
Primary Sources: https://www.youtube.com/watch?v=HZGCoVF3YvM + https://www.youtube.com/watch?v=U_85TaXbeIo

1. Steve is very shy and withdrawn, invariably helpful but with very little interest in people or in the world of reality. A meek and tidy soul, he has a need for order and structure, and a passion for detail. Is he a farmer or a librarian? 
   How could we evaluate this? Well, we need to know the probability that Steve is a librarian and the probability that a librarian fits that description. We also need to know the probability that Steve is a farmer and the probability that a farmer fits the description. 
   
   More concretely: Make an estimate of the probability that Steve is a librarian. Multiply that by the probability of a librarian fitting the description to find the probability that Steve is a librarian who fits the description. Now, find the probability that Steve is a farmer (1 - the probability that Steve is a librarian) and multiply that by the probability of a farmer fitting the description to find the probability that Steve is a farmer who fits the description. To find the likelihood that Steve is a librarian, divide the probability that he is a librarian that fits the description by the (probability that he is a librarian that fits the description + probability that he is a farmer that fits the description). 
   
2. Probability that the your belief is correct given the evidence = (Probability that your belief is correct * Probability that the evidence is correct given your belief)/(The numerator + Probability that your belief is incorrect * Probability that your evidence is correct given your belief being incorrect)  

3. $P (H | E) = P (H) * P (E | H)/(P (H) * P(E | H) + P (!H) * P (E | !H))$

#### Dealing with uncertainty
Questions around the context shift the prior, and questions around the stereotypes and biases shift the likelihoods. 

#### Proof
Let's say that there are two events, A and B. What is the probability that both of them happen? You could express it as the probability of A multiplied by the probability that B happens when A happens. But of course, you could also represent it as the probability of B multiplied by the probability that B happens when A happens.

P(B) * P (A|B) = P(A) * P (B|A)  
P (A | B) = (P (A) * P(B|A))/P(B)