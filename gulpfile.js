"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

// const dist = 'C:/Users/Diana/Downloads/openserver/domains/test'; // Ссылка на вашу папку на сервере
const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("styles", () => {
  return gulp.src("./src/assets/css/**/*")
              .pipe(gulp.dest("./dist/assets/css"))
              .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
    return gulp.src("./src/assets/sass/style.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest("./dist/assets/css"))
                .pipe(browsersync.stream());
});

gulp.task('fonts', () => {
  return gulp.src("src/assets/fonts/**/*")
      .pipe(gulp.dest("./dist/assets/fonts"))
      .pipe(browsersync.stream());
});

gulp.task('icons', () => {
  return gulp.src("src/assets/icons/**/*")
      .pipe(gulp.dest("./dist/assets/icons"))
      .pipe(browsersync.stream());
});

gulp.task('images', () => {
  return gulp.src("src/assets/img/**/*")
      .pipe(gulp.dest("./dist/assets/img"))
      .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest("./dist/js"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/assets/sass/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("./src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("./src/assets/img/**/*").on('all', gulp.parallel('images'));
    gulp.watch("./src/assets/css/**/*").on('all', gulp.parallel('styles'));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "build-sass", "styles"));

gulp.task("prod", () => {
    gulp.src("./src/assets/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/assets/css"));

    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest("./dist/js"));
});

gulp.task("default", gulp.parallel("watch", "build"));