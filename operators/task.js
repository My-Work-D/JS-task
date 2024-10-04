// ===============operators ===================//

//unary
//Arithmetic
//Shift
//Relation
//Bitwise
//Logical
//Assignment
//Ternary

//Unary Operators: Pre-increment, pre-decrement, unary minus.
// Arithmetic Operators: Addition, subtraction, multiplication, division, modulus.
// Shift Operators: Left shift (<<), right shift (>>).
// Relational Operators: Equality (===), inequality (!==), greater than (>), less than or equal (<=).
// Bitwise Operators: AND (&), OR (|).
// Logical Operators: AND (&&), OR (||).
// Assignment Operators: Incremental assignment (+=).
// Ternary Operator: Conditional operation (? :).
// ex -
// JavaScript Operator Examples

let a = 5;
let b = 10;

// =============== Unary Operators ===================
let unaryResult = -a;  // Unary minus
console.log("Unary minus of a: " + unaryResult);

let increment = ++a;   // Pre-increment
console.log("Pre-increment of a: " + increment);

let decrement = --b;   // Pre-decrement
console.log("Pre-decrement of b: " + decrement);

// =============== Arithmetic Operators ===================
let sum = a + b;       // Addition
let difference = a - b; // Subtraction
let product = a * b;   // Multiplication
let quotient = b / a;  // Division
let remainder = b % a; // Modulus

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

// =============== Shift Operators ===================
let leftShift = a << 2;  // Left shift
let rightShift = b >> 2; // Right shift

console.log("Left shift of a: " + leftShift);
console.log("Right shift of b: " + rightShift);

// =============== Relational Operators ===================
let isEqual = (a === b);    // Equality
let isNotEqual = (a !== b); // Inequality
let isGreater = (a > b);    // Greater than
let isLessOrEqual = (a <= b); // Less than or equal

console.log("a equals b: " + isEqual);
console.log("a not equals b: " + isNotEqual);
console.log("a greater than b: " + isGreater);
console.log("a less than or equals b: " + isLessOrEqual);

// =============== Bitwise Operators ===================
let bitwiseAnd = a & b;  // Bitwise AND
let bitwiseOr = a | b;   // Bitwise OR

console.log("Bitwise AND of a and b: " + bitwiseAnd);
console.log("Bitwise OR of a and b: " + bitwiseOr);

// =============== Logical Operators ===================
let logicalAnd = (a > 3 && b > 5); // Logical AND
let logicalOr = (a > 3 || b < 5);  // Logical OR

console.log("Logical AND: " + logicalAnd);
console.log("Logical OR: " + logicalOr);

// =============== Assignment Operators ===================
let assignValue = 10;
assignValue += 5; // Same as assignValue = assignValue + 5
console.log("After assignment: " + assignValue);

// =============== Ternary Operator ===================
let result = (a > b) ? "a is greater" : "b is greater";
console.log("Ternary result: " + result);


//Unary minus of a: -5
// Pre-increment of a: 6
// Pre-decrement of b: 9
// Sum: 15
// Difference: -3
// Product: 54
// Quotient: 1.5
// Remainder: 3
// Left shift of a: 24
// Right shift of b: 2
// a equals b: false
// a not equals b: true
// a greater than b: false
// a less than or equals b: true
// Bitwise AND of a and b: 0
// Bitwise OR of a and b: 15
// Logical AND: true
// Logical OR: true
// After assignment: 15
// Ternary result: b is greater
