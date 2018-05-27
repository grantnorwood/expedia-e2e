# Exercise 2: Install WebDriver.io and write your first test

Now, let's install WebDriver.io and the [standalone Selenium server]((https://www.npmjs.com/package/selenium-standalone)).  We'll need both in order to run our e2e test specs.

These instructions are based heavily on the official [WebDriver.io docs](http://webdriver.io/guide.html), which are really well done.  Get used to using them!

## Success Criteria

1. The necessary Selenium and WebDriver tools are installed.
1. Your first automated browser test should run successfully.

## Instructions

In order to run our first test, we'll need to start our example app server, install WebDriver.io as a dependency for our e2e test code, and install a standalone Selenium server. _(Luckily, we'll see an [npm package](https://www.npmjs.com/package/selenium-standalone) which makes this quite simple!)_

So expect to have a few terminal windows (or tabs) open.

Notice that in the `exercise-2` folder, I've already scaffolded out an NPM project to save some time, along with an empty `src` folder to give you a better idea of how this might work within your own applications.  

_Our e2e tests using WebDriver are typically installed and run in the same NPM project as our app when out in the wild._

### Overview

<!-- TOC -->

1. [Start the app server](#start-the-app-server)
1. [Install the selenium-standalone server](#install-the-selenium-standalone-server)
1. [Install WebDriver.io via NPM](#install-webdriverio-via-npm)
1. [Create your first test file](#create-your-first-test-file)
1. [Run the test](#run-the-test)

<!-- /TOC -->

### Start the app server

In your terminal, `cd` to the `verbo` directory, and start the app.  _In the future, we'll just assume this app is always running._

```bash
cd verbo
npm start
```

_The app should be running on [http://localhost:3000](http://localhost:3000)._

### Install the selenium-standalone server

1. Open a new tab in your terminal app.  We'll run the Selenium standalone server in this new shell.

1. Install Selenium standalone server via NPM.  We're going to install it _globally_ so we don't have keep re-installing it for other exercises _(hence the `-g` argument)_.

```bash
npm i -g selenium-standalone
selenium-standalone install
```

The install command pulls down its own dependencies and makes it ready to be runnable.

3. Starting the server is simple, and will run in that terminal tab until you stop it with `ctrl-c`.

```bash
selenium-standalone start
```

You should see some output as the server starts, including a line telling you which url & port the server is using:

![Selenium standalone server & port](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/9a95f619-0c1c-41a7-b445-81be3492e7f8/2018-05-27_12-58-55.png)

Visit your selenium server at [http://localhost:4444/](http://localhost:4444/) to make sure it's working.

![localhost on port 4444](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/5a489917-b390-46a9-af3b-33325f00f116/2018-05-27_13-05-45.png)

### Install WebDriver.io via NPM

1. Open a new tab in your terminal, and `cd` into the `exercise-2` directory.  We'll run our actual e2e tests in this shell.

```bash
npm i --save-dev webdriverio
```

_(**to-do:** explain `-D`)_

### Create your first test file

1. Create a new `tests/browser` directory where your WebDriver test specs will live.  _This structure is a bit different than the official docs, but more closely matches how HomeAway structures our test specs directory as a sibling of your standard `/src` directory in the root of the repository.

```bash
mkdir tests/browser
cd tests/browser
```

1. From the official [WebDriver docs](http://webdriver.io/guide.html), let's copy their example test code.  Create a new file called `example.spec.js` and copy the following into it:

```js
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
```

_Note that `*.spec.js` is the standard file name format for executable test specs.  [Learn more](http://webdriver.io/guide/testrunner/organizesuite.html#Group-Test-Specs)_

4. Save the file.

### Run the test

Let's see how we did ...

```bash
node example.spec.js
```

You should see the following output in your terminal:

```bash
$ node example.spec.js
Title was: Google
```

_Nice job, you've just created your first automated test!_

_(**to-do:** explain each method on `webdriverio` object in example code)_

### Specifying a different browser

When that first example ran, you should've seen a Firefox browser window open in the background _(make sure your other app windows aren't full-screen)_, load up Google, and get the title of the window.

This time, let's change our configuration object to specify Chrome as our browser for automated testing.

1. Open up `example.spec.js` and change the `options.desiredCapabilities.browserName` to `'chrome'`:

```js
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
```

Run the test again, and this time we should see it open up Chrome instead.

```bash
node example.spec.js
```
