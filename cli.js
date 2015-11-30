"use strict";

require('./babelConf');
var commander = require('commander');
var _doMarquee = require('./prepared-methods/marquee.es');

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

marquee = commander.marquee;
speed = commander.speed;
duration = commander.duration;

if (marquee) {
    _doMarquee(marquee, speed, duration);
}
