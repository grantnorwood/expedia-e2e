# Exercise 5: Practice with selectors and commands

In order to become more familiar with the extensive list of WebDriver.io commands and practice using selectors to interact with browser elements, this exercise will present a few challenges for you to solve.

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [Init the exercise](#init-the-exercise)
  - [💪 Challenge 1: The navbar](#💪-challenge-1-the-navbar)
  - [💪 Challenge 2: Travel alerts](#💪-challenge-2-travel-alerts)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Practice accessing different elements on the page with CSS-style selectors.
2. Learn more about the available commands.

## Instructions

For simplicity, I've already copied the solution from the previous exercise into `exercise-5/tests/browser/homepage.spec.js`, so we'll start from there.  The `homepage.spec.js` file will contain all our homepage tests.

We'll use **selectors** to interact with browser elements.

WebDriver.io uses CSS-style selectors to access elements in the browser's DOM.  [Learn more about selectors](http://webdriver.io/guide/usage/selectors.html)

### Init the exercise

1. Change to the correct directory

```bash
cd exercise-5
```

2. Install dependencies

```bash
npm i
```

### 💪 Challenge 1: The navbar

Write two tests in the stubbed out `it()` blocks in `homepage.spec.js`.

- `it('should render the correct app name')` - "Verbo", located in the top left of the navbar
- `it('should render a "My Profile" link')` - "My Profile", located in the top right of the navbar

Use the `browser` object and Chai's `expect()` function as we did in the previous exercises as a starting point.

#### Solution

_(See the [solution directory](tests/browser/solution) if you'd like to preview, or simply copy/pasta the code.)_

#### We've found some problems

You might begin to notice that we're discovering some problems that will only get bigger as we write more tests and reuse more code.

_For example:_

- **We are hard-coding entire urls into our local tests, which will only run locally.**  Our build environments are sure to use different urls and ports.
- **We are making multiple function calls to get different values from the same element.**  WebDriver.io makes a ton of HTTP calls, that's the type of API it has into various browsers.  It's verbose & inefficient, so we'll need to do something about that.  _(The Page Object Pattern will help!)_

_In the upcoming section, let's see if we can do better!_

### 💪 Challenge 2: Travel alerts

In this second challenge, we'll correct a couple ineffeciencies to help us understand the problems that The Page Object Pattern attempts to solve in the next exercise.

This time, let's:

- Define a more globally available `baseUrl` variable at the top of the file.
- Use `browser.element()` and `browser.elements()` to cache element objects for higher level of reuse.

But for now, write two tests in the stubbed out `it()` blocks in `homepage.spec.js`.

- `it('should render the correct count of travel alerts in the navbar badge')`
- `it('should render the correct count of travel alerts in the homepage widget')`

#### Solution

_(See the [solution directory](tests/browser/solution) if you'd like to preview, or simply copy/pasta the code.)_

✅ Those are two simple challenges, but e2e testing in the real world is gonna be a lot tougher!

### Try out another reporter

The `wdio` package which generated our initial `wdio.conf.js` file gave us a number of options, and we simply chose the default `dot` reporter.

Since we're using the Mocha spec runner, let's try switching to the `spec` reporter which formats the output nicely using our test suite's `describe()` and `it()` code blocks.  Instead of using the config file generator, we'll follow the WebDriver docs for installation.

_From http://webdriver.io/guide/reporters/spec.html for installation instructions:_

1. Install the `wdio-spec-reporter` dependency

```bash
npm install wdio-spec-reporter --save-dev
```

2. Update the `reporters` property in `wdio.conf.js` to `spec`:

```js
reporters: ['spec'],
```

---

## What we learned

- [x] We practiced accessing different elements on the page with CSS-style selectors.
- [x] We learned a bit more about other available [API commands](http://webdriver.io/api.html).

## Up next

[Exercise 6: The Page Object Pattern](../exercise-6)
