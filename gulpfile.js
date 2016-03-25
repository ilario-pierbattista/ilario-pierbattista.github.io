'use strict';

var fs = require('fs');
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


const INDEXPATH = './html/index.json';
function addHtml(vynil) {
    var indexData = readJsonData(INDEXPATH);
    var identifier = getIdentifier(vynil.relative);
    indexData.push({
        "identifier": identifier,
        "path": vynil.relative
    });
    writeJsonData(indexData, INDEXPATH);
};

function removeHtml(vynil) {
    var indexData = readJsonData(INDEXPATH);
    var identifier = getIdentifier(vynil.relative);

    indexData = indexData.filter(function(obj) {
        return obj.identifier != identifier;
    })
    writeJsonData(indexData, INDEXPATH);
}

function getIdentifier(pathName) {
    return (pathName.split('.')[0]).replace('/', '_');
}

function readJsonData(path) {
    if(fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path));
    } else {
        return new Array();
    }
}

function writeJsonData(data, path) {
    fs.writeFile(path, JSON.stringify(data, null, 2), function(err) {
        if(err) {
            return console.log(err);
        }
    })
};

gulp.task('watcher', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/src/**/*.js', ['babel']);
    plugins.watch('./html/**/*.html', {
        events: ['add']
    }, addHtml);
    plugins.watch('./html/**/*.html', {
        events: ['unlink']
    }, removeHtml);
});

gulp.task('bower', function() {
    return plugins.bower({
        directory: './libs'
    });
});

gulp.task('server', function() {
    var server = require('./static_server.js');
    server.create().listen(8888);
});
