
## Definitions of a Tree
**Definitions of a tree**
1. A graph is a tree if and only if it is completely connected and contains N nodes and N-1 edges
2. A graph is a tree if and only if every pair of nodes has exactly one simple path between them
3. A graph is a tree if and only if it is connected and does not contain any cycles

**General Tree Terminology**
- Leaf: Any node with degree 1 (basically just envision leaves on trees). Something branches to it, but it doesn't branch anywhere.
- Star Graph: 
	- Definition 1: Only one node has degree greater than 1 
	- Definition 2: Only one node has degree greater than 2
- Forest: Graph such that each connected component is a tree
**Rooted Tree Terminology**
- Root: Any node of the tree that is considered to be at the "top"
- Parent: The first node "above" this node if you consider the root to be at the top. 
	- The root obviously doesn't have a parent.
- Ancestors: Pretty obvious. A node is usually considered its own ancestor as well.
- Subtree (of a node): All the nodes that have that node as an ancestor. 
	- The starting node is usually part of its own subtree.
- Depth/Level (of a node): The distance from the root

## Tree Traversal
[[Graph Traversal]]
Tree traversal is usually done using bfs, but you don't have to worry about being able to visit every node, so it's a little bit easier. 

```
//s = current node and e = previous node
void dfs (int s, int e)
//process node s
for (autu u: adj[s])
{
	if (u != e)
	{
		dfs(u, s);
	}
}

//This function call will start the search at node x
dfs(x, 0);
```
## Diameter
The diameter of a tree is the maximum length of a path between any two nodes. 

**Algorithm to calculate the diameter of a tree**:
1. Choose an arbitrary node a in the tree.
2. Find the farthest node b from a.
3. Find the farthest node c from b.
4. The diameter is the distance from b to c.

## Binary Trees

A rooted tree where each node has a left and right subtree. It's possible for a subtree of a node to be empty. **Basically, each node has zero, one, or two children.**

There's three natural orders that correspond to different ways of recursive traversal. 
1. pre-order: 
	1. process the root
	2. traverse the left subtree
	3. traverse the right subtree 
2. in-order
	1. traverse the left subtree
	2. process the root
	3. traverse the right subtree
3. post-order
	1. traverse the left subtree
	2. traverse the right subtree
	3. process the root


