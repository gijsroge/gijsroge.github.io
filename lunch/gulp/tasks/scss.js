/* SCSS task */

/**
 * plugins
 */
const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  syntax = require("postcss-scss"),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  browserSync = require('browser-sync'),
  sourcemaps = require('gulp-sourcemaps');

/**
 * configfile
 */
const config = require('../config');

/**
 * Postcss processors
 */
const processors = [
  autoprefixer(config.scss.autoprefixer)
];

gulp.task('scss', function () {
  gulp.src(config.scss.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync(config.scss.settings)
      .pipe(sass())
      .on('error', sass.logError))
    .pipe(postcss(processors, {syntax: syntax}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scss.dist))
    .pipe(browserSync.stream({match: '**/*.css'}))
});
