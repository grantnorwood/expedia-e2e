# Exercise 5: Practice with selectors and commands

In order to become more familiar with the extensive list of WebDriver.io commands and practice using selectors to interact with browser elements, this exercise will present a few challenges for you to solve.

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
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

### 💪 Challenge 1: The navbar

Write two tests in the stubbed out `it()` blocks in `homepage.spec.js`.

- `it('should render the correct app name')`
- `it('should render a "My Profile" link')`

Use the `browser` object and Chai's `expect()` function as we did in the previous exercises as a starting point.

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

_(See the [solution directory](tests/browser/solution) if you'd like to preview, or simply copy/pasta the code.)_

✅ Those are two simple challenges, but e2e testing in the real world is gonna be a lot tougher!

---

## What we learned

_(to-do)_

## Up next

[Exercise 6: The Page Object Pattern](../exercise-6)
