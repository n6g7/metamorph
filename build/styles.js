'use strict';

let concat = require('gulp-concat');
let gulp = require('gulp');
let plumber = require('gulp-plumber');
let stylus = require('gulp-stylus');

gulp.task('styles', function() {
  gulp.src([
    'bower_components/angular-progress-button-styles/dist/angular-progress-button-styles.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css'
  ])
  .pipe(plumber())
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('app/css'));

  return gulp.src([
    'src/**/*.styl'
  ])
  .pipe(plumber())
  .pipe(stylus())
  .pipe(concat('stylay.css'))
  .pipe(gulp.dest('app/css'));
});
