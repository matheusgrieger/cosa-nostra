var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
    return gulp.src('src/less/style.less')
        .pipe($.sourcemaps.init())
            .pipe($.less())
            .pipe($.autoprefixer({
                browsers: ['last 2 versions', '> 1%']
            }))
            .pipe($.cleanCss())
            .pipe($.rename({
                basename: 'style.min'
            }))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}
