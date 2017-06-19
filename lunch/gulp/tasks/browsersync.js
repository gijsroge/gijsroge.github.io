/* BrowserSync task */

/**
 * plugins
 */
const gulp = require('gulp'),
  browserSync = require('browser-sync');

/**
 * configfile
 */
const config = require('../config').browsersync;

/**
 * Tasks
 */
gulp.task('browsersync', function () {
  browserSync.init(config);
});
gulp.task('browsersyncReload', function () {
  browserSync.reload();
});