/*
 * Write a function deepEqual that takes two values and returns true only if they are the same value or
 * are objects with the same properties, where the values of the properties are equal when compared with
 * a recursive call to deepEqual.
 */

function deepEqual(objectA, objectB) {
  if (objectA == objectB) return true;

  for (var k in objectB) {
    if (JSON.stringify(objectB[k]) != JSON.stringify(objectA[k])) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
