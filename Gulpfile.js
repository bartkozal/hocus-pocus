var del       = require('del'),
    sequence  = require('run-sequence'),
    highlight = require('highlight.js'),
    gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    file      = require('gulp-file'),
    ghPages   = require('gulp-gh-pages'),
    markdown  = require('gulp-markdown'),
    rename    = require('gulp-rename'),
    sass      = require('gulp-sass'),
    util      = require('gulp-util');

var paths = {
      sass: ['docs/template/scss/*.scss', 'scss/*.scss', 'hocus-pocus.scss'],
  markdown: ['README.md', 'docs/*.md'],
  template: ['docs/template/index.html', 'docs/template/tag/*.tag']
};

gulp.task('sass', function() {
  return gulp.src('docs/template/scss/docs.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('markdown', function() {
  return gulp.src(['README.md', 'docs/*.md'])
    .pipe(rename(function(path) {
      if (path.basename === 'README') path.basename = 'home';
    }))
    .pipe(markdown({
      highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang]).value;
      }
    }))
    .pipe(gulp.dest('build/html'))
    .pipe(connect.reload());
});

gulp.task('img', function() {
  return gulp.src('docs/template/img/*.png')
    .pipe(gulp.dest('build/img'));
});

gulp.task('tag', function() {
  return gulp.src('docs/template/tag/*.tag')
    .pipe(gulp.dest('build/tag'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('docs/template/index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.markdown, ['markdown']);
  gulp.watch(paths.template, ['template']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

gulp.task('template', ['img', 'tag', 'html']);
gulp.task('build', ['sass', 'markdown', 'template']);
gulp.task('default', ['serve']);

gulp.task('serve', function(callback) {
  sequence('clean', 'build', ['watch', 'connect'], callback);
});

gulp.task('publish', function(callback) {
  sequence('clean', 'build', 'deploy', callback);
});
