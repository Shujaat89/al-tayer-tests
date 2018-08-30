var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
	directConnect: true,
	capabilities: {
		'browserName': 'chrome',
		chromeOptions: {
			args: [
				'incognito'
			]},
	},
	framework: 'jasmine',
	suites:{
		userRegistration:'../nisnass/userRegistration.js',
		removeFromBag:'../nisnass/removeFromBag.js',
		addToBag:'../nisnass/addToBag.js',
		loginThroughFacebook:'../ounass/facebookLogin.js',
		viewMore:'../ounass/viewMore.js'
	},

	rootElement: "[ng-app]",
	onPrepare:function(){
		browser.ignoreSynchronization = true;
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'tmp/screenshots'
			, preserveDirectory: false
		 }).getJasmine2Reporter());
	},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000,
	},
	allScriptsTimeout: 20000000



};
exports.timeouts = {
	max_timeout: 10000,
	mid_timeout: 5000,
	min_timeout: 2000,
	oneSec_timeout: 1000
}
