var globalMap = require('../page_object/map.js');
var driver = browser.driver;
var until = protractor.ExpectedConditions;
var config = require('../config/conf.js');
var path = require('path');
var _this = this;
//var moment = require('moment');
//Click methods
exports.clickByCSSContainingText = function (testDescp, selector, text, index) {
    index = index || 0;
    element.all(by.cssContainingText(selector, text)).get(index).click().then(function () {
        console.log('Clicked on element having selector ' + selector + ' and text ' + text + ' for ' + testDescp);
    });
};


exports.clickUsingID = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.id(selector)).get(index).click().then(function () {
        console.log("Clicking on " + selector + " for " + testDescp);
    });
};
exports.clickUsingJsCSS = function (testDescp, selector) {
    browser.executeScript(function (selector) {
        var elm = document.querySelector(selector);
        elm.click();
    }, selector).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};
exports.clickByCSS = function (testDescp, selector, index) {
    index = index || 0;
    element.all(by.css(selector)).click().then(function () {
        console.log('Clicking ' + selector + ' for ' + testDescp);
    });
};
exports.clickUsingJS = function (testDescp, selector) {
    browser.executeScript(function (selector) {
        document.getElementById(selector).click();
    }, selector).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};
exports.clickUsingJsCSSindex = function (testDescp, selector, index) {
    index = index || 0;
    browser.executeScript(function (selector, number) {
        var elm = document.querySelectorAll(selector);
        elm[number].click();
    }, selector, index).then(function () {
        console.log("Clicking On " + selector + ' for' + testDescp);
    });
};

//sending keys methods
exports.sendKeysById = function (testDescp, id, keys, index) {
    element.all(by.id(id)).sendKeys(keys).then(function () {
        console.log('Sending ' + keys + ' to ' + id + ' for ' + testDescp);
    });
};
exports.sendKeysUsingJS = function (testDescp, selector, keys) {
    browser.executeScript(function (selector, keys) {
        document.getElementById(selector).value = keys;
    }, selector, keys).then(function () {
        console.log("Send in keys " + selector + ' for' + testDescp);
    });
};

exports.sendKeysUsingJsCSS = function (testDescp, selector, keys) {
    browser.executeScript(function (selector, keys) {
        document.querySelector(selector).value = keys;
    }, selector).then(function () {
        console.log("sending keys to " + selector + ' for' + testDescp);
    });
};

exports.sendKeysByCSS = function(testDescp,selector,keys,index){
    index = index || 0;
    element.all(by.css(selector)).get(index).sendKeys(keys).then(function(){
        console.log('Sent '+keys+' to '+selector+' for '+testDescp);
    });
};
exports.clearByID = function (testDescp, id) {
    element(by.id(id)).clear().then(function () {
        console.log('Clearing field ' + id);
    });
};
exports.clearByCSS = function(testdescp,css){
    element(by.css(css)).clear().then(function () {
        console.log('Clearing field ' + css);
    });
};
exports.clearByCSSIndex = function(testdescp,selector,index){
    index = index || 0;
    element.all(by.css(selector)).get(index).clear().then(function(){
        console.log('Clearing '+selector+' for '+testdescp)
    });
}

//waiting methods
//this method will wait for element until its visible in the specified time, for example if the specified time is 10 sec and this method finds element in 5 secs then it will move on else it will wait for the element for 10 secs
exports.waitForElementProtractor = function (selectorFor,selector, type, timeout) {

    if (type == "css") {
        browser.wait(until.presenceOf(element(by.css(selector))), timeout, selectorFor+' having selector '+selector+' taking too long to appear in the DOM');
    } else if (type == "model") {
        browser.wait(until.presenceOf(element(by.model(selector))), timeout, selectorFor+' having selector '+selector + ' taking too long to appear in the DOM');
    }
    else if (type == "id") {
        browser.wait(until.presenceOf(element(by.id(selector))), timeout, selectorFor+' having selector '+selector + ' taking too long to appear in the DOM');
    }
    else {
        browser.wait(until.presenceOf(element(by.css(selector))), timeout, selectorFor+' having selector '+selector + ' taking too long to appear in the DOM');
    }
};


//pressing key methods
exports.pressEnter = function () {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
};
exports.downArrow = function () {
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
};
exports.pressTab = function () {
    browser.actions().sendKeys(protractor.Key.Tab).perform();
};

exports.refreshPage = function(){
    browser.refresh();
};
exports.scrollDown = function(){
    browser.executeScript(function(){
        window.scrollTo(0,10000);
    });
};

//Assertion methonds
exports.assertSelectorHasTextByCSS = function (selector, textToSearch, index) {
    index = index || 0;
    element.all(by.css(selector)).get(index).getText().then(function (text) {
        console.log('Checking if ' + selector + ' has text : ' + textToSearch);
        expect(text.trim()).toEqual(textToSearch);
    });
};
exports.assertSelectorContainsTxtByCSS = function(testDescp,selector,textToSearch,index){
    index = index || 0;
    element.all(by.css(selector)).get(index).getText().then(function(result){
        expect(result).toContain(textToSearch);
        console.log(selector+ ' has text '+textToSearch)
    });
};