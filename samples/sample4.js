"use strict";

var Controller = require('../src/lib/Controller');
// var Controller = require('../main');
var c = new Controller();

c
    .setFrameRate(100)
    .setDuration(2000)

    .setString('one')
    .setTopLeft()
    .setXOffset(1)
    .setYOffset(1)

    .setString('two')
    .setTopRight()
    .setXOffset(-1)
    .setYOffset(1)

    .setString('three')
    .setBottomLeft()
    .setXOffset(1)
    .setYOffset(-1)

    .setString('four')
    .setBottomRight()
    .setXOffset(-1)
    .setYOffset(-1)

    .go((() => {
        // var c1 = new Controller();
        c.setFrameRate(100)
        .setDuration(1000)
        .setString('I declare')
        .setTopLeft()
        .setString('a thumb war')
        .setStartingPosition(0, 11)
        .go();

    }));
