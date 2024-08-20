// Define a function to sum two numbers in a normal, non-curried way
function normal_sum(a: number, b: number): number {
    return a + b;
}

// Test the normal_sum function
console.log(normal_sum(1, 5)); // Output: 6

// Define a type alias for a curried sum function
type Sum = (a: number) => (b: number) => number;

// Implement the curried sum function using the Sum type
const sum: Sum = (a) => (b) => a + b;

// Test the curried sum function
console.log(sum(1)(2)); // Output: 3

// Define a type alias for a function that increments a number
type IncrementFn = (x: number) => number;

// Implement the increment function in point-free style using the curried sum function
const incrementFn: IncrementFn = sum(1);

// Define a type alias for a function that decrements a number
type DecrementFn = (x: number) => number;

// Implement the decrement function using the curried sum function with -1
const decrementFn: DecrementFn = sum(-1);

// Test the increment and decrement functions
console.log(incrementFn(10)); // Output: 11
console.log(decrementFn(10)); // Output: 9

// Define a type alias for a curry function that transforms a binary function into a curried function
type Curry = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z;

// Implement the curry function using the Curry type
const curry: Curry = (f) => (a) => (b) => f(a, b);

// Use the curry function to transform normal_sum into a curried function
const sum2 = curry(normal_sum);

// Test the curried sum2 function
console.log(sum2(10)(20)); // Output: 30
