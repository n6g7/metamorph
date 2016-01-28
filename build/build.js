'use strict';

let gulp = require('gulp');
let series = require('run-sequence');

gulp.task('build', done => {
  series('static', 'styles', 'scripts', 'views', done);
});
