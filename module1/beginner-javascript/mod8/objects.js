const age = 100;
const wes = {
  age,
  name: "wes",
  properyToCheck: "NEVER",
  "cool-dude": true,
  "really cool": false,
  777: true,
  dog: "snicker",
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello: function (greeting = "Hey") {
    return `${greeting} ${this.name}`;
  },
};

wes.job = "Web Developer";
wes.age = 50;

console.log(wes.age);
// const properyToCheck = prompt('What do you want to check?');
// console.log(properyToCheck);
// console.log(wes[properyToCheck]);

const nameInput = document.querySelector('[name="first"]');
//IS EQUALS if(nameInput) {....}
const name = nameInput ? nameInput.value : "";
console.log(name);

// console.log(delete wes.job);
// wes.age = undefined;
// wes.age = null;

let name1 = "wes";
let name2 = "wes";

console.log(name1 === name2);
name1 = "scott";
console.log(name1 === name2);
// update name1 to be what is name2
name1 = name2;
console.log(name1 === name2);
name2 = name1;
name2 = "westopher";

const person1 = {
  first: "wes",
  last: "bos",
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
const person2 = {
  first: "wes",
  last: "bos",
};

// const person3 = person1; IS REFERENCE
// person3.first = 'Larry';
// console.log(person3.first);
// console.log(person1.first);
// const person3 = { ...person1 };
const person3 = _.cloneDeep(person1); //LODASH
person3.first = "Larry";

person3.clothing.shirts = 100;

const person4 = {
  first: "wes",
  last: "bos"
};
const person5 = {
  first: "wes",
  last: "bos",
};
console.log('equsla test lodash', _.isEqual(person4,person5));

const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15,
};

//concat two objects
const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

function doStuff(data) {
  data = "something else";
  console.log(data);
}

function doStuff2(data) {
  data.tomatoes = 10000000000;
  console.log(data);
}

doStuff2(inventory);
