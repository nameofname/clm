"use strict";

var Controller = require('../dist/lib/Controller');
var c = new Controller();

c
    .setFrameRate(100)
    .setDuration(10000)

    .setString('test 1')
    .setTopLeft()
    .setXOffset(3)
    .setYOffset(1)

    .setString('the ol tester')
    .setTopRight()
    .setXOffset(-5)
    .setYOffset(2)

    .go();
