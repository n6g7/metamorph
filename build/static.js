'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');

gulp.task('static', () => {
  gulp.src([
    'src/*/images/*.svg'
  ])
  .pipe(plumber())
  .pipe(gulp.dest('app/img'));

  gulp.src([
    'bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
  ])
  .pipe(plumber())
  .pipe(gulp.dest('app/fonts'));

  gulp.src([
    'src/package.json',
    'src/index.js'
  ])
  .pipe(plumber())
  .pipe(gulp.dest('app'));
});
