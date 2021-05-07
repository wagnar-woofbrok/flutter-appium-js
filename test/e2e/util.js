/* (utils.js) Helper functions to create device caps and Appium servers for (parallel) test passes */

async function configureDeviceAndRunSpecs(device) {
    // 1. configure deviceOpts and driver/client
    // * Single Device
    let deviceOpts = configureClientForDevice(device);

    console.log("============================");
    console.log(deviceOpts);
    console.log("============================");

    // 2. start Appium server instance for device
    appiumController.startAppium(deviceOpts);
    sleep(5); // arnitrary! improve this for multiple device delays. maybe start/stop in pre/post bash script?
    const client = await wdio.remote(deviceOpts);

    // 3. Run tests! Don't forget a test reporter.
    assert.strictEqual(await client.execute('flutter:checkHealth'), 'ok');
    await client.execute('flutter:clearTimeline');
    await client.execute('flutter:forceGC');

    //Enter One page
    // (ERROR)  "ReferenceError: client is not defined"
    // await require('./specs/pageOne.spec')(driver);
    const btnLogin = find.byValueKey('btn-login');
    const inputUser = find.byValueKey('input-user');
    const inputPassword = find.byValueKey('input-password');

    await client.execute('flutter:waitFor', btnLogin);
    await client.elementSendKeys(inputUser, 'test@gmail.com')
    await client.elementSendKeys(inputPassword, '123456')
    await client.elementClick(btnLogin);

    //Enter Two page
    // await require('./specs/pageTwo.spec')(driver);
    const textCount = find.byValueKey('count-key');
    const CustomWidget = find.byType('CustomTextExample');

    await client.execute('flutter:waitFor', find.byType('Scaffold'));
    assert.strictEqual(await client.getElementText(find.byText('Custom Widget')), 'Custom Widget');

    await client.elementClick(CustomWidget);
    await new Promise(r => setTimeout(r, 100));
    assert.strictEqual(await client.getElementText(textCount), '1');

    await client.elementClick(CustomWidget);
    await new Promise(r => setTimeout(r, 100));
    assert.strictEqual(await client.getElementText(textCount), '2');

    // return page
    await client.elementClick(find.pageBack())


    sleep(3); // arnitrary!
    appiumController.stopAppium({
        port: deviceOpts.port
    });
    sleep(3); // arnitrary!
    client.deleteSession();
}


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
            automationName: 'Flutter'
        }
    };
}


module.exports = {
    configureClientForAndroidDevice: configureClientForAndroidDevice,
    configureDeviceAndRunSpecs: configureDeviceAndRunSpecs
};