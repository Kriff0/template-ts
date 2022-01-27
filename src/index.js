"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var watch_1 = require("./classes/watch");
var loop;
loop = function () {
    hour = myWatch.get_hour;
    minute = myWatch.get_minute;
    second = myWatch.get_second;
    if (second == 59) {
        if (minute == 59) {
            if (hour == 23) {
                myWatch.set_hour = 0;
            }
            else {
                myWatch.set_hour = hour + 1;
            }
            myWatch.set_minute = 0;
        }
        else {
            myWatch.set_minute = minute + 1;
        }
        myWatch.set_second = 0;
    }
    else {
        myWatch.set_second = second + 1;
    }
    document.getElementById('hours').innerHTML = hour.toLocaleString();
    if (hour < 10) {
        document.getElementById('hours').innerHTML = '0' + hour.toLocaleString();
    }
    document.getElementById('minutes').innerHTML = minute.toLocaleString();
    if (minute < 10) {
        document.getElementById('minutes').innerHTML = '0' + minute.toLocaleString();
    }
    document.getElementById('seconds').innerHTML = second.toLocaleString();
    if (second < 10) {
        document.getElementById('seconds').innerHTML = '0' + second.toLocaleString();
    }
    lightButton.addEventListener('click', function (e) { return myWatch.change_light(); });
    modeButton.addEventListener('click', function (e) { return myWatch.change_mode(); });
    increaseButton.addEventListener('click', function (e) { return myWatch.increase(); });
    console.log(myWatch.mode_button.get_state);
    console.log(myWatch.get_screen_lighting);
};
var time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();
var myWatch = new watch_1.Watch(hour, minute, second);
var modeButton = document.querySelector('#button_mode');
var increaseButton = document.querySelector('#button_increase');
var lightButton = document.querySelector('#button_light');
setInterval(loop, 1000);
