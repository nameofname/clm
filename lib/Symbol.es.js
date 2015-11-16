"use strict";

const defaultCharacter = '+';

/**
 * The symbol represents a single symbol matrix or a set of symbol matrices.
 * The update method accepts the blankMatrix and updates it's own position within the screen depending on it's
 * direction of travel.
 * @type {{}}
 */
class Symbol {

    constructor () {
        this.matrix = null;
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
        this.matrix = m;
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
        return this._placeSymbol(blankMatrix, this.x, this.y);
    }

    // places a symbol within the matrix based on the top left position (x, y)
    _placeSymbol (matrix, x, y) {
        const sym = this.matrix;

        sym.forEach((yArr, y1) => {
            const y2 = y1 + y;

            yArr.forEach((point, x1) => {
                const x2 = x1 + x;
                let matrixPoint = matrix[y2];
                if (matrixPoint === undefined) {
                    return;
                }
                matrixPoint = matrixPoint[x2];
                if (matrixPoint && point === true) {
                    matrix[y2][x2] = this.character;
                }
            });
        });
    };

};

module.exports = Symbol;