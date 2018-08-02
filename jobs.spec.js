const { expect } = require("chai");
const { sortingJobs } = require('./jobs');

describe("sortingJobs", () => {
  // testing empty string
  it("returns an empty array when an empty string is passed", () => {
    const input = "";
    const actual = sortingJobs(input);
    expect(actual).to.eql([]);
  });
});  