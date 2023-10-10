const user = {
    username: "Prabhat",
    Price: 899,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage();

// user.username = "Parida";
// user.welcomeMessage();

// console.log(this);

// function One() {
   //  let username = "Prabhat";
   //  console.log(this.username);

// }
// One();

// const One = function (){
    // let username = "Prabhat";
    // console.log(this.username);

// }
// One();

// const One = () => {
    // let username = "Prabhat";
    // console.log(this);

// }
// One();


// +++++++++++++++++++ Arrows Function +++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
   //  return num1 + num2
// }
// console.log(addTwo(56,54));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(56,54));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Prabhat"})

console.log(addTwo(56,54));

const myArray = [34,56,78,9,43];

myArray.forEach(() =>());



