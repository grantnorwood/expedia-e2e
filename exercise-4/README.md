# Exercise 4: Adding `mocha` and `chai`

When we originally ran the `wdio` command to generate our config file, we chose `mocha` as the framework for organizing our tests.

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [Switch to sync mode](#switch-to-sync-mode)
  - [Init the exercise](#init-the-exercise)
  - [Let's make our code look more synchronous](#lets-make-our-code-look-more-synchronous)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Learn the main difference between `sync` modes
1. Learn how to use mocha to group our tests appropriately.
1. Install `chai` and learn to use `expect()` for assertions.

## Instructions

### Switch to sync mode

Back when we first created our `wdio.conf.js` file, we set `sync` mode to `false` so we could reuse some of our first test code.  It returned a promise with a `.then()` which called `assert()` to validate the test.

However, WebDriver.io can do a cool trick where we enable `sync` mode to `true`, and it will handle a lot of the _asynchronous_ nature of browser testing for us, and allow us to write more readable code that looks more _synchronous_.

You can read more about it in the official documentation, [It's all synchronous](http://webdriver.io/guide/getstarted/v4.html#It%E2%80%99s-all-synchronous).

_An example from the WebDriver.io docs of code that looks more synchronous, without any promises:_

```js
// Notice the lack of return statements and `.then()`?
describe('webdriver.io page', function() {
    it('should have the right title', function () {
        // Navigate
        browser.url('/');

        // Get the page's title
        var title = browser.getTitle();

        // Assert the page title is what we expect it to be
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});
```

> **Important:** "All commands now block the execution of the test process until they’ve resolved. No then calls have to be done anymore, we can just assign the direct response of the Selenium server to a variable."

### Enable `sync` mode

_Because it makes everything appear cleaner and more readable!_

1. In `wdio.conf.js`, change `sync` back to `true`:

```js
// ...
sync: true,
// ...
```

### Init the exercise

1. Change to the correct directory

```bash
cd tests/browser/exercise-4
```

2. Install dependencies

```bash
npm i
```

### Use Mocha

Mocha is already included in your project when you installed `wdio`.  But we do need to update our code to use it.

1. We need to change the code from returning a promise _(async style)_, to a handful of separate statements that will execute one after another _(sync style)_.

Open the `exercise-4/tests/browser/example.spec.js` test file, and replace it with the following code:

```js
/**
 * example.spec.js
 */
var assert = require('assert');

describe('Example using Node\'s assertion library', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

            // Navigate to the home page and test the page title
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
```

_Look Ma, no promises!_  We're simply using Node's built-in `assert` module, and our test runner will tell us if any of our assertions fail.

3. Run it

```bash
./node_modules/.bin/wdio
```

You should see the example spec run with 1 passing test, and the page title printed to the console:

![1 passing test with sync mode on](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/e48dd535-33ff-4fb2-8676-9e37c1aa2b00/2018-05-28_00-08-31.png)

### Adding `chai`

Chai enables much more powerful assertions via multiple styles, and for this workshop we'll use `expect()`.

1. Install `chai` as a `devDependency`:

```bash
npm i --save-dev chai
```

1. Create a new file called `example-chai.spec.js`, and paste the following code:

```js
var expect = require('chai').expect;

describe('Example using Chai\'s assertion library', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

            // Navigate to the home page and test the page title
            browser.url('/');

            // Get the page title
            var pageTitle = browser.getTitle();

            // Log the page title (just for fun)
            console.log('\n🤖 (Chai) The page title is: ' + pageTitle);

            // Assert the page title is what we expect it to be
            expect(pageTitle).to.equal(expectedPageTitle);

            // HINT: Want to see what a failure looks like?  
            //       Uncomment the line below to try the `.not.to.equal()` syntax!
            // expect(pageTitle).not.to.equal(expectedPageTitle);

            // HINT: You can also change the page title in `verbo/public/index.html` to simulate an actual bug in the code, which should also cause your test to fail.
        });
    });
});
```

The above simply changes from the Node.js `assert` module to using Chai's, which is much more powerful.

✅ You've made a lot of progress, great job!

---

## What we learned

1. We learned how to use mocha syntax to group our tests with `describe()` and `it()` functions.
2. We learned that setting `sync` mode to `true` allows us to write more simple, synchronous-looking code in our tests, and let WebDriver.io extract away the inherently async behavior of testing with web browsers.

## Up next

[Exercise 5:](../exercise-5)
