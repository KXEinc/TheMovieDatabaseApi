'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');

scss.compiler = require('sass');

function scss_compil () {
  return gulp.src('./src/scss/App.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./src/css'));
}

function scss_watch () {
  gulp.watch('./src/scss/App.scss', gulp.series(scss_compil));
}

exports.default = gulp.series(scss_watch);