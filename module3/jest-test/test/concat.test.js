//File require
 //const concat = require("../concat");
// import { isPasswordAllowed } from "../concat";
import { concat, isPasswordAllowed } from '../concat';


//Simple
test("Test two + two is four: ", () => {
  expect(2 + 2).toBe(4);
});


test("Test function concat", () => {
  expect(concat("ABC", "efc")).not.toBe("ABCef");
  expect(concat("ABC", "efc")).toBe("ABCefc");
});

// expect.assertions() is for code asynchronous
//all callbacks are called before knowing if the test passed or failed.
// test("asyncCode calls fetchPicture, fetchName and githubName", () => {

//   expect.assertions(3);
//   function fetchPicture(data) {
//     expect(2+2).toBeTruthy();
//   }
//   function fetchName(data) {
//     expect(2+2).toBeTruthy(); // if value en expect is true
//   }
//   function githubName(data) {
//     expect(2+2).toBeTruthy();
//   }
//   asyncCode(fetchPicture, fetchName, githubName);
// });
//Patrick annotation: The expect.assertions(3) makes sure that the 3 callbacks are called before passing or falling the test.

const profile = {
  name: "Orinami",
  githubUrl: "github.com/orinami",
  twitterUrl: "twitter.com/orinami_",
};
test("expects profile to be an object", () => {
  expect(typeof profile).toBe("object");
});

//Numbers
test("Validate major or minor", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // is > than
  expect(value).toBeGreaterThanOrEqual(3.5); // is >= than
  expect(value).toBeLessThan(5); // is < than
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual is equivalents in numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});


//float
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});



//strings
test("No Match I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('term stop in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});


// test("isPasswordAllowed returns false for invalid passwords", () => {
//   expect(isPasswordAllowed("a2c!")).toBe(false);
//   expect(isPasswordAllowed("123456!")).toBe(false);
//   expect(isPasswordAllowed("ABCdef!")).toBe(false);
//   expect(isPasswordAllowed("abc123!")).toBe(false);
//   expect(isPasswordAllowed("ABC123!")).toBe(false);
//   expect(isPasswordAllowed("ABCdef123")).toBe(false);
// });
