const lib = require("../src");

describe("SUM TEST", () => {
  test("shoud return 10", (done) => {
      expect(lib.sum(5, 5)).toBe(10);
      done();
  });
});

describe("SUBTRACT Test", () => {
  test('Deve retornar 0', (done) => {
    expect(lib.subtract(5,5)).toBe(0);
    done();
  });
});

describe("MULTIPLY Test", () => {
  test('Deve retornar 25', (done) => {
    expect(lib.multiply(5,5)).toBe(25);
    done();
  });
});

describe("DIVIDE Test", () => {
  test('Deve retornar 2', (done) => {
    expect(lib.divide(10, 5)).toBe(2);
    done();
  });

  test('Deve retornar 2', (done) => {
    expect(lib.divide(10, 0)).toBe(0);
    done();
  });
});
