"use strict";

let size;

/**
 * Gets the terminal size
 * @returns {{width: *, height}}
 */
module.exports = () => {
    size = size || process.stdout.getWindowSize();
    return {
        width : size[0],
        height : size[1]
    }
};