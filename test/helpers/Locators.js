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

    getPlanetsRadioButtonText() {
        return this.find('[for="planets"]');
    }

    getSearchTextBox() {
        return this.find('#query');
    }

    getSubmitButton() {
        return this.find('button[type="submit"]');
    }

    getSearchResultTitles() {
        return this.findAll('h6.card-subtitle');
    }

    getResultNotFound() {
        return this.findByXpath(
            '//app-search-form/following-sibling::div[contains(text(),"Negative")]'
        );
    }

    getFirstSearchResultTitle() {
        return this.getSearchResultTitles().get(0);
    }

    /**
     * Locators for person
     */

    getFirstSearchResultGender() {
        return this.findByXpath('//app-character//div[contains(text(),"Gender")]');
    }

    getFirstSearchResultGenderValue() {
        return this.findByXpath(
            '//app-character//div[contains(text(),"Gender")]/following-sibling::div'
        );
    }

    getFirstSearchResultBirthYear() {
        return this.findByXpath('//app-character//div[contains(text(),"Birth")]');
    }

    getFirstSearchResultBirthYearValue() {
        return this.findByXpath(
            '//app-character//div[contains(text(),"Birth")]/following-sibling::div'
        );
    }

    getFirstSearchResultEyeColor() {
        return this.findByXpath('//app-character//div[contains(text(),"Eye")]');
    }

    getFirstSearchResultEyeColorValue() {
        return this.findByXpath(
            '//app-character//div[contains(text(),"Eye")]/following-sibling::div'
        );
    }

    getFirstSearchResultSkinColor() {
        return this.findByXpath('//app-character//div[contains(text(),"Skin")]');
    }

    getFirstSearchResultSkinColorValue() {
        return this.findByXpath(
            '//app-character//div[contains(text(),"Skin")]/following-sibling::div'
        );
    }

    /**
     * Locators for planets
     */

    getFirstSearchResultPopulation() {
        return this.findByXpath('//app-planet//div[contains(text(),"Population")]');
    }

    getFirstSearchResultPopulationValue() {
        return this.findByXpath(
            '//app-planet//div[contains(text(),"Population")]/following-sibling::div'
        );
    }

    getFirstSearchResultClimate() {
        return this.findByXpath('//app-planet//div[contains(text(),"Climate")]');
    }

    getFirstSearchResultClimateValue() {
        return this.findByXpath(
            '//app-planet//div[contains(text(),"Climate")]/following-sibling::div'
        );
    }

    getFirstSearchResultGravity() {
        return this.findByXpath('//app-planet//div[contains(text(),"Gravity")]');
    }

    getFirstSearchResultGravityValue() {
        return this.findByXpath(
            '//app-planet//div[contains(text(),"Gravity")]/following-sibling::div'
        );
    }
}

module.exports = { Locators };
