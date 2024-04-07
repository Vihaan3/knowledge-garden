The outdegree of each node is 1 (exactly one edge starts at each node).

A successor graph has 1+ components where each has one cycle and some paths that lead to it. 

The graph can be defined as a function that defines the edges of the graph. The parameter for the function is a node, and the output is the successor of that node. 

Each connected component of a functional graph is a rooted tree with all edges directed toward the root, plus an additional edge leaving the root. 

## Cycle Detection
**Simple algorithm to detect cycle**: Start at a node and keep track of all the nodes visited. If a node happens again, it's the start of a cycle. This will work in O(n) time and use O(n) memory.

### Floyd's Algorithm/Tortoise and Hare Algorithm 

Uses two pointers, *a* and *b*, to go through the graph. Both pointers begin at a starting node. At each turn, *a* goes one step forward and *b* goes two steps forward. The process continues until the pointers meet. 
```
a = succ(x); 
b = succ(succ(x)); 
while (a != b) 
{ 
	a = succ(a); 
	b = succ(succ(b)); 
}
```

Then, you can find the start of the cycle by moving *a* back to the starting node and advancing the pointers one step at a time. 
```
a = x; 
while (a != b) 
{ 
	a = succ(a); 
	b = succ(b); 
} 
first = a;
```
Can detect cycles in a functional graph in O(N) time and O(1) memory. 

After that, the length of the graph is calculated via

```
b = succ(a); 
length = 1; 
while (a != b) 
{ 
	b = succ(b); 
	length++; 
}
```
