// for of Loop

// ["", "", ""]
// [{},{},{}]

// for of loop
const stateName = ["Odisha", "Karnataka","Maharastra", "Goa", "TamilNadu"];

// for (const name of stateName) {
//     console.log(name);
// }

// const greetings = "Hello world!";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//  Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('AUS', "Australia")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
     game1 : 'NFS',
     game2 : 'Spiderman'
}

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }