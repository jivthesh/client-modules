var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var jsonSass = require('gulp-json-sass');
var dir = _.partial(path.join, __dirname);

var ccData = require('./index.js');

var kebabitize = function(obj) {
  var res = obj;
  if (_.isObject(obj)) {
    res = {};
    for (var k in obj) {
      res[_.kebabCase(k)] = kebabitize(obj[k]);
    }
  }
  return res;
};

gulp.task('build-json', function(callback) {
  var ccDataJSON = JSON.stringify(kebabitize(ccData));
  var ccDataJS = JSON.stringify(ccData);
  // JS variables are camel case for dot-notation
  fs.writeFile(dir('/dist/identity.json'), ccDataJS, _.noop);
  // TMP file used to create the SCSS variables (kebab case)
  fs.writeFile(dir('/tmp/identity.json'), ccDataJSON, callback);
});

gulp.task('cc-identity', ['build-json'], function() {
  return gulp
    .src(dir('/tmp/identity.json'))
    .pipe(plumber())
    .pipe(jsonSass())
    .pipe(concat('dist/identity.scss'))
    .pipe(gulp.dest(dir('/')));
});


gulp.task('default', ['cc-identity']);
