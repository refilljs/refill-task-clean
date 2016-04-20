'use strict';

var del = require('del');
var zkutils = require('gulp-zkflow-utils');

function getCleanTask(options, gulp, mode, getOutputDir) {

  function cleanTask(next) {

    var logger = zkutils.logger('clean');
    var nextHandler;

    nextHandler = new zkutils.NextHandler({
      next: next,
      watch: false,
      logger: logger
    });

    nextHandler.handle(del(getOutputDir() + '**'));

  }

  return cleanTask;

}

module.exports = {
  getTask: getCleanTask
};
