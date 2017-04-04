'use strict';
 
var gulp      = require('gulp');
var sass      = require('gulp-sass');
var concatCSS = require('gulp-concat-css');
 
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCSS('style.css'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);