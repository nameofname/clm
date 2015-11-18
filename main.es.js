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
const f = require('./symbols/alphaNumeric/f');
const g = require('./symbols/alphaNumeric/g');
const h = require('./symbols/alphaNumeric/h');
const i = require('./symbols/alphaNumeric/i');
const j = require('./symbols/alphaNumeric/j');
const k = require('./symbols/alphaNumeric/k');
let t;

const aaa = new Symbol();
//aaa.registerSequence([d, e, f]);
aaa.register(k);


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
