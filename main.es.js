"use strict";

const drawFrame = require('./lib/drawFrame');
const matrix = require('./lib/matrix');
//const one = require('./symbols/alphaNumeric/1');
const one = require('./symbols/alphaNumeric/a');

// start the frames then stop after 5 seconds :
drawFrame.start(matrix([one]));
setTimeout(() => {
    drawFrame.stop();
}, 5000);