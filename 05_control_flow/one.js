// if Statement


// const isUserloggedIn = true; 

// if(condition){

// }

// if(true){

// }
// if(false){

// }

// <, >, <=, >=, == , !=, ===, !==

// const temperature = 34;

// if(temperature === 34){
    // console.log("Temperature is less than 50 ");

// }else{
    // console.log("Temperature is greater than 50 ");
// }

// const score = 200;
// if(score > 100){
    // const power = "fly";
    // console.log(`user power: ${power} `);
// }
// console.log(`User power: ${power}`);

// Shorthand notation

// const balance = 1000;

// if(balance > 500) console.log("balance is more than 500");

// if(balance   > 500){
//     console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log(" less than 900");
// } else {
//     console.log(" greater than 1000 ");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2== 3) {
    console.log(" Allowed to buy course  from this site");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}