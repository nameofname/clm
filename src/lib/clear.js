"use strict";

var size = require('./size');

/**
 * Clears the screen
 */
module.exports = () => {
    process.stdout.write('\x1Bc')
};