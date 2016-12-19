var gulp = require('gulp');

module.exports = function() {

    return gulp.src([
            'images/**/*.jpg',
            'images/**/*.png',
            'images/**/*.gif',
            'images/**/*.svg'
        ])
        .pipe(gulp.dest('./dist/images'));

}
