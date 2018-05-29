# Exercise 5: Practice with selectors and commands

In order to become more familiar with the extensive list of WebDriver.io commands and practice using selectors to interact with browser elements, this exercise will present a few challenges for you to solve.

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Practice accessing different elements on the page with CSS-style selectors.
2. Learn more about the available commands.

## Instructions

For simplicity, I've already copied the solution from the previous exercise into `exercise-5/tests/browser/homepage.spec.js`, so we'll start from there.  The `homepage.spec.js` file will contain all our homepage tests.

### Using selectors to interact with browser elements

WebDriver.io uses CSS-style selectors to access elements in the browser's DOM.  [Learn more about selectors](http://webdriver.io/guide/usage/selectors.html)

#### 💪 Challenge 1: The navbar

Write two tests in the stubbed out `it()` blocks in `homepage.spec.js`.

- `it('should render the correct app name')`
- `it('should render a "My Profile" link')`

Use the `browser` object and Chai's `expect()` function as we did in the previous exercises as a starting point.  You can copy/pasta, if you like - it'll save you time!

_to-do:_

- [ ] Create solution

#### 💪 Challenge 2: Travel alerts

Write two tests in the stubbed out `it()` blocks in `homepage.spec.js`.

- `it('should render the correct count of travel alerts in the navbar badge')`
- `it('should render the correct count of travel alerts in the homepage widget')`

_to-do:_

- [ ] Create solution

✅ You've made a lot of progress, great job!

---

## What we learned

_(to-do)_

## Up next

[Exercise 6: The Page Object Pattern](../exercise-6)
