'use strict';

var BasePage = require('./BasePage.page');

/**
  * Pages generally contains three parts:
  *
  * 1. getters
  * 2. actions
  *
  */
class HomePage extends BasePage {
    // --------------------------------------------------------------
    // Define element getters.
    // --------------------------------------------------------------

    get navBarBrandLink() {return browser.element('.navbar-brand');}
    get myProfileLink() {return browser.element('.navbar-nav > li > a[href="/profile"]');}
    get travelAlertsNavItem() {return browser.element('.navbar-nav > li > a[href="/travel-alerts"]');}
    get travelAlertsListItems() {return browser.elements('.travel-alerts-list > .list-group > .list-group-item');} // Note use of browser.elements() plural
    
    /** 
     * "/", with or without trailing slash, ignores query params
     */
    get url() {return '/';}


    // --------------------------------------------------------------
    // Define trusted interactions with elements.
    // --------------------------------------------------------------

    /**
    * Get the element text.
    */
    getNavBarBrandText() {
        return this.navBarBrandLink.getText();
    }

    /**
    * Get the element text.
    */
    getMyProfileLinkText() {
        return this.myProfileLink.getText();
    }

    /**
    * Get the element text.
    */
    getMyProfileLinkUrl() {
        return this.myProfileLink.getAttribute('href');
    }

    /**
    * Get the element text.
    */
    clickMyProfileLink() {
        return this.myProfileLink.click();
    }

    /**
    * Get the element text.
    */
    getTravelAlertsNavItemText() {
        return this.travelAlertsNavItem.getText();
    }

    /**
    * Get the element's href attribute.
    */
    getTravelAlertsNavItemUrl() {
        return this.travelAlertsNavItem.getAttribute('href');
    }

    /**
    * Get the count of Travel Alert list items.
    */
    getTravelAlertsListItemsCount() {
        return this.travelAlertsListItems.value.length || 0;
    }
}

module.exports = new HomePage();
