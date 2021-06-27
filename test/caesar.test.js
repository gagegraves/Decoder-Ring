const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe("caesar()", () => {
  it("should return a properly encoded string shifting right", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3, true);
    expect(actual).to.equal(expected);
  });
  it("should return a properly encoded string shifting left", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3, true);
    expect(actual).to.equal(expected);
  });
  it("should return a properly decoded string", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("spaces and other non-alphabetic symbols should be maintained throughout", () => {
    const expected = "khoor zruog!";
    const actual = caesar("hello world!", 3, true);
    expect(actual).to.equal(expected);
  });
  it("should wrap around the alphabet if a letter is close to the end", () => {
    const expected = "fgh, cde";
    const actual = caesar("abc, xyz", 5, true);
    expect(actual).to.equal(expected);
  });
  it("should wrap around the alphabet if a letter is close to the beginning", () => {
    const expected = "vwx, stu";
    const actual = caesar("abc, xyz", -5, true);
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift value is not present, equal to 0, less than -2, or greater than 25", () => {
    const expected = false;
    const actual = caesar("abc", 97, true);
    expect(actual).to.equal(expected);
  });
});
