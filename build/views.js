'use strict';

let gulp = require('gulp');
let jade = require('gulp-jade');
let plumber = require('gulp-plumber');
let templatecache = require('gulp-angular-templatecache');

gulp.task('views', function() {
  gulp.src('src/**/*.jade')
  .pipe(plumber())
  .pipe(jade())
  .pipe(templatecache({
    filename: 'views.js',
    module: 'Stylay',
    standalone: false
  }))
  .pipe(gulp.dest('app/js'));

  return gulp.src('src/index.jade')
  .pipe(plumber())
  .pipe(jade())
  .pipe(gulp.dest('app'));
});
