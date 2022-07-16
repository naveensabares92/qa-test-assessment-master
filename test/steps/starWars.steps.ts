import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor'
import { expect } from '../utils/expect'
import { Locators } from '../helpers/Locators'
import { APP_CONTENT } from '../content/AppContent'
import { GLOBAL_CONFIG } from '../config/global'

const locators = new Locators()

Given('App open on {string}', async function (string) {
  await browser.get('http://' + string + ':4200/')
  await browser.sleep(GLOBAL_CONFIG.TIME_OUT)
  await expect(locators.getSearchTextBox().isDisplayed()).to.eventually.be.true
});

When('Page Title is as expected', async function () {
  await expect(locators.getPageTitle().getText()).to.eventually.be.equal(
    APP_CONTENT.TITLE,
  )
});

Then('Verify Default state of app', async function () {

});
