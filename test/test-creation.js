/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var fs      = require('fs');
var helpers = require('yeoman-generator').test;

describe('appfog generator', function () {
  beforeEach(function (done) {
    this.tmpDir = path.join(__dirname, 'temp');
    helpers.testDirectory(this.tmpDir, function (err) {
      if (err) {
        return done(err);
      }

      fs.writeFileSync(path.join(this.tmpDir, 'package.json'), JSON.stringify({
        name: 'testproj',
        version: '1.3.7'
      }));

      this.app = helpers.createGenerator('appfog:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'appfog/Procfile',
      'appfog/server.js',
      ['appfog/distpackage.json', /"name": "testproj"/]
    ];

    // override the system check
    this.app.checkInstallation = function () {};

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
