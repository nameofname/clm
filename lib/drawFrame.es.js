"use strict";

const clear = require('./clear');
const size = require('./size');
const height = size().height;
let t;

/**
 * Takes the matrix object and draws a frame.
 */
function frame (m) {
    for (var i=0; i < height; i++) {
        console.log(m[i].join(''));
    }
}

function start (matrix) {
    t = setInterval(() => {
        clear();
        frame(matrix);
    }, 1000);
}

function stop () {
    clearInterval(t);
}

module.exports = {
    start : start,
    stop : stop
};
