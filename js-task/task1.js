 // ===========array=============

//
//  let array = [1,2,3,4,5,6]
//  let [a,b,, ...rest] = array;
//
// console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(rest)
//
//  let c;
 // answer =  1, 2, c is not defined
console.log("===================")

 let array1 = [1,2,3,4,5,6];
let array2 = array1
 array2.push(7,8,9,10)
 console.log(array1)
 console.log(array2.sort())

 // out-put -
 // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10][1, 10, 2, 3, 4, 5,  6, 7, 8, 9]
 console.log("==============")