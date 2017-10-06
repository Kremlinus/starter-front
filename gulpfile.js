var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var notify = require('gulp-notify');

gulp.task('scripts', require('./gulp-tasks/scripts')(gulp, plugins));
gulp.task('styles', require('./gulp-tasks/styles')(gulp, plugins));
gulp.task('serve', require('./gulp-tasks/serve')(gulp, plugins));
gulp.task('images', require('./gulp-tasks/images')(gulp, plugins));

gulp.task('default', ['styles', 'scripts', 'images','serve'], function () {
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});
