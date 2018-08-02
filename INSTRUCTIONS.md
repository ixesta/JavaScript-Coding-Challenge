# Ordered Jobs

Imagine we have a list of jobs, each represented by a character. Because certain jobs must be done before others, a job may have a dependency on another job. For example, a may depend on b, meaning the final sequence of jobs should place b before a. If a has no dependency, the position of a in the final sequence does not matter.

The goal of this challenge is to parse the job dependency structure and produce a sequence of jobs in the order that observes their dependency chain.


Author: Rocio Membrilla