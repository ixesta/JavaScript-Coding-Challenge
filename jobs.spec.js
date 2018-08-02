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
    const input = '{a => a}';
    const actual = sortingJobs(input);
    expect(actual).to.eql('Error!!! Jobs cannot depend on themselves');
  });
  // testing jobs with no dependencies
  it('returns a list of the jobs passed if thre are no dependencies', () => {
    const input = `a =>
    b =>
    c =>`;
    const actual = sortingJobs(input);
    expect(actual).to.equal('abc');
  });
  // testing jobs with dependencies
  it('returns an ordered list of the job passed and its dependency', () => {
    const input = `a => c`;
    const actual = sortingJobs(input);
    expect(actual).to.equal('ca');
  });
  it('returns an ordered list of the jobs passed with its dependencies', () => {
    const input = `a => c
    b => a
    c => f`;
    const actual = sortingJobs(input);
    expect(actual).to.equal('fcab');
  });

  // testing circular dependencies
  it('throws an error message when a circular dependency is found', () => {
    const input = `a => b
    b => a`;
    const actual = sortingJobs(input);
    expect(actual).to.equal("Error!! There's a circular dependency");
  });
  it('throws an error message when a circular dependency is found in a larger list of jobs', () => {
    const input = `a => b
    b => a
    c => f
    d => g
    m => s`;
    const actual = sortingJobs(input);
    expect(actual).to.equal("Error!! There's a circular dependency");
  });


});  