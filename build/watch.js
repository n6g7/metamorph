'use strict';

let gulp = require('gulp');

gulp.task('watch', ['build'], function() {
  return gulp.watch('src/**', ['build']);
});
