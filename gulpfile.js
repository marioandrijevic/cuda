const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

const { series } = require('gulp');
const { parallel } = require('gulp');

// Compile SCSS into CSS
function scss() {
    return gulp
        .src('app/styles/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('app/styles/.'));
}




async function watch() {
    gulp.watch('app/styles/scss/**/*.scss', gulp.series(scss));
}

exports.scss = scss;
exports.default = watch;