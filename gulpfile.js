var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

var appName = 'react-fluxer';
var appFile = appName + '.js';
var appDistFile = appName + '.js';
var appMinDistFile = appName + '.min.js';

gulp.task('build', function () {
  del('dist/*.js', function(err, deletedFiles) {
    console.log("Files deleted:",deletedFiles.join(', '));
  });
  browserify({
    entries: './src/' + appFile,
    standalone: appName,
    extensions: ['.js'],
  })
  .bundle()
  .pipe(source(appDistFile))
  .pipe(gulp.dest('dist'));
});

gulp.task('compress', ['build'], function() {
  gulp.src('dist/' + appDistFile)
  .pipe(uglify())
  .pipe(rename(appMinDistFile))
  .pipe(gulp.dest('dist'));
});

gulp.task('default',['dist']);
gulp.task('dist', ['build', 'compress']);
