var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('src/assets/styles/main.scss')
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({stream: true}))
  }
}
