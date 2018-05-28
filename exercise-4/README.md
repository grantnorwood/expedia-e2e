# Exercise 4: Adding `mocha`

When we originally ran the `wdio` command to generate our config file, we chose `mocha` as the framework for organizing our tests.

**Overview**

<!-- TOC -->

- [Success Criteria](#success-criteria)
- [Instructions](#instructions)
  - [Using the `wdio` command](#using-the-wdio-command)
  - [(to-do)](#to-do)
- [What we learned](#what-we-learned)

<!-- /TOC -->

---

## Success Criteria

1. Learn how to use mocha to group our tests appropriately.

## Instructions

### Switch to sync mode

Back when we first created our `wdio.conf.js` file, we set `sync` mode to `false` so we could reuse some of our first test code.  It returned a promise with a `.then()` which called `assert()` to validate the test.

However, WebDriver.io can do a cool trick where we enable `sync` mode to `true`, and it will handle a lot of the _asynchronous_ nature of browser testing for us, and allow us to write more readable code that looks more _synchronous_.

You can read more about it in the official documentation, [It's all synchronous](http://webdriver.io/guide/getstarted/v4.html#It%E2%80%99s-all-synchronous).

_Example of more synchronous code in "sync mode", without any promises:_

```js
describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});
```

> "All commands now block the execution of the test process until they’ve resolved. No then calls have to be done anymore, we can just assign the direct response of the Selenium server to a variable."

1. In `wdio.conf.js`, change `sync` back to `true`:

```js
// ...
sync: true,
// ...
```

1. In our `example.spec.js` test file, we need to change the code from returning a promise _(async style)_, to a handful of separate statements that will execute one after another (sync).

```js
// example.spec.js
var assert = require('assert');

describe('Example', function() {
  describe('page title', function() {

    var expectedPageTitle = "Verbo - Simple travel planning";

    it('should be ' + expectedPageTitle, function() {

        /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

        // Navigate to the home page and test the page title
        browser.url('/');

        // Get the page title
        var pageTitle = browser.getTitle();
        assert.equal(title, expectedPageTitle);
    });

  });
});
```

## What we learned

- _(to-do)_
