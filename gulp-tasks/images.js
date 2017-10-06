var notify = require('gulp-notify');

module.exports = function (gulp, plugins) {
    return function () {
      gulp.src('./images/*.*')
         .pipe(notify('Images task'));
    };
};
