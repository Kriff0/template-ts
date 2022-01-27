"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
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
exports.Button = Button;
