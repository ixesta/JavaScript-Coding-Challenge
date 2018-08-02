const sortingJobs = (jobs) => {

  // returns an empty array when an empty string is passed
  if (jobs.length === 0) return [];
  // turn input on array of letters by splitting it along a new line and removing character that is not a letter
  const jobsArr = jobs.split('\n').map(job => job.replace(/\W/g, ''));

  return jobsArr.reduce((acc, [job = '', dependency]) => {
    if (acc.includes('Error')) return acc;
    if (job === dependency) return 'Error!!! Jobs cannot depend on themselves';
  }, '');


}
console.log(sortingJobs('a => a'))

module.exports = { sortingJobs }