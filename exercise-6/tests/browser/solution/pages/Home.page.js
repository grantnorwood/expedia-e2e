'use strict';

/**
  * Pages generally contains three parts:
  *
  * 1. selectors
  * 2. getters
  * 3. actions
  *
  */
class HomePage {
    constructor() {
        super();

        // --------------------------------------------------------------
        // Define element selectors.
        // --------------------------------------------------------------

        this.selectors = {
            jumbotronPrimaryButton = '.jumbotron .btn-primary'
        }

    }


    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get jumbotronPrimaryButton() {
        return browser.element(this.selectors.jumbotronPrimaryButton);
    }


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
