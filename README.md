# clm
command-line-magic

A command line utility written in Node.js intended for producing simple animations. CML includes a simple command line package you can use to create simple text animations in your terminal. You also have access to the Symbol and Animation classes which allows you to produce custom animations of your own. 	

# Installation :
- coming soon to npm?

# Try it out :
node clm/main -m "type your message here"

# Usage :
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


