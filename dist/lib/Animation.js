"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var drawFrame = require('./drawFrame');
var blankMatrix = require('./blankMatrix');
var clear = require('./clear');
var defaultDuration = 10000;
var defaultFrameRate = 100;
var assert = require('assert').ok;

/**
 * The animation class creates a new animation by setting a timeout and clearing it after a given duration.
 * Use the addSymbol method to add symbols you create to the animation. Each one will be updated each frame.
 * When you call the start method the animation will begin. Your callback will be invoked when the animation completes.
 * In this way you can chain animations together.
 */

var Animation = (function () {
    function Animation() {
        _classCallCheck(this, Animation);

        this._duration = defaultDuration;
        this._frameRate = defaultFrameRate;
        this._timeout = null;
        this.symbols = {};
    }

    _createClass(Animation, [{
        key: 'addSymbol',
        value: function addSymbol(key, symbol) {
            this.symbols[key] = symbol;
        }

        // TODO !!!! return a promise here so the programmer can do something else.

    }, {
        key: 'start',
        value: function start(callback) {
            var _this = this;

            this._timeout = setInterval(function () {
                var m = blankMatrix();

                for (var key in _this.symbols) {
                    _this.symbols[key].updatePosition();
                    _this.symbols[key].setInMatrix(m);
                }
                // TODO : what's in ES6 for this? isn't there a thing???
                //this.symbols.each((symbol, key) => {
                //    symbol.updatePosition();
                //    symbol.setInMatrix(m);
                //});

                clear();
                drawFrame(m);
            }, this.frameRate);

            setTimeout(function () {
                clearInterval(_this._timeout);
                if (typeof callback === 'function') {
                    callback(_this);
                }
            }, this.duration);
        }
    }, {
        key: 'duration',
        set: function set(n) {
            assert(typeof n === 'number', 'The argument you provided for duration must be numeric.');
            this._duration = n;
        },
        get: function get() {
            return this._duration;
        }
    }, {
        key: 'frameRate',
        set: function set(n) {
            assert(typeof n === 'number', 'The argument you provided for frameRate must be numeric.');
            this._frameRate = n;
        },
        get: function get() {
            return this._frameRate;
        }
    }]);

    return Animation;
})();

module.exports = Animation;