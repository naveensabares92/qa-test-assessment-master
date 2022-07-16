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

    find(selector, ctx = null) {
        return ctx
            ? ctx.element(protractor.by.css(selector))
            : protractor.element(protractor.by.css(selector));
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

    findByModel(selector) {
        return protractor.element(protractor.by.model(selector));
    }

    findAll(selector, ctx = null) {
        return ctx
            ? ctx.all(protractor.by.css(selector))
            : protractor.element.all(protractor.by.css(selector));
    }

    enterText(selector, text) {
        const input = this.getElementWhenPresent(selector);
        return protractor.browser.controlFlow().execute(() => {
            input.sendKeys(text);
        });
    }

    async enterTextByElement(element, text) {
        return protractor.browser.controlFlow().execute(() => {
            element.sendKeys(text);
        });
    }
};
