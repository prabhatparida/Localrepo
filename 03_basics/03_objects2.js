// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "2342pre";
tinderUser.Name = "Prabhat";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const NormalUser = {
    email: "normaluser@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prabhat",
            lastname: "Parida"
        }
    }
}
// console.log(NormalUser.fullname.userfullname.firstname);

const obj1 = {
    1: "we",
    2: " you"
}
const obj2 ={
    3: "He",
    4: "Himself"
}
const obj4 ={
    5: "They",
    6: "Themselvs"
}


// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({},obj1, obj2, obj4);
 const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users =[
    {
        id: 21,
        email: "Prabhatranjanparida@gmail.com"
    },
    {
        id: 43,
        email: "ragavhbkk@gmail.com"
    },
    {
        id: 23,
        email: "dwdwdsncjnida@gmail.com"
    },
    {
        id: 54,
        email: "eddefrfreida@gmail.com"
    },
    {
        id:32,
        email: "dfedededefda@gmail.com"
    },
];
// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

