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

gulp.task('delete', () =>
  new Promise((resolve, reject) =>
    del('dist/*.js', (err, deletedFiles) => {
      console.log("Files deleted:",deletedFiles.join(', '));
      resolve();
    })
  )
);

gulp.task('build', gulp.series('delete', () =>
  browserify({
    entries: './src/' + appFile,
    extensions: ['.js'],
  })
  .bundle()
  .pipe(source(appDistFile))
  .pipe(gulp.dest('dist'))
));


gulp.task('compress', gulp.series('build', () =>
  gulp.src('dist/' + appDistFile)
  .pipe(uglify())
  .pipe(rename(appMinDistFile))
  .pipe(gulp.dest('dist'))
));

gulp.task('dist', gulp.series('compress'));
gulp.task('default', gulp.series('dist'));
