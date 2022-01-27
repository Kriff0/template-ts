var get_name;
var get_state;
var set_name;
var set_state;
var press_button;
var get_hour;
var get_minute;
var get_second;
var set_hour;
var set_minute;
var set_second;
var get_screen_lighting;
var change_light;
var change_mode;
var increase;
var loop;
var Button = /** @class */ (function () {
    function Button(n, s) {
        this._name = n;
        this._state = s;
    }
    Object.defineProperty(Button.prototype, "get_name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "get_state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "set_name", {
        set: function (new_name) {
            this._name = new_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "set_state", {
        set: function (new_state) {
            this._state = new_state;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
var Watch = /** @class */ (function () {
    function Watch(h, m, s) {
        var _this = this;
        //Buttons
        this.mode_button = new Button('Mode', 0);
        this.increase_button = new Button('Increase', 0);
        this.light_button = new Button('Light', 0);
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
var myWatch = new Watch(hour, minute, second);
var modeButton = document.querySelector('#button_mode');
var increaseButton = document.querySelector('#button_increase');
var lightButton = document.querySelector('#button_light');
setInterval(loop, 1000);
