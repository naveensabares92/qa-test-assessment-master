import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor'
import { expect } from '../utils/expect'
import { Locators } from '../helpers/Locators'
import { APP_CONTENT } from '../content/AppContent'
const locators = new Locators()

Given('App open on {string}', async function (string) {
  await browser.get('http://' + string + ':4200/');
  await browser.waitForAngular();
  await expect(locators.getSearchTextBox().isDisplayed()).to.eventually.be.equal(true, 'Content Missing - Search Text Box');
});

When('Page Title is as expected', async function () {
  await expect(locators.getPageTitle().getText()).to.eventually.be.equal(
    APP_CONTENT.TITLE,
  );
  await expect(locators.getBgImageTitleText()).to.eventually.be.equal(
    APP_CONTENT.BG_IMAGE_TITLE,
  );
});

Then('Verify Default state of app', async function () {
  await expect(locators.getPeopleRadioButton().isDisplayed()).to.eventually.be.equal(
    true, 'Content Missing - People option radio button is not displayed'
  );
  await expect(locators.getPlanetRadioButton().isDisplayed()).to.eventually.be.equal(
    true, 'Content Missing - Planets option radio button is not displayed'
  );
  await expect(locators.getPeopleRadioButton().isSelected()).to.eventually.be.equal(
    true, 'Invalid State - Planets option radio button is not checked by default'
  );
  await expect(locators.getPlanetRadioButton().isSelected()).to.eventually.be.equal(
    false, 'Invalid State - Planets option radio button is checked by default'
  );
  await expect(locators.getSubmitButton().isDisplayed()).to.eventually.be.equal(
    true, 'Content Missing - Submit button is not displayed'
  );
  await expect(locators.getSubmitButton().isEnabled()).to.eventually.be.equal(
    true, 'Invalid State - Submit button is disabled'
  );
});
