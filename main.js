"use strict";

require('./babelConf');
var commander = require('commander');
var Animation = require('./lib/animation');
var Symbol = require('./lib/Symbol');

var speed;
var duration;
var marquee;

commander
    .option('-m, --marquee [value]', 'String to animate as a marquee')
    .option('-s, --speed <n>', 'Speed of your animation', parseInt)
    .option('-d, --duration <n>', 'Duration of your animation in milliseconds', parseInt)
    .parse(process.argv);

if (process.argv.length < 2) {
    commander.outputHelp();
}

var _doMarquee = function (text, speed, duration) {
    var a = new Animation();
    var s = new Symbol();

    if (duration) {
        a.duration = duration;
    }
    s.registerString(text);
    s.setAsMarquee('left', speed);
    a.addSymbol('s', s);
    a.start();
};

marquee = commander.marquee;
speed = commander.speed;
duration = commander.duration;

if (marquee) {
    _doMarquee(marquee, speed, duration);
}
