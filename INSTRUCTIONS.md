# Ordered Jobs

Imagine we have a list of jobs, each represented by a character. Because certain jobs must be done before others, a job may have a dependency on another job. For example, a may depend on b, meaning the final sequence of jobs should place b before a. If a has no dependency, the position of a in the final sequence does not matter.

The goal of this challenge is to parse the job dependency structure and produce a sequence of jobs in the order that observes their dependency chain.

Installation Instructions (on your local machine) You will need to install Node.js at version 9.10.1 to run this project.

Node Type the command below to check if you already have node installed:

$ node -v

If node is already installed the output of the command will display the version (e.g. v7.9.0). If you need to install node please follow link (http://nodejs.org/en/).

Please clone the repository https://github.com/ixesta/Jobs.git

$ git clone https://github.com/ixesta/Jobs

To install all dependencies please enter the following commands into the terminal:-

$ cd Jobs $ npm install

Test Suite To run the test suite please enter the following command into the terminal

$ npm test

Author: Rocio Membrilla