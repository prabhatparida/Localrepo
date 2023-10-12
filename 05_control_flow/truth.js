// const userEmail = " prabhatparida@gmail.com";

// if(userEmail){
//     console.log("Got the User Email");
// } else {
//     console.log("Don't have user Email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truth value

// "0", 'false', " ", [], {}, function(){},

// const userEmail = [];

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


// ++++++++++++ Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

// console.log(val1);

// ++++++++++++ Terniary Operator 

// condition ? true : false

const ShoppingValue = 200
ShoppingValue <= 150 ? console.log("Less than 150") : console.log("more than 150")
