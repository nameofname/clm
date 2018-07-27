"use strict";

let size;

/**
 * Gets the terminal size
 * @returns {{width: *, height}}
 */
module.exports = () => {
    size = size || process.stdout.getWindowSize();
    return {
        width : size[0] - 1,
        // subtracting 2 fixes trailing letters at screen top
        height : size[1] - 2
    }
};