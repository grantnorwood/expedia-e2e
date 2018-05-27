/**
 * Solution: Initial test and specifying different browsers for testing.
 */

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options) // returns the client object
    .init() // initializes the browser environment
    .url('http://www.google.com') // navigates to a url
    .getTitle().then(function (title) { // gets the page title, and executes a callback fn in .then()
        console.log('Title was: ' + title);
    })
    .end() // required to explicitly end the test.
    .catch(function (err) { // catches any exceptions thrown
        console.log(err);
    });
