/**
* Solution: Example 4
*/

var assert = require('assert');

describe('Example', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

            // Navigate to the home page and test the page title
            browser.url('/');

            // Get the page title
            var pageTitle = browser.getTitle();

            // Log the page title (just for fun)
            console.log('🤖 The page title is: ' + pageTitle);

            // Assert the page title is what we expect it to be
            assert.equal(pageTitle, expectedPageTitle);

            // Want to see what a failure looks like?  Uncomment the line below to try the `.not` syntax!
            // assert.notEqual(pageTitle, expectedPageTitle);
        });
    });
});