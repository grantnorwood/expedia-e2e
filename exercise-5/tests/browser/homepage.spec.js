/**
* Challenge: Write some additional helpful tests using the official WebDriver docs for selectors and the `browser` API.
*
* - Selectors: http://v4.webdriver.io/guide/usage/selectors.html
* - API: http://v4.webdriver.io/api.html
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
            //
            // HINT: Use the same browser.getText('.selector') command we previously used
            //       (see http://v4.webdriver.io/api/property/getText.html)

        });

        it('should render a "My Profile" link with the correct url', function () {

            // TODO: Write a test to verify that the "My Profile" link exists in the navbar
            //       with the correct url, so that users always have access to the "/profile" url.
            //
            // HINT: Use the browser.getAttribute('.selector', 'attribute') command
            //       (see http://v4.webdriver.io/api/property/getAttribute.html)

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
