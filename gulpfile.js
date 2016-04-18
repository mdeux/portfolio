var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
  gulp.src('./themes/custom/portfolio/sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/custom/portfolio/css'));
});


gulp.task('uglify', function() {
  gulp.src('./themes/custom/portfolio/lib/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./themes/custom/portfolio/js'))
});

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./themes/custom/portfolio/sass/**/*.scss', ['sass']);
    gulp.watch('./themes/custom/portfolio/lib/*.js', ['uglify']);
    gulp.watch(['./themes/custom/portfolio/css/style.css', './themes/custom/portfolio/**/*.twig', './themes/custom/portfolio/js/*.js'], function (files){
        livereload.changed(files)
    });
});