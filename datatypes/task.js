 //=========DATA Types to js =================
 //1. primitive
 //2.unprinted

 // Number -Represents both integers and floating-point numbers. JavaScript uses the same Number type for both.

 let age = 25;               // Integer
 let price = 19.99;           // Floating-point number
 let negativeNumber = -5;     // Negative number
 let largeNumber = 2e6;       // Exponential notation (2 * 10^6)

 //String -Represents textual data. Strings can be enclosed in single quotes, double quotes, or backticks.

 let name = "Alice";           // Double quotes
 let greeting = 'Hello';       // Single quotes
 let message = `Hi, ${name}`;  // Template literals (backticks)

 //Boolean - Represents logical values: true or false.

 let isLoggedIn = true;      // Boolean value true
 let isAvailable = false;    // Boolean value false

 //Undefined - A variable that has been declared but not assigned a value has the value undefined.

 let uninitializedVariable;
 console.log(uninitializedVariable);  // Outputs: undefined

 // Null - Represents the intentional absence of any object value. It is often used to signify "no value" or "empty."

 let emptyValue = null;

 // Object - A complex data type used to store collections of data and more complex entities like arrays and functions.

 let person = {
     name: "John",
     age: 30,
     isEmployed: true
 };  // An object with properties

 //Array (a type of Object)
 // Represents an ordered collection of values (of any type). Arrays are also objects in JavaScript.

 let colors = ["red", "green", "blue"];  // An array of strings
 let scores = [98, 85, 74];              // An array of numbers

 //Function (also a type of Object)
 // Represents executable code. Functions in JavaScript are objects that can be assigned to variables.

 function sayHello() {
     return "Hello, World!";
 }
 console.log(sayHello());  // Outputs: Hello, World!

 //Symbol
 // Introduced in ES6, it represents a unique and immutable value, often used to identify object properties uniquely.

 let symbol1 = Symbol("unique");
 let symbol2 = Symbol("unique");
 console.log(symbol1 === symbol2);  // Outputs: false

 // BigInt
 // Introduced in ES2020, BigInt is used for very large integers beyond the safe integer range for the Number type.
 //

 let bigInteger = BigInt(123456789012345678901234567890);

 //Summary
 //--------------------------
 // Data Type	Example
 //--------------------------
 // Number	let num = 42;
 // String	let text = "Hello!";
 // Boolean	let isTrue = false;
 // Undefined	let value;
 // Null	let empty = null;
 // Object	let obj = {name: "John"};
 // Array	let arr = [1, 2, 3];
 // Function	function greet() {}
 // Symbol	let sym = Symbol("id");
 // BigInt	let bigNum = BigInt(9007199254740991);