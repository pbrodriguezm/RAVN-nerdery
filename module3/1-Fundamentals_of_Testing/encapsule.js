

function test(title, callback) {
  try {
    callback();
    console.log(`${title}`);
  } catch (error) {
    console.error(`${title}`);
    console.error(error);
  }
}

function subtractTest() {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
}
test("subtract subtracts numbers", subtractTest);

function sumTest() {
  result = Math.sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
}

test("sum adds numbers", sumTest);
