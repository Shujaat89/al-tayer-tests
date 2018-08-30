var globalConfig = require('../config/conf.js');
var helper = require('../actions/helper.js');
var nisnassMap = require('./actions/map.js');
var config = require('./config/config.json');
var timeStapm = Date.now();
config.userData.lastName = timeStapm;
config.userData.email = timeStapm+config.userData.email;
describe('nisnass register user tests', function () {
    it('should login to the nisnass homepage and verify its loaded successfully', function () {
        browser.get(config.url);
        helper.waitForElementProtractor('Popup button', nisnassMap.homePage.accountBtn, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Nisnass logo', nisnassMap.homePage.nisnassImg, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Search bar on homepage', nisnassMap.homePage.searchBar, 'css', globalConfig.timeouts.mid_timeout);
    });
    it('should verify customer popup opnened up correctly', function () {
        helper.clickUsingJsCSS('Clicking account button', nisnassMap.homePage.accountBtn);
        helper.waitForElementProtractor('Email text field', nisnassMap.signinPopup.email, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Password text field', nisnassMap.signinPopup.password, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Singup button text field', nisnassMap.signinPopup.signinBtn, 'css', globalConfig.timeouts.mid_timeout);
    });
    it('should verify user registration page opened up correctly', function () {
        helper.clickByCSS('Signup button', nisnassMap.signinPopup.singupBtn, 0);
        helper.waitForElementProtractor('Create account heading', nisnassMap.userRegistrationPage.heading, 'css', globalConfig.timeouts.mid_timeout);
        helper.assertSelectorHasTextByCSS(nisnassMap.userRegistrationPage.heading, 'Create An Account', 0);
        helper.waitForElementProtractor('First Name text box', nisnassMap.userRegistrationPage.firstName, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Last Name text box', nisnassMap.userRegistrationPage.lastName, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Email field', nisnassMap.userRegistrationPage.email, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Create password field', nisnassMap.userRegistrationPage.password, 'css', 500);
        helper.waitForElementProtractor('Phone number prefix select', nisnassMap.userRegistrationPage.phonePrefixSelect, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Phone number field', nisnassMap.userRegistrationPage.phone, 'css', globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('Singup button', nisnassMap.userRegistrationPage.singupBtn, 'css', globalConfig.timeouts.mid_timeout);
    });
    it('RU-1 : should test required fields without submitting the form', function () {
        helper.clearByCSS('First name field', nisnassMap.userRegistrationPage.firstName);
        helper.clearByCSS('Last name field', nisnassMap.userRegistrationPage.lastName);
        helper.clearByCSS('Email field', nisnassMap.userRegistrationPage.email);
        helper.clearByCSS('Password field', nisnassMap.userRegistrationPage.password);
        helper.clearByCSS('Phone field', nisnassMap.userRegistrationPage.phone);
        helper.clearByCSS('Password field', nisnassMap.userRegistrationPage.password);
        helper.assertSelectorContainsTxtByCSS('First Name field Required error message', nisnassMap.userRegistrationPage.firstNameReqirdMsg, 'First Name is a required field', 0);
        helper.assertSelectorContainsTxtByCSS('Last Name field Required error message', nisnassMap.userRegistrationPage.lastNameReqirdMsg, 'Last Name is a required field', 0);
        helper.assertSelectorContainsTxtByCSS('Email field required error message', nisnassMap.userRegistrationPage.genralReqirdMsg, 'E-mail Address is a required field', 2);
        helper.assertSelectorContainsTxtByCSS('Password field Required error message', nisnassMap.userRegistrationPage.genralReqirdMsg, 'Password is a required field', 3);
        helper.assertSelectorContainsTxtByCSS('Phone Number is a required field', nisnassMap.userRegistrationPage.genralReqirdMsg, 'Phone Number is a required field', 4);
    });
    it('RU-2 : should test email format', function () {
        helper.sendKeysByCSS('Email format', nisnassMap.userRegistrationPage.email, 'aa', 0);
        helper.clearByCSS('Last name field', nisnassMap.userRegistrationPage.lastName);
        helper.assertSelectorContainsTxtByCSS('Checking invalid email', nisnassMap.userRegistrationPage.genralReqirdMsg, 'E-mail Address is invalid', 2);
    });
    it('RU-3 : should test password field for min characters', function () {
        helper.sendKeysByCSS('Email format', nisnassMap.userRegistrationPage.password, 'aa', 0);
        helper.assertSelectorContainsTxtByCSS('Checking password minimum characters error message', nisnassMap.userRegistrationPage.genralReqirdMsg, 'Minimum 6 characters', 3);
       });
    it('RU-4 : should enter all the required data of user',function(){
        helper.sendKeysByCSS('Entering first Name ',nisnassMap.userRegistrationPage.firstName,config.userData.firstName);
        helper.clearByCSS('Password field', nisnassMap.userRegistrationPage.password);
        helper.sendKeysByCSS('Entering last name',nisnassMap.userRegistrationPage.lastName,config.userData.lastName);
        helper.clearByCSS('Email field', nisnassMap.userRegistrationPage.email);
        helper.sendKeysByCSS('Entering email',nisnassMap.userRegistrationPage.email,config.userData.email);
        helper.clearByCSS('Email field', nisnassMap.userRegistrationPage.password);
        helper.sendKeysByCSS('Entering password',nisnassMap.userRegistrationPage.password,config.userData.pass);
        helper.sendKeysByCSS('Entering phone',nisnassMap.userRegistrationPage.phone,config.userData.phone);
        helper.clickByCSS('Singup button',nisnassMap.userRegistrationPage.singupBtn);
        });
    it('RU-5 : Verify it is the same email with which you registered the account',function(){
        helper.waitForElementProtractor('account button',nisnassMap.userRegistrationPage.accountBtn,'css',globalConfig.timeouts.max_timeout);
        helper.clickUsingJsCSS('account button',nisnassMap.userRegistrationPage.accountBtn);
        helper.waitForElementProtractor('Account navigation',nisnassMap.userRegistrationPage.navigationMenu,'css',globalConfig.timeouts.mid_timeout);
        helper.waitForElementProtractor('My profile option',nisnassMap.userRegistrationPage.myProfileOptn,'css',globalConfig.timeouts.mid_timeout);
        helper.assertSelectorContainsTxtByCSS('Verifying Email',nisnassMap.userRegistrationPage.emailAddressField,config.userData.email,1);
    });
    it('RU-6 : Verify that after logging into the account the “Email-Address” field is un-editable',function(){
        helper.clickUsingJsCSS('edit button',nisnassMap.userRegistrationPage.myProfileOptn);
        expect(element(by.css(nisnassMap.userRegistrationPage.email)).getAttribute('disabled')).toEqual('true');
    });
    it('RU-7 : Update the phone number to “+97167324238” and verify it is updated',function(){
        helper.clearByCSS('Phone input',nisnassMap.userRegistrationPage.phone);
        helper.sendKeysByCSS('Phone input field',nisnassMap.userRegistrationPage.phone,'67324238');
        helper.clickByCSS('Update details button',nisnassMap.editProfile.updateMyProfileBtn,0);
        browser.sleep(globalConfig.timeouts.min_timeout);
        helper.clickUsingJsCSS('Account button',nisnassMap.userRegistrationPage.accountBtn);
        helper.waitForElementProtractor('My account',nisnassMap.editProfile.myAccountTitle,'css',globalConfig.timeouts.mid_timeout);
        helper.assertSelectorContainsTxtByCSS('Verifying updated phone number',nisnassMap.editProfile.phone,'+971 67324238',3);
    });
    
});