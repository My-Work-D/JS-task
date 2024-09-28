
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


// 5. forEach()

let fruits4 = ["apple","banana","mango"];
fruits4.forEach((fruits4) => {
    console.log(fruits4)
})

//out-put
//apple
// banana
// mango

console.log("================")

// 6.map()

let numbers =[1,2,3];
let squares = numbers.map((num) => num * num);
console.log(squares) //[ 1, 4, 9 ]

console.log("================")

// 7. filter()

let numbers1 = [1,2,3,4,5];
let evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber); //2 ,4

console.log("================")


//8. find()

let numbers3 = [1,2,3,4];
let found = numbers3.find((num) => num >2);
console.log(found); //3

console.log("================")

//9. findIndex()

let numbers4 = [1,2,3,4];
let index = numbers4.findIndex((num) => num > 2);
console.log(index); //2

console.log("================")

// 10.sort()

let numbers5 = [3,1,4,2];
numbers5.sort((a,b) => a-b);
console.log(numbers5); // [1,2,3,4]

console.log("================")
