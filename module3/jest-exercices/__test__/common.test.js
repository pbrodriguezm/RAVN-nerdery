test("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

test("object validation", () => {
  const data = { username: "abc" };
  const data2 = { username: "abcd" };

  expect(data).toEqual({ username: "abc" });
  expect(data).not.toEqual(data2);
});
