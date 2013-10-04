'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var chalk = require('chalk');
var exec = require('child_process').exec;
var fs = require('fs');

function oneline(str) {
  return str.replace(/\n/g, '');
}

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
  exec('af --version', function (err) {
    if (err) {
      this.log.error('You don\'t have the AppFog command line tool installed. ' +
          'Grab it from https://docs.appfog.com/getting-started/af-cli\n' + err);
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

AppfogGenerator.prototype.gitignore = function gitignore() {
  var file = '.gitignore';

  function append(file, text) {
    fs.appendFile(file, text, function (err) {
      text = oneline(text);
      if (err) {
        this.log.error('Cannot append \'' + text + '\' into ' + file + '\n' + err);
        return;
      }
      console.log(chalk.green('  append ') + chalk.bold('\'' + text +
          '\' into ' + file));
    }.bind(this));
  }

  if (fs.existsSync(file)) {
    fs.readFile(file, { encoding: 'utf-8' }, function (err, data) {
      if (err) {
        this.log('Cannot open ' + file + ' for read\n' + err);
        return;
      }
      if (String(data).match(/^appfog[\/\n]?$/m) === null) {
        append(file, 'appfog/\n');
      }
    }.bind(this));
  } else {
    append(file, 'appfog/\n');
  }
}

AppfogGenerator.prototype.rewiregrunt = function rewiregrunt() {
  var template = this.readFileAsString(path.join(__dirname, 'templates', 'copytemplate.js'));
  console.log(
    chalk.yellow('Please add this copy task rule to your Gruntfile: \n') +
    template
  );
};

AppfogGenerator.prototype.gitsetup = function gitsetup() {
  console.log(chalk.green('You\'re all set! Now go to ' +
      chalk.bold(this.distDir) + ' and run\n') +
      chalk.bold('  npm install && af push')
  );
}
