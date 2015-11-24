"use strict";

var Animation = require('../lib/animation');
var Symbol = require('../lib/Symbol');

/**
 * A canned method to produce a marquee animation from some text string.
 * @param text
 * @param speed
 * @param duration
 * @private
 */
var _marquee = function (text, speed, duration) {
    const a = new Animation();
    const s = new Symbol();

    if (duration) {
        a.duration = duration;
    }
    s.registerString(text);
    s.setAsMarquee('left', speed);
    a.addSymbol('s', s);
    a.start();
};

module.exports = _marquee;
