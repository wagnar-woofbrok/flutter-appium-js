#!/usr/bin/env bash
# Runs device detection and configuration for WDIO test passes.

# placeholders="value one"
# different="value two"
# here="value three"
# there="value four"

# cat <<-_EOT_
# I have some
# text with ${placeholders}
# in this and some ${different}
# ones ${here} and ${there}.
# _EOT_

# function createAppiumDevice() {}

# ############################################
# Devices
# ############################################
#   generate list of devices and confiruation
# generate_devices_list.sh
# Android adb cli-tool is required!
if ! command -v adb &> /dev/null; then
    echo "Android adb cli-tool could not be found! \n"
    echo "Please install Android Studio and check your PATH for ANDROID_HOME.  \n"
    echo "On OS X, this is usually in \n"
    echo "      /Users/$(whoami)/Library/Android/sdk/platform-tool  \n"
    exit
fi

mkdir -p test/tmp/
rm test/tmp/devices.txt
# adb devices | sed '1 d' > test/tmp/devices.txt
# Parse the command '$adb devices' for only the device identifiers
#   and exclude empty lines as well.
adb devices | sed '1 d' | awk '{ print $1}' | grep . > test/tmp/devices.txt

# TODO
#   ALSO list iOS devices or emulators!
#   generate capabilities for each device (required for Appium to configure webdriver)

# node test/e2e/template_engine.js ... ???
    # template -> wdio.conf.DEVICE.js file forEach device? multiple wdio instances with configured reporters?
    #    require appium-service to spawn appium with ... ?
    #   OR
    #    appium ... CLI before/after running tests
    # write out caps objects to be read into wdio... how to then associate multiple appium servers???

    # Docker-Selenium-Grid-Appium
    # ISSUE: connecting USB devices to docker (machine) container!
    # (?) selenium-grid docker for each Appium Server instance?
    #   => docker-compose.yml ST 1 appium/appium container PER device

# ############################################
# Appium
# ############################################
#   start Appium server instances with unique ports for each device (if parallel device testing)
if [ count of devices > 0 ]; then
    echo "PARALLEL Device Testing"

    # Loop/Read each non-empty line of the devices.txt file
    # and create an Appium-Capabilities object for a test 
    # device
    # while read -r line; do 
    #     echo $line
    # done < <(cat test/tmp/devices.txt | awk '{ print $1}' | grep .)
else
    echo "SINGLE Device Testing"
    # Start single Appium server instance for device
    appium --address 0.0.0.0 --port 4723 
        # add stringify caps{} ?
fi


# ############################################
# WebDriverIO / Test Runner
# ############################################
#   run tests, get reports, profit!

# npx run wdio wdio.conf.js