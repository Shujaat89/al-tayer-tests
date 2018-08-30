var nisnassMap = require('./map.js');
var globalConfig = require('../../config/conf.js');
var helper = require('../../actions/helper.js');
var nisnassMap = require('./map.js');
var config = require('../config/config.json');
exports.addItemsToTheBag = function(){
    helper.waitForElementProtractor('Search bar on homepage', nisnassMap.homePage.searchBar, 'css', globalConfig.timeouts.mid_timeout);
        helper.sendKeysByCSS('Searching for '+config.items.item1.name, nisnassMap.homePage.searchBar, config.items.item1.name, 0);
        helper.waitForElementProtractor(config.items.item1.name+' in the list', nisnassMap.homePage.itemInListing, 'css', globalConfig.timeouts.mid_timeout);
        helper.clickByCSS(config.items.item1.name+' in the listing', nisnassMap.homePage.itemInListing, 0);
        helper.clickByCSS('add to the bag button', nisnassMap.itemPage.addToBagBtn, 0);
        helper.waitForElementProtractor('Item added to the bag popup', nisnassMap.itemPage.MiniCart, 'css', globalConfig.timeouts.max_timeout);
        helper.sendKeysByCSS('Searching for '+config.items.item2.name, nisnassMap.homePage.searchBar, config.items.item2.name, 0);
        helper.waitForElementProtractor(config.items.item2.name+' in the list', nisnassMap.homePage.itemInListing, 'css', globalConfig.timeouts.mid_timeout);
        helper.clickUsingJsCSSindex(config.items.item2.name+' in the listing', nisnassMap.homePage.itemInListing, 0);
        helper.waitForElementProtractor('Color selector', nisnassMap.itemPage.pinkColor, 'css', globalConfig.timeouts.mid_timeout);
        helper.clickByCSS('Selecting color', nisnassMap.itemPage.pinkColor, 0);
        helper.clickUsingJsCSSindex('Selecting size', nisnassMap.itemPage.sizeBtn, 7);
        helper.clickByCSS('add to the bag button', nisnassMap.itemPage.addToBagBtn, 0);
        helper.waitForElementProtractor(config.items.item2.name+' added to the bag popup', nisnassMap.itemPage.MiniCart, 'css', globalConfig.timeouts.max_timeout);
        helper.sendKeysByCSS('Searching for '+config.items.item3.name, nisnassMap.homePage.searchBar, config.items.item3.name, 0);
        helper.waitForElementProtractor(config.items.item3.name+' in the list', nisnassMap.homePage.itemInListing, 'css', globalConfig.timeouts.mid_timeout);
        helper.clickByCSSContainingText(config.items.item3.name, nisnassMap.homePage.itemOptionsSearchBar, config.items.item3.name, 1);
        helper.clickUsingJsCSSindex('Size button', nisnassMap.itemPage.sizeBtn, 3);
        helper.clickByCSS('add to the bag button', nisnassMap.itemPage.addToBagBtn, 0);
        helper.waitForElementProtractor(config.items.item3.name+' added to the bag popup', nisnassMap.itemPage.MiniCart, 'css', globalConfig.timeouts.max_timeout);
};
exports.checkItemsInTheBag = function(expectedNumber){
    browser.executeScript(function(selector){
        return document.querySelectorAll(selector).length
    },nisnassMap.cartPage.itemsInTheCart).then(function(items){
        console.log('Checking number of items in the bag');
        expect(items).toEqual(expectedNumber);
    });
};