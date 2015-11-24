# clm
command-line-magic

A command line utility written in Node.js intended for producing simple animations. CML includes a simple command line package you can use to create simple text animations in your terminal. You also have access to the Symbol and Animation classes which allows you to produce custom animations of your own. 	

# Installation :
- coming soon to npm?

# Try it out :
node clm/main -m "type your message here"

# Usage :

## Via the command line : 

The CLM command line utility gives you some canned animations you can produce right away such as the marquee animation. 

```
  Options:

    -h, --help             output usage information
    -m, --marquee [value]  String to animate as a marquee
    -s, --speed <n>        Speed of your animation
    -d, --duration <n>     Duration of your animation in milliseconds

```

## Create custom animations : 

Take advantage of the full api and produce your own custom animations :

```
	var Animation = require('./clm/lib/animation');
	var Symbol = require('./clm/lib/Symbol');

    var a = new Animation();
    var s = new Symbol();

    s.registerString(text);
    s.setAsMarquee();
    a.addSymbol('key', s);
    a.start();
```


