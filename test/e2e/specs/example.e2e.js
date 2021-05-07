const wdio = require('webdriverio');
const assert = require('assert');
const find = require('appium-flutter-finder');
// let appiumController = require('appium-controller');

const builds = require('./../../conf/builds');
const caps = require('./../../conf/caps');

describe('Appium Test Demo', async () => {

    const opts = {
        port: 4723,
        capabilities: {

            platformName: 'Android',
            deviceName: 'ZY3234HTF8',
            // @todo support non-unix style path
            app: '/Users/zerocool/Projects/examples/Flutter-Appium/build/app/outputs/flutter-apk/app-debug.apk'
        },
        automationName: 'Flutter',
        retryBackoffTime: 500
    };


    // let deviceOpts = caps.androidOptions;
    // deviceOpts.capabilities.deviceName = 'ZY3234HTF8';
    // deviceOpts.capabilities.app = builds.androidDebugApk;
    let deviceOpts = opts;

    let client;

    before(async () => {
        client = await wdio.remote(deviceOpts);
        console.log("========== Device Opts (ServerConfig + Caps) ==========");
        console.log(deviceOpts);
        console.log("=======================================================");
    });

    // NOTE:
    // Appium must be started BEFORE tests run!
    // OR "failed to creater session" error.
    it('should create and destroy a WebDriverIO session', async () => {
        // let deviceOpts = configureClientForDevice(device);
        // appiumController.startAppium(deviceOpts);
        // sleep(5);

        // const client = await wdio.remote(deviceOpts);

        assert.strictEqual(await client.execute('flutter:checkHealth'), 'ok');
        // assert.strictEqual(await find.checkHealth(), 'ok');

        // sleep(3); // arnitrary!
        // appiumController.stopAppium({
        //     port: deviceOpts.port
        // });
        // sleep(3); // arnitrary!
        // client.deleteSession();
    });

    // it('page one', async () => {
    //     const btnLogin = find.byValueKey('btn-login');
    //     const inputUser = find.byValueKey('input-user');
    //     const inputPassword = find.byValueKey('input-password');

    //     await client.execute('flutter:waitFor', btnLogin);
    //     await client.elementSendKeys(inputUser, 'test@gmail.com')
    //     await client.elementSendKeys(inputPassword, '123456')
    //     await client.elementClick(btnLogin);
    // });

    // it('page two', async () => {
    //     const textCount = find.byValueKey('count-key');
    //     const CustomWidget = find.byType('CustomTextExample');

    //     await client.execute('flutter:waitFor', find.byType('Scaffold'));
    //     assert.strictEqual(await client.getElementText(find.byText('Custom Widget')), 'Custom Widget');

    //     await client.elementClick(CustomWidget);
    //     await new Promise(r => setTimeout(r, 100));
    //     assert.strictEqual(await client.getElementText(textCount), '1');

    //     await client.elementClick(CustomWidget);
    //     await new Promise(r => setTimeout(r, 100));
    //     assert.strictEqual(await client.getElementText(textCount), '2');

    //     // return page
    //     await client.elementClick(find.pageBack())
    // });
});


