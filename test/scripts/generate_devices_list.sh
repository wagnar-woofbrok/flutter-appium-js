#!/usr/bin/env bash

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
#   generate list of devices and confiruation
# ############################################
index=0
# list_of_devices=[]
# cd android

# Android adb cli-tool is required!
if ! command -v adb &> /dev/null
then
    echo "Android adb cli-tool could not be found! \n"
    echo "Please install Android Studio and check your PATH for ANDROID_HOME.  \n"
    echo "On OS X, this is usually in \n"
    echo "      /Users/$(whoami)/Library/Android/sdk/platform-tool  \n"
    exit
fi

# NOTE: Output all but first line from command into a file.
# First line is always "List of devices attached" and can be
# ignored for use in automation scripts.
mkdir -p test/tmp/
rm test/tmp/devices.txt
# adb devices | sed '1 d' > test/tmp/devices.txt
# Parse the command '$adb devices' for only the device identifiers
#   and exclude empty lines as well.
adb devices | sed '1 d' | awk '{ print $1}' | grep . > test/tmp/devices.txt

# Loop/Read each non-empty line of the devices.txt file
# and create an Appium-Capabilities object for a test 
# device
# while read -r line; do 
#     echo $line
# done < <(cat test/tmp/devices.txt | awk '{ print $1}' | grep .)


# ############################################
# Appium Server(s)
#   1 server instance per connected device
# ############################################
# p_temp="$(grep -i "port =" android/"$i"/appium.txt)" #retrieving the port for starting the appium session
# p=${p_temp#*port = }
# bp=$(($p + 1000))

# log_file="features/reports/appium_logs_"$i"_$RANDOM.txt" #creating appium log file for each device
# echo "Appium logs saved to $log_file."
# sleep 2

# appium -p "$p" -bp "$bp" -U "$i" >> "$log_file" 2>&1 & # starting appium on desired port and saving logs in the corresponding log file
# sleep 2


# ############################################
# Appium Client(s)
# ############################################
# for i in "${list_of_devices[@]}"
#   do
#    cucumber platform=android device_type="$device_type" devices="$i" -t @my_test -f html -o features/reports/"$i".html &
#   done

# wait_value=$(($index+1))

# for (( c=1; c<=$(($index)); c++ ))
# do
#   wait %$wait_value
#   ((wait_value++))

# done


# for f in *; do
#     if [ -d ${f} ]; then
#         echo  "device found: $f"
#     fi

# #        if [ grep -q "$f" devices.txt ]; then
# #             echo   "device found: $f"
# #             list_of_devices["$index"]="$f"
# #             ((index++))
# #         fi
# #     fi
# done