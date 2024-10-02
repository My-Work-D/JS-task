//loops are used to do a repeted work until a specified condition remains true
//there are multiple variable of loops are possible
//different types of loops are
//for loop
//for each
//for of
//for in
//while loop
//do-while loop
// code execute - initialization,termination,updation

// ============ fro loop ============
 for (var i=0; i<5; i++){
     console.log("value of i:"+i);
 }
 //value of i:0
// value of i:1
// value of i:2
// value of i:3
// value of i:4
for (var num=0; num<11; num=num+2){
    console.log(num)
}
//0
// 2
// 4
// 6
// 8
// 10
//even
for (var num = 1; num <= 10; num = num + 1) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
// 2
// 4
// 6
// 8
// 10
//odd
for (var num = 1; num <= 10; num = num + 1) {
    if (num % 2 === 1) {
        console.log(num);
    }
}
//1
// 3
// 5
// 7
// 9
//========fro each ===============//
var a = [1,2,3,4]
a.forEach(item => console.log(item));

//1
// 2
// 3
// 4

//for in
for (var item in a)
    console.log(item);
//0
// 1
// 2
// 3
for (var item of a)
    console.log(item);
//1
// 2
// 3
// 4
//========for of use to arrays and strings ============//

let fruits =["apple","mango","orange"]
for (item of fruits){
    console.log(item);
}
//apple
// mango
// orange

//=========for in use to objects=====//

let fruits1 = ["apple","mango","orange"]
for (item in fruits1){
    console.log(item);
}
//0
//1
//2

// while loop  use to expression depending ========//

var i=0;
while (i<5){
    console.log("value of i:"+i);
    i++;
}
//value of i:0
// value of i:1
// value of i:2
// value of i:3
// value of i:4

//=======do while lopp use to least code must execute once irrespective of the condition =========//

var i =0;
do {
    console.log("value of i:" +i);
    i++;
}while (i<5);

//value of i:0
// value of i:1
// value of i:2
// value of i:3
// value of i:4