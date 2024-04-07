2 pointers are used to iterate through an array of values. There's 2 problems that can be solved using this method.
## Subarray Sum
You're an array of positive integers and a target sum, and you want to find a subarray whose sum is that target or return that there is no such subarray.

The problem can be solved in O(N) time by using the two pointers method. The method is to have two pointers pointing to the beginning and end of a subarray, and on each turn the left pointer pointer moves one step to the right. On each turn. the right pointer moves to the right for as long as the resulting sum of the subarray is less than or equal to the target sum. You do this until you find a subarray with the target sum or you're at the end of the array. 
## The 2SUM Problem
Given an array of numbers and a target sum, find two array values such that their sum is equal to the target or report that no such pair exists.

Sort the array in increasing order. Then, start the left pointer at the first value and the right pointer at the end. The left pointer moves one step to the right on each turn, and the right pointer moves left until the sum of the left and right value is at most the target on each turn.  

The run time of this is O (n log n) because the sorting takes O (n log n) time before the pointers can travel (they only take O(n)).
