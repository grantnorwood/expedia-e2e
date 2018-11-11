# Exercise 7: Personas and paths

**Before you start really ramping up your automated e2e testing, you need a strategy.**  Which means you must put some thought into which user scenarios and workflows you will implement as e2e tests, instead of a unit or integration test.

The more e2e tests you have, the longer those tests take to run, so you must have the appropriate mix of unit, integration, and e2e tests.

> The general rule is that e2e tests are most important for:
> - protecting the most common paths and workflows that your users undertake throughout the site
> - especially parts of the site directly tied to your revenue stream

_Use the following questions to help choose which user paths and interactions should be included in your automated e2e tests:_

**Identify your personas**

- What types of users use your product?
- What are they trying to accomplish?
- Document these where they’ll always be highly visible

**Identify their critical paths**

- How do users move through your app to achieve their goals?
- Do your users take the same path, or are there multiple paths or scenarios that must be tested?
- Draw these out and publish them to that they're well-understood

**Identify key interactions within those paths**

- What are the most important interactions your users will have along their path?
- Which elements, if broken, prevent your users from completing their objective?
- Which elements, if broken, prevent your users from giving you money?

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [Init the exercise](#init-the-exercise)
  - [Personas and paths](#personas-and-paths)
  - [Adding more structure to our folders](#adding-more-structure-to-our-folders)
  - [Save profile info successfully](#save-profile-info-successfully)
  - [💪 Challenge 1: Create a new trip](#💪-challenge-1-create-a-new-trip)
  - [💪 Challenge 2: Create a new task](#💪-challenge-2-create-a-new-task)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Understand how to identify personas of those using your product
1. Identify the paths they take in the most common workflows
1. Write some tests which are structured to represent the paths of those personas

## Instructions

### Init the exercise

1. Change to the correct directory

```bash
cd exercise-7
```

2. Install dependencies

```bash
npm i
```

### Personas and paths

View the [HomeAway Partner Personas](http://design.homeaway.com/research/personas/partner/) as an example, which were curated by our Design Research Team.

For this exercise, we chose [Nina the Newcomer](http://design.homeaway.com/research/personas/partner/newcomer/).  We'll test the following critical paths for Nina:

- Save profile info successfully
- Create a new trip
- Create a new task

### Adding more structure to our folders

We've already been using `pages` and `specs` folders, and we'll continue to keep things neatly organized.

Here's an example of how our files and folders might be structured as we add more functionality:

```bash
tests/browser
  ↳ pages
    - Home.page.js
    - Profile.page.js
  ↳ personas
    ↳ nina
      - persona.js
  ↳ specs
    ↳ home
      - verifyNavigationTextAndLinks.spec.js
    ↳ profile
      - saveProfile.spec.js
      - createTask.spec.js
      - createTrip.spec.js

```

#### Create a folder for defining personas

Referencing the structure above, let's define the `persona.json` for Nina.

1. Create a new `personas/nina` folder within `tests/browser`
2. Create a new `persona.json` file with the following data:

```js
{
    "firstName": "Nina",
    "lastName": "Newcomer",
    "email": "nina.newcomer@gmail.com",
    "bio": "I'm new to traveling!"
}
```

_The `pages` and `specs` folders have already been created for us!_

### Test: Save profile info successfully

Referencing the structure above, let's define the test spec for saving a profile.  This time, let's save some time and just paste the code you'll need into a new file.

1. Create a new `specs/profile` folder within `tests/browser`

2. Create a new `specs/saveProfile.spec.js` file and paste the following:

```js
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
```

2. Run `npm run test:browser`

✅ You should see 1 test passing.

![1 passing test with sync mode on](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/b25ae61f-bb45-4cbb-a2ee-91cc188a52f1/2018-11-10_23-55-20.png)

### 💪 Challenge 1: Write a "Create a new trip" test

> _To save time, you may want to copy/pasta the `saveProfile.spec.js` code as a starting point._

Create a new `createNewTrip.spec.js` test file where Nina adds a new trip, and verify the UI displays a success message.

_(todo: write the solution file)_

### 💪 Challenge 2: Write a "Create a new task" test

Create a new `createNewTask.spec.js` test file where Nina adds a new task, and verify the UI displays a success message.

_(todo: write the solution file)_

---

## What we learned

✅ You should now have a good understanding of how to structure your test suite in a way that makes it easier to focus on testing the most critical paths for both your users and your business 💵

## Up next

[Exercise 8: Level up](../exercise-8)
