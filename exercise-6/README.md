# Exercise 6: The Page Object Pattern

_(to-do)_

**Overview**

<!-- TOC -->

- [Success criteria](#success-criteria)
- [Instructions](#instructions)
  - [The 2 main parts of a Page object](#the-2-main-parts-of-a-page-object)
  - [💪 Challenge: Create a Page Object for our Home page](#💪-challenge-create-a-page-object-for-our-home-page)
- [What we learned](#what-we-learned)
- [Up next](#up-next)

<!-- /TOC -->

---

## Success criteria

1. Understand why the Page Object Pattern is so useful
2. Understand the 3 most important parts of the pattern
3. Understand why Components can also use this pattern

## Instructions

Notice the new file structure in the `tests/browser` directory.  I've further organized those into child directories for `pages` and `specs`.

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

module.exports = new HomePage();

```

_Let's walk through this a bit ..._

We have each of the two parts of a Page Object - **getters** and **actions**.

#### Getters

We'll use this syntax to encapsulate calls to `browser.element()` and `browser.elements()`, which will save us code and time later.  Also, all of the selectors for each element _(or array of elements)_ are now located in one place.

```js
class HomePage {

    // ...

    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get jumbotronPrimaryButton() { return browser.element('.jumbotron .btn-primary'); }

    // ...

}
```

#### Actions

Now that the page elements are easy to access via our getter functions, we can begin to define functions to encapsulate interactions on the page, abstracting away the details so from your test specs.

```js
class HomePage {

    // ...

    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------

    /**
    * Get the element text.
    */
    getJumbotronPrimaryButtonText() {
        this.jumbotronPrimaryButton.getText();
    }

    // ...

}
```

### 💪 Challenge: Create a Page Object for our Home page

We're going to use the solution from the previous exercise-5 to begin with, and we'll transform it to use The Page Object pattern.

I've already created that initial test spec file as `tests/browser/specs/homepage.spec.js`, but we must create a Page object for the spec to interact with.

1. Open the `Home.page.js` file in the `tests/browser/pages` directory, where the getter and action parts of the Page Object Pattern will be implemented. _(Look for the `TODO` comments.)_
2. For each of the elements used in our `tests/browser/specs/homepage.spec.js` test, create a **getter** and an **action** in the `tests/browser/pages/Home.page.js` page object.

_**Hint:** look for anywhere we've called `browser.element()` or `browser.elements()` to see which getters you'll need to create!_

_(See the [solution directory](tests/browser/solution) if you'd like to preview, or simply copy/pasta the code.)_

✅ And now you've got a good start towards modeling your pages and components!

---

## What we learned

_(to-do)_

## Up next

[Exercise 7: Personas and paths](../exercise-7)
