**variable declarations**
let x: string = "";
 you can use the *any* keyword to bypass the type checking and make it basically act like variables in js
ints are numbers in TS. so you would say 
let x: number = 4;

**functions**
function myFunction() {  
    
}

if you want to specify the return type, you can do this

function myFunction(num1: number, num2: number): **void** {  
  return p1 * p2;  
}

**arrays**
let nums: number[] = [1, 2, 3, 4];

**tuples**
let ourTuple: [number, boolean] = [1, false];

**custom types**
```
type Animal = {
	name: string;
	age: number;
	legs?: number;
}
```

See the ?: for legs. That means that it's optional.

**using custom types**
```
const dog = {
	name: "matt",
	age: 3,
	legs: 3
} as Animal

OR
const dog: Animal = {
	name: "matt",
	age: 3,
	legs: 3
} 
```
