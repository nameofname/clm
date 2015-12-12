"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultCharacter = '+';
var blankMatrix = require('./blankMatrix');
var alphaMap = require('./alphaMap');
var size = require('./size');
var assert = require('assert').ok;

/**
 * The symbol represents a single symbol matrix or a set of symbol matrices.
 * The update method accepts the blankMatrix and updates it's own position within the screen depending on it's
 * direction of travel.
 * @type {{}}
 */

var Symbol = (function () {
    function Symbol() {
        _classCallCheck(this, Symbol);

        this.symbolMatrix = null;
        this.character = defaultCharacter;
        this.registered = false;
        this._x = 0;
        this._y = 0;
        this._xOffset = 0;
        this._yOffset = 0;
    }

    _createClass(Symbol, [{
        key: '_isNumber',
        value: function _isNumber(n) {
            assert(typeof n === 'number', 'The argument provided was not numeric.');
        }

        /**
         * Sets the position and offsets so that the symbol will move across the screen as a marquee.
         * @param direction
         * @param speed
         */

    }, {
        key: 'setAsMarquee',
        value: function setAsMarquee(direction, speed) {
            direction = direction || 'left';
            speed = speed || 5;
            var xOffset = direction === 'right' ? speed : -1 * speed;

            this.y = 0;
            this.yOffset = 0;
            this.xOffset = xOffset;
            if (direction === 'right') {
                this.x = this.symbolMatrix[0].length * -1;
            } else {
                this.x = size().width;
            }
        }

        /**
         * Registers the passed matrix as the symbol.
         * @param m
         */

    }, {
        key: 'register',
        value: function register(m) {
            this.registered = true;
            this.symbolMatrix = m;
        }

        /**
         * Breaks up a string into symbols and registers as a sequence.
         * @param str
         * @returns {*}
         */

    }, {
        key: 'registerString',
        value: function registerString(str) {
            var arr = str.split('');
            var out = [];
            arr.forEach(function (char) {
                char = char.toLowerCase();
                if (alphaMap[char]) {
                    out.push(alphaMap[char]);
                }
            });
            return this.registerSequence(out);
        }

        /**
         * Joins together many symbols into a string of symbols (matrices)
         * @param matrixArray <array> an array of matrices. So, an array of arrays of arrays. Boom.
         */

    }, {
        key: 'registerSequence',
        value: function registerSequence(matrixArray) {
            var _this = this;

            var width = 0;
            var height = 0;
            var matrix = undefined;
            var currOffset = 0;

            matrixArray.forEach(function (arr) {
                var w = arr[0].length;
                var h = arr.length;
                width += w;
                height = height < h ? h : height;
            });
            matrix = blankMatrix(width, height);

            matrixArray.forEach(function (arr) {
                _this._placeSymbol(matrix, arr, currOffset, 0, true);
                currOffset += arr[0].length;
            });
            this.register(matrix);
        }

        /**
         * Update the position (top, left) of the symbol
         */

    }, {
        key: 'updatePosition',
        value: function updatePosition() {
            this.x += this._xOffset;
            this.y += this._yOffset;
        }

        /**
         * Accepts a blank matrix and sets it's position within the matrix.
         * @param blankMatrix
         * @returns {*}
         */

    }, {
        key: 'setInMatrix',
        value: function setInMatrix(blankMatrix) {
            assert(this.registered === true, 'Each symbol must be registered before using.');
            return this._placeSymbol(blankMatrix, this.symbolMatrix, this.x, this.y, this.character);
        }

        /**
         * This helper accepts a blank matrix and places a symbol into it.
         * Used to place the symbol's symbolMatrix into the blank matrix that is the terminal screen and also useful for
         * combining many symbols into 1 symbol as in registerSequence
         * @param blankMatrix <array> the matrix to place the symbol into (matrix)
         * @param symbol <array> the symbol to place into the blank matrix (matrix)
         * @param x <number> the x offset
         * @param y <number> the y offset
         * @param value-  the positive value to fill in in the blank matrix
         * @private
         */

    }, {
        key: '_placeSymbol',
        value: function _placeSymbol(blankMatrix, symbol, x, y, value) {
            symbol.forEach(function (yArr, y1) {
                var y2 = y1 + y;

                yArr.forEach(function (point, x1) {
                    var x2 = x1 + x;
                    var blankPoint = blankMatrix[y2];
                    if (blankPoint === undefined) {
                        return;
                    }
                    blankPoint = blankPoint[x2];
                    if (blankPoint && point === true) {
                        blankMatrix[y2][x2] = value;
                    }
                });
            });
        }
    }, {
        key: 'character',
        get: function get() {
            return this._character;
        },
        set: function set(c) {
            assert(c.length === 1, 'The length of the Symbol character must equal 1');
            this._character = c;
        }

        // Getters / Setters for x and y

    }, {
        key: 'x',
        set: function set(x) {
            this._isNumber(x);
            this._x = x;
        },
        get: function get() {
            return this._x;
        }
    }, {
        key: 'y',
        set: function set(y) {
            this._isNumber(y);
            this._y = y;
        },
        get: function get() {
            return this._y;
        }

        // Getters / Setters for x / y offsets

    }, {
        key: 'xOffset',
        set: function set(xOffset) {
            this._xOffset = xOffset;
        },
        get: function get() {
            return this._xOffset;
        }
    }, {
        key: 'yOffset',
        set: function set(yOffset) {
            this._yOffset = yOffset;
        },
        get: function get() {
            return this._yOffset;
        }
    }]);

    return Symbol;
})();

module.exports = Symbol;