#!/usr/bin/env node

var test = require('tape');
var sass = require('node-sass');
var bower = require('../bower.json');
var suites = require('./suites.json');

var testFiles = [];

Object.keys(suites).forEach(function (suite) {
  var files = suites[suite].map(function (file) {
    return [suite + ' ' + file, __dirname + '/' + file + '.scss'];
  });
  testFiles = testFiles.concat(files);
});

function fail(t, message) {
  return function() {
    t.fail(message || 'Failed to compile');
  }
}

test('compiles', function (t) {
  t.plan(1);
  sass.render({ 
    file: bower.main, 
    success: function() {
      t.pass('File compiles');
    },
    error: fail(t)
  });
});

test('silent by default', function (t) {
  t.plan(1);
  sass.render({ 
    file: bower.main, 
    success: function(css) {
      t.ok(!css, 'File does not contain CSS');
    },
    error: fail(t)
  });
});

test('can unsilence', function (t) {
  t.plan(1);
  sass.render({ 
    data: '$is-silent: false; @import "main";', 
    success: function(css) {
      t.ok(css, 'File contains CSS');
    },
    error: fail(t)
  });
});


testFiles.forEach(function (e) {
  var testName = e[0];
  var file = e[1];
  test(testName, function (t) {
    t.plan(1);
    sass.render({ 
      file: file, 
      success: function(css) {
        t.ok(css, testName + ' compiles and contains CSS');
      },
      error: fail(t)
    });
  });
});
