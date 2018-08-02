const { expect } = require("chai");
const { sortingJobs } = require('./jobs');

describe("sortingJobs", () => {
  // testing empty string
  it("returns an empty sequence when an empty string is passed", () => {
    const input = "";
    const actual = sortingJobs(input);
    expect(actual).to.eql([]);
  });
  // testing jobs depending on themselves
  it("throws an error when a job depends on itself", () => {
    const input = '{"a":"a"}';
    const actual = sortingJobs(input);
    expect(actual).to.eql('Error!!! Jobs cannot depend on themselves');
  });



});  