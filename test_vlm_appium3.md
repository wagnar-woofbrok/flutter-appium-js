
The server is running
[Appium] Welcome to Appium v1.20.2
[Appium] Non-default server args:
[Appium]   relaxedSecurityEnabled: true
[Appium]   allowInsecure: {
[Appium]   }
[Appium]   denyInsecure: {
[Appium]   }
[Appium] Appium REST http interface listener started on 0.0.0.0:4723
[HTTP] --> POST /wd/hub/session
[HTTP] {"capabilities":{"alwaysMatch":{"appiumVersion":"1.20.2","browserName":"","platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"firstMatch":[{}]},"desiredCapabilities":{"appiumVersion":"1.20.2","browserName":"","platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000}}
[W3C] Calling AppiumDriver.createSession() with args: [{"appiumVersion":"1.20.2","browserName":"","platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},null,{"alwaysMatch":{"appiumVersion":"1.20.2","browserName":"","platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"firstMatch":[{}]}]
[BaseDriver] Event 'newSessionRequested' logged at 1618823642626 (02:14:02 GMT-0700 (Pacific Daylight Time))
[BaseDriver] The following capabilities are not standard capabilities and should have an extension prefix:
[BaseDriver]   appiumVersion
[BaseDriver]   platformVersion
[BaseDriver]   deviceName
[BaseDriver]   app
[BaseDriver]   fullReset
[BaseDriver]   commandTimeout
[BaseDriver]   newCommandTimeout
[Appium] 
[Appium] ======================================================================
[Appium]   DEPRECATION WARNING:
[Appium] 
[Appium]   The 'automationName' capability was not provided in the desired 
[Appium]   capabilities for this Android session
[Appium] 
[Appium]   Setting 'automationName=UiAutomator2' by default and using the 
[Appium]   UiAutomator2 Driver
[Appium] 
[Appium]   The next major version of Appium (2.x) will **require** the 
[Appium]   'automationName' capability to be set for all sessions on all 
[Appium]   platforms
[Appium] 
[Appium]   In previous versions (Appium <= 1.13.x), the default was 
[Appium]   'automationName=UiAutomator1'
[Appium] 
[Appium]   If you wish to use that automation instead of UiAutomator2, please 
[Appium]   add 'automationName=UiAutomator1' to your desired capabilities
[Appium] 
[Appium]   For more information about drivers, please visit 
[Appium]   http://appium.io/docs/en/about-appium/intro/ and explore the 
[Appium]   'Drivers' menu
[Appium] 
[Appium] ======================================================================
[Appium] 
[Appium] Appium v1.20.2 creating new AndroidUiautomator2Driver (v1.61.2) session
[Appium] Applying relaxed security to 'AndroidUiautomator2Driver' as per server command line argument. All insecure features will be enabled unless explicitly disabled by --deny-insecure
[BaseDriver] W3C capabilities and MJSONWP desired capabilities were provided
[BaseDriver] Creating session with W3C capabilities: {
[BaseDriver]   "alwaysMatch": {
[BaseDriver]     "appium:appiumVersion": "1.20.2",
[BaseDriver]     "browserName": "",
[BaseDriver]     "platformName": "Android",
[BaseDriver]     "appium:platformVersion": "9.0",
[BaseDriver]     "appium:deviceName": "ZY224LGD28",
[BaseDriver]     "appium:app": "/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk",
[BaseDriver]     "appium:fullReset": true,
[BaseDriver]     "appium:commandTimeout": 10000,
[BaseDriver]     "appium:newCommandTimeout": 30000
[BaseDriver]   },
[BaseDriver]   "firstMatch": [
[BaseDriver]     {}
[BaseDriver]   ]
[BaseDriver] }
[BaseDriver] The following capabilities were provided, but are not recognized by Appium:
[BaseDriver]   appiumVersion
[BaseDriver]   commandTimeout
[BaseDriver] Session created with session id: 4de1e511-5a1a-46b6-9560-390704fab739
[BaseDriver] Using local app '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk'
[UiAutomator2] Checking whether app is actually present
[ADB] Found 4 'build-tools' folders under '/Users/zerocool/Library/Android/sdk' (newest first):
[ADB]     /Users/zerocool/Library/Android/sdk/build-tools/30.0.3
[ADB]     /Users/zerocool/Library/Android/sdk/build-tools/29.0.2
[ADB]     /Users/zerocool/Library/Android/sdk/build-tools/29.0.0
[ADB]     /Users/zerocool/Library/Android/sdk/build-tools/28.0.3
[ADB] Using 'adb' from '/Users/zerocool/Library/Android/sdk/platform-tools/adb'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 start-server'
[AndroidDriver] Retrieving device list
[ADB] Trying to find a connected android device
[ADB] Getting connected devices
[ADB] Connected devices: [{"udid":"ZY224LGD28","state":"device"}]
[AndroidDriver] Looking for a device with Android '9.0.0'
[ADB] Setting device id to ZY224LGD28
[ADB] Getting device platform version
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.release'
[ADB] Current device property 'ro.build.version.release': 9
[AndroidDriver] Using device: ZY224LGD28
[ADB] Using 'adb' from '/Users/zerocool/Library/Android/sdk/platform-tools/adb'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 start-server'
[ADB] Setting device id to ZY224LGD28
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.sdk'
[ADB] Current device property 'ro.build.version.sdk': 28
[ADB] Getting device platform version
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.release'
[ADB] Current device property 'ro.build.version.release': 9
[ADB] Device API level: 28
[UiAutomator2] Relaxing hidden api policy
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'settings put global hidden_api_policy_pre_p_apps 1;settings put global hidden_api_policy_p_apps 1;settings put global hidden_api_policy 1''
[AndroidDriver] Parsing package and activity from app manifest
[ADB] Package name: 'tech.verb.live'
[ADB] Main activity name: 'tech.verb.live.MainActivity'
[AndroidDriver] Parsed package and activity are: tech.verb.live/tech.verb.live.MainActivity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 wait-for-device'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell echo ping'
[AndroidDriver] Pushing settings apk to device...
[ADB] Getting install status for io.appium.settings
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.settings'
[ADB] 'io.appium.settings' is installed
[ADB] Getting package info for 'io.appium.settings'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.settings'
[ADB] The version name of the installed 'io.appium.settings' is greater or equal to the application version name ('3.2.1' >= '3.2.1')
[ADB] There is no need to install/upgrade '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/io.appium.settings/apks/settings_apk-debug.apk'
[ADB] Getting IDs of all 'io.appium.settings' processes
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'pgrep --help; echo $?''
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
[AndroidDriver] io.appium.settings is already running. There is no need to reset its permissions.
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell appops set io.appium.settings android:mock_location allow'
[Logcat] Starting logs capture with command: /Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 logcat -v threadtime
[UiAutomator2] Forwarding UiAutomator2 Server port 6790 to local port 8200
[ADB] Forwarding system: 8200 to device: 6790
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 forward tcp:8200 tcp:6790'
[ADB] Getting install status for io.appium.uiautomator2.server
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server'
[ADB] 'io.appium.uiautomator2.server' is installed
[ADB] Getting package info for 'io.appium.uiautomator2.server'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server'
[ADB] The version name of the installed 'io.appium.uiautomator2.server' is greater or equal to the application version name ('4.17.4' >= '4.17.4')
[UiAutomator2] io.appium.uiautomator2.server installation state: sameVersionInstalled
[ADB] Checking app cert for /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk
[ADB] Using 'apksigner.jar' from '/Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar'
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk
[ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
[ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
[ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
[ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
[ADB] 
[ADB] sha256 hash did match for 'appium-uiautomator2-server-v4.17.4.apk'
[ADB] '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk' is signed with the default certificate
[ADB] Getting install status for io.appium.uiautomator2.server.test
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server.test'
[ADB] 'io.appium.uiautomator2.server.test' is installed
[ADB] Checking app cert for /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk
[ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
[ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
[ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
[ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
[ADB] 
[ADB] sha256 hash did match for 'appium-uiautomator2-server-debug-androidTest.apk'
[ADB] '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk' is signed with the default certificate
[UiAutomator2] Server packages are not going to be (re)installed
[UiAutomator2] Waiting up to 30000ms for services to be available
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pm list instrumentation'
[UiAutomator2] Instrumentation target 'io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner' is available
[ADB] Adding packages ["io.appium.settings","io.appium.uiautomator2.server","io.appium.uiautomator2.server.test"] to Doze whitelist
[ADB] Got the following command chunks to execute: [["dumpsys","deviceidle","whitelist","+io.appium.settings",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server.test",";"]]
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys deviceidle whitelist +io.appium.settings ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server.test ;'
[ADB] Checking app cert for /Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk
[ADB] apksigner stdout: Signer #1 certificate DN: C=US, O=Android, CN=Android Debug
[ADB] Signer #1 certificate SHA-256 digest: 335e1ee02391af361c6a43b7ea52585bedf55556059166d870f5a44bf7b26822
[ADB] Signer #1 certificate SHA-1 digest: a1c9ae9aa1f77c2bdc0db3cd7684b009aa577edf
[ADB] Signer #1 certificate MD5 digest: ad9bb2ca202ad48ed9c55e32b08a4cdb
[ADB] 
[ADB] '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk' is signed with a non-default certificate
[ADB] Uninstalling tech.verb.live
[ADB] Getting install status for tech.verb.live
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] 'tech.verb.live' is not installed
[ADB] tech.verb.live was not uninstalled, because it was not present on the device
[ADB] Getting install status for tech.verb.live
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] 'tech.verb.live' is not installed
[AndroidDriver] Running full reset on 'tech.verb.live' (reinstall)
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 help'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 features'
[ADB] The application at '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk' will not be cached, because the device under test has confirmed the support of streamed installs
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 install -r /Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk'
[ADB] The installation of 'app-debug.apk' took 10295ms
[ADB] Install command stdout: Performing Streamed Install
[ADB] Success
[UiAutomator2] Performing shallow cleanup of automation leftovers
[UiAutomator2] No obsolete sessions have been detected (socket hang up)
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop io.appium.uiautomator2.server.test'
[UiAutomator2] Starting UIAutomator2 server 4.17.4
[UiAutomator2] Using UIAutomator2 server from '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk' and test from '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk'
[UiAutomator2] Waiting up to 30000ms for UiAutomator2 to be online...
[ADB] Creating ADB subprocess with args: ["-P",5037,"-s","ZY224LGD28","shell","am","instrument","-w","io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner"]
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] socket hang up
[Instrumentation] io.appium.uiautomator2.server.test.AppiumUiAutomator2Server:
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
[WD Proxy] Got response with status 200: {"sessionId":"None","value":{"message":"UiAutomator2 Server is ready to accept commands","ready":true}}
[UiAutomator2] The initialization of the instrumentation process took 5206ms
[WD Proxy] Matched '/session' to command name 'createSession'
[WD Proxy] Proxying [POST /session] to [POST http://127.0.0.1:8200/wd/hub/session] with body: {"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"tech.verb.live"}],"alwaysMatch":{}}}
[WD Proxy] Got response with status 200: {"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6","value":{"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"tech.verb.live"}],"alwaysMatch":{}},"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6"}}
[WD Proxy] Determined the downstream protocol as 'W3C'
[WD Proxy] Proxying [GET /appium/device/info] to [GET http://127.0.0.1:8200/wd/hub/session/a6ab7c17-853f-438f-9520-55ef33438ad6/appium/device/info] with no body
[WD Proxy] Got response with status 200: {"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6","value":{"androidId":"6cbb33b169dd3512","apiVersion":"28","bluetooth":{"state":"OFF"},"brand":"motorola","carrierName":"","displayDensity":480,"locale":"en_US","manufacturer":"motorola","model":"moto x4","networks":[{"capabilities":{"SSID":null,"linkDownBandwidthKbps":1048576,"linkUpstreamBandwidthKbps":1048576,"networkCapabilities":"NET_CAPABILITY_NOT_METERED,NET_CAPABILITY_INTERNET,NET_CAPABILITY_NOT_RESTRICTED,NET_CAPABILITY_TRUSTED,NET_CAPABILITY_NOT_VPN,NET_CAPABILITY_VALIDATED,NET_CAPABILITY_NOT_ROAMING,NET_CAPABILITY_FOREGROUND,NET_CAPABILITY_NOT_CONGESTED,NET_CAPABILITY_NOT_SUSPENDED","signalStrength":-63,"transportTypes":"TRANSPORT_WIFI"},"detailedState":"CONNECTED","extraInfo":null,"isAvailable":true,"isConnected":true,"isFailover":false,"isRoaming":false,"state":"CONNECTED","subtype":0,"subtypeName":"","type":1,"typeName":"WIFI"}],"platformVersion":"9","realDisplaySize":"1080x1920","timeZone":"America/Los_Angeles"}}
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window'
[AndroidDriver] Screen already unlocked, doing nothing
[UiAutomator2] Starting 'tech.verb.live/tech.verb.live.MainActivity and waiting for 'tech.verb.live/tech.verb.live.MainActivity'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am start -W -n tech.verb.live/tech.verb.live.MainActivity -S -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -f 0x10200000'
[ADB] Waiting up to 20000ms for activity matching pkg: 'tech.verb.live' and activity: 'tech.verb.live.MainActivity' to be focused
[ADB] Possible activities, to be checked: 'tech.verb.live.MainActivity', 'tech.verb.live.tech.verb.live.MainActivity'
[ADB] Getting focused package and activity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window windows'
[ADB] Found package: 'tech.verb.live' and fully qualified activity name : 'tech.verb.live.MainActivity'
[WD Proxy] Proxying [GET /appium/device/pixel_ratio] to [GET http://127.0.0.1:8200/wd/hub/session/a6ab7c17-853f-438f-9520-55ef33438ad6/appium/device/pixel_ratio] with no body
[WD Proxy] Got response with status 200: {"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6","value":3}
[WD Proxy] Matched '/appium/device/system_bars' to command name 'getSystemBars'
[WD Proxy] Proxying [GET /appium/device/system_bars] to [GET http://127.0.0.1:8200/wd/hub/session/a6ab7c17-853f-438f-9520-55ef33438ad6/appium/device/system_bars] with no body
[WD Proxy] Got response with status 200: {"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6","value":{"statusBar":72}}
[WD Proxy] Matched '/window/current/size' to command name 'getWindowSize'
[WD Proxy] Proxying [GET /window/current/size] to [GET http://127.0.0.1:8200/wd/hub/session/a6ab7c17-853f-438f-9520-55ef33438ad6/window/current/size] with no body
[WD Proxy] Got response with status 200: {"sessionId":"a6ab7c17-853f-438f-9520-55ef33438ad6","value":{"height":1776,"width":1080}}
[Appium] New AndroidUiautomator2Driver session created successfully, session 4de1e511-5a1a-46b6-9560-390704fab739 added to master session list
[BaseDriver] Event 'newSessionStarted' logged at 1618823669837 (02:14:29 GMT-0700 (Pacific Daylight Time))
[W3C (4de1e511)] Cached the protocol value 'W3C' for the new session 4de1e511-5a1a-46b6-9560-390704fab739
[W3C (4de1e511)] Responding to client with driver.createSession() result: {"capabilities":{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"tech.verb.live","deviceApiLevel":28,"deviceScreenSize":"1080x1920","deviceScreenDensity":480,"deviceModel":"moto x4","deviceManufacturer":"motorola","pixelRatio":3,"statBarHeight":72,"viewportRect...
[HTTP] <-- POST /wd/hub/session 200 27219 ms - 1132
[HTTP] 
[HTTP] --> POST /wd/hub/session
[HTTP] {"capabilities":{"alwaysMatch":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter"},"firstMatch":[{}]},"desiredCapabilities":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter"}}
[W3C] Calling AppiumDriver.createSession() with args: [{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter"},null,{"alwaysMatch":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter"},"firstMatch":[{}]}]
[BaseDriver] Event 'newSessionRequested' logged at 1618823669971 (02:14:29 GMT-0700 (Pacific Daylight Time))
[BaseDriver] The following capabilities are not standard capabilities and should have an extension prefix:
[BaseDriver]   platformVersion
[BaseDriver]   deviceName
[BaseDriver]   app
[BaseDriver]   automationName
[Appium] Appium v1.20.2 creating new FlutterDriver (v0.0.25) session
[Appium] Applying relaxed security to 'FlutterDriver' as per server command line argument. All insecure features will be enabled unless explicitly disabled by --deny-insecure
[BaseDriver] Creating session with MJSONWP desired capabilities: {
[BaseDriver]   "platformName": "Android",
[BaseDriver]   "platformVersion": "9.0",
[BaseDriver]   "deviceName": "ZY224LGD28",
[BaseDriver]   "app": "/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk",
[BaseDriver]   "automationName": "Flutter"
[BaseDriver] }
[BaseDriver] Session created with session id: 42421e30-0fc7-4f1f-918d-a8a23eff8197
[FlutterDriver] Starting an Android proxy session
[BaseDriver] Creating session with MJSONWP desired capabilities: {
[BaseDriver]   "platformName": "Android",
[BaseDriver]   "platformVersion": "9.0",
[BaseDriver]   "deviceName": "ZY224LGD28",
[BaseDriver]   "app": "/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk",
[BaseDriver]   "automationName": "Flutter",
[BaseDriver]   "newCommandTimeout": 0
[BaseDriver] }
[BaseDriver] Session created with session id: c81625a6-7444-412c-8262-a4967b9ddbd5
[BaseDriver] Using local app '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk'
[UiAutomator2] Checking whether app is actually present
[ADB] Using 'adb' from '/Users/zerocool/Library/Android/sdk/platform-tools/adb'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 start-server'
[AndroidDriver] Retrieving device list
[ADB] Trying to find a connected android device
[ADB] Getting connected devices
[ADB] Connected devices: [{"udid":"ZY224LGD28","state":"device"}]
[AndroidDriver] Looking for a device with Android '9.0.0'
[ADB] Setting device id to ZY224LGD28
[ADB] Getting device platform version
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.release'
[ADB] Current device property 'ro.build.version.release': 9
[AndroidDriver] Using device: ZY224LGD28
[ADB] Using 'adb' from '/Users/zerocool/Library/Android/sdk/platform-tools/adb'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 start-server'
[ADB] Setting device id to ZY224LGD28
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.sdk'
[ADB] Current device property 'ro.build.version.sdk': 28
[ADB] Getting device platform version
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell getprop ro.build.version.release'
[ADB] Current device property 'ro.build.version.release': 9
[ADB] Device API level: 28
[UiAutomator2] Relaxing hidden api policy
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'settings put global hidden_api_policy_pre_p_apps 1;settings put global hidden_api_policy_p_apps 1;settings put global hidden_api_policy 1''
[AndroidDriver] Parsing package and activity from app manifest
[ADB] Package name: 'tech.verb.live'
[ADB] Main activity name: 'tech.verb.live.MainActivity'
[AndroidDriver] Parsed package and activity are: tech.verb.live/tech.verb.live.MainActivity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 wait-for-device'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell echo ping'
[AndroidDriver] Pushing settings apk to device...
[ADB] Getting install status for io.appium.settings
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.settings'
[ADB] 'io.appium.settings' is installed
[ADB] Getting package info for 'io.appium.settings'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.settings'
[ADB] The version name of the installed 'io.appium.settings' is greater or equal to the application version name ('3.2.1' >= '3.2.1')
[ADB] There is no need to install/upgrade '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/io.appium.settings/apks/settings_apk-debug.apk'
[ADB] Getting IDs of all 'io.appium.settings' processes
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'pgrep --help; echo $?''
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
[AndroidDriver] io.appium.settings is already running. There is no need to reset its permissions.
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell appops set io.appium.settings android:mock_location allow'
[Logcat] Starting logs capture with command: /Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 logcat -v threadtime
[UiAutomator2] Forwarding UiAutomator2 Server port 6790 to local port 8201
[ADB] Forwarding system: 8201 to device: 6790
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 forward tcp:8201 tcp:6790'
[ADB] Getting install status for io.appium.uiautomator2.server
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server'
[ADB] 'io.appium.uiautomator2.server' is installed
[ADB] Getting package info for 'io.appium.uiautomator2.server'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server'
[ADB] The version name of the installed 'io.appium.uiautomator2.server' is greater or equal to the application version name ('4.17.4' >= '4.17.4')
[UiAutomator2] io.appium.uiautomator2.server installation state: sameVersionInstalled
[ADB] Checking app cert for /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk
[ADB] Using 'apksigner.jar' from '/Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar'
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk
[ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
[ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
[ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
[ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
[ADB] 
[ADB] sha256 hash did match for 'appium-uiautomator2-server-v4.17.4.apk'
[ADB] '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk' is signed with the default certificate
[ADB] Getting install status for io.appium.uiautomator2.server.test
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package io.appium.uiautomator2.server.test'
[ADB] 'io.appium.uiautomator2.server.test' is installed
[ADB] Checking app cert for /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk
[ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
[ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
[ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
[ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
[ADB] 
[ADB] sha256 hash did match for 'appium-uiautomator2-server-debug-androidTest.apk'
[ADB] '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk' is signed with the default certificate
[UiAutomator2] Server packages are not going to be (re)installed
[UiAutomator2] Waiting up to 30000ms for services to be available
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pm list instrumentation'
[UiAutomator2] Instrumentation target 'io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner' is available
[ADB] Adding packages ["io.appium.settings","io.appium.uiautomator2.server","io.appium.uiautomator2.server.test"] to Doze whitelist
[ADB] Got the following command chunks to execute: [["dumpsys","deviceidle","whitelist","+io.appium.settings",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server.test",";"]]
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys deviceidle whitelist +io.appium.settings ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server.test ;'
[ADB] Checking app cert for /Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk
[ADB] apksigner stdout: Signer #1 certificate DN: C=US, O=Android, CN=Android Debug
[ADB] Signer #1 certificate SHA-256 digest: 335e1ee02391af361c6a43b7ea52585bedf55556059166d870f5a44bf7b26822
[ADB] Signer #1 certificate SHA-1 digest: a1c9ae9aa1f77c2bdc0db3cd7684b009aa577edf
[ADB] Signer #1 certificate MD5 digest: ad9bb2ca202ad48ed9c55e32b08a4cdb
[ADB] 
[ADB] '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk' is signed with a non-default certificate
[ADB] Getting install status for tech.verb.live
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] 'tech.verb.live' is installed
[ADB] Getting package info for 'tech.verb.live'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] The version name of the installed 'tech.verb.live' is greater or equal to the application version name ('1.0.1' >= '1.0.1')
[ADB] There is no need to install/upgrade '/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk'
[AndroidDriver] Performing fast reset on 'tech.verb.live'
[ADB] Getting install status for tech.verb.live
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] 'tech.verb.live' is installed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop tech.verb.live'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pm clear tech.verb.live'
[AndroidDriver] Performed fast reset on the installed 'tech.verb.live' application (stop and clear)
[UiAutomator2] Performing shallow cleanup of automation leftovers
[UiAutomator2] The following obsolete sessions are still running: [null]
[UiAutomator2] Cleaning up the obsolete sessions
[Instrumentation] .
[Instrumentation] Time: 16.116
[Instrumentation] 
[Instrumentation] OK (1 test)
[Instrumentation] The process has exited with code 0
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop io.appium.uiautomator2.server.test'
[UiAutomator2] Starting UIAutomator2 server 4.17.4
[UiAutomator2] Using UIAutomator2 server from '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.17.4.apk' and test from '/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-debug-androidTest.apk'
[UiAutomator2] Waiting up to 30000ms for UiAutomator2 to be online...
[ADB] Creating ADB subprocess with args: ["-P",5037,"-s","ZY224LGD28","shell","am","instrument","-w","io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner"]
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8201/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8201/wd/hub/status] with no body
[WD Proxy] socket hang up
[Instrumentation] io.appium.uiautomator2.server.test.AppiumUiAutomator2Server:
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8201/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8201/wd/hub/status] with no body
[WD Proxy] socket hang up
[WD Proxy] Matched '/status' to command name 'getStatus'
[WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8201/wd/hub/status] with no body
[WD Proxy] Got response with status 200: {"sessionId":"None","value":{"message":"UiAutomator2 Server is ready to accept commands","ready":true}}
[UiAutomator2] The initialization of the instrumentation process took 4210ms
[WD Proxy] Matched '/session' to command name 'createSession'
[WD Proxy] Proxying [POST /session] to [POST http://127.0.0.1:8201/wd/hub/session] with body: {"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","newCommandTimeout":0},"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","newCommandTimeout":0,"deviceUDID":"ZY224LGD28","appPackage":"tech.verb.live"}],"alwaysMatch":{}}}
[WD Proxy] Got response with status 200: {"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4","value":{"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","newCommandTimeout":0},"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/verb/verb-live-mobile/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","newCommandTimeout":0,"deviceUDID":"ZY224LGD28","appPackage":"tech.verb.live"}],"alwaysMatch":{}},"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4"}}
[WD Proxy] Determined the downstream protocol as 'W3C'
[WD Proxy] Proxying [GET /appium/device/info] to [GET http://127.0.0.1:8201/wd/hub/session/bfb6402f-7040-42dd-8b74-9062e83202a4/appium/device/info] with no body
[WD Proxy] Got response with status 200: {"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4","value":{"androidId":"6cbb33b169dd3512","apiVersion":"28","bluetooth":{"state":"OFF"},"brand":"motorola","carrierName":"","displayDensity":480,"locale":"en_US","manufacturer":"motorola","model":"moto x4","networks":[{"capabilities":{"SSID":null,"linkDownBandwidthKbps":1048576,"linkUpstreamBandwidthKbps":1048576,"networkCapabilities":"NET_CAPABILITY_NOT_METERED,NET_CAPABILITY_INTERNET,NET_CAPABILITY_NOT_RESTRICTED,NET_CAPABILITY_TRUSTED,NET_CAPABILITY_NOT_VPN,NET_CAPABILITY_VALIDATED,NET_CAPABILITY_NOT_ROAMING,NET_CAPABILITY_FOREGROUND,NET_CAPABILITY_NOT_CONGESTED,NET_CAPABILITY_NOT_SUSPENDED","signalStrength":-63,"transportTypes":"TRANSPORT_WIFI"},"detailedState":"CONNECTED","extraInfo":null,"isAvailable":true,"isConnected":true,"isFailover":false,"isRoaming":false,"state":"CONNECTED","subtype":0,"subtypeName":"","type":1,"typeName":"WIFI"}],"platformVersion":"9","realDisplaySize":"1080x1920","timeZone":"America/Los_Angeles"}}
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window'
[AndroidDriver] Screen already unlocked, doing nothing
[UiAutomator2] Starting 'tech.verb.live/tech.verb.live.MainActivity and waiting for 'tech.verb.live/tech.verb.live.MainActivity'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am start -W -n tech.verb.live/tech.verb.live.MainActivity -S'
[ADB] Waiting up to 20000ms for activity matching pkg: 'tech.verb.live' and activity: 'tech.verb.live.MainActivity' to be focused
[ADB] Possible activities, to be checked: 'tech.verb.live.MainActivity', 'tech.verb.live.tech.verb.live.MainActivity'
[ADB] Getting focused package and activity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window windows'
[ADB] Found package: 'tech.verb.live' and fully qualified activity name : 'tech.verb.live.MainActivity'
[WD Proxy] Proxying [GET /appium/device/pixel_ratio] to [GET http://127.0.0.1:8201/wd/hub/session/bfb6402f-7040-42dd-8b74-9062e83202a4/appium/device/pixel_ratio] with no body
[WD Proxy] Got response with status 200: {"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4","value":3}
[WD Proxy] Matched '/appium/device/system_bars' to command name 'getSystemBars'
[WD Proxy] Proxying [GET /appium/device/system_bars] to [GET http://127.0.0.1:8201/wd/hub/session/bfb6402f-7040-42dd-8b74-9062e83202a4/appium/device/system_bars] with no body
[WD Proxy] Got response with status 200: {"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4","value":{"statusBar":72}}
[WD Proxy] Matched '/window/current/size' to command name 'getWindowSize'
[WD Proxy] Proxying [GET /window/current/size] to [GET http://127.0.0.1:8201/wd/hub/session/bfb6402f-7040-42dd-8b74-9062e83202a4/window/current/size] with no body
[WD Proxy] Got response with status 200: {"sessionId":"bfb6402f-7040-42dd-8b74-9062e83202a4","value":{"height":1776,"width":1080}}
[FlutterDriver] /Users/zerocool/Library/Android/sdk/platform-tools/adb forward tcp:41581 tcp:41581
[FlutterDriver] Attempt #1
[FlutterDriver] Connecting to Dart Observatory: ws://127.0.0.1:41581/rCzDA-EzeJI=/ws
[FlutterDriver] Connected to ws://127.0.0.1:41581/rCzDA-EzeJI=/ws
[FlutterDriver] Listing all isolates: [{"type":"@Isolate","id":"isolates/3329944836005747","name":"main","number":"3329944836005747","isSystemIsolate":false}]
[FlutterDriver] "ext.flutter.driver" is not found in "extensionRPCs" ["ext.ui.window.scheduleFrame","ext.dart.io.getHttpEnableTimelineLogging","ext.dart.io.setHttpEnableTimelineLogging","ext.dart.io.getSocketProfile","ext.dart.io.startSocketProfiling","ext.dart.io.pauseSocketProfiling","ext.dart.io.clearSocketProfile","ext.dart.io.getVersion","ext.flutter.reassemble","ext.flutter.exit","ext.flutter.platformOverride","ext.flutter.brightnessOverride","ext.flutter.timeDilation","ext.flutter.evict","ext.flutter.debugPaint","ext.flutter.debugPaintBaselinesEnabled","ext.flutter.repaintRainbow","ext.flutter.debugCheckElevationsEnabled","ext.flutter.debugDumpLayerTree","ext.flutter.debugDumpRenderTree","ext.flutter.debugDumpSemanticsTreeInTraversalOrder","ext.flutter.debugDumpSemanticsTreeInInverseHitTestOrder","ext.flutter.debugDumpApp","ext.flutter.showPerformanceOverlay","ext.flutter.didSendFirstFrameEvent","ext.flutter.didSendFirstFrameRasterizedEvent","ext.flutter.fastReassemble","ext.flutter.profileWidgetBuilds","ext.flutter.invertOversizedImages","ext.flutter.debugAllowBanner","ext.flutter.debugWidgetInspector","ext.flutter.inspector.structuredErrors","ext.flutter.inspector.show","ext.flutter.inspector.trackRebuildDirtyWidgets","ext.flutter.inspector.trackRepaintWidgets","ext.flutter.inspector.disposeAllGroups","ext.flutter.inspector.disposeGroup","ext.flutter.inspector.isWidgetTreeReady","ext.flutter.inspector.disposeId","ext.flutter.inspector.setPubRootDirectories","ext.flutter.inspector.setSelectionById","ext.flutter.inspector.getParentChain","ext.flutter.inspector.getProperties","ext.flutter.inspector.getChildren","ext.flutter.inspector.getChildrenSummaryTree","ext.flutter.inspector.getChildrenDetailsSubtree","ext.flutter.inspector.getRootWidget","ext.flutter.inspector.getRootRenderObject","ext.flutter.inspector.getRootWidgetSummaryTree","ext.flutter.inspector.getDetailsSubtree","ext.flutter.inspector.getSelectedRenderObject","ext.flutter.inspector.getSelectedWidget","ext.flutter.inspector.getSelectedSummaryWidget","ext.flutter.inspector.isWidgetCreationTracked","ext.flutter.inspector.screenshot"]
[FlutterDriver] Waiting 300 seconds before trying...
[HTTP] --> DELETE /wd/hub/session/4de1e511-5a1a-46b6-9560-390704fab739
[HTTP] {}
[W3C (4de1e511)] Calling AppiumDriver.deleteSession() with args: ["4de1e511-5a1a-46b6-9560-390704fab739"]
[BaseDriver] Event 'quitSessionRequested' logged at 1618823729935 (02:15:29 GMT-0700 (Pacific Daylight Time))
[Appium] Removing session 4de1e511-5a1a-46b6-9560-390704fab739 from our master session list
[UiAutomator2] Deleting UiAutomator2 session
[UiAutomator2] Deleting UiAutomator2 server session
[UiAutomator2] Did not get confirmation UiAutomator2 deleteSession worked; Error was: UnknownError: An unknown server-side error occurred while processing the command. Original error: 'DELETE /' cannot be proxied to UiAutomator2 server because the instrumentation process is not running (probably crashed). Check the server log and/or the logcat output for more details
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop tech.verb.live'
[UiAutomator2] Capability 'fullReset' set to 'true', Uninstalling 'tech.verb.live'
[ADB] Uninstalling tech.verb.live
[ADB] Getting install status for tech.verb.live
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package tech.verb.live'
[ADB] 'tech.verb.live' is installed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop tech.verb.live'
[FlutterDriver] Connection to ws://127.0.0.1:41581/rCzDA-EzeJI=/ws closed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 uninstall tech.verb.live'
[ADB] 'adb uninstall tech.verb.live' command output: Success
[ADB] tech.verb.live was successfully uninstalled
[Logcat] Stopping logcat capture
[ADB] Removing forwarded port socket connection: 8200 
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 forward --remove tcp:8200'
[UiAutomator2] Restoring hidden api policy to the device default configuration
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'settings delete global hidden_api_policy_pre_p_apps;settings delete global hidden_api_policy_p_apps;settings delete global hidden_api_policy''
[BaseDriver] Event 'quitSessionFinished' logged at 1618823731543 (02:15:31 GMT-0700 (Pacific Daylight Time))
[W3C (4de1e511)] Received response: null
[W3C (4de1e511)] But deleting session, so not returning
[W3C (4de1e511)] Responding to client with driver.deleteSession() result: null
[HTTP] <-- DELETE /wd/hub/session/4de1e511-5a1a-46b6-9560-390704fab739 200 1613 ms - 14
[HTTP] 
[HTTP] <-- POST /wd/hub/session - - ms - -
[HTTP] 