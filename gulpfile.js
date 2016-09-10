
var gulp = require('gulp');
var util = require('gulp-util');
var gsass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');




gulp.task('poursass', function(){
   return gulp.src('css/app.scss')
   .pipe(gsass())
   .pipe(gulp.dest('css/'))

});


gulp.task('watch', function(){


  gulp.watch('css/app.scss', ['poursass'])
  gulp.watch('index.html', [])
});

//gulp.task('serve', serve('../yeller'));

gulp.task('util', function () {
  return util.log('Task running your bigGULP calories away!')
} );

gulp.task('default', ['util', 'watch'])
