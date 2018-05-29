/**
* Solution: Example 5
*/

var expect = require('chai').expect;

/**
 * This group of tests are all related to the site's home page.
 */
describe('Homepage', function () {

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 1: Navbar', function () {
        var expectedAppName = "Verbo";
        
        it('app name in navbar should be "' + expectedAppName + '"', function () {
            // Navigate to the home page
            browser.url('/');

            // Get the element text
            var appName = browser.getText('.navbar-brand');

            // Log the page title (just for fun)
            console.log('\n🤖 appName: ' + appName);

            // Assert
            expect(appName).to.equal(expectedAppName);
        });

        it('should render a "My Profile" link', function () {

            // TODO: Write a test to verify that the "My Profile" link exists in the navbar
            //       with the correct url, so that users always have access to the "/profile" url.

        });
    });

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 2: Travel Alerts', function () {

        var expectedTravelAlertsCount = 1;

        it('should render the correct count of travel alerts in the navbar badge', function () {
            // TODO: Write a test to verify that the actual text of the "badge" in the navbar's "Travel Alerts"
            //       menu item matches the count of alerts displayed in the "Travel Alerts" content widget
            //       at the bottom of the page.  (Hint: we've hard-coded the travel alerts to just one.)

        });

        it('should render the correct count of travel alerts in the homepage widget', function () {
            // TODO: Write a test to verify that the actual text of the "badge" in the navbar's "Travel Alerts"
            //       menu item matches the count of alerts displayed in the "Travel Alerts" content widget
            //       at the bottom of the page.  (Hint: we've hard-coded the travel alerts to just one.)
        });
    });
});
