console.log("It works");

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// first way of creating
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// second way of creating - Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// ATENTION: Immediately Invoked Function Expression

(function (age) {
  return `You are cool and age ${age}`;
})(10);


//metods
const wes = {
  name: "Westopher Bos",
  // Method!
  sayHi: function () {
    console.log(`Hey ${this.name}`);
    return "Hey Wes";
  },
  
  //function in objects
  yellHi() {
    console.log("HEY WESSSSS");
  },

  // Arrow function
  wisperHi: () => {
    console.log("hii wesss im a mouse");
  },
};


// click callback
//The method querySelector() returns the first Element within the document of css
const button = document.querySelector(".clickMe");

function handleClick() {
  console.log("Great Clicking");
}

button.addEventListener("click", function () {
  console.log("nice job");
});

// Timer Callback
setTimeout(() => {
  console.log("dome! time to eat");
}, 1000);
