// Singleton

// Objects Literals

// Object.create uses singleton

const mysym = Symbol("key1");


const userName = {
    name: 'Prabhat',
    "fullname": "Prabhatranjan Parida",
    [mysym]: "key1",
    age: 24,
    location: 'Balasore',
    email: 'prabhatranjanparida2018@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
}

// console.log(userName.email);
// console.log(userName['email']);

// console.log(userName.fullname);
// console.log(userName['fullname']);

// console.log(userName[mysym]);

// change value 
// userName.email = "prabhatranjanparida34@gmail.com";
// console.log(userName['email']);

// freeze the object 
// Object.freeze(userName);
// userName.email = "prabhatparida898@gmail.com";
// console.log(userName);

userName.greeting = function(){
    console.log("Hello UserName");
}
userName.greetingTwo = function(){
    console.log(`Hello UserName, ${this.name}`);
}

 console.log(userName.greeting());
  console.log(userName.greetingTwo());



