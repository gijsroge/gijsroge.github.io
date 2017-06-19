/* default task */

/**
 * Plugins
 */
const gulp = require('gulp');

/**
 * Tasks
 */
gulp.task('build', [
  'scss', 'webpack', 'images', 'svg', 'template', 'copyFiles'
]);
