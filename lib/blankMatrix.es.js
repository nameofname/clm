"use strict";

const size = require('./size');
const width = size().width;
const height = size().height;


/**
 * Generates a new blank matrix that fits nicely into your terminal window
 * @returns {Array}
 */
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


module.exports = blankMatrix;
