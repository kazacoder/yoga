'use strict';

const gulp = require('gulp');

gulp.task('assemble_project', (cb) => {
    gulp.src('./node_modules/jquery/dist/jquery.min.js').
        pipe(gulp.dest('./dist/lib/jquery'));

    gulp.src('./node_modules/slick-carousel/slick/slick.css').
        pipe(gulp.dest('./dist/lib/slick'));

    gulp.src('./node_modules/slick-carousel/slick/slick-theme.css').
        pipe(gulp.dest('./dist/lib/slick'));

    gulp.src('./node_modules/slick-carousel/slick/slick.min.js').
        pipe(gulp.dest('./dist/lib/slick'));

    gulp.src('./node_modules/slick-carousel/slick/fonts/**/*.*').
        pipe(gulp.dest('./dist/lib/slick/fonts'));

    gulp.src('./node_modules/slick-carousel/slick/ajax-loader.gif').
        pipe(gulp.dest('./dist/lib/slick'));

    cb();
})


gulp.task('animate', (cb) => {
    gulp.src('./node_modules/animate.css/animate.min.css').
        pipe(gulp.dest('./dist/lib/animate'));
    cb();
})

gulp.task('inputmask', (cb) => {
    gulp.src('./node_modules/inputmask/dist/jquery.inputmask.min.js').
        pipe(gulp.dest('./dist/lib/inputmask'));
    cb();
})