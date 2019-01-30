var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
var notify = require("gulp-notify");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var svgSprite = require("gulp-svg-sprites");

const paths = {
  src: "./source/svg/*.svg",
  dist: "./dist/svg"
};

gulp.task("svg", function() {
  return gulp
    .src(paths.src)
    .pipe(
      svgSprite({
        mode: "symbols",
        common: "svg",
        svgId: "svg-%f"
      })
    )
    .pipe(gulp.dest(paths.dist));
});

/* Task compile scss to css */
gulp.task("sass", function() {
  return gulp
    .src("./source/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .on(
      "error",
      notify.onError({
        title: "Seu burro , presta atenção!",
        message: "<%= error.message %>"
      })
    )
    .pipe(gulp.dest("./dist/css"));
});

/* Task minify html */
gulp.task("html", function() {
  return gulp
    .src("./source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(""));
});

/* Task minify js */
gulp.task("js", function() {
  return gulp
    .src("./source/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});

/* Task concat js */
gulp.task("concat-js", function() {
  return gulp
    .src([
      "./source/components/jquery/dist/jquery.js",
      "./source/components/tether/dist/js/tether.js",
      "./source/components/bootstrap/dist/js/bootstrap.js"
    ])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("move-fonts", function() {
  return gulp
    .src("./source/components/components-font-awesome/fonts/**")
    .pipe(gulp.dest("./dist/fonts"));
});

/* Watch */
gulp.watch("./source/sass/**/*.scss", ["sass"]);
gulp.watch("./source/components/bootstrap/scss/**/*.scss", ["sass"]);
gulp.watch("./source/js/**/*.js", ["js"]);
gulp.watch("./source/*.html", ["html"]);
gulp.watch("./source/svg/*.svg", ["svg"]);

gulp.task("default", ["sass", "html", "svg", "js", "concat-js"]);
