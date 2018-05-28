/**
* Solution: An example test using the wdio test runner.
*/
var assert = require('assert');

describe('Example', function () {
    describe('page title', function () {

        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            // Navigate to the home page and test the page title.
            return browser
                .url('/')
                .getTitle().then(function (title) {
                    // Assert the homepage title is what we expect it to be.
                    assert.equal(title, expectedPageTitle);
                });
        });

    });
});
