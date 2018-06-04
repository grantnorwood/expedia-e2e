'use strict';

var BasePage = require('./BasePage.page');

/**
  * Pages generally contains three parts:
  *
  * 1. getters
  * 2. actions
  *
  */
class ProfilePage extends BasePage {
    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get firstNameInput() {return browser.element('#firstName');}
    get lastNameInput() {return browser.element('#lastName');}
    get emailInput() {return browser.element('#email');}
    get bioTextarea() {return browser.element('#bio');}
    get saveButton() {return browser.element('form button[type="submit"]#saveButton');}
    get successAlert() {return browser.element('[role="alert"].alert-success');}

    /** 
     * "/", with or without trailing slash, ignores query params
     */
    get url() {return '/profile';}


    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------

    /**
    * Get the element value.
    */
    getFirstNameInputValue() {
        return this.firstNameInput.getValue();
    }

    /**
    * Set the element value.
    */
    setFirstNameInputValue(val) {
        this.firstNameInput.setValue(val);
    }

    /**
    * Get the element value.
    */
    getLastNameInputValue() {
        return this.lastNameInput.getValue();
    }

    /**
    * Set the element value.
    */
    setLastNameInputValue(val) {
        this.lastNameInput.setValue(val);
    }

    /**
    * Get the element value.
    */
    getEmailInputValue() {
        return this.emailInput.getValue();
    }

    /**
    * Set the element value.
    */
    setEmailInputValue(val) {
        this.emailInput.setValue(val);
    }

    /**
    * Get the element value.
    */
    getBioTextareaValue() {
        return this.bioTextarea.getValue();
    }

    /**
    * Set the element value.
    */
    setBioTextareaValue(val) {
        this.bioTextarea.setValue(val);
    }

    /**
    * Click the button.
    */
    clickSaveButton() {
        return this.saveButton.click();
    }

    /**
    * Get the element's visibility.
    */
    isSuccessAlertVisible() {
        this.successAlert.waitForExist(5000);
        return this.successAlert.isVisible();
    }
}

module.exports = ProfilePage;
