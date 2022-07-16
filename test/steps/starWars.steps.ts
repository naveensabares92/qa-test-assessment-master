import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from '../utils/expect';
import { Locators } from '../helpers/Locators';
import { APP_CONTENT } from '../content/AppContent';
const locators = new Locators();

Given('App open on {string}', async (host) => {
    await browser.get('http://' + host + ':4200/');
    await browser.waitForAngular();
    await expect(locators.getSearchTextBox().isDisplayed()).to.eventually.be.equal(
        true,
        'Content Missing - Search Text Box'
    );
});

When('Page Title is as expected', async () => {
    await expect(locators.getPageTitle().getText()).to.eventually.be.equal(APP_CONTENT.TITLE);
    await expect(locators.getBgImageTitleText()).to.eventually.be.equal(APP_CONTENT.BG_IMAGE_TITLE);
});

Then('Verify Default state of app', async () => {
    await expect(locators.getPeopleRadioButton().isDisplayed()).to.eventually.be.equal(
        true,
        'Content Missing - People option radio button is not displayed'
    );
    await expect(locators.getPlanetRadioButton().isDisplayed()).to.eventually.be.equal(
        true,
        'Content Missing - Planets option radio button is not displayed'
    );
    await expect(locators.getPeopleRadioButton().isSelected()).to.eventually.be.equal(
        true,
        'Invalid State - Planets option radio button is not checked by default'
    );
    await expect(locators.getPlanetRadioButton().isSelected()).to.eventually.be.equal(
        false,
        'Invalid State - Planets option radio button is checked by default'
    );
    await expect(locators.getSubmitButton().isDisplayed()).to.eventually.be.equal(
        true,
        'Content Missing - Submit button is not displayed'
    );
    await expect(locators.getSubmitButton().isEnabled()).to.eventually.be.equal(
        true,
        'Invalid State - Submit button is disabled'
    );
});

When('Select option People if not selected', async () => {
    const isPeopleRadioBtnSelected = await locators.getPeopleRadioButton().isSelected();
    !isPeopleRadioBtnSelected;
    await locators.getPeopleRadioButton().click();
    await expect(locators.getPeopleRadioButton().isSelected()).to.eventually.be.equal(
        true,
        'Invalid State - People option radio button is not selected'
    );
});

When('Select option Planet if not selected', async () => {
    const isPeopleRadioBtnSelected = await locators.getPlanetRadioButton().isSelected();
    !isPeopleRadioBtnSelected;
    await locators.getPlanetRadioButton().click();
    await expect(locators.getPlanetRadioButton().isSelected()).to.eventually.be.equal(
        true,
        'Invalid State - Planets option radio button is not selected'
    );
});

When('I search the {string} as {string}', async (searchOption, name) => {
    console.log(`Searching for ${name} in ${searchOption}...`);
    await locators.getSearchTextBox().sendKeys(name);
    await browser.waitForAngular();
    await locators.getSubmitButton().click();
    await browser.waitForAngular();
});

Then('Verify details of {string}', async (searchResultHeader) => {
    await expect(locators.getFirstSearchResultTitle().getText()).to.eventually.be.equal(
        searchResultHeader,
        `Invalid Content - ${searchResultHeader} is not displayed in results`
    );
});

Then('Verify Not Found message', async () => {
    await locators
        .getResultNotFound()
        .getText()
        .then((negativeText) => {
            expect(negativeText.toString()).to.equal(
                APP_CONTENT.NO_RESULT_FOUND_TEXT,
                `Invalid Content - ${APP_CONTENT.NO_RESULT_FOUND_TEXT} is not displayed in results`
            );
        });
});
