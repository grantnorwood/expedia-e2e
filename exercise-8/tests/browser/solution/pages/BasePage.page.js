'use strict';

/**
  * Pages generally contains three parts:
  *
  * 1. getters
  * 2. actions
  *
  */
class BasePage {
    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------


    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------


    // --------------------------------------------------------------
    // Utility functions.
    // --------------------------------------------------------------

    /**
     * Open a url fragment relative to the base path
     * @param {RegExp} urlRegex - Regular expression of the destination URL to be tested
     * @param {Number} timeout - Integer for time to wait for the URL to change
     * @return {void}
     */
    waitForUrlChange(urlRegex, timeout) {
        timeout = timeout || 15000;
        browser.waitUntil(() => {
            return browser.getUrl().match(urlRegex);
        }, timeout);
    }
}

module.exports = BasePage;
