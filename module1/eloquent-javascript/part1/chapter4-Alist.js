/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
 * Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes
 * an element and a list and creates a new list that adds the element to the front of the input list, and nth, which
 * takes a list and a number and returns the element at the given
 * position in the list (with zero referring to the first element) or undefined when there is no such element.
 */

function arrayToList(array) {
  let list = null;

  array.reverse().forEach((element) => {
    list = { value: element, rest: list };
  });

  return list;
}

function listToArray(list) {
  let array = [];

  do {
    array.push(list.value);
    list = list.rest;
  } while (list != null);

  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, loop) {
  if (!list) return undefined;
  else if (loop == 0) return list.value;
  else {
    loop -= 1;
    return nth(list.rest, loop);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
