const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;
const polybius = polybiusModule.polybius;

describe("polybius()", () => {
  it("when decoding, should return false if the number of characters in the string is odd, excluding spaces", () => {
    const actual = polybius("3251131343 72543241341", false);
    expect(actual).to.be.false;
  });

  it("should still output a string", () => {
    const actual = polybius("thinkful", true);
    expect(actual).to.be.a("string");
  });

  it("should properly encode a string", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should properly decode a string, showing (i/j) as written", () => {
    const expected = "th(i/j)nkful (i/j)s fun";
    const actual = polybius("4432423352125413 4234 125433", false);
    expect(actual).to.equal(expected);
  });
});
