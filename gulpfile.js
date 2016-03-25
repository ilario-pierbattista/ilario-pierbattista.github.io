'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function () {
    gulp.src("./sass/**/*.scss")
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('babel', function() {
    gulp.src("./js/src/**/*.js")
    .pipe(plugins.babel({
        presets: ['react']
    }).on('error', plugins.util.log))
    .pipe(gulp.dest('./js/build'));
});

gulp.task('watcher', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/src/**/*.js', ['babel']);
});

gulp.task('bower', function() {
    return plugins.bower({
        directory: './libs'
    });
})
