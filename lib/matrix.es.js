"use strict";

const size = require('./size');
const width = size().width;
const height = size().height;
const character = '+'; // todo : the user should be able to update this value with a setter.
let matrix;

// generates a new blank matrix
const blankMatrix = () => {
    const matrix = [];
    for (var i=0; i<height; i++) {
        let arr = [];
        for (var j=0; j <= width; j++) {
            arr.push(' ');
        }
        matrix.push(arr)
    }
    return matrix;
};

// places a symbol within the matrix based on the top left position (x, y)
const placeSymbol = (sym, x, y) => {
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
                matrix[y2][x2] = character;
            }
        });
    });
};

/**
 * Generates the matrix 2-dim array.
 * @param symbols <array> an array of symbols to chain together in the matrix.
 * @returns {Array}
 */
module.exports = symbols => {
    matrix = blankMatrix();

    // TODO :
    // just mocking this out for now - in the future I will be able to register many symbols and move them in a given
    // direction frame after frame. At this point, I just put the first symbol top left.
    placeSymbol(symbols[0], 0, 0);

    return matrix;
};

