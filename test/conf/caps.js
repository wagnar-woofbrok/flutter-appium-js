/* Appium Device Capabilities */
/* Appium needs certain device information to drive mobile devices during tests known as caps or capabilities. */

const iosCaps = {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 6s',
    platformVersion: process.env.IOS_PLATFORM_VERSION || '12.1',
    app: undefined // Will be added in tests
};

// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = process.env.CICD
    ? 'Android GoogleAPI Emulator'
    : 'ZY224LGD28';
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.CICD ? '9.0' : null;

const androidCaps = {
    platformName: 'Android',
    // automationName: 'UiAutomator2',
    automationName: 'Appium',
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
        process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
    // appPackage: 'com.example.appium_example',
    // appActivity: '.MainActivity',
    app: undefined  // Will be added in tests
};

const serverConfig = {
    path: '/wd/hub',
    host: process.env.APPIUM_HOST || 'localhost',
    port: process.env.APPIUM_PORT || 4723,
    logLevel: 'info'
};

const androidOptions = Object.assign(
    {
        capabilities: androidCaps
    },
    serverConfig
);

const iosOptions = Object.assign(
    {
        capabilities: iosCaps
    },
    serverConfig
);


module.exports = {
    androidOptions,
    iosOptions
};
