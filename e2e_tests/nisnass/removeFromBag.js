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
    it('should add items to the bag', function () {
        nisnassHelper.addItemsToTheBag();
    });
    it('AB : 2 Remove some items from the bag and check if they are removed or not', function () {
        helper.clickUsingJsCSSindex('Bag icon', 'a[href="/cart"]', 0);
        helper.waitForElementProtractor('Checkout button on shopping cart page', nisnassMap.cartPage.checkoutBtn, 'css', globalConfig.timeouts.mid_timeout);
        nisnassHelper.checkItemsInTheBag(3);
        helper.clickUsingJsCSSindex('Remove item from bag button',nisnassMap.cartPage.removeItemBtn,0);
        helper.waitForElementProtractor('Confirm remove popup',nisnassMap.cartPage.removePopupConfirmBtn, 'css', globalConfig.timeouts.max_timeout);
        helper.clickByCSS('Remove item from bag button',nisnassMap.cartPage.removePopupConfirmBtn,0);
        browser.sleep(globalConfig.timeouts.min_timeout);
        nisnassHelper.checkItemsInTheBag(2);
    });

});