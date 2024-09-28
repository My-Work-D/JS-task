
// 1.push()

let fruits = ["apple","banana"]
fruits.push("mango");

console.log(fruits)

 // out -put [ 'apple', 'banana', 'mango' ]

console.log("====================")
// 2. pop()

let fruits1 = ["apple","banana","mango"];
let lastfruit = fruits1.pop();
console.log(lastfruit)
console.log(fruits1)
console.log("================")
// out-put
// mango
//     [ 'apple', 'banana' ]


// 3.shift()

let fruits2 = ["apple","banana","mango"];
let firstFruit = fruits2.shift();
console.log(firstFruit)
console.log(fruits2)

// out -put -
// apple
// [ 'banana', 'mango' ]

console.log("================")

// 4. unshift()
let fruits3 = ["banana","mango"];
fruits3.unshift("apple");
console.log(fruits3)

// out-put - [ 'apple', 'banana', 'mango' ]

console.log("================")

