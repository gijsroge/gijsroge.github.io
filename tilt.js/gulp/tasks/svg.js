/* SVG task */

/**
 * plugins
 */
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    svgmin = require('gulp-svgmin'),
    del = require('del'),
    svgSprite = require('gulp-svg-sprite');

/**
 * configfile
 */
var config = require('../config').svg;

/**
 * Tasks
 */
gulp.task('clean:images', function () {
    return del(config.src);
});

gulp.task('svg-sprite', function () {
    gulp.src(config.svgsprite.src)
        .pipe(plumber())
        .pipe(svgSprite(config.svgsprite.settings))
        .pipe(gulp.dest(config.svgsprite.dest));
});

gulp.task('svg', ['clean:images', 'svg-sprite'], function () {
    gulp.src(config.src)
        .pipe(svgmin())
        .pipe(gulp.dest(config.dest));
});