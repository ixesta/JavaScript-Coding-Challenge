const sortingJobs = (jobs) => {

  // returns an empty array when an empty string is passed
  if (jobs.length === 0) return [];
  // turn input on array of letters by splitting it along a new line and removing character that is not a letter
  const jobsArr = jobs.split('\n').map(job => job.replace(/\W/g, ''));

}

module.exports = { sortingJobs }