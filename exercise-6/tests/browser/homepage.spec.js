/**
* Challenge: Write some additional helpful tests using the official WebDriver docs for selectors and the `browser` API.
*
* - Selectors: http://webdriver.io/guide/usage/selectors.html
* - API: http://webdriver.io/api.html
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
        it('should render the correct app name', function () {
            
            // TODO: Write a test to verify that the actual name of the app rendered in
            //       the '.navbar-brand' is the expected text "Verbo".

        });

        it('should render a "My Profile" link', function () {

            // TODO: Write a test to verify that the "My Profile" link exists in the navbar
            //       with the correct url, so that users always have access to the "/profile" url.

        });
    });

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 2: Jumbotron', function () {
        it('should render the correct CTA button text', function () {

            // TODO: Write a test to verify that the actual text of the CTA button rendered in
            //       the '.jumbotron' is the expected text "Plan your next trip!".

        });
    });

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 3: Travel Alerts', function () {
        it('should render the correct count of travel alerts', function () {

            var expectedTravelAlertsCount = 1;

            // TODO: Write a test to verify that the actual text of the "badge" in the navbar's "Travel Alerts"
            //       menu item matches the count of alerts displayed in the "Travel Alerts" content widget
            //       at the bottom of the page.  (Hint: we've hard-coded the travel alerts to just one.)

        });
    });
});
