var expect = require('chai').expect;
var config = require('../../../../wdio.conf').config;
var homePage = require('../../pages/Home.page');
var profilePage = require('../../pages/Profile.page');

/**
 * This group of tests are all related to Nina Newcomer's critical user paths.
 * 
 * - Save updated profile info successfully
 * - Add a new trip
 * - Add a new task
 */
describe('Nina Newcomer', function () {

    /**
     * Challenge 1 - Remember to utilize the WebDriver.io API docs and explore for the methods you will need!
     * http://webdriver.io/api.html
     */
    describe('Challenge 1: Save new profile info successfully', function () {
        it('should allow a user to save updated profile info', function () {
            // Navigate to the home page
            browser.url('/');

            // Assert the correct starting url.
            expect(browser.getUrl()).to.equal(`${config.baseUrl}${homePage.url}`);

            // TODO: Click the My Profile link 
            //       - use `.click()`

            // TODO: Wait for the page to change
            //       - use `waitForUrlChange()`, found in the new BasePage.page.js, inherited by all Page Objects

            // TODO: Assert the correct profile page url
            //       - use `expect()`

            // TODO: Change the values of each of the profile fields
            //       - use `.setValue()`

            // TODO: Verify the new values were persisted, and the success message is displayed.
            //       - use `.getValue()`, `.isExisting()`
        });
    });
});
