// Define a type alias for a function that increments a number
type Increment = (x: number) => number;

// Implement the increment function using the Increment type
const increment: Increment = (x) => x + 1;

// Test the increment function
const incrementResult = increment(2);
console.log(incrementResult); // Output: 3
console.log(typeof incrementResult); // Output: 'number'

// Define a type alias for a function that converts a number to a string
type Tostring = (x: number) => string;

// Implement the tostring function using the Tostring type
const tostring: Tostring = (x) => `${x}`;

// Test the tostring function
const tostringResult = tostring(2);
console.log(tostringResult); // Output: '2'
console.log(typeof tostringResult); // Output: 'string'

// Define a type alias for a function that increments a number and then converts it to a string
type IncrementThenToString = (x: number) => string;

// Implement the increment_then_string function using the IncrementThenToString type
const increment_then_string: IncrementThenToString = (x) =>
    tostring(increment(x));

// Test the increment_then_string function
const incrementThenStringResult = increment_then_string(3);
console.log(incrementThenStringResult); // Output: '4'

// Define a type alias for a compose function that takes two functions and returns their composition
type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;

// Implement the compose function using the Compose type
const compose: Compose = (f, g) => (x) => f(g(x));

// Use the compose function to create increment_then_string2
const increment_then_string2: IncrementThenToString = compose(
    tostring,
    increment
);

// Test the increment_then_string2 function
console.log(increment_then_string2(2)); // Output: '3'
