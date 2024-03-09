C++ has a sorting function, but for sorting custom types, you'll need to use custom comparators. 

In C++ you can define your own types using structs and/or classes (they're literally the same thing.)

```
struct Edge {

	int a, b, w;

};

OR

class Edge {

    public:

        int a,b,w;
```

## Creating Comparators

### Rules
The comparator must return false for two equal objects to avoid undefined behavior and runtime errors.

If x != y and compare (x, y) is true then compare (y, x) should be false, and vice versa.

 If compare(x, y) is true and compare(y, z) is true, then  compare(x, z) should also be true.

### Methods

#### Overloading the Less Than Operator

Only works for objects (not primitives). Only one method of comparison per type.

```
struct Edge {

	int a, b, w;

	bool operator<(const Edge &y) { return w < y.w; }

};

OR

struct Edge {

	int a, b, w;

};

bool operator<(const Edge &x, const Edge &y) { return x.w < y.w; }
```

#### Comparison Function
Unlimited amounts of comparisons per type. 

```
struct Edge {

	int a, b, w;

};

bool cmp(const Edge &x, const Edge &y) { return x.w < y.w; }
```

#### Lambda
```
sort(begin(v), end(v), [](const Edge &x, const Edge &y) { return x.w < y.w; });
```

#### Sorting by 2+ Criteria
```
struct Edge {
	int a, b, w;
	bool operator<(const Edge &y) {
		if (w != y.w) return w < y.w;
		return a < y.a;
	}
};
```




## Coordinate Compression
Mapping each value in a list to the index if that list was sorted. 

The list {7, 3, 4, 1} would be compressed to {3, 1, 2, 0}. (1 is the smallest value in the list, so it becomes 0, 4 is the third smallest in the list so it becomes 2, etc). 

This is useful when you only care about the relative order of values for big value ranges and you want to use their values to represent array indices. Say, for example that you have a set of integers from 0 to 10^9, and you want to use their values as indices. This would lead to Memory Limit Exceeded. However, if there are only 10^6 total integers, you can coordinate compress the values. 



