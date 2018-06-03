var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    order = require('gulp-order');

var jsSources = ['asset/js/*.js'],
    sassSources = ['asset/sass/*.scss'],
    htmlSources = ['**/*.html'],
    outputCSSDir = 'asset/css',
    outputJSDir = 'asset/js',
    outputDir = 'asset/dist';


gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({outputStyle: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest(outputCSSDir))
  .pipe(connect.reload())
});

gulp.task('js', function() {
	gulp
		.src(jsSources)
		.pipe(order([
			'asset/js/jquery.min.js',
			'asset/js/jquery.easing.1.3.js',
			'asset/js/bootstrap.min.js',
			'asset/js/jquery.waypoints.min.js',
			'asset/js/sticky.js',
			'asset/js/jquery.stellar.min.js',
			'asset/js/hoverIntent.js',
			'asset/js/superfish.js',
			'asset/js/jquery.magnific-popup.min.js',
			'asset/js/magnific-popup-options.js',
			'asset/js/google_map.js',
			'asset/js/main.js'
		], {base: './'}))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(outputDir))
		.pipe(uglify({mangle: false}))
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest(outputDir))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);