const person1 = {
  name: "wes",
  age: 200,
};

const myMap = new Map();
// .set()
myMap.set("name", "wes");
myMap.set(100, "This is a number");
myMap.set(person1, "Really Cool");
console.log(myMap);

const score = 200;
const prizes = new Map();
prizes.set(100, "Bear");
prizes.set(200, "Duck");
prizes.set(300, "Car");
console.log(`you win a ${prizes.get(score)}`);

// select that ul
const ul = document.querySelector(".prizes");

prizes.forEach((element,key) => {
    console.log('KEY:',key, 'VALUE:', element);
});

for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML("beforeend", li);
}
// .has()
// .delete()
