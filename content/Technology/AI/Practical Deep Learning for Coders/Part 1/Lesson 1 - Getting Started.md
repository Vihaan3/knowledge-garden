#technology/ai 

*Notes for Practical Deep Learning for Coders*.

- Damn this guy is accomplished. Started a major company, top on Kaggle, fast.ai itself is a major course, was a part of one of the 2 key contributions that helped develop the transformer architecture and the recent AI explosion.
##### DataBlock
Part of the fast.ai library. Makes it easier to get data in. 

5 Sections:
1. Input/Output -> tells fast.ai what type of model to build for you
2. What are the items in this model? What is it looking at to train from?
3. Using some splitting logic to create a validation set 
4. Label of the photo
5. Item transform -> standardizing data

Returns an object that contains iterators of the training items and testing items.

Learner = fast.ai jargon for a combo neural net + data

.fine_tune() -> fast.ai neural nets don't start with nothing. They've already trained on something called ImageNet, and this method fine_tunes that for your needs.
.predict()

Other things 
- Segmentation
- Tabular Analysis
- Collaborative filtering - recommendation systems

Good heuristic for where deep learning is right now: if there's something that a human (potentially an expert human) could do reasonably quickly, deep learning would be useful. 
Examples:
- Playing games
- Recommendation systems
- Natural Language Processing
- Vision

##### Neural Network

###### History
- McCulloch and Pitts teamed up to develop a mathematical model of an artificial neuron
	- Rosenblatt picked up this research and gave the neuron the ability to learn.  He built the Mark 1 Perceptron.
- Neural network work kind of died for 20 years
- Revival caused by more data, cheaper cost, and the realization that you should be using many layers instead of just a few

###### Training: 
Iteratively multiplies some inputs with sets of weights. How do we choose the weights? -> The weights start out as random. You take the inputs and the weights, put them through the model, and then evaluate the results based on your loss. This should update the weights to reduce the loss a little. 

Once we consider the model trained, we can integrate the weights with the model because we don't need to change them anymore, and now it's just inputs -> model -> results


