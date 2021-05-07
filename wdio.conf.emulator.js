var shell = require('shelljs');
let appiumController = require('appium-controller');
const builds = require('./test/conf/builds');
const caps = require('./test/conf/caps');
var sleep = require('sleep').sleep;

const APPIUM_ADDR = '127.0.0.1';
const APPIUM_PORT = 4723;

// TESTS
//      ISSUE spec deviceOpts MUST match device caps in conf! How to match/set global var for device conf?
//      SOLN    blueimp-tmpl    file templating for device JSON files to be require'd/read elsewhere!
//
//      run one wdio conf at a time     all works?
//      run both at same time           all works?
// 
// test reporting results from parallell runs???

let deviceOpts_emulator = {
    appiumVersion: '1.20.2',
    browserName: '',
    platformName: 'Android',
    platformVersion: '8.1.0',
    deviceName: 'emulator-5554',
    // platformVersion: '9.0',
    // deviceName: 'ZY224LGD28',
    app: builds.flutterApk,
    appPackage: caps.androidOptions.appPackage,
    appActivity: caps.androidOptions.appActivity,
    waitforTimeout: 10000,
    commandTimeout: 10000,
    newCommandTimeout: 30000
};


exports.config = {
    /**
     * Test Runner Configuration (WebDriverIO runner)
     */
    runner: 'local',
    path: '/wd/hub',
    host: APPIUM_ADDR,
    port: APPIUM_PORT,

    specs: [
        './test/e2e/specs/example.e2e.js'
    ],
    exclude: [],

    /**
     * Device Capabilities (browser or mobile)
     */
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator

    // TODO
    // Add {...} capabilities for iOS
    // TODO !!!
    // THESE caps must be set specific to device! {deviceName, platformVersion}
    capabilities: [
        deviceOpts_emulator
    ],

    /**
     * Test Configurations
     */
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [],
    // services: ['appium'],

    // appium: {
    //     waitStartTime: 6000,
    //     waitForTimeout: 10000,
    //     command: 'appium',
    //     logFileName: 'appium.log',
    //     args: {
    //         address: APPIUM_ADDR,
    //         port: APPIUM_PORT,
    //         commandTimeout: '7200',
    //         sessionOverride: true,
    //         debugLogSpacing: true
    //     }
    // },

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    mochaOpts: {
        // Babel setup
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },

    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec'],

    /**
     * Hooks
     *  WebdriverIO provides several hooks into the testing process.
     *  If one of them returns with a promise, WebdriverIO will wait until that promise got
     *  resolved to continue.
     */
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        console.log("<<< TESTING STARTING >>>");
        // console.log(capabilities);

        // FIX: "failed to create session", "cannot find appium"
        // appiumController.startAppium(deviceOpts);
        // sleep(5);

        /* IMPORTANT */
        /* Appium Server instances MUST be started/stopped OUTSIDE of wdio run! */
        /* wdio tries to connect to Appium onLoad, hooks are never reached if connection fails. */
        // console.log("<<< STARTING APPIUM >>>");
        // // device 1
        // appiumController.startAppium({
        //     port: APPIUM_PORT,
        //     defaultCapabilities: JSON.stringify(deviceOpts_emulator)
        // });
        // device 2
        // appiumController.startAppium({});
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
        // Derive connected devices for test/tmp/devices.txt to inform parallel device testing
        // shell.exec('./test/scripts/generate_devices_list.sh');
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {
        // let devicesFilePath = path.join(__dirname, '..', 'tmp', 'devices.txt');
        // console.log(`devices.txt @ ${devicesFilePath}`);

        // var fileReader = readline.createInterface({
        //   input: fs.createReadStream(devicesFilePath),
        //   output: process.stdout,
        //   terminal: false
        // });

        // fileReader.on('line', function (DEVICE_UID) {
        //   // console.log('-------');
        //   // console.log(line);
        //   // sleep.sleep(2);
        //   console.log(`Found Device: ${DEVICE_UID}`);
        //   configureDeviceAndRunSpecs(DEVICE_UID);
        // });
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
        console.log("<<< STOPPING APPIUM >>>");
        appiumController.stopAppium({ port: APPIUM_PORT });
    },

    // ??? afterScenario()  =>  browser.screenshot() ?
    // OR take screenshots on test failures?

    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
        console.log("<<< TESTING FINISHED >>>");
    },
}
