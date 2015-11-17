"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const clear = require('./lib/clear');
const Symbol = require('./lib/Symbol');
const a = require('./symbols/alphaNumeric/a');
const b = require('./symbols/alphaNumeric/b');
const c = require('./symbols/alphaNumeric/c');
const d = require('./symbols/alphaNumeric/d');
const e = require('./symbols/alphaNumeric/e');
let t;

const aaa = new Symbol();
aaa.register(e);

t = setInterval(() => {
    const m = blankMatrix();
    aaa.updatePosition();
    aaa.setPosition(m);

    clear();
    drawFrame(m);
}, 100);

setTimeout(() => {
    clearInterval(t);
}, 10000);
