// dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,8, 30);
// let myCreatedDate = new Date(2023,8, 30, 23, 39, 00);

// let myCreatedDate = new Date("2023-01-03");

let myCreatedDate = new Date("07-12-2023");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekdays: "long",
    timezone: " kolkata"
});


