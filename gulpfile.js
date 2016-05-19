const gulp = require("gulp");
const babel = require("gulp-babel");
const rimraf = require("gulp-rimraf");
const runSequence = require("run-sequence");


const SRC_PATH = "./src";
const DEST_PATH = "./public/assets";

gulp.task("default", [ "build" ]);

gulp.task("clean", () => {
    return gulp.src(DEST_PATH)
               .pipe(rimraf());
});

gulp.task("build", [ "clean" ], (cb) => {
    runSequence(
        [ "build-js" ],
        cb
    );
});

gulp.task("build-js", () => {
    return gulp.src(`${SRC_PATH}/**/*.js`)
               .pipe(babel({
                   sourceRoot : SRC_PATH,
                   presets : [ "es2015" ]
               }))
               .pipe(gulp.dest(DEST_PATH));
});
