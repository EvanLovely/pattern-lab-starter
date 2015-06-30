'use strict';
var jshint = require('gulp-jshint');
module.exports = function (gulp, mod, config, tasks) {
  tasks.watch.push('watch:js');
  tasks.validate.push('jshint');

  var jsFiles = [
    config.jsDir + "**/*.js",
    "Gruntfile.js",
    "grunt-tasks/**/*.js",
    "!" + config.jsDir + "**/node_modules/**/*",
    "!" + config.jsDir + "**/bower_components/**/*"
  ];
  
  gulp.task('jshint', function () {
    return gulp.src(jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
  
  gulp.task('watch:js', function() {
    return gulp.watch(jsFiles, [
      'jshint'
    ]);
  });

};
