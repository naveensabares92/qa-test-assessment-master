var {defineSupportCode} = require('cucumber');
const { browser, by } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

defineSupportCode(({Given}) => {
    Given('App open on {string}', async function (string) {
        await browser.get('http://' + string + ':4200/');
        await browser.sleep(2000);
        await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
    });
});