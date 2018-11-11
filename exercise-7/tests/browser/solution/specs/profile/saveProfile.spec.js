/**
* Solution: Example 7
*/

var expect = require('chai').expect;
var config = require('../../../../../wdio.conf').config;
var HomePage = require('../../pages/Home.page');
var ProfilePage = require('../../pages/Profile.page');

/**
 * This group of tests are all related to Nina Newcomer's critical user paths.
 * 
 * - Save updated profile info successfully
 * - Add a new trip
 * - Add a new task
 */
describe('Nina Newcomer', function () {

    // Init page (or component) objects.
    var homePage = new HomePage();
    var profilePage = new ProfilePage();

    /**
     * Ensure that Nina can save her profile successfully.
     *
     * Nina will:
     *  - Load the home page
     *  - Click the "My Profile" link
     *  - Update her profile with new values
     *  - Click the Save button
     */
    describe('Save new profile info successfully', function () {
        it('should allow a user to save updated profile info', function () {
            // Navigate to the home page
            browser.url('/');

            // Assert the correct starting url.
            expect(browser.getUrl()).to.equal(`${config.baseUrl}${homePage.url}`);

            // Click the My Profile link 
            homePage.clickMyProfileLink();
            
            // Wait for the page to change (using a custom `waitUntil()` function in BasePage.page.js)
            homePage.waitForUrlChange(profilePage.url, 5000);

            // Assert the correct profile page url
            expect(browser.getUrl()).to.equal(`${config.baseUrl}${profilePage.url}`);

            // Change the values of each of the profile fields
            var newFirstName = 'Nina 2';
            var newLastName = 'Newcomer 2';
            var newEmail = 'nina.newcomer.2@gmail.com';
            var newBio = 'New bio coming soon ...';

            profilePage.setFirstNameInputValue(newFirstName);
            profilePage.setLastNameInputValue(newLastName);
            profilePage.setEmailInputValue(newEmail);
            profilePage.setBioTextareaValue(newBio);
            
            // Click the Save button.
            profilePage.clickSaveButton();

            // Assert that the visible fields have been updated successfully.
            expect(profilePage.getFirstNameInputValue()).to.be.equal(newFirstName);
            expect(profilePage.getLastNameInputValue()).to.be.equal(newLastName);
            expect(profilePage.getEmailInputValue()).to.be.equal(newEmail);
            expect(profilePage.getBioTextareaValue()).to.be.equal(newBio);

            // Assert the success message is visible.
            expect(profilePage.isSuccessAlertVisible()).to.be.equal(true);
        });
    });
});
