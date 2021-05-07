
The server is running
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
[BaseDriver]     "appium:app": "/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk",
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
[BaseDriver] Session created with session id: f23b2786-ada5-42b1-a5b3-fb1bac93f81d
[BaseDriver] Using local app '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk'
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
[ADB] Package name: 'com.example.appium_example'
[ADB] Main activity name: 'com.example.appium_example.MainActivity'
[AndroidDriver] Parsed package and activity are: com.example.appium_example/com.example.appium_example.MainActivity
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
[ADB] Getting IDs of all 'io.appium.settings' processes
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
[ADB] Starting Appium Settings app
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am start -n io.appium.settings/.Settings -a android.intent.action.MAIN -c android.intent.category.LAUNCHER'
[ADB] Getting IDs of all 'io.appium.settings' processes
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
[ADB] Getting IDs of all 'io.appium.settings' processes
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
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
[ADB] Checking app cert for /Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk
[ADB] apksigner stdout: Signer #1 certificate DN: C=US, O=Android, CN=Android Debug
[ADB] Signer #1 certificate SHA-256 digest: 335e1ee02391af361c6a43b7ea52585bedf55556059166d870f5a44bf7b26822
[ADB] Signer #1 certificate SHA-1 digest: a1c9ae9aa1f77c2bdc0db3cd7684b009aa577edf
[ADB] Signer #1 certificate MD5 digest: ad9bb2ca202ad48ed9c55e32b08a4cdb
[ADB] 
[ADB] '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk' is signed with a non-default certificate
[ADB] Uninstalling com.example.appium_example
[ADB] Getting install status for com.example.appium_example
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[ADB] 'com.example.appium_example' is not installed
[ADB] com.example.appium_example was not uninstalled, because it was not present on the device
[ADB] Getting install status for com.example.appium_example
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[ADB] 'com.example.appium_example' is not installed
[AndroidDriver] Running full reset on 'com.example.appium_example' (reinstall)
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 help'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 features'
[ADB] The application at '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk' will not be cached, because the device under test has confirmed the support of streamed installs
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 install -r /Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk'
[ADB] The installation of 'app-debug.apk' took 6678ms
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
[UiAutomator2] The initialization of the instrumentation process took 5218ms
[WD Proxy] Matched '/session' to command name 'createSession'
[WD Proxy] Proxying [POST /session] to [POST http://127.0.0.1:8200/wd/hub/session] with body: {"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"com.example.appium_example"}],"alwaysMatch":{}}}
[WD Proxy] Got response with status 200: {"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84","value":{"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"com.example.appium_example"}],"alwaysMatch":{}},"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84"}}
[WD Proxy] Determined the downstream protocol as 'W3C'
[WD Proxy] Proxying [GET /appium/device/info] to [GET http://127.0.0.1:8200/wd/hub/session/f9e034d8-1110-46da-b130-7443188e9e84/appium/device/info] with no body
[WD Proxy] Got response with status 200: {"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84","value":{"androidId":"6cbb33b169dd3512","apiVersion":"28","bluetooth":{"state":"OFF"},"brand":"motorola","carrierName":"","displayDensity":480,"locale":"en_US","manufacturer":"motorola","model":"moto x4","networks":[{"capabilities":{"SSID":null,"linkDownBandwidthKbps":1048576,"linkUpstreamBandwidthKbps":1048576,"networkCapabilities":"NET_CAPABILITY_NOT_METERED,NET_CAPABILITY_INTERNET,NET_CAPABILITY_NOT_RESTRICTED,NET_CAPABILITY_TRUSTED,NET_CAPABILITY_NOT_VPN,NET_CAPABILITY_VALIDATED,NET_CAPABILITY_NOT_ROAMING,NET_CAPABILITY_FOREGROUND,NET_CAPABILITY_NOT_CONGESTED,NET_CAPABILITY_NOT_SUSPENDED","signalStrength":-56,"transportTypes":"TRANSPORT_WIFI"},"detailedState":"CONNECTED","extraInfo":null,"isAvailable":true,"isConnected":true,"isFailover":false,"isRoaming":false,"state":"CONNECTED","subtype":0,"subtypeName":"","type":1,"typeName":"WIFI"}],"platformVersion":"9","realDisplaySize":"1080x1920","timeZone":"America/Los_Angeles"}}
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window'
[AndroidDriver] Screen already unlocked, doing nothing
[UiAutomator2] Starting 'com.example.appium_example/com.example.appium_example.MainActivity and waiting for 'com.example.appium_example/com.example.appium_example.MainActivity'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am start -W -n com.example.appium_example/com.example.appium_example.MainActivity -S -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -f 0x10200000'
[ADB] Waiting up to 20000ms for activity matching pkg: 'com.example.appium_example' and activity: 'com.example.appium_example.MainActivity' to be focused
[ADB] Possible activities, to be checked: 'com.example.appium_example.MainActivity', 'com.example.appium_example.com.example.appium_example.MainActivity'
[ADB] Getting focused package and activity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window windows'
[ADB] Found package: 'com.example.appium_example' and fully qualified activity name : 'com.example.appium_example.MainActivity'
[WD Proxy] Proxying [GET /appium/device/pixel_ratio] to [GET http://127.0.0.1:8200/wd/hub/session/f9e034d8-1110-46da-b130-7443188e9e84/appium/device/pixel_ratio] with no body
[WD Proxy] Got response with status 200: {"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84","value":3}
[WD Proxy] Matched '/appium/device/system_bars' to command name 'getSystemBars'
[WD Proxy] Proxying [GET /appium/device/system_bars] to [GET http://127.0.0.1:8200/wd/hub/session/f9e034d8-1110-46da-b130-7443188e9e84/appium/device/system_bars] with no body
[WD Proxy] Got response with status 200: {"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84","value":{"statusBar":72}}
[WD Proxy] Matched '/window/current/size' to command name 'getWindowSize'
[WD Proxy] Proxying [GET /window/current/size] to [GET http://127.0.0.1:8200/wd/hub/session/f9e034d8-1110-46da-b130-7443188e9e84/window/current/size] with no body
[WD Proxy] Got response with status 200: {"sessionId":"f9e034d8-1110-46da-b130-7443188e9e84","value":{"height":1776,"width":1080}}
[Appium] New AndroidUiautomator2Driver session created successfully, session f23b2786-ada5-42b1-a5b3-fb1bac93f81d added to master session list
[BaseDriver] Event 'newSessionStarted' logged at 1618818653594 (00:50:53 GMT-0700 (Pacific Daylight Time))
[W3C (f23b2786)] Cached the protocol value 'W3C' for the new session f23b2786-ada5-42b1-a5b3-fb1bac93f81d
[W3C (f23b2786)] Responding to client with driver.createSession() result: {"capabilities":{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000},"browserName":"","platformName":"Android","appiumVersion":"1.20.2","platformVersion":"9","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","fullReset":true,"commandTimeout":10000,"newCommandTimeout":30000,"deviceUDID":"ZY224LGD28","appPackage":"com.example.appium_example","deviceApiLevel":28,"deviceScreenSize":"1080x1920","deviceScreenDensity":480,"deviceModel":"moto x4","deviceManufacturer":"motorola","pixelRatio":3,...
[HTTP] <-- POST /wd/hub/session 200 22630 ms - 1164
[HTTP] 
[HTTP] --> POST /wd/hub/session
[HTTP] {"capabilities":{"alwaysMatch":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500},"firstMatch":[{}]},"desiredCapabilities":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500}}
[W3C] Calling AppiumDriver.createSession() with args: [{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500},null,{"alwaysMatch":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500},"firstMatch":[{}]}]
[BaseDriver] Event 'newSessionRequested' logged at 1618818653695 (00:50:53 GMT-0700 (Pacific Daylight Time))
[BaseDriver] The following capabilities are not standard capabilities and should have an extension prefix:
[BaseDriver]   platformVersion
[BaseDriver]   deviceName
[BaseDriver]   app
[BaseDriver]   automationName
[BaseDriver]   retryBackoffTime
[Appium] Appium v1.20.2 creating new FlutterDriver (v0.0.25) session
[Appium] Applying relaxed security to 'FlutterDriver' as per server command line argument. All insecure features will be enabled unless explicitly disabled by --deny-insecure
[BaseDriver] Creating session with MJSONWP desired capabilities: {
[BaseDriver]   "platformName": "Android",
[BaseDriver]   "platformVersion": "9.0",
[BaseDriver]   "deviceName": "ZY224LGD28",
[BaseDriver]   "app": "/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk",
[BaseDriver]   "automationName": "Flutter",
[BaseDriver]   "retryBackoffTime": 500
[BaseDriver] }
[BaseDriver] Session created with session id: 492b6c04-f8b0-4ef1-84e8-0196dbefec6d
[FlutterDriver] Starting an Android proxy session
[BaseDriver] Creating session with MJSONWP desired capabilities: {
[BaseDriver]   "platformName": "Android",
[BaseDriver]   "platformVersion": "9.0",
[BaseDriver]   "deviceName": "ZY224LGD28",
[BaseDriver]   "app": "/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk",
[BaseDriver]   "automationName": "Flutter",
[BaseDriver]   "retryBackoffTime": 500,
[BaseDriver]   "newCommandTimeout": 0
[BaseDriver] }
[BaseDriver] The following capabilities were provided, but are not recognized by Appium:
[BaseDriver]   retryBackoffTime
[BaseDriver] Session created with session id: 1ab9e1d9-55d0-45ca-8e5f-e2e520143647
[BaseDriver] Using local app '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk'
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
[ADB] Package name: 'com.example.appium_example'
[ADB] Main activity name: 'com.example.appium_example.MainActivity'
[AndroidDriver] Parsed package and activity are: com.example.appium_example/com.example.appium_example.MainActivity
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
[ADB] Checking app cert for /Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk
[ADB] Starting apksigner: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bin/java -Xmx1024M -Xss1m -jar /Users/zerocool/Library/Android/sdk/build-tools/30.0.3/lib/apksigner.jar verify --print-certs /Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk
[ADB] apksigner stdout: Signer #1 certificate DN: C=US, O=Android, CN=Android Debug
[ADB] Signer #1 certificate SHA-256 digest: 335e1ee02391af361c6a43b7ea52585bedf55556059166d870f5a44bf7b26822
[ADB] Signer #1 certificate SHA-1 digest: a1c9ae9aa1f77c2bdc0db3cd7684b009aa577edf
[ADB] Signer #1 certificate MD5 digest: ad9bb2ca202ad48ed9c55e32b08a4cdb
[ADB] 
[ADB] '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk' is signed with a non-default certificate
[ADB] Getting install status for com.example.appium_example
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[ADB] 'com.example.appium_example' is installed
[ADB] Getting package info for 'com.example.appium_example'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[ADB] The version name of the installed 'com.example.appium_example' is greater or equal to the application version name ('1.0.0' >= '1.0.0')
[ADB] There is no need to install/upgrade '/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk'
[AndroidDriver] Performing fast reset on 'com.example.appium_example'
[ADB] Getting install status for com.example.appium_example
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[ADB] 'com.example.appium_example' is installed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop com.example.appium_example'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell pm clear com.example.appium_example'
[AndroidDriver] Performed fast reset on the installed 'com.example.appium_example' application (stop and clear)
[UiAutomator2] Performing shallow cleanup of automation leftovers
[UiAutomator2] The following obsolete sessions are still running: [null]
[UiAutomator2] Cleaning up the obsolete sessions
[Instrumentation] .
[Instrumentation] Time: 13.155
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
[UiAutomator2] The initialization of the instrumentation process took 4215ms
[WD Proxy] Matched '/session' to command name 'createSession'
[WD Proxy] Proxying [POST /session] to [POST http://127.0.0.1:8201/wd/hub/session] with body: {"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500,"newCommandTimeout":0},"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500,"newCommandTimeout":0,"deviceUDID":"ZY224LGD28","appPackage":"com.example.appium_example"}],"alwaysMatch":{}}}
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":{"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500,"newCommandTimeout":0},"platformName":"Android","platformVersion":"9.0","deviceName":"ZY224LGD28","app":"/Users/zerocool/Projects/github_wagnar/flutter_appium_js/build/app/outputs/flutter-apk/app-debug.apk","automationName":"Flutter","retryBackoffTime":500,"newCommandTimeout":0,"deviceUDID":"ZY224LGD28","appPackage":"com.example.appium_example"}],"alwaysMatch":{}},"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65"}}
[WD Proxy] Determined the downstream protocol as 'W3C'
[WD Proxy] Proxying [GET /appium/device/info] to [GET http://127.0.0.1:8201/wd/hub/session/144d974c-c22b-4dbb-bf9f-ff2ac2e03b65/appium/device/info] with no body
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":{"androidId":"6cbb33b169dd3512","apiVersion":"28","bluetooth":{"state":"OFF"},"brand":"motorola","carrierName":"","displayDensity":480,"locale":"en_US","manufacturer":"motorola","model":"moto x4","networks":[{"capabilities":{"SSID":null,"linkDownBandwidthKbps":1048576,"linkUpstreamBandwidthKbps":1048576,"networkCapabilities":"NET_CAPABILITY_NOT_METERED,NET_CAPABILITY_INTERNET,NET_CAPABILITY_NOT_RESTRICTED,NET_CAPABILITY_TRUSTED,NET_CAPABILITY_NOT_VPN,NET_CAPABILITY_VALIDATED,NET_CAPABILITY_NOT_ROAMING,NET_CAPABILITY_FOREGROUND,NET_CAPABILITY_NOT_CONGESTED,NET_CAPABILITY_NOT_SUSPENDED","signalStrength":-56,"transportTypes":"TRANSPORT_WIFI"},"detailedState":"CONNECTED","extraInfo":null,"isAvailable":true,"isConnected":true,"isFailover":false,"isRoaming":false,"state":"CONNECTED","subtype":0,"subtypeName":"","type":1,"typeName":"WIFI"}],"platformVersion":"9","realDisplaySize":"1080x1920","timeZone":"America/Los_Angeles"}}
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window'
[AndroidDriver] Screen already unlocked, doing nothing
[UiAutomator2] Starting 'com.example.appium_example/com.example.appium_example.MainActivity and waiting for 'com.example.appium_example/com.example.appium_example.MainActivity'
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am start -W -n com.example.appium_example/com.example.appium_example.MainActivity -S'
[ADB] Waiting up to 20000ms for activity matching pkg: 'com.example.appium_example' and activity: 'com.example.appium_example.MainActivity' to be focused
[ADB] Possible activities, to be checked: 'com.example.appium_example.MainActivity', 'com.example.appium_example.com.example.appium_example.MainActivity'
[ADB] Getting focused package and activity
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys window windows'
[ADB] Found package: 'com.example.appium_example' and fully qualified activity name : 'com.example.appium_example.MainActivity'
[WD Proxy] Proxying [GET /appium/device/pixel_ratio] to [GET http://127.0.0.1:8201/wd/hub/session/144d974c-c22b-4dbb-bf9f-ff2ac2e03b65/appium/device/pixel_ratio] with no body
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":3}
[WD Proxy] Matched '/appium/device/system_bars' to command name 'getSystemBars'
[WD Proxy] Proxying [GET /appium/device/system_bars] to [GET http://127.0.0.1:8201/wd/hub/session/144d974c-c22b-4dbb-bf9f-ff2ac2e03b65/appium/device/system_bars] with no body
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":{"statusBar":72}}
[WD Proxy] Matched '/window/current/size' to command name 'getWindowSize'
[WD Proxy] Proxying [GET /window/current/size] to [GET http://127.0.0.1:8201/wd/hub/session/144d974c-c22b-4dbb-bf9f-ff2ac2e03b65/window/current/size] with no body
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":{"height":1776,"width":1080}}
[FlutterDriver] /Users/zerocool/Library/Android/sdk/platform-tools/adb forward tcp:41625 tcp:41625
[FlutterDriver] Attempt #1
[FlutterDriver] Connecting to Dart Observatory: ws://127.0.0.1:41625/bFVwqp-FCSE=/ws
[FlutterDriver] Connected to ws://127.0.0.1:41625/bFVwqp-FCSE=/ws
[FlutterDriver] Listing all isolates: [{"type":"@Isolate","id":"isolates/1485280603618223","name":"main","number":"1485280603618223","isSystemIsolate":false}]
[Appium] New FlutterDriver session created successfully, session 492b6c04-f8b0-4ef1-84e8-0196dbefec6d added to master session list
[BaseDriver] Event 'newSessionStarted' logged at 1618818669826 (00:51:09 GMT-0700 (Pacific Daylight Time))
[MJSONWP (492b6c04)] Cached the protocol value 'MJSONWP' for the new session 492b6c04-f8b0-4ef1-84e8-0196dbefec6d
[MJSONWP (492b6c04)] Responding to client with driver.createSession() result: {"allowCors":false,"reboot":false,"ipa":null,"address":"0.0.0.0","port":4723,"basePath":"/wd/hub","keepAliveTimeout":null,"callbackAddress":null,"callbackPort":null,"bootstrapPort":4724,"backendRetries":3,"sessionOverride":false,"launch":false,"logFile":null,"loglevel":"debug","logTimestamp":false,"localTimezone":false,"logNoColors":false,"webhook":null,"safari":false,"defaultDevice":false,"forceIphone":false,"forceIpad":false,"automationTraceTemplatePath":null,"instrumentsPath":null,"nodeconfig":null,"robotAddress":"0.0.0.0","robotPort":-1,"chromedriverExecutable":null,"showConfig":false,"noPermsCheck":false,"enforceStrictCaps":false,"isolateSimDevice":false,"tmpDir":"/var/folders/f9/g516xmnn3q7ggp35ct23h93m0000gn/T","traceDir":null,"debugLogSpacing":false,"suppressKillServer":false,"longStacktrace":false,"webkitDebugProxyPort":27753,"wdaLocalPort":8100,"defaultCapabilities":{},"relaxedSecurityEnabled":true,"allowInsecure":[],"denyInsecure":[],"defaultCommandTimeout":60,"keepArtifacts":false,"platformName...
[HTTP] <-- POST /wd/hub/session 200 16132 ms - 2154
[HTTP] 
[HTTP] --> POST /wd/hub/session/492b6c04-f8b0-4ef1-84e8-0196dbefec6d/execute/sync
[HTTP] {"script":"flutter:checkHealth","args":[]}
[MJSONWP (492b6c04)] Calling AppiumDriver.execute() with args: ["flutter:checkHealth",[],"492b6c04-f8b0-4ef1-84e8-0196dbefec6d"]
[FlutterDriver] Executing Flutter driver command 'execute'
[FlutterDriver] >>> {"command":"get_health"}
[FlutterDriver] <<< {"isError":false,"response":{"status":"ok"},"type":"_extensionType","method":"ext.flutter.driver"} | previous command get_health
[MJSONWP (492b6c04)] Responding to client with driver.execute() result: "ok"
[HTTP] <-- POST /wd/hub/session/492b6c04-f8b0-4ef1-84e8-0196dbefec6d/execute/sync 200 2716 ms - 76
[HTTP] 
[HTTP] --> DELETE /wd/hub/session/492b6c04-f8b0-4ef1-84e8-0196dbefec6d
[HTTP] {}
[MJSONWP (492b6c04)] Calling AppiumDriver.deleteSession() with args: ["492b6c04-f8b0-4ef1-84e8-0196dbefec6d"]
[BaseDriver] Event 'quitSessionRequested' logged at 1618818672602 (00:51:12 GMT-0700 (Pacific Daylight Time))
[Appium] Removing session 492b6c04-f8b0-4ef1-84e8-0196dbefec6d from our master session list
[FlutterDriver] Deleting Flutter Driver session
[UiAutomator2] Deleting UiAutomator2 session
[UiAutomator2] Deleting UiAutomator2 server session
[WD Proxy] Matched '/' to command name 'deleteSession'
[WD Proxy] Proxying [DELETE /] to [DELETE http://127.0.0.1:8201/wd/hub/session/144d974c-c22b-4dbb-bf9f-ff2ac2e03b65] with no body
[HTTP] --> DELETE /wd/hub/session/f23b2786-ada5-42b1-a5b3-fb1bac93f81d
[HTTP] {}
[W3C (f23b2786)] Calling AppiumDriver.deleteSession() with args: ["f23b2786-ada5-42b1-a5b3-fb1bac93f81d"]
[BaseDriver] Event 'quitSessionRequested' logged at 1618818672609 (00:51:12 GMT-0700 (Pacific Daylight Time))
[Appium] Removing session f23b2786-ada5-42b1-a5b3-fb1bac93f81d from our master session list
[UiAutomator2] Deleting UiAutomator2 session
[UiAutomator2] Deleting UiAutomator2 server session
[UiAutomator2] Did not get confirmation UiAutomator2 deleteSession worked; Error was: UnknownError: An unknown server-side error occurred while processing the command. Original error: 'DELETE /' cannot be proxied to UiAutomator2 server because the instrumentation process is not running (probably crashed). Check the server log and/or the logcat output for more details
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop com.example.appium_example'
[WD Proxy] Got response with status 200: {"sessionId":"144d974c-c22b-4dbb-bf9f-ff2ac2e03b65","value":null}
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop com.example.appium_example'
[UiAutomator2] Capability 'fullReset' set to 'true', Uninstalling 'com.example.appium_example'
[ADB] Uninstalling com.example.appium_example
[ADB] Getting install status for com.example.appium_example
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell dumpsys package com.example.appium_example'
[Logcat] Stopping logcat capture
[ADB] Removing forwarded port socket connection: 8201 
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 forward --remove tcp:8201'
[UiAutomator2] Restoring hidden api policy to the device default configuration
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'settings delete global hidden_api_policy_pre_p_apps;settings delete global hidden_api_policy_p_apps;settings delete global hidden_api_policy''
[ADB] 'com.example.appium_example' is installed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell am force-stop com.example.appium_example'
[FlutterDriver] Connection to ws://127.0.0.1:41625/bFVwqp-FCSE=/ws closed
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 uninstall com.example.appium_example'
[BaseDriver] Event 'quitSessionFinished' logged at 1618818673079 (00:51:13 GMT-0700 (Pacific Daylight Time))
[MJSONWP (492b6c04)] Received response: null
[MJSONWP (492b6c04)] But deleting session, so not returning
[MJSONWP (492b6c04)] Responding to client with driver.deleteSession() result: null
[HTTP] <-- DELETE /wd/hub/session/492b6c04-f8b0-4ef1-84e8-0196dbefec6d 200 481 ms - 76
[HTTP] 
[ADB] 'adb uninstall com.example.appium_example' command output: Success
[ADB] com.example.appium_example was successfully uninstalled
[Logcat] Stopping logcat capture
[ADB] Removing forwarded port socket connection: 8200 
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 forward --remove tcp:8200'
[UiAutomator2] Restoring hidden api policy to the device default configuration
[ADB] Running '/Users/zerocool/Library/Android/sdk/platform-tools/adb -P 5037 -s ZY224LGD28 shell 'settings delete global hidden_api_policy_pre_p_apps;settings delete global hidden_api_policy_p_apps;settings delete global hidden_api_policy''
[Instrumentation] .
[BaseDriver] Event 'quitSessionFinished' logged at 1618818673732 (00:51:13 GMT-0700 (Pacific Daylight Time))
[W3C (f23b2786)] Received response: null
[W3C (f23b2786)] But deleting session, so not returning
[W3C (f23b2786)] Responding to client with driver.deleteSession() result: null
[HTTP] <-- DELETE /wd/hub/session/f23b2786-ada5-42b1-a5b3-fb1bac93f81d 200 1125 ms - 14
[HTTP] 
[Instrumentation] Time: 9.131
[Instrumentation] 
[Instrumentation] OK (1 test)
[Instrumentation] The process has exited with code 0