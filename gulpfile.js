var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
   gulp.src('./scss/main.scss')
   .pipe(sass())
   .pipe(autoprefixer(
      browsers: ['last 2 versions']
   ))
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.reload({stream: true}));
})

gulp.task('serve', function () {

   browserSync.init({
      server: {
         baseDir: './.'
      }
   });

   gulp.watch('./scss/*.scss', ['styles']);
   gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);
