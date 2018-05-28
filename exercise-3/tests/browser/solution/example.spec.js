/**
* Solution: Example 3
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
                    // Log the page title.
                    console.log('🤖 The page title is: ' + title);

                    // Assert the homepage title is what we expect it to be.
                    assert.equal(title, expectedPageTitle);

                    // Want to see what a failure looks like?  Uncomment the line below to try the `.not` syntax!
                    // assert.notEqual(title, expectedPageTitle);
                });
        });

    });
});
