const sortingJobs = (jobs) => {

  // returns an empty array when an empty string is passed
  if (jobs.length === 0) return [];
  // turn input on array of letters by splitting it along a new line and removing all characters that are not letters
  const jobsArr = jobs.split('\n').map(job => job.replace(/\W/g, ''));

  // throw an error if a job depends on itself
  return jobsArr.reduce((acc, [job = '', dependency]) => {
    if (acc.includes('Error')) return acc;
    if (job === dependency) return 'Error!!! Jobs cannot depend on themselves';

    // create variables to find out if the result array already has that job or its dependency
    const alreadyAJob = acc.includes(job);
    const alreadyDependency = acc.includes(dependency);

    // throw an error if a circular dependency is found
    if (alreadyAJob && alreadyDependency) return "Error!! There's a circular dependency";
    // include job & dependency if they are not already in the final array
    return `${dependency && !alreadyDependency ? dependency : ''}${acc}${alreadyAJob ? '' : job}`;

  }, '');


}
console.log(sortingJobs('a => a'))

module.exports = { sortingJobs }