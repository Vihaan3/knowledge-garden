## Using Iterators

I've already used iterators through .begin() and .end(). These are a common part of many functions in the C++ stl.

Iterators are often used to access the elements of a set. 

```
auto it = s.begin();
std::cout << *it;
```

This will print the first element in the set. 

find(x) is a function that returns an iterator that points to an element whose value is x. 
If the set does not contain x, the iterator is end (end is one after the end of the array like size). 

**Sorted sets** also have the functions lower_bound (returns an iterator to the least element greater than or equal to some element) and upper_bound (returns an iterator to the least element strictly greater than some element) 

```
set<int> s;
s.insert(1);                        // [1]
s.insert(14);                       // [1, 14]
s.insert(9);                        // [1, 9, 14]
s.insert(2);                        // [1, 2, 9, 14]
cout << *s.upper_bound(7) << '\n';  // 9
cout << *s.upper_bound(9) << '\n';  // 14
cout << *s.lower_bound(5) << '\n';  // 9
cout << *s.lower_bound(9) << '\n';  // 9
cout << *s.begin() << '\n';         // 1
auto it = s.end();
cout << *(--it) << '\n';    // 14
s.erase(s.upper_bound(6));  // [1, 2, 14]
```

This is also allowed by **sorted maps**.

```
map<int, int> m;
m[3] = 5;     // [(3, 5)]
m[11] = 4;    // [(3, 5); (11, 4)]
m[10] = 491;  // [(3, 5); (10, 491); (11, 4)]
cout << m.lower_bound(10)->first << " " << m.lower_bound(10)->second
     << '\n';  // 10 491
cout << m.upper_bound(10)->first << " " << m.upper_bound(10)->second
     << '\n';  // 11 4
m.erase(11);   // [(3, 5); (10, 491)]
if (m.upper_bound(10) == m.end()) {
	cout << "end" << endl;  // Prints end
}
```

**Multisets**: sorted set that allows multiple copies of the same element

```
multiset<int> ms;
ms.insert(1);                  // [1]
ms.insert(14);                 // [1, 14]
ms.insert(9);                  // [1, 9, 14]
ms.insert(2);                  // [1, 2, 9, 14]
ms.insert(9);                  // [1, 2, 9, 9, 14]
ms.insert(9);                  // [1, 2, 9, 9, 9, 14]
cout << ms.count(4) << '\n';   // 0
cout << ms.count(9) << '\n';   // 3
cout << ms.count(14) << '\n';  // 1
ms.erase(ms.find(9));
cout << ms.count(9) << '\n';  // 2
ms.erase(9);
cout << ms.count(9) << '\n';  // 0
```

## Priority Queue/Heap

Data structure that supports insertion, deletion, retreival in O(log N). They're simpler and faster than sets.

```
priority_queue<int> pq;
pq.push(7);                // [7]
pq.push(2);                // [2, 7]
pq.push(1);                // [1, 2, 7]
pq.push(5);                // [1, 2, 5, 7]
cout << pq.top() << endl;  // 7
pq.pop();                  // [1, 2, 5]
pq.pop();                  // [1, 2]
pq.push(6);                // [1, 2, 6]
```
