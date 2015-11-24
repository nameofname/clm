"use strict";

const drawFrame = require('./drawFrame');
const blankMatrix = require('./blankMatrix');
const clear = require('./clear');
const defaultDuration = 10000;
const defaultFrameRate = 100;
const assert = require('assert').ok;

/**
 * The animation class creates a new animation by setting a timeout and clearing it after a given duration.
 * Use the addSymbol method to add symbols you create to the animation. Each one will be updated each frame.
 * When you call the start method the animation will begin. Your callback will be invoked when the animation completes.
 * In this way you can chain animations together.
 */
class Animation {

    constructor () {
        this._duration = defaultDuration;
        this._frameRate = defaultFrameRate;
        this._timeout = null;
        this.symbols = {};
    }

    set duration (n) {
        assert(typeof n === 'number', 'The argument you provided for duration must be numeric.');
        this._duration = n;
    }
    get duration () { return this._duration; }
    set frameRate (n) {
        assert(typeof n === 'number', 'The argument you provided for frameRate must be numeric.');
        this._frameRate = n;
    }
    get frameRate () { return this._frameRate; }

    addSymbol (key, symbol) {
        this.symbols[key] = symbol;
    }

    start(callback) {
        this._timeout = setInterval(() => {
            const m = blankMatrix();

            for (var key in this.symbols) {
                this.symbols[key].updatePosition();
                this.symbols[key].setInMatrix(m);
            }
            // TODO : what's in ES6 for this? isn't there a thing???
            //this.symbols.each((symbol, key) => {
            //    symbol.updatePosition();
            //    symbol.setInMatrix(m);
            //});

            clear();
            drawFrame(m);
        }, this.frameRate);

        setTimeout(() => {
            clearInterval(this._timeout);
            if (typeof callback === 'function') {
                callback(this);
            }
        }, this.duration);
    }

}

module.exports = Animation;