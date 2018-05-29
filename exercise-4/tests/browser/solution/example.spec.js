/**
* Solution: Example 4 using Node's assert()
*/

var assert = require('assert');

describe('Example using Node\'s assertion library', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be "' + expectedPageTitle + '"', function () {
            // Navigate to the home page
            browser.url('/');

            // Get the page title
            var pageTitle = browser.getTitle();

            // Log the page title (just for fun)
            console.log('\n🤖 The page title is: ' + pageTitle);

            // Assert the page title is what we expect it to be
            assert.equal(pageTitle, expectedPageTitle);

            // HINT: Want to see what a failure looks like?
            //       Uncomment the line below to try the `.notEqual()` syntax!
            // assert.notEqual(pageTitle, expectedPageTitle);

            // HINT: You can also change the page title in `verbo/public/index.html` to simulate an actual bug in the code, which should also cause your test to fail.
        });
    });
});
