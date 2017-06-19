/* JS task */

/**
 * plugins
 */
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');
const webpack2 = require('webpack');
const webpackConfig = require('../../webpack.config.js');

/**
 * Config file
 */
const config = require('../config');

gulp.task('webpack', function() {
    return gulp.src(config.js.entry)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig, webpack2))
        .pipe(gulp.dest(config.js.dist));
});