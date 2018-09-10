var globalConfig = require('../config/conf.js');
var helper = require('../actions/helper.js');
var ounassMap = require('./actions/map.js');
var config = require('./config/config.json');
var ounassHelper = require('./actions/helper.js');
describe('Facebook Login test',function(){
    it('PL:1 Should verify that clothing page opens up properly',function(){
        browser.get(config.URL); 
        helper.waitForElementProtractor('Popup button',ounassMap.ounassHomePage.singupPopupCloseBtn,'css',globalConfig.timeouts.mid_timeout);
        helper.clickUsingJsCSSindex('Close button of be the first popup',ounassMap.ounassHomePage.singupPopupCloseBtn,4);
        ounassHelper.checkItemsOnThePage(24);
        });
    it('PL:2 Should verify that scrolling down loads 24 more items',function(){
        helper.scrollDown();
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(48);
        helper.scrollDown();
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(72);
        });
    it('PL:3 Should verify that after 72 items scrolling down wont load more items',function(){
        helper.scrollDown();
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(72);
        });
    it('PL:4 Should verify that after 72 items , the load more button should load button more items',function(){
        helper.clickByCSS('view more button',ounassMap.clothingPage.loadMoreBtn,0);
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(96);
        });
    it('PL:5 when Acler is selected from designer filter, the app should load all items from acler',function(){
        helper.clickUsingJsCSSindex('Acler link in filters',ounassMap.clothingPage.aclerLink,0);
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(18);
    });
    it('PL:6 when Ajc is selected from designer filter, the app should load all items from Phillip Lim ',function(){
        helper.clickUsingJsCSSindex('Acler link in filters',ounassMap.clothingPage.aclerBtn,0);
        browser.sleep(globalConfig.timeouts.mid_timeout);
        helper.clickUsingJsCSSindex('Ajc link in filters',ounassMap.clothingPage.ajcLink,0);
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(11);
    });
    it('PL:7 when Ajc  and Acler are selected from designer filters then the app should load all items from acler and Phillip Lim Clothing',function(){
        helper.clickUsingJsCSSindex('Acler link in filters',ounassMap.clothingPage.aclerAjcLink,0); 
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(29);
    });
    it('PL:8 When black is selected from colors filters and Acler is selected from designers filter the app should load all black dresses from Acler',function(){
        helper.clickUsingJsCSSindex('Acler link in filters',ounassMap.clothingPage.aclerLink,0); 
        browser.sleep(globalConfig.timeouts.mid_timeout);
        helper.clickUsingJsCSSindex('Acler link in filters',ounassMap.clothingPage.blackAclerLink,0);
        browser.sleep(globalConfig.timeouts.mid_timeout);
        ounassHelper.checkItemsOnThePage(6);
    });
});