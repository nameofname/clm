"use strict";

const height = require('./size')().height;

/**
 * Takes the matrix array and draws a frame.
 */
function frame (m) {
    for (var i=0; i < height; i++) {
        console.log(m[i].join(''));
    }
}

module.exports = frame;
