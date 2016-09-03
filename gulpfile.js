
var gulp = require('gulp');
var util = require('gulp-util');
var gsass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload')



gulp.task('poursass', function(){
   return gulp.src('css/app.scss')
   .pipe(gsass())
   .pipe(gulp.dest('css/foundation-6/css/app.css'))
});

gulp.task('concat', function(){
  return gulp.src(['css/foundation-6/css/app.css', 'css/foundation-6/css/foundation.css'])
  .pipe(sourcemaps.init())
  .pipe(concat('styles.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css/'))
  .pipe(livereload());
});

gulp.task('watch', function(){
  var server = livereload();

  gulp.watch('css/app.scss', ['poursass', 'concat'])
  gulp.watch('index.html', [])
});

//gulp.task('serve', serve('../yeller'));

gulp.task('util', function () {
  return util.log('Task running your bigGULP calories away!')
} );

gulp.task('default', ['util', 'watch'])
