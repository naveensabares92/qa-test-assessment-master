const ProtractorAdapter = require('./ProtractorAdapter');
/**
 * @class AppPage
 * @module helper
 * @type {helpers.AppPage}
 */
class Locators extends ProtractorAdapter {
    getPageTitle() {
        return this.find('div h1');
    }

    getSearchTextBox() {
        return this.find('#query');
    }
}

module.exports = { Locators }