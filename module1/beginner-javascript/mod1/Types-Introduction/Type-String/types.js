/* comment */

const name = "wes";
const midle = "topher";
const last = `bost`;

const sentence = 'shes\'s so cool';
const sentence2= `shes's so "cool"`;

// const song = `Ohhh
// ya
// I like
// pizza`;

// const hello = "hello my name is " + name + ". Nice to meet you";
// let hello2 = "hello my name is ";
// hello2 = hello2 + name;
// hello2 = hello2 + " Nice to meet you";

const hello3 = `hello my name is ${name}. Nice to meet you. I am ${1 +
    100} years old`;
  

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello3}</p>
  </div>
`;

let para = document.createElement("p");
para.innerHTML = "yo what up?";

document.body.innerHTML = html;
document.body.appendChild(para);

// document.body.innerHTML = html;

// const age = 100.5;
// const name = 'wes';
//Math.ceil(4.000000001)
//-> 5 return next number
// const a = 10;
// const b = 20;
/*
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);
const price = 1034;
*/

//ANOTATION EXPONENTITATION
console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64



//OBJECTS
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};
let dog;
console.log(dog);
dog = 'snickers';
let somethingUndefined;
const somethingNull = null;
const cher = {
  first: 'cher'
};
const teller = {
  first: 'Raymond',
  last: 'Teller'
}
teller.first = 'Teller';
teller.last = null;


let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
let age2 = 100;

//ANOTATON  EQUALS
// true == "1" //Abstract
// -> true
//true === "1" //Strict
// -> false