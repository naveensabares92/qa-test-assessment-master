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

    getBgImageTitle() {
        return this.find('#sect1');
    }

    getBgImageTitleText() {
        return this.getBgImageTitle().getText();
    }

    getPeopleRadioButton() {
        return this.find('#people');
    }

    getPeopleRadioButtonText() {
        return this.find('[for="people"]');
    }

    getPlanetRadioButton() {
        return this.find('#planets');
    }

    getPeopleRadioButtonText() {
        return this.find('[for="planets"]');
    }

    getSearchTextBox() {
        return this.find('#query');
    }

    getSubmitButton() {
        return this.find('button[type="submit"]');
    }
}

module.exports = { Locators };
