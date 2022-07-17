/* global protractor */

const { promise } = require('selenium-webdriver');
const DEFAULT_SCROLLING_WAIT = 500;

/**
 * Provides a layer for Page Object to interact with protractor.
 * The logic of protractor should be decoupled from other classes and should be kept here to ensure encapsulation.
 *
 * @class ProtractorAdapter
 * @type {module.ProtractorAdapter}
 */
module.exports = class ProtractorAdapter {
    constructor() {
        this.promise = promise;
    }

    find(selector) {
        return protractor.element(protractor.by.css(selector));
    }

    findByText(selector, text) {
        return protractor.element(protractor.by.cssContainingText(selector, text));
    }

    findByTagName(tag) {
        return protractor.element.all(protractor.by.tagName(tag));
    }

    findByName(name) {
        return protractor.element.all(protractor.by.name(name));
    }

    findById(id) {
        return protractor.element.all(protractor.by.id(id));
    }

    findByXpath(xpath) {
        return protractor.element.all(protractor.by.xpath(xpath));
    }

    findByModel(selector) {
        return protractor.element(protractor.by.model(selector));
    }

    findAll(selector) {
        return protractor.element.all(protractor.by.css(selector));
    }

    async enterText(selector, text) {
        const input = this.find(selector);
        await input.sendKeys(text);
    }

    waitForElementToBePresent(element) {
        protractor.browser.wait(
            protractor.ExpectedConditions.presenceOf(element),
            15000,
            'Element not found'
        );
    }

    tapEnterKeyBySelector(selector) {
        selector.sendKeys(protractor.Key.ENTER);
    }
};
