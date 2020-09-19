var path = require('path');

var gulp = require('gulp');
var less = require('gulp-less');
var cache = require('gulp-cached');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('less', function () {
  return gulp.src('./style/packages/**/*.less')
    .pipe(cache('less', {
        optimizeMemory: true        
    }))
    .pipe(sourcemaps.init())
    .pipe(less({}))
    .pipe(sourcemaps.write())       // .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./style'));
});

gulp.task('default', function(){
    gulp.watch('./style/packages/**/*.less', gulp.series('less'))
  return
});