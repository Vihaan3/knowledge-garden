For greedy you have to both follow your intuition to be able to think of potential solutions, but also be very critical and careful once you have one. Create your own test cases and try as hard as possible to break your logic with those  test cases. A lot of the time, your intuitive approach can be very wrong. 

## When Greedy Fails

Two common cases
### Coin Change
If you're given several coin denominations and are asked for a minimum number of coins needed to make a specific value, greedy only works in a few very specific cases.

## Knapsack
The knapsack problem gives a number of items, each having a **weight** and a **value**, and we want to choose a subset of these items. We are limited to a certain weight, and we want to maximize the value of the items that we take.

Let's take the following example, where we have a maximum capacity of 4:

|Item|Weight|Value|Value Per Weight|
|---|---|---|---|
|A|3|18|6|
|B|2|10|5|
|C|2|10|5|

If we use greedy based on highest value first, we choose item A and then we are done, as we don't have remaining weight to fit either of the other two. Using greedy based on value per weight again selects item A and then quits. However, the optimal solution is to select items B and C, as they combined have a higher value than item A alone. 
