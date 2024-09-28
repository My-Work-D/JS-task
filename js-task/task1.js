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

 let array = [1,2,3,4,5,6,7,8,9,10]
 function checkNum(num){
 return num >= 4;
 }
 let newArray1 = [array.map((item) => {
  return item
 })].filter(checkNum)

 let newArray2 = array.filter(checkNum).map((item) => {
  return item
 })

 console.log(newArray1)
 console.log(newArray2)

 // out-put - [][4, 5,  6, 7, 8, 9, 10]
 console.log("==================")

 let array3 = [1,2,3,4,5,6,7,8,9,10]
 function checkNum(num){
 return num > 4;
 }

 let newArray = [array3.filter(checkNum).map((item,index) => {
  return item - array3[index]
 }).reduce((acc,curr) => {
  return acc + curr
 })]

 console.log(newArray)

 // out-put- [ 24 ]
 console.log("====================")