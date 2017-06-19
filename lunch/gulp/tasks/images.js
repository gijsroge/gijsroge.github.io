/* JS task */

/**
 * plugins
 */
const gulp = require('gulp');

/**
 * Config file
 */
const config = require('../config');

gulp.task('images', () => {
    gulp.src([config.images.glob]).pipe(gulp.dest(config.images.dist))
});