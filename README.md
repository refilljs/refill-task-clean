Refill task clean
=================

Clean task in [Refill](https://github.com/refilljs/refill) format. It can be used to clean output directories for generated code.

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-clean)
[![npm](https://img.shields.io/npm/l/refill-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-clean)
[![npm](https://img.shields.io/npm/dm/refill-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-clean)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-clean/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-clean)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-clean/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-clean)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-clean/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-clean/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-clean/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-clean/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-clean/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-clean)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-clean.svg?style=flat-square)](https://github.com/refilljs/refill-task-clean)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-clean.svg?style=flat-square)](https://github.com/refilljs/refill-task-clean)
[![GitHub followers](https://img.shields.io/github/followers/refilljs.svg?style=flat-square)](https://github.com/refilljs/refill-task-clean)

Installation
------------

```bash
npm install --save refill-task-clean refill gulp
```

Example
-------

Refill task clean is used in [Refill for angular](https://github.com/refilljs/refill-angular)

How to use it
-------------

Just put this code in gulpfile.js

```javaScript
require('refill')({
  'clean': {
    task: require('refill-task-clean')
  }
}, require('gulp'), {}, getOutputDir)
```

API
---

Make sure you understand [how Refill works](https://github.com/refilljs/refill)

### getOutputDir

getOutputDir is function that returns path to directory that will be cleared.

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-task-clean/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)