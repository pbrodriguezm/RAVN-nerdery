const { carsList, brandsList } = require("../src/arrays");

describe("check array diferent null", () => {
  test("diferent null", () => {
    expect(brandsList()).not.toBeNull();
  });
});

describe("check Cars diferent null", () => {
  test("array diferent null", () => {
    expect(carsList()).not.toBeNull();
  });

  test("Array contain VW Gold", () => {
    expect(carsList()).toContain("VW Golf GTI");
  });

  test("Check langth array", () => {
    expect(carsList()).toHaveLength(4);
  });
});
