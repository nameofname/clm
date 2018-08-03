"use strict";

/**
 * Takes the matrix array and draws a frame.
 */
function frame (mx) {
    const message = mx.reduce((str, row) => {
        return !str ? row.join('') : `${str}\r\n${row.join('')}`;
    }, '');
    process.stdout.write('\x1Bc');
    process.stdout.write(message);
}

module.exports = frame;