const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey } = require('appium-flutter-finder');

const osSpecificOps = process.env.APPIUM_OS === 'android' ? {
  platformName: 'Android',
  deviceName: 'ZY3234HTF8',
  // @todo support non-unix style path
  app: '/Users/zerocool/Projects/examples/Flutter-Appium/build/app/outputs/flutter-apk/app-debug.apk'
}: process.env.APPIUM_OS === 'ios' ? {
  platformName: 'iOS',
  platformVersion: '12.2',
  deviceName: 'iPhone X',
  noReset: true,
  app: __dirname +  '/../apps/Runner.zip',

} : {};

const opts = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    automationName: 'Flutter',
    retryBackoffTime: 500
  }
};

(async () => {
//   const counterTextFinder = byValueKey('counter');
//   const buttonFinder = byValueKey('increment');

  const driver = await wdio.remote(opts);

  assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');

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

  driver.deleteSession();
})();