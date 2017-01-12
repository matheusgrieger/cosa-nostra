var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    gulp.src([
            'src/components/jquery/dist/jquery.min.js',
            'src/components/filament-sticky/fixedsticky.js',
            'src/js/main.js'
        ])
        .pipe($.sourcemaps.init())
            .pipe($.concat('scripts.min.js'))
            .pipe($.uglify())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}
