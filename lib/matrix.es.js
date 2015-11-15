"use strict";

const size = require('./size');
const width = size().width;
const height = size().height;

/**
 * Generates the matrix 2-dim array.
 * @returns {Array}
 */
module.exports = () => {
    const matrix = [];
    for (var i=0; i<height; i++) {
        let arr = [];
        for (var j=0; j<=width-1; j++) {
            arr.push('*');
        }
        matrix.push(arr)
    }
    return matrix;
};

