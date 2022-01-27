"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
var button_js_1 = require("./button.js");
var Watch = /** @class */ (function () {
    function Watch(h, m, s) {
        var _this = this;
        //Buttons
        this.mode_button = new button_js_1.Button('Mode', 0);
        this.increase_button = new button_js_1.Button('Increase', 0);
        this.light_button = new button_js_1.Button('Light', 0);
        //functions :
        this.change_light = function () {
            //this.change_screen_lighting;
            //this._screen = !this.get_screen_lighting;
            _this._screen = true;
        };
        this.change_mode = function () {
            var state = _this.mode_button.get_state;
            if (state < 2) {
                _this.mode_button.set_state = state + 1;
            }
            else {
                _this.mode_button.set_state = 0;
            }
        };
        this.increase = function () {
            var mode_state = _this.mode_button.get_state;
            var hour = _this.get_hour;
            var minute = _this.get_minute;
            if (mode_state == 0) {
                console.log("hour");
                if (hour == 23) {
                    _this.set_hour = 0;
                }
                else {
                    _this.set_hour = hour + 1;
                }
            }
            if (mode_state == 1) {
                console.log("minute");
                if (minute == 59) {
                    _this.set_hour = hour + 1;
                    _this.set_minute = 0;
                }
                else {
                    _this.set_minute = minute + 1;
                }
            }
        };
        this._hour = h;
        this._minute = m;
        this._second = s;
        this._screen = false; //the screen is not lighted    
    }
    Object.defineProperty(Watch.prototype, "get_hour", {
        get: function () {
            return this._hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "get_minute", {
        get: function () {
            return this._minute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "get_second", {
        get: function () {
            return this._second;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "get_screen_lighting", {
        get: function () {
            return this._screen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "set_hour", {
        set: function (new_hour) {
            this._hour = new_hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "set_minute", {
        set: function (new_minute) {
            this._minute = new_minute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Watch.prototype, "set_second", {
        set: function (new_second) {
            this._second = new_second;
        },
        enumerable: false,
        configurable: true
    });
    return Watch;
}());
exports.Watch = Watch;
