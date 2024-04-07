To convert a bit representation into a number, sum up 2^i (where i is the index) for all of the 1s.
## Bit Operations

### And 
Pretty much like what *and* in conditionals does if 1 is true and 0 is false. 

1 & 1 = 1
0 & 1 = 0
0 & 0 = 0

### Or
Pretty much like what *or* in conditionals does if 1 is true and 0 is false. 

1|1 = 1
1|0 = 1
0|1 = 1
0|0 = 0

### Xor
True if there's exactly one 1.

1^1 = 0
1^0 = 1
0^1 = 1
0^0 = 0

### Not
Everything is inverted.

~0 = 1
~1 = 0

### Bit Shifts

**Left Bit Shift**: x << k, appends k zero bits to the number 
**Right bit shift**: x >> k, removes the last k bits from the number

x << k corresponds to multiplying x by 2^k, and x >> k corresponds to dividing x by 2^k with integer division (rounded down to an int).

### Applications
**Getting the bit representation of an int number x**
```
for (int i = 31; i >= 0; i--)
{
	if (x & (1<<i)) cout << "1";
	else cout << "0";
}
```

**Modifying single bits of numbers**
- x | (1 << k) sets the kth bit of x to one.
- x & ~(1 << k) sets the kth bit of x to zero
- x ^ (1 << k) inverts the kth bit of x

**Modifying multiple bits**
- x & (x - 1) sets the last 1 bit of x to zero
- x & -x sets all the one bits to zero, except for the last 1 bit
- x | (x-1) inverts all the bits after the last one bit
- if x & (x-1) = 0, x is a power of two