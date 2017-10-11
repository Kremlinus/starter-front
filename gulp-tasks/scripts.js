module.exports = function (gulp) {
  return function () {
    gulp.src('src/assets/scripts/main.js')
        .pipe(gulp.dest('dist/assets/js'))
  }
}
