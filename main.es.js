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
const l = require('./symbols/alphaNumeric/l');
const m = require('./symbols/alphaNumeric/m');
const n = require('./symbols/alphaNumeric/n');
const o = require('./symbols/alphaNumeric/o');
const p = require('./symbols/alphaNumeric/p');
const q = require('./symbols/alphaNumeric/q');
const r = require('./symbols/alphaNumeric/r');
const s = require('./symbols/alphaNumeric/s');
const t = require('./symbols/alphaNumeric/t');
const u = require('./symbols/alphaNumeric/u');
const v = require('./symbols/alphaNumeric/v');
const w = require('./symbols/alphaNumeric/w');
const x = require('./symbols/alphaNumeric/x');
const y = require('./symbols/alphaNumeric/y');
const z = require('./symbols/alphaNumeric/z');
let timeout;

const aaa = new Symbol();
//aaa.registerSequence([d, e, f]);
aaa.register(z);


timeout = setInterval(() => {
    const m = blankMatrix();
    aaa.updatePosition();
    aaa.setPosition(m);

    clear();
    drawFrame(m);
}, 100);

setTimeout(() => {
    clearInterval(t);
}, 10000);
