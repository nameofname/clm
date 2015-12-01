var gulp = require("gulp");
var babel = require("gulp-babel");
var extReplace = require('gulp-ext-replace');


gulp.task("default", function () {
  return gulp.src("app/**/*.js")
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(extReplace('.js'))
    .pipe(gulp.dest("dist"));
});
