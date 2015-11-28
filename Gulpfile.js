var del       = require('del'),
    highlight = require('highlight.js'),
    gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    file      = require('gulp-file'),
    ghPages   = require('gulp-gh-pages'),
    markdown  = require('gulp-markdown'),
    rename    = require('gulp-rename'),
    sass      = require('gulp-sass'),
    util      = require('gulp-util');

gulp.task('sass', function() {
  return gulp.src('docs/template/scss/docs.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', util.log))
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

gulp.task('template', function() {
  gulp.src('docs/template/img/*.png')
    .pipe(gulp.dest('build/img'));

  gulp.src('docs/template/tag/*.tag')
    .pipe(gulp.dest('build/tag'))
    .pipe(connect.reload());

  gulp.src('docs/template/index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('watch', function() {
  gulp.watch(['docs/template/scss/*.scss', 'scss/*.scss'], ['sass']);
  gulp.watch(['README.md', 'docs/*.md'], ['markdown']);
  gulp.watch(['docs/template/index.html', 'docs/template/tag/*.tag'], ['template']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('cname', function() {
  return file('CNAME', 'hocus-pocus.io', { src: true })
    .pipe(gulp.dest('build'));
});

gulp.task('deploy', function() {
  return gulp.src('build')
    .pipe(ghPages());
});

gulp.task('build', ['sass', 'markdown', 'template', 'cname']);
gulp.task('publish', ['clean', 'build', 'deploy']);
gulp.task('serve', ['clean', 'build', 'connect', 'watch']);
gulp.task('default', ['serve']);
