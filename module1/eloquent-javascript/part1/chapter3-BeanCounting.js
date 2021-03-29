/* Write a function countBs that takes a string as its only argument and returns
 * a number that indicates how many uppercase “B” characters there are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it takes a
 * second argument that indicates the character that is to be counted (rather than counting only
 * uppercase “B” characters). Rewrite countBs to make use of this new function.
 */

function countBs(paramBs) {
  return countChar(paramBs, "B");
}

function countChar(paramChars, findChar) {
  let countValue = 0;
  paramChars.split("").forEach((paramChar) => {
    if (paramChar == findChar) countValue++;
  });
  return countValue;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
