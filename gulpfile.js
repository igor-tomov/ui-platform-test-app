const gulp = require('gulp');
const git = require('git-rev');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const babel = require('gulp-babel-compile');
const gulpsync = require('gulp-sync')(gulp);
const webpack = require('webpack');
const zip = require('gulp-zip');

const pjson = require('./package.json');
const webpackConfig = require('./webpack/webpack.config');


const DIST_PATH = './dist';

gulp.task('default', ['prod']);

gulp.task('prod',gulpsync.sync([
  'clean',
  'build-backend',
  'build-frontend',
  'set-version'
]));

gulp.task('clean-dev', function () {
  return gulp.src('./public/build').pipe(clean());
});

gulp.task('clean-prod', () => {
  return gulp.src('./dist').pipe(clean());
});

gulp.task('clean', [
  'clean-prod',
  'clean-dev'
]);

gulp.task('build-frontend', () => {
  webpack(webpackConfig).run();
});

gulp.task('build-backend', () => {
  gulp.src([
    './package*.json',
  ]).pipe(gulp.dest(`${DIST_PATH}`));

  gulp.src([
    './src/ui/**/*.js',
    '!./src/ui/**/*.test.js'
  ])
    .pipe(babel())
    .pipe(gulp.dest(`${DIST_PATH}/src/ui`));

  gulp.src([
    './src/core/**/*.js',
    '!./src/core/**/*.test.js'
  ])
    .pipe(babel())
    .pipe(gulp.dest(`${DIST_PATH}/src/core`));

  gulp.src([
    './webpack/manifest-config.js',
  ])
    .pipe(gulp.dest(`${DIST_PATH}/webpack`));

  gulp.src([
    './bin/*.js'
  ])
    .pipe(babel())
    .pipe(gulp.dest(`${DIST_PATH}/bin`));

  // Copy config files to dist
  gulp.src([
    './config/*.{yaml,json}'
  ]).pipe(gulp.dest(`${DIST_PATH}/config`));
});

gulp.task('set-version', () => {
  return git.short((sha1) => {
    string_src('version', `${pjson.version}-${sha1}`)
      .pipe(gulp.dest(`${DIST_PATH}/`));
  });
});

gulp.task('zip', function () {
  return gulp
    .src([
      DIST_PATH
    ])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
});

function string_src(filename, string) {
  const src = require('stream').Readable({ objectMode: true });

  src._read = function () {
    this.push(new gutil.File({
      cwd: '',
      base: '',
      path: filename,
      contents: new Buffer(string)
    }));
    this.push(null);
  };

  return src;
}
