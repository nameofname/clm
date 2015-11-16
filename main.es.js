"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const a = require('./symbols/alphaNumeric/a');
const Symbol = require('./lib/Symbol');
const m = blankMatrix();

const aaa = new Symbol();
aaa.register(a);
aaa.update(m);

drawFrame.start(m);

setTimeout(() => {
    drawFrame.stop();
}, 5000);