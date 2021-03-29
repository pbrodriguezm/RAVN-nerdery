/*
* Make the Group class from the previous exercise iterable. Refer to the section about the iterator 
* interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
*
* If you used an array to represent the group’s members, don’t just return the iterator created 
* by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

* It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  members;
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  /*
   * Give the class a static from method that takes an
   * iterable object as argument and creates a group that
   * contains all the values produced by iterating over it.
   */
  static from(collection) {
    let group = new Group();
    collection.forEach((element) => {
      group.add(element);
    });

    return group;
  }
  [Symbol.iterator]() {
    console.log("iteration");

    let group = this;

    return new Iterator(group);
  }
}

class Iterator {
  position;
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
