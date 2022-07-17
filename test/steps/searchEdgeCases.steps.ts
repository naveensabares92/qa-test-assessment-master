import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from '../utils/expect';
import { Locators } from '../helpers/Locators';
import { APP_CONTENT } from '../content/AppContent';
const locators = new Locators();

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

When('I clear the search text-box and click on search again', async () => {
    await locators.getSearchTextBox().clear();
    await locators
        .getSearchTextBox()
        .getText()
        .then((searchTextBox) => {
            expect(searchTextBox.toString()).to.equal(
                '',
                'Invalid Content -  Search Box is not empty'
            );
        });
    await locators.getSubmitButton().click();
});

Then('I should see no search results', async () => {
    await expect(locators.getFirstSearchResultTitle().isDisplayed()).to.eventually.be.equal(
        false,
        `Invalid Content - Search Result should not be displayed`
    );
});

When('I press ENTER key', async () => {
    await locators.tapEnterKeyBySelector(locators.getSubmitButton());
});

Then('I click on search again', async () => {
    await locators.getSubmitButton().click();
});

Then('Verify multiple entries of {string}', async (name) => {
    locators
        .getSearchResultTitles()
        .count()
        .then(async (noOfEntries) => {
            await expect(noOfEntries > 1).to.equal(
                true,
                `Invalid Content - Multiple entries for ${name} is not displayed`
            );
        });
});
