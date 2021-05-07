/**
 * Responsible for creating required conf.js and device caps JSON files
 * during the (automated) setup process for running possibly parallel
 * WebDriverIO E2E tests.
 */
 var fs = require('fs'),
    tmpl = require('blueimp-tmpl');

// *Initial* Appium server port.
// Each successive needed instance should increment by 1!
var PORT = 4723;

