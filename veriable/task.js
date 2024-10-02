//variable is a name of a memory location where the data is stored.
// ex- letter,$,_ using design the variable

//ex - apple,_name,$address

// Using var (function-scoped)
var name = "sachini";
console.log(name); // Output: John

// Using let (block-scoped)
let age = 22;
console.log(age); // Output: 25

// Using const (block-scoped, value cannot be reassigned)
const country = "USA";
console.log(country); // Output: USA

// Re-assigning variables
name = "apsara"; // This is allowed with var
age = 23;      // This is allowed with let

console.log(name);  // Output: Jane
console.log(age);   // Output: 26

// const variables cannot be reassigned
// country = "Canada"; // This will throw an error

//In summary:
//
// var is function-scoped and can be re-declared and updated.
// let is block-scoped and can be updated but not re-declared in the same scope.
// const is also block-scoped, but it cannot be updated or re-declared.