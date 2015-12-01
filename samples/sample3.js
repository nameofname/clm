"use strict";

var Controller = require('../main');
//var Controller = require('../dist/lib/Controller.es.js');
var c = new Controller();

c
    .setFrameRate(50)
    .setDuration(10000)

    .setString('i love')
    .setTopLeft()
    .setXOffset(1)

    .setString('eating')
    .setStartingPosition(0, 11)
    .setXOffset(1)

    .setString('rice')
    .setStartingPosition(0, 22)
    .setXOffset(1)

    .setString('and drinking')
    .setStartingPosition(0, 33)
    .setXOffset(1)

    .setString('juice')
    .setStartingPosition(0, 44)
    .setXOffset(1)

    .go();
