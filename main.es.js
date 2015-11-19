"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const clear = require('./lib/clear');
const Symbol = require('./lib/Symbol');
let timeout;

const zero = require('./symbols/alphaNumeric/0');


const aaa = new Symbol();
//aaa.registerSequence([six, nine]);
//aaa.register(zero);
aaa.registerString('go away i types now');

timeout = setInterval(() => {
    const m = blankMatrix();
    aaa.updatePosition();
    aaa.setPosition(m);

    clear();
    drawFrame(m);
}, 100);

setTimeout(() => {
    clearInterval(timeout);
}, 10000);
