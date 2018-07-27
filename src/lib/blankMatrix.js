"use strict";

const size = require('./size')();
const { width: defaultWidth, height: defaultHeight } = size;

/**
 * Generates a new blank matrix that fits nicely into your terminal window
 * @param width <number> - defaults to terminal columns
 * @param height <number> - defaults to terminal rows
 * @returns {Array}
 */
const blankMatrix = (width, height) => {
    const matrix = [];
    width = width || defaultWidth;
    height = height|| defaultHeight;

    for (var i=0; i <= height; i++) {
        let arr = [];
        for (var j=0; j <= width; j++) {
            arr.push(' ');
        }
        matrix.push(arr)
    }
    return matrix;
};


module.exports = blankMatrix;
