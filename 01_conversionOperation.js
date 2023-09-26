let age = "24";

// console.log( typeof age);
// console.log(typeof (age));


let valueInNumber = Number(age);

// console.log(typeof valueInNumber);

//" 24" => 24
// "324asdf" => NaN
// true => 1; false => 0;

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false;
// "" => false
// "Prabhat" => true;

let someNumber = 33;

let StringNumber = String(someNumber);
 // console.log( typeof StringNumber);

 // ***************** Operations ******************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str = " Prabhat";
let str1 = " Parida";
 
let str3 = str + str1;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2" );
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1= num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);

// EXAMPLE OF POSTFIX AND PREFIX

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

