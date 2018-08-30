var globalConfig = require('../config/conf.js');
var helper = require('../actions/helper.js');
var nisnassMap = require('./actions/map.js');
var config = require('./config/config.json');
var nisnassHelper = require('./actions/nisnassHelper.js');
describe('Add to the bag tests', function () {
    it('should login to the nisnass homepage and verify its loaded successfully', function () {
        browser.get(config.url);
        helper.waitForElementProtractor('Popup button', nisnassMap.homePage.accountBtn, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Nisnass logo', nisnassMap.homePage.nisnassImg, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Search bar on homepage', nisnassMap.homePage.searchBar, 'css', globalConfig.timeouts.mid_timeout);
    });
    it('AB1 : should add items to the bag', function () {
        nisnassHelper.addItemsToTheBag();
    });
    it('AB : 1 should verify the added items in the bag', function () {
        helper.clickUsingJsCSSindex('Bag icon', nisnassMap.homePage.bagIcong, 0);
        helper.waitForElementProtractor('Checkout button on shopping cart page', nisnassMap.cartPage.checkoutBtn, 'css', globalConfig.timeouts.mid_timeout);
        helper.assertSelectorContainsTxtByCSS('Checking the first item Name', nisnassMap.cartPage.itemName, config.items.item1.name, 0);
        helper.assertSelectorContainsTxtByCSS('Checking the first item Size', nisnassMap.cartPage.itemProperties, config.items.item1.size, 1);

        helper.assertSelectorContainsTxtByCSS('Checking the second item Name', nisnassMap.cartPage.itemName, config.items.item2.name, 1);
        helper.assertSelectorContainsTxtByCSS('Checking the second item Size', nisnassMap.cartPage.itemProperties, config.items.item2.size, 3);
        helper.assertSelectorContainsTxtByCSS('Checking the second item Size', nisnassMap.cartPage.itemProperties, config.items.item2.color, 2);

        helper.assertSelectorContainsTxtByCSS('Checking the third item Name', nisnassMap.cartPage.itemName, config.items.item3.name, 2);
        helper.assertSelectorContainsTxtByCSS('Checking the third item Size', nisnassMap.cartPage.itemProperties, config.items.item3.size, 5);
    });

});