
## Finding the Maximum x Such That f(x) = true

We want to construct a function `lastTrue` such that `lastTrue(lo, hi, f)` returns the last `x` in the range `[lo,hi]` such that `f(x) = true`. If no such `x` exists, then `lastTrue` should return `lo-1`.

For example, if `f(x)` is given by the following function:

	f(1) = true
	f(2) = true
	f(3) = true
	f(4) = true
	f(5) = true
	f(6) = false
	f(7) = false
	f(8) = false

then `lastTrue(1, 8, f) = 5` and `lastTrue(7, 8, f) = 6`.

Implementation:
```
#include <bits/stdc++.h>
using namespace std;

int last_true(int lo, int hi, function<bool(int)> f) {
	// if none of the values in the range work, return lo - 1
	lo--;
	while (lo < hi) {
		// find the middle of the current range (rounding up)
		int mid = lo + (hi - lo + 1) / 2;
		if (f(mid)) {
			// if mid works, then all numbers smaller than mid also work
			lo = mid;
		} else {
			// if mid does not work, greater values would not work either
			hi = mid - 1;
		}
	}
	return lo;
}

int main() {
	// all numbers satisfy the condition (outputs 10)
	cout << last_true(2, 10, [](int x) { return true; }) << endl;

	// outputs 5
	cout << last_true(2, 10, [](int x) { return x * x <= 30; }) << endl;

	// no numbers satisfy the condition (outputs 1)
	cout << last_true(2, 10, [](int x) { return false; }) << endl;
}
```

## Finding the Minimum x such that f(x) = true

We want to construct a function `firstTrue` such that `firstTrue(lo, hi, f)` returns the first `x` in the range `[lo,hi]` such that `f(x) = true`. If no such `x` exists, then `firstTrue` should return `hi+1.

We will need to do the same thing, but when the condition is satisfied, we will cut the right part, and when it's not, the left part will be cut.

```
#include <bits/stdc++.h>
using namespace std;

int first_true(int lo, int hi, function<bool(int)> f) {
	hi++;
	while (lo < hi) {
		int mid = lo + (hi - lo) / 2;
		if (f(mid)) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	return lo;
}

int main() {
	// outputs 2
	cout << first_true(2, 10, [](int x) { return true; }) << endl;
	// outputs 6
	cout << first_true(2, 10, [](int x) { return x * x >= 30; }) << endl;
	// outputs 11
	cout << first_true(2, 10, [](int x) { return false; }) << endl;
}
```

 [[Lambda Functions]] are helpful.