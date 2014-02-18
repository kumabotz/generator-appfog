# generator-appfog [![Build Status](https://secure.travis-ci.org/kumabotz/generator-appfog.png?branch=master)](https://travis-ci.org/kumabotz/generator-appfog) [![NPM version](https://badge.fury.io/js/generator-appfog.png)](http://badge.fury.io/js/generator-appfog) [![Dependency Status](https://gemnasium.com/kumabotz/generator-appfog.png)](https://gemnasium.com/kumabotz/generator-appfog)

A generator for [Yeoman](http://yeoman.io) that sets up appfog hosting for you by creating a
`Procfile` and setting up a node-based static http server using
[static](https://github.com/hongymagic/statik).

## Roadmap

Once there are placeholders in Yeoman, this will automatically rewire your
Gruntfile to automatically copy the required files. For now, you have to
manually adjust your build step for this to work comfortably.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-appfog from npm, run:

```
$ npm install -g generator-appfog
```

Finally, initiate the generator:

```
$ yo appfog
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kumabotz/generator-appfog/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
