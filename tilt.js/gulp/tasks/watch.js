/* Watch task */

/**
 * plugins
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch');

/**
 * configs
 */
var config = require('../config');

/**
 * Tasks
 */
gulp.task('watch', ['build', 'browsersync'], function () {
    watch(config.scss.glob, function () {
        gulp.start('scss');
    });
    watch(config.svg.src, function () {
        gulp.start('svg');
        browserSync.reload();
    });
    watch(config.files, function () {
        browserSync.reload();
    });
    watch(config.js.glob, function () {
        gulp.start('transpile');
        browserSync.reload();
    });
});