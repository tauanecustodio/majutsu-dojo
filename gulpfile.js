const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');

function minifyCss() {
    return gulp.src('./src/style/main.css')
        .pipe(cleanCSS()) 
        .pipe(gulp.dest('./dist/style'));
}

function minifyJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(concat('all.min.js')) 
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = function() {
    gulp.watch('./src/style/main.css', { ignoreInitial: false }, gulp.series(minifyCss));
}

exports.minifyJS = minifyJS;