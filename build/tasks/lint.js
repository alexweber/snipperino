var gulp = require('gulp');
var paths = require('../paths');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var scsslint = require('gulp-scss-lint');

// runs jshint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// runs scss-lint on all .scss files
gulp.task('lintsass', function () {
  return gulp.src(paths.sass)
    .pipe(scsslint());
});
