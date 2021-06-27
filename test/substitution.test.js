const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;
const substitution = substitutionModule.substitution;

describe("substitution()", () => {
  it("should encode a string", () => {
    const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "jrufscpw"
    const actual = substitution("thinkful", substitutionAlphabet, true);
    expect(actual).to.equal(expected);
  });
  it("should decode a string", () => {
    const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "thinkful"
    const actual = substitution("jrufscpw", substitutionAlphabet, false);
    expect(actual).to.equal(expected);
  });
  it("should return false if alphabet input is not 26 characters", () => {
    const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution("jrufscpw", "not26letterslong", true);
    expect(actual).to.be.false;
  });
  it("should return false if alphabet has any duplicate characters", () => {
    const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution("jrufscpw", "stringwithduplicateletters", true);
    expect(actual).to.be.false;
  });
});