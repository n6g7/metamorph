'use strict';

let babel = require('gulp-babel');
let concat = require('gulp-concat');
let gulp = require('gulp');
let plumber = require('gulp-plumber');

gulp.task('scripts', () => {
  gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-file-model/angular-file-model.js'
  ])
  .pipe(plumber())
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('app/js'));

  return gulp.src(['src/js/**/*.js'])
  .pipe(plumber())
  // .pipe(babel({ presets: ['es2015'] }))
  .pipe(concat('stylay.js'))
  .pipe(gulp.dest('app/js'));
});
