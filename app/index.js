'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var chalk = require('chalk');
var exec = require('child_process').exec;
var fs = require('fs');

var AppfogGenerator = module.exports = function AppfogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.distDir = options.dist || 'dist';

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });
};

util.inherits(AppfogGenerator, yeoman.generators.Base);

AppfogGenerator.prototype.checkInstallation = function checkInstallation() {
  var done = this.async();

  this.appfogInstalled = false;
  exec('af --version', function (err) {
    if (err) {
      this.log.error('You don\'t have the AppFog command line tool installed. ' +
          'Grab it from https://docs.appfog.com/getting-started/af-cli');
    } else {
      this.appfogInstalled = true;
    }
    done();
  }.bind(this));
};

AppfogGenerator.prototype.nodestatic = function nodestatic() {
  this.mkdir('appfog');

  this.copy('Procfile', 'appfog/Procfile');
  this.copy('server.js', 'appfog/server.js');
};

AppfogGenerator.prototype.distpackage = function distpackage() {
  var pkgPath = path.resolve('package.json');
  var pkg = {};

  if (fs.existsSync(pkgPath)) {
    pkg = JSON.parse(this.readFileAsString('package.json'));
  }

  var distPkg = {
    name: pkg.name || 'unnammed',
    version: pkg.version || '0.0.0',
    dependencies: {
      'statik': '~1.2.5'
    }
  };

  this.write('appfog/distpackage.json', JSON.stringify(distPkg, null, 2));
};

AppfogGenerator.prototype.rewiregrunt = function rewiregrunt() {
  var template = this.readFileAsString(path.join(__dirname, 'templates', 'copytemplate.js'));

  console.log(
    chalk.yellow('Please add this copy task rule to your Gruntfile: \n') +
    template
  );
};

AppfogGenerator.prototype.gitsetup = function gitsetup() {
  console.log(
    chalk.green('You\'re all set! Now go to ' + chalk.bold(this.distDir) +
        ' and run\n\t') + chalk.bold('af push')
  );
}
