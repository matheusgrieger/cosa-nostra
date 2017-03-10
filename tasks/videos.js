var gulp = require('gulp');

module.exports = function() {

    return gulp.src([
            'videos/**/*.*'
        ])
        .pipe(gulp.dest('./dist/videos'));

}
