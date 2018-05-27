var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName: 'chrome'}};
var client = webdriverio.remote(options);

try {
    client
        .init()
        .url('https://duckduckgo.com/')
        .setValue('#search_form_input_homepage', 'WebdriverIO')
        .click('#search_button_homepage')
        .getTitle().then(function (title) {
            console.log('Title is: ' + title);
            // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
        })
        .end();
} catch (ex) {
    console.log('An error occurred!');
    console.error(ex.message);
}