'use strict';

var del = require('del');
var refillLogger = require('refill-logger');
var RefillNextHandler = require('refill-next-handler');

function getCleanTask(options, gulp, mode, getOutputDir) {

  function cleanTask(next) {

    var logger = refillLogger('clean');
    var nextHandler;

    nextHandler = new RefillNextHandler({
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
