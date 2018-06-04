/**
* Solution: Example 6
*/

var expect = require('chai').expect;
var config = require('../../../../wdio.conf').config;
var HomePage = require('../pages/Home.page');

/**
 * This group of tests are all related to the site's home page.
 */
describe('Homepage', function () {

    // Init page (or component) objects.
    var homePage = new HomePage();

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 1: Navbar', function () {
        var expectedAppName = "Verbo";

        it('app name in navbar should be "' + expectedAppName + '"', function () {
            // Navigate to the home page
            browser.url('/');

            // Get the element text
            var appName = homePage.getNavBarBrandText();

            // Log it to the console (just for fun)
            console.log('\n🤖 The appName is "' + appName + '"');

            // Assert
            expect(appName).to.equal(expectedAppName);
        });

        it('should render a "My Profile" link with the correct url', function () {
            var expectedLinkText = 'My Profile';
            var expectedLinkUrl = config.baseUrl + '/profile';

            // Navigate to the home page
            browser.url('/');

            // Get the element text
            var linkText = homePage.getMyProfileLinkText();
            var linkUrl = homePage.getMyProfileLinkUrl();

            // Log it to the console (just for fun)
            console.log('\n🤖 The "My Profile" link text is "' + linkText + '"');
            console.log('\n🤖 The "My Profile" link url is "' + linkUrl + '"');

            // Assert
            expect(linkText).to.equal(expectedLinkText);
            expect(linkUrl).to.equal(expectedLinkUrl);
        });
    });

    /**
     * This describe() group contains multiple it() tests for verifying the navbar works correctly.
     */
    describe('Challenge 2: Travel Alerts', function () {

        var expectedTravelAlertsCount = 1;

        /**
         * Executes before each of the it() functions.
         */
        // beforeEach(function() {
        //     // Navigate to the home page
        //     browser.url('/');
        // });

        it('should render the correct count of travel alerts in the navbar badge', function () {
            // Navigate to the home page
            browser.url('/');

            // getText() will return the count text from within the <span />, too
            var expectedLinkText = 'Travel Alerts ' + expectedTravelAlertsCount;
            // Making `baseUrl` a global variable is very necessary, it's used often!  (Fix that up in Challenge 1, while you're at it.)
            var expectedLinkUrl = config.baseUrl + '/travel-alerts';

            // Function calls still make multiple HTTP calls, but the code is easier to read.
            var linkText = homePage.getTravelAlertsNavItemText();;
            var linkUrl = homePage.getTravelAlertsNavItemUrl();;

            // Log it to the console (just for fun)
            console.log('\n🤖 The "Travel Alerts" link text is "' + linkText + '"');
            console.log('\n🤖 The "Travel Alerts" link url is "' + linkUrl + '"');

            // Assert
            expect(linkText).to.equal(expectedLinkText);
            expect(linkUrl).to.equal(expectedLinkUrl);
        });

        it('should render the correct count of travel alerts in the homepage widget', function () {
            // Navigate to the home page
            browser.url('/');

            // Notice we're using `browser.elements()` plural!  This is how we return an array of matching elements.
            // (See http://webdriver.io/api/protocol/elements.html)
            var listItemCount = homePage.getTravelAlertsListItemsCount();

            // Log it to the console (just for fun)
            console.log('\n🤖 ' + listItemCount + ' "Travel Alert" list items were rendered');

            // Assert
            expect(listItemCount).to.equal(expectedTravelAlertsCount);
        });
    });
});
