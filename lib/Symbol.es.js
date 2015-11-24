"use strict";

const defaultCharacter = '+';
const blankMatrix = require('./blankMatrix');
const alphaMap = require('./alphaMap');
const size = require('./size');

/**
 * The symbol represents a single symbol matrix or a set of symbol matrices.
 * The update method accepts the blankMatrix and updates it's own position within the screen depending on it's
 * direction of travel.
 * @type {{}}
 */
class Symbol {

    constructor () {
        this.symbolMatrix = null;
        //this._character = null;
        this.character = defaultCharacter;
        this.registered = false;
        this._x = 0;
        this._y = 0;
        this._xOffset = 0;
        this._yOffset = 0;
    }

    get character () { return this._character; }
    set character (c) {
        if (c.length !== 1){
            throw new Error('The length of the Symbol character must equal 1');
        }
        this._character = c;
    }

    // Getters / Setters for x and y
    set x (x) {
        this._isNumber(x);
        this._x = x;
    }
    set y (y) {
        this._isNumber(y);
        this._y = y;
    }
    get x () { return this._x; }
    get y () { return this._y; }

    // Getters / Setters for x / y offsets
    set xOffset (xOffset) { this._xOffset = xOffset; }
    set yOffset (yOffset) { this._yOffset = yOffset; }
    get xOffset () { return this._xOffset; }
    get yOffset () { return this._yOffset; }

    _isNumber (n) {
        if (!typeof x === 'number') {
            throw new Error('setPosition requires 2 numeric arguments');
        }
    }

    /**
     * Sets the position and offsets so that the symbol will move across the screen as a marquee.
     * @param direction
     * @param speed
     */
    setAsMarquee (direction, speed) {
        direction = direction || 'left';
        speed = speed || 2;
        const xOffset = (direction === 'right') ? speed : -1 * speed;

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
    register (m) {
        this.registered = true;
        this.symbolMatrix = m;
    }

    /**
     * Breaks up a string into symbols and registers as a sequence.
     * @param str
     * @returns {*}
     */
    registerString (str) {
        const arr = str.split('');
        const out = [];
        arr.forEach(char => {
            char = char.toLowerCase();
            if (alphaMap[char]) {
                out.push(alphaMap[char])
            }
        });
        return this.registerSequence(out);
    }

    /**
     * Joins together many symbols into a string of symbols (matrices)
     * @param matrixArray <array> an array of matrices. So, an array of arrays of arrays. Boom.
     */
    registerSequence (matrixArray) {
        let width = 0;
        let height = 0;
        let matrix;
        let currOffset = 0;

        matrixArray.forEach(arr => {
            const w = arr[0].length;
            const h = arr.length;
            width += w;
            height = height < h ? h : height;
        });
        matrix = blankMatrix(width, height);

        matrixArray.forEach(arr => {
            this._placeSymbol(matrix, arr, currOffset, 0, true);
            currOffset += arr[0].length;
        });
        this.register(matrix);
    }

    /**
     * Update the position (top, left) of the symbol
     */
    updatePosition () {
        this.x += this._xOffset;
        this.y += this._yOffset;
    }

    /**
     * Accepts a blank matrix and sets it's position within the matrix.
     * @param blankMatrix
     * @returns {*}
     */
    setInMatrix (blankMatrix) {
        if (this.registered === false) {
            throw new Error('Each symbol must be registered before using.');
        }
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
    _placeSymbol (blankMatrix, symbol, x, y, value) {
        symbol.forEach((yArr, y1) => {
            const y2 = y1 + y;

            yArr.forEach((point, x1) => {
                const x2 = x1 + x;
                let blankPoint = blankMatrix[y2];
                if (blankPoint === undefined) {
                    return;
                }
                blankPoint = blankPoint[x2];
                if (blankPoint && point === true) {
                    blankMatrix[y2][x2] = value;
                }
            });
        });
    };

}

module.exports = Symbol;
