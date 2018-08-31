//this functionality was not working at the time i was writing those scripts, so not writing this script any further as communicated to me over the email
var globalConfig = require('../config/conf.js');
var helper = require('../actions/helper.js');
var ounassMap = require('./actions/map.js');
var ousnassConfig = require('./config/config.json')
describe('Facebook Login test',function(){
    it('Open Ounass app and login through facebook',function(){
        browser.get(ousnassConfig.URL); 
        helper.waitForElementProtractor('Popup button',ounassMap.ounassHomePage.singupPopupCloseBtn,'css',globalConfig.timeouts.mid_timeout);
        helper.clickUsingJsCSSindex('Close button of be the first popup',ounassMap.ounassHomePage.singupPopupCloseBtn,4);
        helper.clickUsingJsCSSindex('add to the bag button',ounassMap.ounassHomePage.registerUserBtn,0);
        helper.waitForElementProtractor('Login with facebook button on login popup',ounassMap.registrationPopup.loginWithFacebookBtn,'css',5000);
        helper.clickByCSS('Facebook Login button',ounassMap.registrationPopup.loginWithFacebookBtn,0);
        helper.waitForElementProtractor('facebook email textbox',ounassMap.facebookLoginPage.emailField,'id',10000);
        helper.waitForElementProtractor('facebook password textbox',ounassMap.facebookLoginPage.passField,'id',10000);
        helper.sendKeysById('Facebook email',ounassMap.facebookLoginPage.emailField,browser.params.email,0);
        helper.sendKeysById('Facebook password',ounassMap.facebookLoginPage.passField,browser.params.pass,0);
        helper.clickUsingID('Facebook login button',ounassMap.facebookLoginPage.loginBtn,0);
        });
});