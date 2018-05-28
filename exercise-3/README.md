# Exercise 3: Using the `wdio` test runner

There are two methods of running your WebDriver.io tests, and they are well documented in the official docs called "[Standalone vs WDIO](http://webdriver.io/guide/getstarted/modes.html)".  Standalone mode is fine for first demos, or building your own entire framework, but **using WDIO is the preferred method of running e2e tests at scale.**

> The WDIO Testrunner
> [http://webdriver.io/guide/getstarted/modes.html#The-WDIO-Testrunner](http://webdriver.io/guide/getstarted/modes.html#The-WDIO-Testrunner)
>
> "The main purpose of WebdriverIO though is end to end testing on big scale. We therefore implemented a test runner that helps you to build a reliable test suite that is easy to read and maintain. The test runner takes care of many problems you are usually facing when working with plain automation libraries.
>
> For one it organizes your test runs and splits up test specs so your tests can be executed with maximum concurrency. It also handles session management and provides a lot of features that help you to debug problems and find errors in your tests."

That being said, we'll use the WDIO test runner from this point forward!

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [Init the exercise](#init-the-exercise)
  - [Using the `wdio` command](#using-the-wdio-command)
  - [Create a configuration file](#create-a-configuration-file)
  - [Customizing the configuration](#customizing-the-configuration)
  - [Create a test spec](#create-a-test-spec)
  - [Running `wdio`](#running-wdio)
  - [First passing test](#first-passing-test)
  - [Launch `wdio` with an `npm` script](#launch-wdio-with-an-npm-script)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Understand the difference between the standalone mode and using the WDIO test runner.
1. Setup your test runner to use `wdio`, the preferred way to run your e2e tests.
1. Add a convenient `npm` script

## Instructions

### Init the exercise

1. Change to the correct directory

```bash
cd tests/browser/exercise-3
```

2. Install dependencies

```bash
npm i
```

### Using the `wdio` command

The `wdio` package is already installed with `webdriverio`, and available as an executable in the `node_modules` directory.  Let's test that it's working:

```bash
./node_modules/.bin/wdio --help
```

If it's working, you'll see the help docs printed to the console:

```bash
$ ./node_modules/.bin/wdio --help
WebdriverIO CLI runner

Usage: wdio [options] [configFile]
Usage: wdio config
Usage: wdio repl [browserName]
config file defaults to wdio.conf.js
The [options] object will override values from the config file.
An optional list of spec files can be piped to wdio that will override configured specs.

Options:
(...)
```

### Create a configuration file

The `wdio` command can help us setup our initial configuration file by walking us through some questions which will automatically scaffold your tests appropriately.

1. Run the `wdio` command to be asked some questions:

```bash
./node_modules/.bin/wdio
```

_**Note:** You'll accept the defaults on many of the questions by simply pressing the `enter` key_

2. When asked where your test specs should be located, let's choose a slightly different path that is more selective about the test spec file globs.

Instead, enter `./tests/browser/**/*.spec.js`:

```bash
Where are your test specs located? (./test/specs/**/*.js) ./tests/browser/**/*.spec.js
```

3. When asked which reporter, choose `dot` reporter.  _(It will be chosen by default if you don't make a selection.)_

4. When asked which services, use the arrow keys and spacebar to scroll and select these options:

![WDIO Configuration Helper - selenium-standalone](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/4672063d-3b63-4e5c-8299-cd050766acc7/2018-05-27_17-04-10.png)

Choosing the `selenium-standalone` service means that we don't have to manually run our Selenium server, `wdio` will automatically start that service up for us.

This also makes running the service more consistent and reliable with multiple developers.

5. Choose `silent` for logging verbosity. _We don't need all the extra noise quite yet._

![silent verbosity](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/9011e770-f075-4272-926e-0e063b8e368b/2018-05-27_17-20-19.png)

6. When asked for the base url, enter our example app's url _(without the trailing slash)_: [http://localhost:3000](http://localhost:3000)

#### A successful installation

![A successful installation](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/75cbf06d-99ad-4afc-8b27-b0cb687ce333/2018-05-27_17-24-04.png)

And you'll see the new `devDependencies` which were automatically added to your package.json:

```js
"devDependencies": {
    "wdio-dot-reporter": "0.0.9",
    "wdio-mocha-framework": "^0.5.13",
    "wdio-selenium-standalone-service": "0.0.10",
    "webdriverio": "^4.12.0"
  }
```

### Customizing the configuration

As we did in the previous exercise, let's change the `browserName` default from `firefox` to `chrome`.

Look for the `capabilities` object in your `wdio.conf.js` file:

```js
// ...
capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 5,
    //
    browserName: 'chrome'
}],
// ...
```

**(Keep this section?)** Since our first test spec _(example.spec.js)_ is still using promises, let's `sync` to `false` for now.

```js
// By default WebdriverIO commands are executed in a synchronous way using
// the wdio-sync package. If you still want to run your tests in an async way
// e.g. using promises you can set the sync option to false.
sync: false,
```

### Create a test spec

Create a new test spec file called `example.spec.js` in `exercise-3/tests/browser`, and paste this log statement:

```js
console.log(browser);
```

This where we will eventually see our tests execute, but for now this simply logs the [global `browser` object](http://webdriver.io/guide/testrunner/browserobject.html) so we know it's working.  It also gives us some insights into the global browser object in WebDriver.io.

### Running `wdio`

We can now execute our `wdio` test runner, though it's not going to give us any passing tests quite yet:

```bash
./node_modules/.bin/wdio
```

You should see the `wdio` command execute successfully, using the `wdio.conf.js` file for configuration, executing our `exercise-3/tests/browser/example.spec.js` test file where we've logged some global `browser` info to the console.

![wdio example output](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/07ee0e92-06c4-4713-9c93-d98158dc6097/2018-05-27_21-28-07.png)

Note that none of the tests are passing, because we haven't really created our next set of tests quite yet ...

### First passing test

Let's copy the solution code from [Exercise 2: Install WebDriver.io and write your first test](../exercise-2/tests/browser/solution/example.spec.js) to make our previous test spec runnable by `wdio`.

1. Create a new `example.spec.js` with the following:

```js
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options) // returns the client object
    .init() // initializes the browser environment
    .url('http://localhost:3000/') // navigates to a url
    .getTitle().then(function (title) { // gets the page title, and executes a callback fn in .then()
        console.log('Title was: ' + title);
    })
    .getUrl().then(function (url) { // gets the page url
        console.log('Url was: ' + url);
    })
    .getText('h1').then(function (text) { // gets the page's h1 element text
        console.log('h1 was: ' + text);
    })
    .end() // required to explicitly end the test.
    .catch(function (err) { // catches any exceptions thrown
        console.log(err);
    });
```

2. Since `wdio` does much of the setup and teardown of tests, we can delete the `require()` and `options` lines, as well as calls to `.remote()`, `.init()`, and `.end()`.  Additionally, the global WebDriver client is a variable called `browser`, so we'll update that, too.

And because the base url is defined in our configuration file, we can simply point to the root path.

Go ahead and delete those lines, change `webdriverio` to `browser`, and update the `url`:

```js
/**
 * example.spec.js
 */
var assert = require('assert');

describe('Example', function () {
    describe('page title', function () {

        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            // Navigate to the home page and test the page title.
            return browser
                .url('/')
                .getTitle().then(function (title) {
                    // Log the page title.
                    console.log('🤖 The page title is: ' + title);

                    // Assert the homepage title is what we expect it to be.
                    assert.equal(title, expectedPageTitle);

                    // Want to see what a failure looks like?  Uncomment the line below to try the `.not` syntax!
                    // assert.notEqual(title, expectedPageTitle);
                });
        });

    });
});
```

You should see something like this, with 1 test passing:

![1 test passing](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/7d88adaa-80a3-4d22-b349-f40f90613d42/2018-05-27_22-54-31.png)

You can also try intentionally causing a test to fail to see what that looks like.  Uncomment the `assert.notEqual()` statement to see a test failure:

![1 test passing, 1 test failure](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/1cfb91f4-0ead-41f2-8212-173f1ec21d96/2018-05-27_22-53-30.png)

### Launch `wdio` with an `npm` script

Let's add an `npm test` script so we can avoid calling `wdio` directly, and make it easier for other developers and build tools to run your e2e test suite.

You can call your script just about anything, but at HomeAway, we typically have a pattern where a variety of "sub-scripts" use the colons to group similar scripts _(`:`)_.

Also, `npm run test` is more typically used to run unit tests.

1. Open `package.json`
2. Notice the new `scripts` field:

```js
"scripts": {
    "test": "wdio"
},
```

3. Now, simply run `npm test` from now on to run your suite of tests.  Notice the `> wdio` in the output:

![Running npm test](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/2bc13607-f9c7-4af4-aeb2-45b1d8ccb1ff/2018-05-28_02-11-34.png)

**Pro tip:** Another benefit to using `npm` scripts is that they already search `node_modules/.bin` for local executables, so we can simple execute `wdio` without the rest of the path.

✅ **Congratulations!** With the `wdio` test runner setup, you're getting closer to a fully configured environment for running e2e tests.

---

## What we learned

1. You should now understand the difference between the standalone mode and using the WDIO test runner, and why WDIO is preferred.
1. You can now run `wdio` tests, using the configuration file you created.
1. You wrote your first simple test spec!
1. We created an `npm test` script that will make running `wdio` easier in the future.

## Up next

[Exercise 4: Adding `mocha` and `chai`](../exercise-4)
