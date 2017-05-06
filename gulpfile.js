/*gulp.task('default', function () {
 return browserify({
 basedir: '.',
 debug: true,
 entries: ['app/bootstrap.ts'],
 cache: {},
 packageCache: {}
 })
 .plugin(tsify)
 .transform('babelify', {
 presets: ['es2015'],
 extensions: ['.ts']
 })
 .bundle()
 .pipe(source('bundle.js'))
 .pipe(buffer())
 .pipe(sourcemaps.init({loadMaps: true}))
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest('dist'));
 });*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var exorcist = require('exorcist');
var browserify = require('browserify');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');

// Sass
var sass_files = './scss/**/*.scss';
gulp.task('sass', function () {
    return gulp.src(sass_files)
        .pipe(sass({
            includePaths: ["./bower_components/foundation/scss",
                "bower_components/font-awesome/scss"],
            errorLogToConsole: true
        }).on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets'));
});
gulp.task('sass:watch', function () {
    gulp.watch(sass_files, ['sass']);
});


// Typescript
function setupBrowserify() {
    var bundler = browserify({
        basedir: '.',
        debug: true,
        entries: ['app/bootstrap.ts'],
        cache: {},
        packageCache: {},
        extensions: ['.ts'],
        plugin: [watchify, tsify]
    });
    bundler = watchify(bundler, {poll: true});
    bundler.plugin(bundle, {
        delay: 100,
        ignoreWatch: [
            '**/node_modules/**',
            './dist'
        ],
        poll: 300
    });
    bundler.plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        });

// On updates recompile
    bundler.on('update', bundle);
    function bundle() {
        gutil.log('Compiling TS...');

        return bundler.bundle()
            .on('error', function (err) {
                gutil.log(err.message);
                this.emit("end");
            })
            .on('end', function () {
                gutil.log("Done")
            })
            .pipe(exorcist('dist/bundle.js.map'))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist'));
    }

    return bundle();
}

/**
 * Gulp task alias
 */
gulp.task('bundle', setupBrowserify);