// const {sum, subtract} = require('../math')

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let result = subtract(7,3); //for mak error 3,7
let expected = 4;

console.log("Values: ", result, expected);

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// Example toBe
var simpleObject = {foo: 'bar'};
expect(simpleObject).toEqual({foo: 'bar'}); //true
simpleObject == {foo: 'bar'}; //false

var castableObject = {toString: function(){return 'bar'}};
expect(castableObject).toEqual('bar'); //false
castableObject == 'bar'; //true
