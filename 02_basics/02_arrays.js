// Array

const myArr = [0,1,2,3,4,45,665,'Prabhat'];

// console.log(myArr);

// console.table(myArr);

const myHeros =[ 'Shaktimaan','Srikrishna', 'Arjun', 'Parshuram'];

const myArrs = new Array(2,4,67,78,34);
// console.log(myArrs);


// Array Methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));

// console.log(myArr.indexOf('Prabhat'));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);

const myn3 = myHeros.splice(2,4);
console.log("D", myHeros);
console.log(myn3);






