# Exercise 6: The Page Object Pattern

The [WebDriver.io Page Object Pattern](https://v4.webdriver.io/guide/testrunner/pageobjects.html) documentation is fantastic, and it wouldn't hurt to read it over a few times to make sure you really understand the principles.

> "The goal behind page objects is to abstract any page information away from the actual tests.
> 
> Ideally you should store all selectors or specific instructions that are unique for a certain page in a page object, so that you still can run your test after you’ve completely redesigned your page."

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [Init the exercise](#init-the-exercise)
  - [The 2 main parts of a Page object](#the-2-main-parts-of-a-page-object)
  - [💪 Challenge: Create a Page Object for our Home page](#💪-challenge-create-a-page-object-for-our-home-page)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Understand why the Page Object Pattern is so useful
1. Understand the 2 most important parts of the pattern
1. Understand that Components can also use this pattern

## Instructions

### Init the exercise

1. Change to the correct directory

```bash
cd exercise-6
```

2. Install dependencies

```bash
npm i
```

_Notice the new file structure in the `tests/browser` directory.  I've further organized those into child directories for `pages` and `specs`._

### The 2 main parts of a Page object

1. Define element getters
1. Define element actions

Consider the following file named `tests/browser/pages/Home.page.js`:

```js
'use strict';

/**
  * Pages generally contains two parts:
  *
  * 1. getters
  * 2. actions
  *
  */
class HomePage {
    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get jumbotronPrimaryButton() { return browser.element('.jumbotron .btn-primary'); }


    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------

    /**
    * Get the element text.
    */
    getJumbotronPrimaryButtonText() {
        this.jumbotronPrimaryButton.getText();
    }
}

module.exports = HomePage;

```

_Let's walk through this using each of the two parts of a Page Object - **getters** and **actions**._

#### Getters

We'll use this syntax to encapsulate calls to `browser.element()` and `browser.elements()`, which will save us code and time later.  Also, all of the selectors for each element _(or array of elements)_ are now located in one place.

```js
class HomePage {

    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get jumbotronPrimaryButton() { return browser.element('.jumbotron .btn-primary'); }

}
```

#### Actions

Now that the page elements are easy to access via our getter functions, we can begin to define functions to encapsulate interactions on the page, abstracting away the details so from your test specs.

Examples of common actions you might write functions for include:

- getting an element's text
- clicking on an element
- scrolling the page
- _... and other trusted interactions within this page_

```js
class HomePage {

    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------

    /**
    * Get the element text.
    */
    getJumbotronPrimaryButtonText() {
        this.jumbotronPrimaryButton.getText();
    }

}
```

### 💪 Challenge: Create a Page Object for our Home page

We're going to use the solution from the previous exercise-5 to begin with, and we'll transform it to use The Page Object pattern.

I've already created that initial test spec file as `tests/browser/specs/homepage.spec.js`, but we must create a Page object for the spec to interact with.

1. Open the `Home.page.js` file in the `tests/browser/pages` directory, where the getter and action parts of the Page Object Pattern will be implemented. _(Look for the `TODO` comments.)_
2. For each of the elements used in our `tests/browser/specs/homepage.spec.js` test, create a **getter** and an **action** in the `tests/browser/pages/Home.page.js` page object.

_**Hint:** look for anywhere we've called `browser.element()`, `browser.elements()`, `browser.getText()`, or other commands to see which elements you'll need to create getters for!_

#### Solution

_(See the [solution directory](tests/browser/solution) if you'd like to preview, or simply copy/pasta the code.)_

✅ And now you've got a good start towards modeling your pages and components!

---

## What we learned

1. We've learned how the Page Object Pattern abstracts away the accessing of elements from our test spec, making code much more readable, reusable and maintainable.
1. We've learned the 2 most important parts of the pattern - **getters** and **actions**
1. We now know that the "Page Object Pattern" can actually be used for all sorts of component architecture.

## Up next

[Exercise 7: Personas and paths](../exercise-7)
