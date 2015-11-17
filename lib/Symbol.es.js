"use strict";

const defaultCharacter = '+';
const blankMatrix = require('./blankMatrix');

/**
 * The symbol represents a single symbol matrix or a set of symbol matrices.
 * The update method accepts the blankMatrix and updates it's own position within the screen depending on it's
 * direction of travel.
 * @type {{}}
 */
class Symbol {

    constructor () {
        this.symbolMatrix = null;
        this._character = null;
        this.character = defaultCharacter;
        this.registered = false;
        this.x = 0;
        this.y = 0;
    }

    get character () {
        return this._character;
    }

    set character (c) {
        this._character = c;
    }

    register (m) {
        this.registered = true;
        this.symbolMatrix = m;
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
        this.x++;
        this.y++;
    }

    /**
     * Accepts a blank matrix and sets it's position within the matrix.
     * @param blankMatrix
     * @returns {*}
     */
    setPosition (blankMatrix) {
        if (this.registered === false) {
            throw new Error('Each symbol must be registered before using.');
        }
        return this._placeSymbol(blankMatrix, this.symbolMatrix, this.x, this.y, this.character);
    }

    // places a symbol within a blank matrix based on the top left position (x, y)

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

};

module.exports = Symbol;