const wdio = require('webdriverio');
const assert = require('assert');
let appiumController = require('appium-controller');
const find = require('appium-flutter-finder');
const path = require('path');
// var lineReader = require('line-reader');
var fs = require('fs'),
  sleep = require('sleep').sleep,
  readline = require('readline');
const androidOptions = require('./../conf/caps').androidOptions;


// const osSpecificOps = process.argv[2] === 'android' ? {
//   platformName: 'Android',
//   deviceName: 'emulator-5556',
//   app: __dirname + '/../../appium_example/build/app/outputs/apk/debug/app-debug.apk',
// } : process.argv[2] === 'ios' ? {
//   platformName: 'iOS',
//   automationName: 'XCUITest',
//   deviceName: 'iPhone 12 Pro Max',
//   platformVersion: '14.2',
//   app: __dirname + '/../../appium_example/Build/ios/Debug-iphonesimulator/Runner.app',
//   noReset: true,
//   udid: "auto",
// } : {};

/**
 * Returns caps object for Android device:
 * 
 *  {
 *    ...serverConfig,
 *    capabilities: {
 *      ...capabilities
 *    }
 *  }
 * 
 * @param {*} adbDeviceIdentifier 
 * @returns 
 */
function configureClientForAndroidDevice(adbDeviceIdentifier) {
  return {
    port: 4723, /// !!! Dynamic/new ports for multiple devices!! (tracking how?)
    host: 'localhost',
    path: '/wd/hub',
    // host: process.env.APPIUM_HOST || 'localhost',
    // port: process.env.APPIUM_PORT || 4723,
    logLevel: 'info',
    capabilities: {
      platformName: 'Android',
      // deviceName: 'emulator-5556',
      // deviceName: 'ZY224LGD28',
      deviceName: adbDeviceIdentifier,
      app: '/Users/zerocool/Projects/examples/Flutter-Appium/build/app/outputs/apk/debug/app-debug.apk',
      automationName: 'Appium'
    }
  };
}

// # p_temp="$(grep -i "port =" android/"$i"/appium.txt)" #retrieving the port for starting the appium session
// # p=${p_temp#*port = }
// # bp=$(($p + 1000))
// # appium -p "$p" -bp "$bp" -U "$i" >> "$log_file" 2>&1

/* (WebDriverIO) */
/* Use hooks() for handling this setup! */
// async function configureDeviceAndRunSpecs(device) {
//   // 1. configure deviceOpts and driver/client
//   // * Single Device
//   let deviceOpts = configureClientForDevice(device);

//   console.log("============================");
//   console.log(deviceOpts);
//   console.log("============================");

//   // 2. start Appium server instance for device
//   appiumController.startAppium(deviceOpts);
//   sleep(5); // arnitrary! improve this for multiple device delays. maybe start/stop in pre/post bash script?
//   const client = await wdio.remote(deviceOpts);

//   // 3. Run tests! Don't forget a test reporter.
//   assert.strictEqual(await client.execute('flutter:checkHealth'), 'ok');
//   await client.execute('flutter:clearTimeline');
//   await client.execute('flutter:forceGC');

//   //Enter One page
//   // (ERROR)  "ReferenceError: client is not defined"
//   // await require('./specs/pageOne.spec')(driver);
//   const btnLogin = find.byValueKey('btn-login');
//   const inputUser = find.byValueKey('input-user');
//   const inputPassword = find.byValueKey('input-password');

//   await client.execute('flutter:waitFor', btnLogin);
//   await client.elementSendKeys(inputUser, 'test@gmail.com')
//   await client.elementSendKeys(inputPassword, '123456')
//   await client.elementClick(btnLogin);

//   //Enter Two page
//   // await require('./specs/pageTwo.spec')(driver);
//   const textCount = find.byValueKey('count-key');
//   const CustomWidget = find.byType('CustomTextExample');

//   await client.execute('flutter:waitFor', find.byType('Scaffold'));
//   assert.strictEqual(await client.getElementText(find.byText('Custom Widget')), 'Custom Widget');

//   await client.elementClick(CustomWidget);
//   await new Promise(r => setTimeout(r, 100));
//   assert.strictEqual(await client.getElementText(textCount), '1');

//   await client.elementClick(CustomWidget);
//   await new Promise(r => setTimeout(r, 100));
//   assert.strictEqual(await client.getElementText(textCount), '2');

//   // return page
//   await client.elementClick(find.pageBack())


//   sleep(3); // arnitrary!
//   appiumController.stopAppium({
//     port: deviceOpts.port
//   });
//   sleep(3); // arnitrary!
//   client.deleteSession();
// }

const opts = {
  port: 4723,
  capabilities: {
    platformName: 'Android',
    // deviceName: 'emulator-5556',
    deviceName: 'ZY224LGD28',
    app: '/Users/zerocool/Projects/examples/Flutter-Appium/build/app/outputs/apk/debug/app-debug.apk',
    automationName: 'Appium'
  }
};

// ForEach device,
//  RUN specs/ on the computed opts (device)
// (?) run and forget w/ deleteSession(), but configure reporter for each?

// (?) DynamicRequire spec/ s AS Node Modules? Closures?


// DEBUG: Run Once, Single Device
// TESTING SCRIPTS IN SINGLE LOOP/RUN
(async () => {
  /* Multi-Decvice / Parallel Testing */
  // // * PARSE devices.txt ...
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


  /* DEBUG */
  // let deviceOpts = configureClientForDevice();
  // const driver = await wdio.remote(deviceOpts);

  const driver = await wdio.remote({
    host: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    capabilities: {
      platformName: 'Android',
      deviceName: 'ZY3234HTF8',
      app: '/Users/zerocool/Projects/examples/Flutter-Appium/build/app/outputs/apk/debug/app-debug.apk',
      automationName: 'Appium'
    }
  });
  assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
  await driver.execute('flutter:clearTimeline');
  await driver.execute('flutter:forceGC');

  // //Enter One page
  // require('./specs/pageOne.spec')(driver);

  // //Enter Two page
  // require('./specs/pageTwo.spec')(driver);

  // driver.deleteSession();
})();

