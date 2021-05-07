const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey } = require('appium-flutter-finder');


const opts = {
    port: 4723,
    capabilities: {
        platformName: 'Android',
        platformVersion: '9.0',
        deviceName: 'ZY224LGD28',
        // @todo support non-unix style path
        app: '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk',
        automationName: 'Flutter',
        retryBackoffTime: 500
    }
};


describe('Flutter Demo Appium runs OK', async function () {

    let driver;

    before(async function () {
        driver = await wdio.remote(opts);
    });

    after(async function () {
        driver.deleteSession();
    });


    it('flutter health check passes "ok"', async function () {
        assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
    });

});

// (async () => {
// //   const counterTextFinder = byValueKey('counter');
// //   const buttonFinder = byValueKey('increment');

//   const driver = await wdio.remote(opts);

//   assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');

//   if (process.env.APPIUM_OS === 'android') {
//     await driver.switchContext('NATIVE_APP');
//     await (await driver.$('~fab')).click();
//     await driver.switchContext('FLUTTER');
//   } else {
//     console.log('Switching context to `NATIVE_APP` is currently only applicable to Android demo app.')
//   }

//   assert.strictEqual(await driver.getElementText(counterTextFinder), '0');

//   await driver.elementClick(buttonFinder);
//   await driver.touchAction({
//     action: 'tap',
//     element: { elementId: buttonFinder }
//   });

//   assert.strictEqual(await driver.getElementText(counterTextFinder), '2');

//   driver.deleteSession();
// })();