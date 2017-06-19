/* Copy files task */

/**
 * plugins
 */
const gulp = require('gulp');

/**
 * Config file
 */
const config = require('../config');

gulp.task('copyFiles', () => {
    gulp.src([config.copyFiles.glob]).pipe(gulp.dest(config.copyFiles.dist))
});