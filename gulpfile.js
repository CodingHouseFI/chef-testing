'use strict';

const gulp = require('gulp');

const mocha = require('gulp-mocha');


gulp.task('default', ['test']);

gulp.task('test', () => {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(mocha());
});
