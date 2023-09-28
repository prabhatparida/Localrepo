const name = " Prabhat";
const repoCount = 50;

// console.log(name +' ' + repoCount);

// console.log(`Hello my Name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String ('Prabhat-opaque-object');

// console.log(gameName[3]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLocaleLowerCase());

// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,5);

// console.log(newString);

const anotherString = gameName.slice(3,9);

// console.log(anotherString);

const NewString1 = "  Parida    ";

// console.log(NewString1);
// console.log(NewString1.trim());

const str = "   foo  ";
console.log(str.trim());

// console.log(NewString1.trimStart());
// console.log(NewString1.trimEnd());

const url = "https:// Prabhat.com/prabhat%20parida";

// console.log(url.replace('%20', '-'));

// console.log(url.includes('prabhat'));

// console.log(url.includes('raghav'));

// console.log(gameName.split('-'));

const stri = 'The quick brown fox jumps over the lazy dog.';
const words = stri.split(' ');
console.log(words[4]);
console.log(words);
const words2 = stri.bold(2, 7);
console.log(stri.bold(1, 23));







