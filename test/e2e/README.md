
# Appium Device Testing PoC

    A prototype project for automating and running mobile device tests for Verb Live Mobile.

    Appium is a cross-platform framework for automated testing that essentially wraps the Selenium WebDriver protocol. It is a client-server based application -- like most setups that use Selenium Server and a client library that interacts with a device or browser and communicates between the server and the device. This means Appium needs a client for interfacing with the server which is used to "drive" (interact with) mobile devices during testing.

    This prototype uses WebDriverIO due to its widespread adoption, ease of integration and good documentation (it's also NodeJS based which is among the common skills for Verb staff). What this means in practice is that test (spec) files will use the `webdriverio` NPM package to create a driver for a given device during a test pass, which will use the WebDriverIO API to make commands against the device and to communicate with Appium. WebDriver is a "Test Runner" in this setup, meaning it is responsible for bridging the driver and Appium, interpreting test/spec files using Mocha, generating test result reports and logging.

# Requirements

    * NodeJS    (v12.18.3+) and NPM (v.6.14.6+)
    * Appium    (v1.20.2)
    * emulators setup or mobile devices connected via USB within the supported range for the Verb Live Mobile Project   (Android 6.0+, iOS 10.0+)

    Appium server can be install as an application and run that way, or via NPM on the command line and started like this:

    ```
    npm install -g appium
    appium
    (or from the local installation)
    ./node_modules/.bin/appium
    ```

    Don't forget to install the NPM packages, as well, before running tests:
    ```
    npm install
    ```

    Also, Appium tests make use of Debug mode builds of the application, so a clean debug build must be created before running the E2E tests.

    ```
    flutter clean
    flutter build [apk, ios] --debug
    ```

# Usage

    Set appropriate NodeJS ENV variables to flag which device, platform and config you are using for running the tests on:

    * APPIUM_PLATFORM
    * IOS_DEVICE_NAME
    * IOS_PLATFORM_VERSION
    * ANDROID_DEVICE_NAME
    * ANDROID_PLATFORM_VERSION

    For example, to run the Appium tests on a physical Android device connected by USB, follow these steps on a terminal:

    * $ adb devices   (note the capitalized, alphanumeric code - this is the device name/id)
    * start the Appium server   (e.g., $ appium -p 4723)
    * run NPM test:e2e scripts command with the env variables set

    **Android device example**
    ```
    APPIUM_PLATFORM=Android ANDROID_DEVICE_NAME=ZY3234HTF8 ANDROID_PLATFORM_VERSION=9.0 npm run test:e2e 
    ```

    **iOS simulator example**
    ```
    APPIUM_PLATFORM=iOS IOS_DEVICE_NAME= IOS_PLATFORM_VERSION= npm run test:e2e 
    ```

## Multi-Device/Parallel Device Testing

    COMING SOON TO A PROJECT NEAR YOU!


# Mobile Testing Considerations

    The abilities and interactions possible during E2E tests for mobile devices depends on the "driver" being used. Appium by default uses the FlutterDriver.

## Limitations - Android vs iOS

    (Unconfirmed) iOS limits multi-device testing unlike Android, so for one local Macbook only 1 iOS device at a time can be used to run tests. 
    
    Android devices can run in parallel and are only limited in need unique ports and Appium server instances (resources) for each device.

## Cloud versus Local

    There are several cloud options available for testing device compatibility and running test passes on Android and iOS devices. While these do cost money (some are cheaper than others)

### (TODO) Running Tests in Parallel (multiple devices)

    Appium allows running tests in parallel across devices if an Appium server instance is started for each device.

    Right now this does not work in the PoC, but this can be made to work a few different ways:

    * use a template wdio.conf.js file and generate one for each device to be tested on, and pass the specific appium server port and host settings into that conf file; run all files via `wdio` command
    * integrate a tool such as SeleniumGrid that will treat each device as a Node and handle starting and connecting multiple Appium server instances for each node (device)

### Wrapping and Instrumenting Flutter Driver for the App-Under-Test (AUT)

 The flutter app under test must also be configured to be instrumented to use the [Flutter Driver](https://api.flutter.dev/flutter/flutter_driver/flutter_driver-library.html). Frameworks wrap or use the FlutterDriver (including Flutter itself for integration testing) to perform actions on emulators or devices. From the docs:

    "This is Flutter's version of Selenium WebDriver (generic web), Protractor (Angular), Espresso (Android) or Earl Gray (iOS)."    

    This is done by:
    
    * adding flutter_driver to the pubspec file 
    ```
    flutter_driver:
        sdk: flutter
    ```
    * instrumenting the app with the driver (debug or profile mode only!)
    ```
    void main() {
        if (kDebugMode) enableFlutterDriverExtension();
        WidgetsFlutterBinding.ensureInitialized();
        runApp(MyApp());
    }
    ```

    NOTE: The order of those initialization steps is important. `WidgetFlutterBinding` is the "glue" between the framework and the FlutterEngine, so, for instance, it must be called *before* any initialization calls for packages that use platform code otherwise Flutter will not be ready to interact with the platform through the Engine yet. The reason is that during testing Flutter uses a TestWidgetsFlutterBinding instance which is not the same as the WidgetsFlutterBinding during normal operations. If the instance does not exist and is created (such as when calling ensureInitialized() to guarantee it is) then a WidgetsFlutterBinding instance is created and returned and this will cause an exception during the test pass:

    For more details, see:
    https://api.flutter.dev/flutter/widgets/WidgetsFlutterBinding-class.html
    https://api.flutter.dev/flutter/widgets/WidgetsFlutterBinding/ensureInitialized.html
    https://flutter.dev/docs/cookbook/testing/integration/introduction
    https://flutter.dev/docs/resources/architectural-overview#architectural-layers


# TODO

    * (parallel testing) multi-device testing, configuring the ENV and/or template files for testing on multiple physical devices at once; this will require some non-trivial adjustments probably more tooling so that the adb commands appium sends/uses are device-specific (otherwise pass fails with the error `adb: error: more than one device/emulator`)
    * add iOS device/emulator testing support (priority!)
    * automate device caps and server config for connected devices
    * use (JS) templating for configuring driver and appium configs from the generated device lists (1 Appium server instance PER 1 Device required); possibly wdio per device
    * improve CLI test reporting and include an XML or JSON report for CI/CD integrations
    * investigate connecting USB attached devices to Docker containers to containerize the Appium-Grid for parallel testing
