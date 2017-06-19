/* Watch task */

/**
 * plugins
 */
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

/**
 * configs
 */
const config = require('../config');

/**
 * Tasks
 */
gulp.task('dev', ['default', 'template', 'browsersync', 'scss'], function () {
    watch(config.files, function () {
        runSequence('svg', 'template', 'browsersyncReload');
    });
    watch(config.scss.glob, function () {
        gulp.start('scss');
    });
    watch(config.svg.glob, function () {
        runSequence('svg', 'template', 'browsersyncReload');
    });
    watch(config.images.glob, function () {
        runSequence('images', 'browsersyncReload');
    });
    watch(config.copyFiles.glob, function () {
        runSequence('copyFiles', 'browsersyncReload');
    });
    watch(config.js.glob, function () {
        runSequence('webpack', 'browsersyncReload');
    });
});