var expect = require('chai').expect;

var baseUrl = 'http://localhost:3000';

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

            // Log it to the console (just for fun)
            console.log('\n🤖 The appName is "' + appName + '"');

            // Assert
            expect(appName).to.equal(expectedAppName);
        });

        it('should render a "My Profile" link with the correct url', function () {
            var expectedLinkText = 'My Profile';
            var expectedLinkUrl = 'http://localhost:3000/profile';

            // Navigate to the home page
            browser.url('/');

            // Get the element text
            var linkText = browser.getText('.navbar-nav > li > a[href="/profile"]');
            var linkUrl = browser.getAttribute('.navbar-nav > li > a[href="/profile"]', 'href');

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
            var expectedLinkUrl = baseUrl + '/travel-alerts';

            // Get the element and cache it.  Now the selector is only in one place for this test block.
            // (See http://v4.webdriver.io/api/protocol/element.html)
            var navItem = browser.element('.navbar-nav > li > a[href="/travel-alerts"]');

            // Function calls still make multiple HTTP calls, but the code is easier to read.
            var linkText = navItem.getText();
            var linkUrl = navItem.getAttribute('href');

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
            // (See http://v4.webdriver.io/api/protocol/elements.html)
            var listItems = browser.elements('.travel-alerts-list > .list-group > .list-group-item');
            var listItemCount = listItems.value.length || 0;

            // Log it to the console (just for fun)
            console.log('\n🤖 ' + listItemCount + ' "Travel Alert" list items were rendered');

            // Assert
            expect(listItemCount).to.equal(expectedTravelAlertsCount);
        });
    });
});
