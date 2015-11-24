"use strict";

const drawFrame = require('./lib/drawFrame');
const blankMatrix = require('./lib/blankMatrix');
const clear = require('./lib/clear');
const Symbol = require('./lib/Symbol');
let timeout;


const aaa = new Symbol();
aaa.registerString('go away i types now');
aaa.character = 'x';
aaa.setAsMarquee('left', 5);
//aaa.xOffset = 3;
//aaa.yOffset = 0;
//aaa.x = -100;
//aaa.y = 0;

timeout = setInterval(() => {
    const m = blankMatrix();
    aaa.updatePosition();
    aaa.setInMatrix(m);

    clear();
    drawFrame(m);
}, 100);

setTimeout(() => {
    clearInterval(timeout);
}, 10000);
