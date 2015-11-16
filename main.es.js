"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const clear = require('./lib/clear');
const Symbol = require('./lib/Symbol');
const a = require('./symbols/alphaNumeric/a');

const aaa = new Symbol();

aaa.register(a);



let t;

t = setInterval(() => {
    const m = blankMatrix();
    aaa.update(m);

    clear();
    drawFrame(m);
}, 1000);

setTimeout(() => {
    clearInterval(t);
}, 5000);

