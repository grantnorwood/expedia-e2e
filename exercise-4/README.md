# Exercise 4: Adding `mocha`

When we originally ran the `wdio` command to generate our config file, we chose `mocha` as the framework for organizing our tests.

**Overview**

<!-- TOC -->

- [Success Criteria](#success-criteria)
- [Instructions](#instructions)
  - [Switch to sync mode](#switch-to-sync-mode)
  - [Init the exercise](#init-the-exercise)
  - [Let's make our code look more synchronous](#lets-make-our-code-look-more-synchronous)
  - [Launch `wdio` with an `npm` script](#launch-wdio-with-an-npm-script)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success Criteria

1. Learn how to use mocha to group our tests appropriately.
2. Learn the main difference between `sync` modes
3. Add a convenient `npm` script

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

### Init the exercise

1. Change to the correct directory

```bash
cd tests/browser/exercise-4
```

2. Install dependencies

```bash
npm i
```

### Let's make our code look more synchronous

_Because it makes everything appear cleaner and more readable!_

1. In `wdio.conf.js`, change `sync` back to `true`:

```js
// ...
sync: true,
// ...
```

2. We need to change the code from returning a promise _(async style)_, to a handful of separate statements that will execute one after another _(sync style)_.

Open the `exercise-4/tests/browser/example.spec.js` test file, and replace it with the following code:

```js
/**
 * example.spec.js
 */
var assert = require('assert');

describe('Example', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

            // Navigate to the home page and test the page title
            browser.url('/');

            // Get the page title
            var pageTitle = browser.getTitle();

            // Log the page title (just for fun)
            console.log('🤖 The page title is: "' + pageTitle + '"');

            // Assert the page title is what we expect it to be
            assert.equal(pageTitle, expectedPageTitle);

            // Want to see what a failure looks like?  Uncomment the line below to try the `.not` syntax!
            // assert.notEqual(pageTitle, expectedPageTitle);
        });
    });
});
```

_Look Ma, no promises!_

3. Run it

```bash
./node_modules/.bin/wdio
```

You should see the example spec run with 1 passing test, and the page title printed to the console:

![1 passing test with sync mode on](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/e48dd535-33ff-4fb2-8676-9e37c1aa2b00/2018-05-28_00-08-31.png)

### Launch `wdio` with an `npm` script

Let's add an `npm run test:browser` script so we can avoid calling `wdio` directly, and make it easier for other developers and build tools to run your e2e test suite.

You can call your script just about anything, but at HomeAway, we typically have a pattern where a variety of "sub-scripts" use the colons to group similar scripts _(`:`)_.

Also, `npm run test` is more typically used to run unit tests.

1. Open `package.json`
2. Notice the new `scripts` field:

```js
"scripts": {
    "test:browser": "wdio"
},
```

3. Now, simply run `npm run test:browser` from now on to run your suite of tests.  Notice the `> wdio` in the output:

![Running npm run test:browser](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/6e5f3aec-80d0-4112-8e52-1c41bdad2070/2018-05-28_00-38-17.png)

**Pro tip:** Another benefit to using `npm` scripts is that they already search `node_modules/.bin` for local executables, so we can simple execute `wdio` without the rest of the path.

## What we learned

1. We learned how to use mocha syntax to group our tests with `describe()` and `it()` functions.
2. We learned that setting `sync` mode to `true` allows us to write more simple, synchronous-looking code in our tests, and let WebDriver.io extract away the inherently async behavior of testing with web browsers.
3. We created an `npm run test:browser` script that will make running `wdio` easier in the future.

## Up next

[Exercise 5:](../exercise-5)
