
function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("t");

}
// sayMyName();

// function addTwoNumbers(number1, number2){
   // console.log(number1  + number2);
// }

// addTwoNumbers(4,5);
// addTwoNumbers(3,"a");
// addTwoNumbers(3, null);

// const result = addTwoNumbers( 7,8);

// console.log("Result:", result);

function addTwoNumbers(number1, number2){
   // let result = number1 + number2;
   // return result;
   return number1 + number2;

}
const result = addTwoNumbers( 7,8);

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} is just logged in`;

}

// console.log(loginUserMessage("Prabhat"));
// console.log(loginUserMessage("ranjan"));

// Rest Operator used

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 300,400,323,489,345,5699));

const user = {
    username: "Prabhat",
    Prices:  102520625443
}
function handleObject(anyobject){
    console.log(`user Name is ${anyobject.username} and price is ${anyobject.Price}`);
}
// handleObject(user);
handleObject({
    username: "Parida",
    Price: 499
})

const myNewArray =[342,45,232,2322,34321];

function returnSecondvalue(getArray){
    return getArray[2];
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([232,400,500,4000]));





