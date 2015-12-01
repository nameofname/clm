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



// TODO :::
- for the setTopRight function (and other associated position functions) add an inside or outside parameter which will
    allow the programmer to set their symbol either inside or outside of the frame
- doctor up the cli.js file
- make the app able to handle symbols that the programmer generates. Perhaps add some canned symbols (ascii art)
-- for this the program has to be able to handle ascii art! modifications in the Symbol class