var test = require('tape');
var sass = require('node-sass');
var bower = require('../bower.json');

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

test('usage test compiles', function (t) {
  t.plan(1);
  sass.render({ 
    file: __dirname + '/test', 
    success: function(css) {
      t.ok(css, 'Test file compiles and contains CSS');
    },
    error: fail(t)
  });
});
