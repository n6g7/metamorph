'use strict';

let concat = require('gulp-concat');
let gulp = require('gulp');
let plumber = require('gulp-plumber');
let stylus = require('gulp-stylus');

gulp.task('styles', function() {
  return gulp.src([
    'src/css/**.stylus'
  ])
  .pipe(plumber())
  .pipe(stylus())
  .pipe(concat('stylay.css'))
  .pipe(gulp.dest('app/css'));
});
