/*
 * Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
 * which it should save to properties of the same name.
 */

class Vec {
  result = {};
  first;
  second;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  plus(valueVec) {
    this.result.x = this.first + this.second;
    this.result.y = valueVec.first + valueVec.second;
    return this.result;
  }

  minus(valueVec) {
    this.result.x = this.first - this.second;
    this.result.y = valueVec.first - valueVec.second;
    return this.result;
  }

  get length() {
    return Math.sqrt(this.first * this.first + this.second * this.second);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
