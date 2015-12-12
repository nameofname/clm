"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = require('./animation');
var Symbol = require('./Symbol');
var size = require('./size');
var defaultDuration = 5000;

/**
 * A Controller class for animations.
 * Totally chain-able. Seamlessly adds symbols to an animation with convenient setters and getters.
 */

var Controller = (function () {
    function Controller() {
        _classCallCheck(this, Controller);

        this.animation = new Animation();
        this.animation.duration = defaultDuration;
        this.symbols = [];
    }

    _createClass(Controller, [{
        key: 'setString',
        value: function setString(text) {
            var s = new Symbol();
            s.registerString(text);
            this.symbols.push(s);
            this.animation.addSymbol(this.symbols.length, s);
            return this;
        }

        //setSybol () {}

        // speed setter :
    }, {
        key: 'setFrameRate',
        value: function setFrameRate(speed) {
            this.animation.frameRate = speed;
            return this;
        }
    }, {
        key: 'setDuration',
        value: function setDuration(d) {
            this.animation.duration = d;
            return this;
        }

        // starting position setters :
    }, {
        key: 'setStartingPosition',
        value: function setStartingPosition(x, y) {
            this._currSymbol.x = x;
            this._currSymbol.y = y;
            return this;
        }
    }, {
        key: 'setTopLeft',
        value: function setTopLeft() {
            return this.setStartingPosition(0, 0);
        }
    }, {
        key: 'setTopRight',
        value: function setTopRight() {
            return this.setStartingPosition(size().width, 0);
        }
    }, {
        key: 'setBottomLeft',
        value: function setBottomLeft() {
            return this.setStartingPosition(0, size().height);
        }
    }, {
        key: 'setBottomRight',
        value: function setBottomRight() {
            var s = size();
            return this.setStartingPosition(s.width, s.height);
        }

        // direction setters :
    }, {
        key: 'setXOffset',
        value: function setXOffset(o) {
            this._currSymbol.xOffset = o;
            return this;
        }
    }, {
        key: 'setYOffset',
        value: function setYOffset(o) {
            this._currSymbol.yOffset = o;
            return this;
        }
    }, {
        key: 'go',
        value: function go() {
            return this.animation.start();
        }
    }, {
        key: '_currSymbol',
        get: function get() {
            return this.symbols[this.symbols.length - 1];
        }
    }]);

    return Controller;
})();

module.exports = Controller;