"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const clear = require('./lib/clear');
const Symbol = require('./lib/Symbol');
const a = require('./symbols/alphaNumeric/a');
let t;

const aaa = new Symbol();
aaa.register(a);

t = setInterval(() => {
    const m = blankMatrix();
    aaa.update(m);

    clear();
    drawFrame(m);
}, 100);

setTimeout(() => {
    clearInterval(t);
}, 20000);

