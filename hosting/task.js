// every execution context has a creation phase and an execution phase
var favouriteFood = "apple";
var foodthought = function (){
    console.log("original choice"+favouriteFood);
    favouriteFood = "mango";
    console.log("new choice"+favouriteFood);
}
foodthought();
//original choiceapple
// new choicemango