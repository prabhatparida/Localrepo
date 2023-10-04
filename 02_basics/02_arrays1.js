const Heros = ['Shaktimaan', 'Arjun', 'RamChandra', 'Srikrishna'];
const Dc_Heros = ['superman', 'flash', 'Batman'];

// Heros.push(Dc_Heros);

// console.log('A', Heros);

// console.log('B', Heros[4]);

// console.log('c', Heros[4][2]);

// concat

// const allHeros = Heros.concat(Dc_Heros);
// console.log(allHeros);

// Spread Operator

// const all_newHeros = [...Heros, ...Dc_Heros];
// console.log(all_newHeros);

const newArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
const realArray = newArray.flat(Infinity);

// console.log(realArray);

console.log(Array.isArray('Prabhat'));
console.log(Array.from('Prabhat'));
console.log(Array.from({name:'Prabhat'})); // return empty

let score = 125;
let score1 = 23;
let score2 = 67;

console.log(Array.of(score,score2,score2));




