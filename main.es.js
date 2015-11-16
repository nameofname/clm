"use strict";

const drawFrame = require('./lib/drawFrame');
const matrix = require('./lib/matrix');
const one = require('./symbols/alphaNumeric/1');

// start the frames then stop after 5 seconds :
drawFrame.start(matrix([one]));
setTimeout(() => {
    drawFrame.stop();
}, 5000);