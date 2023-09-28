// Primitive

// 7 categories: String, Number, Boolean, null,undefined,Symbol, BigInt

const score =100;
const scoreValue = 100.3;
const isLoggedin =false;

const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId  = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 22323121123232734444332n;



// Reference Type( Non Primitive)

// Arrays, Objects, Functions

// Arrays

const heros = ['Srikrushna','Ramchandra', 'Arjun','Shiva', 'Ganesh'];

// console.table(heros);

// Objects

let personalId = {
    name: "Prabhat",
    age: 24,
    employeeId: 180,

};

// console.log(... personalId.name);


// function

const myFunction = function(){
   //  console.log(" Hello Prabhat");
}

// console.log(typeof outsideTemp);



// Two types of Memory

//1. stack(primitive), 2. Heap(Non-Primitive)

let myName = " Prabhatranjan Parida";

let anotherName = myName;

anotherName = " Sanjay";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    Name: "Prabhatranjan Parida",
    EmpId: 23,
    Age: 34,
    EmailId: "sanayp.gs@gmail.com",
};

let userTwo = userOne;

userTwo.EmailId = "paridaprabhatranjan@gmail.com";

console.log(userOne.EmailId);
console.log(userTwo.EmailId);






