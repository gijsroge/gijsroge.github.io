/* default task */

/**
 * Plugins
 */
const gulp = require('gulp');

/**
 * Tasks
 */
gulp.task('default', [
  'scss', 'webpack', 'copyFiles'
]);
