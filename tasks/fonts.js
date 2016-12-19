var gulp = require('gulp');

module.exports = function() {

    return gulp.src('src/font/*.*')
        .pipe(gulp.dest('./dist/font'));

}
