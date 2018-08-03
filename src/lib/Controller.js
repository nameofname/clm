"use strict";

const Animation = require('./Animation');
const Symbol = require('./Symbol');
const size = require('./size');
const defaultDuration = 5000;

/**
 * A Controller class for animations.
 * Totally chain-able. Seamlessly adds symbols to an animation with convenient setters and getters.
 */
class Controller {

    constructor () {
        this.animation = new Animation();
        this.animation.duration = defaultDuration;
        this.symbols = [];
    }

    get _currSymbol () {
        return this.symbols[this.symbols.length - 1];
    }

    setString (text) {
        const s = new Symbol();
        s.registerString(text);
        this.symbols.push(s);
        this.animation.addSymbol(this.symbols.length, s);
        return this;
    }

    //setSybol () {}

    // speed setter :
    setFrameRate (speed) {
        this.animation.frameRate = speed;
        return this;
    }

    setDuration (d) {
        this.animation.duration = d;
        return this;
    }

    // starting position setters :
    setStartingPosition (x, y) {
        this._currSymbol.x = x;
        this._currSymbol.y = y;
        return this;
    }

    setTopLeft () {
        return this.setStartingPosition(0, 0);
    }
    setTopRight () {
        return this.setStartingPosition(size().width - this._currSymbol.width, 0);
    }
    setBottomLeft () {
        return this.setStartingPosition(0, size().height - this._currSymbol.height);
    }
    setBottomRight () {
        const s = size();
        const c = this._currSymbol;
        return this.setStartingPosition(s.width - c.width, s.height - c.height);
    }

    // direction setters :
    setXOffset (o) {
        this._currSymbol.xOffset = o;
        return this;
    }
    setYOffset (o) {
        this._currSymbol.yOffset = o;
        return this;
    }

    setCharacter (char) {
        this._currSymbol.character = char;
        return this;
    }

    go (callback) {
        return this.animation.start(callback);
    }

}

module.exports = Controller;
