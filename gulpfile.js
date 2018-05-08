const gulp = require('gulp');
const git = require('git-rev');
const gutil = require('gulp-util');
const clean = require('gulp-clean');

const pjson = require('./package.json');


const DIST_PATH = './dist';

gulp.task('prod',
  [
    'clean-prod',
    'set-version'
  ]
);

gulp.task('clean-prod', () => {
  return gulp.src(DIST_PATH).pipe(clean());
});

gulp.task('set-version', () => {
  git.short((sha1) => {
    string_src('version', `${pjson.version}-${sha1}`)
      .pipe(gulp.dest(`${DIST_PATH}/`));
  });
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

