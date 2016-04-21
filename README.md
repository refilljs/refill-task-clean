ZKflow task clean
=================

Clean task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format. It can be used to clean output directories for generated code.

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-clean)
[![npm](https://img.shields.io/npm/l/zkflow-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-clean)
[![npm](https://img.shields.io/npm/dm/zkflow-task-clean.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-clean)
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-clean/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-clean)<br>
[![bitHound Overall Score](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/badges/score.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean)
[![bitHound Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/badges/dependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/badges/devDependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean/badges/code.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-clean)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-clean.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-clean)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-clean.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-clean)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-clean)

Installation
------------

```bash
npm install --save zkflow-task-clean zkflow gulp
```

Example
-------

ZKflow task clean is used in [ZKflow for angular](https://github.com/zaklinaczekodu/zkflow-angular)

How to use it
-------------

Just put this code in gulpfile.js

```javaScript
require('zkflow')({
  'clean': {
    task: require('zkflow-task-clean')
  }
}, require('gulp'), {}, getOutputDir)
```

API
---

Make sure you understand [how ZKflow works](https://github.com/zaklinaczekodu/zkflow)

### getOutputDir

getOutputDir is function that returns path to directory that will be cleared.

Changelog
---------

[Changelog at github](https://github.com/zaklinaczekodu/zkflow-task-clean/releases)

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)