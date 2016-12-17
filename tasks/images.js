var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {

    return gulp.src([
            'images/**/*.jpg',
            'images/**/*.png',
            'images/**/*.gif',
            'images/**/*.svg'
        ])
        .pipe(gulp.dest('./dist/images'));

}
