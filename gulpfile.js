const gulp = require('gulp');
const del = require('del');
const gulpsass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const image = require('gulp-image');
const newer = require('gulp-newer');
const npmDist = require('gulp-npm-dist');
const minify = require("gulp-minify");
let cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();


const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'public/css'
  },
  htmls: {
    src: 'tpl/**/*.html'
  },
  images: {
    src: 'src/**/*.+(jpg|jpeg|gif|png|svg|ico)',
    dest: 'public/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'public/js'
  },
  outros: {
    src: 'src/**/*.+(css|json|eot|woff|ttf|pdf|mp4|ogg|webm)',
    dest: 'public/'
  },
};

function clean() {
  return del(['public/css/*']);
}

function sass() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(gulpsass())
    .pipe(cleanCSS({
      rebase: false
    }))
    .pipe(autoprefixer())
    // .pipe(rename({ suffix: ".min"}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src(paths.htmls.src)
    .pipe(browserSync.stream());
}

function images() {
  return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(image({
      // optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
      pngquant: false,
      zopflipng: false,
      // jpegRecompress: ['--strip', '--quality', 'high'],
      mozjpeg: false,
      guetzli: false,
      gifsicle: false,
      svgo: false
    }))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

function script() {
  return gulp.src(paths.scripts.src)
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      },
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function outros() {
  return gulp.src(paths.outros.src)
    .pipe(gulp.dest(paths.outros.dest))
    .pipe(browserSync.stream());
}

// function npm() {
//   return gulp.src(npmDist(), {
//       base: './node_modules'
//     })
//     .pipe(rename(function (path) {
//       path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
//     }))
//     .pipe(gulp.dest(paths.scripts.dest));
// }

function watch() {
  browserSync.init({
    server: "./",
    directory: true,
    port: 3000
  });

  gulp.watch(paths.scss.src, sass).on('change', browserSync.reload);
  gulp.watch(paths.htmls.src, html);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, script);
  gulp.watch(paths.outros.src, outros);
}

gulp.task("default", gulp.series(sass, html, script, images, outros, watch));
gulp.task("fast-dev", gulp.series(sass, html, script, watch));

gulp.task("clean", clean);