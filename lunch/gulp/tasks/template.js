const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucks = require('gulp-nunjucks');

gulp.task('template', () => {
    return gulp.src('./src/index.html')
        .pipe(plumber())
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'))
});