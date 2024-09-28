
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
numbers5.sort((a,b) => a-b); //ascending order set to the data
console.log(numbers5); // [1,2,3,4]

console.log("================")

// 11.splice()

let fruits5 = ["apple","banana","mango"];
fruits5.splice(1,1,"orange");
console.log(fruits5); //[ 'apple', 'orange', 'mango' ]

console.log("================")


//12.slice()

let fruits6 = ["apple","banana","mango","orange"];
let tropicalFruits = fruits6.slice(1,3);
console.log(tropicalFruits); //[ 'banana', 'mango' ]

console.log("================")

// 13. concat()
let fruits7 = ["apple","mango"];
let moreFruits = ["banana","orange"];
let allFruits = fruits7.concat(moreFruits);
console.log(allFruits); //[ 'apple', 'mango', 'banana', 'orange' ]

console.log("================")
// 14.reduce()

let number = [1,2,3,4];
let sum = number.reduce((acc,num) => acc +num,0);
console.log(sum) //10


console.log("================")

// 15.every()

let number2 = [2,4,6];
let allEven = number2.every((num) => num % 2 === 0);
console.log(allEven); //true


console.log("================")

// 16.some()

let number3 = [1,2,3];
let hasEven = number3.some((num) => num % 2 ==0);
console.log(hasEven); //true
