"use strict"

/**
 * Clears the screen
 */
;
module.exports = function () {
  process.stdout.write("\u001b[2J\u001b[0;0f");
};