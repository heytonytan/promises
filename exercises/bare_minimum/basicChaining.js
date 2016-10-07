/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var PromiseFuncs = require('./promiseConstructor');
var PromiseGithub = require('./promisification');
Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return PromiseFuncs.pluckFirstLineFromFileAsync(readFilePath)
  .then((firstLine) => PromiseGithub.getGitHubProfileAsync(firstLine))
  .then((profile) => fs.writeFileAsync(writeFilePath, JSON.stringify(profile)))
  .catch((error) => console.log('There\'s and error somehwhere!'));
};
// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
