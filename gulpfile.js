var gulp = require("gulp");
var less = require("gulp-less");
var concat = require('gulp-concat');
var LessAutoprefix = require("less-plugin-autoprefix");
var autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });
var path = require("path");
var plumber = require("gulp-plumber");
var server = require("browser-sync");
var minify = require('gulp-minify-css');
var rimraf = require('rimraf');
var reload = server.reload;
var merge = require('merge-stream');
var lessGlob = require('gulp-less-glob');

gulp.task('style', function() {

    var lessStream = gulp.src('main.less')
        .pipe(lessGlob())
        .pipe(less())
        .pipe(concat('less-files.less'));

    var mergedStream = merge(lessStream)
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest(''));

    return mergedStream;
}); // Все файлы less в один css

// gulp.task('styles', function () {
//     return gulp
//         .src('main.less')
//         .pipe(lessGlob())
//         .pipe(less())
//         .pipe(concat('main.css'))
//         .pipe(minify())
//         .pipe(gulp.dest(''));
// });



gulp.task("default", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.task('webserver', function () {
  	server(config);
  });

  gulp.task('clean', function (cb) {
  	rimraf(path.clean, cb);
  });

  gulp.watch("./blocks/**/*.less", ["style"])
  .on("change", server.reload);
  gulp.watch("*.html")
  .on("change", server.reload);
});
