/* Write a function min that takes two arguments and returns their minimum. */

function min(elementA,elementB) {
    if(elementA > elementB) return elementB;
    return elementA;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10