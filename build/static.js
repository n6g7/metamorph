'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');

gulp.task('static', () => {
  gulp.src([
    'src/img/**'
  ])
  .pipe(plumber())
  .pipe(gulp.dest('app/img'));

  gulp.src([
    'src/package.json',
    'src/index.js'
  ])
  .pipe(plumber())
  .pipe(gulp.dest('app'));
});
