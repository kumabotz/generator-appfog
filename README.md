# Generator appfog
[![Build Status](https://secure.travis-ci.org/kumabotz/generator-appfog.png?branch=master)](https://travis-ci.org/kumabotz/generator-appfog) [![NPM version](https://badge.fury.io/js/generator-appfog.png)](http://badge.fury.io/js/generator-appfog) [![Dependency Status](https://gemnasium.com/kumabotz/generator-appfog.png)](https://gemnasium.com/kumabotz/generator-appfog)

A generator for Yeoman that sets up appfog hosting for you by creating a
`Procfile` and setting up a node-based static http server using
[static](https://github.com/hongymagic/statik).

## Roadmap

Once there are placeholders in Yeoman, this will automatically rewire your
Gruntfile to automatically copy the required files. For now, you have to
manually adjust your build step for this to work comfortably.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-appfog`
- Make sure you are in the root of your existing Yeoman application.
- Run: `yo appfog`

## Options

- `--dist` lets you choose a distribution directory other than the default `dist`.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## Inspiration
[generator-heroku](https://github.com/passy/generator-heroku) by [@passy](https://github.com/passy)
