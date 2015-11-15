"use strict";

const drawFrame = require('./lib/drawFrame');
const matrix = require('./lib/matrix');

// start the frames then stop after 5 seconds :
drawFrame.start(matrix());
setTimeout(() => {
    drawFrame.stop();
}, 5000);