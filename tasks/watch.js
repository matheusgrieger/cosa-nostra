var gulp = require('gulp');

module.exports = function() {
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('images/**/*.*', ['images']);
    gulp.watch('videos/**/*.*', ['videos']);
    gulp.watch('src/js/**/*.js', ['js']);
}
