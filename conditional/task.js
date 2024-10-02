//consist of 2 keywords,if and else
//used when there are 2 paths possible depending upon a condition
//if condition manipulates to true then it executes first course of action otherwise another course of action whill execute
//there can be multiple if else if there are are multiple path of actions to be executed

//ex if-else
var a=5,b=6;

if (a+b<11){
    console.log("less than 11");
}else if (a+b>11){
    console.log("more than 11");

}else {
    console.log("equal");
} //out-put-equal

//switch
let day = 3;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
//The switch statement evaluates the expression day.
// It compares the expression's value to each case (1, 2, 3, etc.).
// If a match is found (in this case, day = 3), the code for that case runs (console.log("Today is Wednesday");).
// The break statement prevents the execution from falling through to the next case.
// The default block is executed if no matching case is found.

//Today is Wednesday