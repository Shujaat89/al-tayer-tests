# al-tayer-tests
pull the repo
install nodejs on your system
install chrome on your system
run following commands from terminal
	- install protractor using npm install protractor -g (for windows)
	- webdriver-manager update

go into directory api_tests run npm install
go into directory e2e_tests run npm install
to run api tests
	- cd api_tests
	- mocha index.js --timeout=35000 --reporter mocha-simple-html-reporter --reporter-options output=report.html
to run e2e tests
	- cd e2e_tests/config
	- protractor conf.js --suite=userRegistration
	- protractor conf.js --suite=removeFromBag
	- protractor conf.js --suite=addToBag
	- protractor conf.js --suite=viewMore
test reports will be available in the following directories
for api tests
	- root directory of api_tests having name report.html
for e2e tests
	- e2e_tests/config/tmp/screenshots/report.html