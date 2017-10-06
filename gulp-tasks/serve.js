var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins) {
   return function () {
      gulp.task('serve', function () {
         browserSync.init({
            server: {
               baseDir: './.'
            }
         });
         gulp.watch('./assets/styles/*.scss', ['styles']);
         gulp.watch('./assets/scripts/main.js');
         gulp.watch('./assets/images/*.{}');
      });
   }
};
