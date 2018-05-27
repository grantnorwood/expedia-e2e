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
    .url('http://localhost:3000/') // navigates to a url
    .getTitle().then(function (title) { // gets the page title, and executes a callback fn in .then()
        console.log('Title was: ' + title);
    })
    .getUrl().then(function (url) { // gets the page url, and executes a callback fn in .then()
        console.log('Url was: ' + url);
    })
    .end() // required to explicitly end the test.
    .catch(function (err) { // catches any exceptions thrown
        console.log(err);
    });
