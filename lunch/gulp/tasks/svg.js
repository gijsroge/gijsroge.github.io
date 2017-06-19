/* SVG task */

/**
 * plugins
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const svgmin = require('gulp-svgmin');
const del = require('del');

/**
 * configfile
 */
const config = require('../config');

/**
 * Tasks
 */
gulp.task('clean:svg', function () {
    return del(config.svg.clean);
});

gulp.task('svg', ['clean:svg'], function () {
    gulp.src(config.svg.glob)
        .pipe(plumber())
        .pipe(svgmin())
        .pipe(gulp.dest(config.svg.dist));
});