# scss tests [![Build Status](https://travis-ci.org/kavanagh/sass-test-example.png?branch=master)](https://travis-ci.org/kavanagh/sass-test-example)

A trivial experiment showing basic tests to ensure your sass compiles and doesn't output css until the silent flag is turned off.

Uses [Tape](https://github.com/substack/tape) and [node-sass](https://github.com/andrew/node-sass). This is good because it uses [libsass](https://github.com/hcatlin/libsass) and Javascript. libsass is fast and you get to write tests using JavaScript, rather than Ruby. [TAP](http://perlmaven.com/tap-test-anything-protocol) provides you with a very lo-fi, portable way to test that's ideal for this scenario.

## Usage

Clone this repo. Then...

```sh
$ npm install
```

There are 3 ways you could run the tests.

```sh
$ npm test
```
or 

```sh
$ node test
```
or 

```sh
$ ./test/index.js
```
