/*
 * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
 * from start up to (and including) end.
 *
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program
 * and see whether it does indeed return 55.
 *
 * As a bonus assignment, modify your range function to take an optional third argument that indicates the “step”
 * value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 *
 */

//receive two arguments, start and end, and returns an array containing all the numbers
function range(...numbers) {
  let incrementValue = 1;
  const resultArray = [];

  if (numbers.length > 2) incrementValue = numbers[numbers.length - 1];

  if (incrementValue > 0) {
    for (
      let index = numbers[0];
      index <= numbers[1];
      index = index + incrementValue
    ) {
      resultArray.push(index);
    }
  } else {
    for (
      let index = numbers[0];
      index >= numbers[1];
      index = index + incrementValue
    ) {
      resultArray.push(index);
    }
  }
  return resultArray;
}

/* function sum(array) {
  let resultValue = 0;
  array.forEach((element) => {
    resultValue += element;
  });

  return resultValue;
} */

//FUNCTIONS ANOTATION
function sum(array) {
  return array.reduce((previous, second) => {
    return previous + second
  });
  //return array.reduce(previous, current)
}

//console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
