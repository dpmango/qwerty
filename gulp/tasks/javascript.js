var gulp = require('gulp');
var path = require('path');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglifyJs = require('gulp-uglify');
var babel = require('gulp-babel');
var config = require('../config');

gulp.task('javascript:vendor', function() {
  return gulp
    .src([
      path.resolve('bower_components', 'jquery/dist/jquery.min.js'),
      path.resolve('bower_components', 'svg4everybody/dist/svg4everybody.min.js'),
      path.resolve('bower_components', 'picturefill/dist/picturefill.min.js'),
      path.resolve('bower_components', 'viewport-units-buggyfill/viewport-units-buggyfill.js'),
      path.resolve('bower_components', 'swiper/dist/js/swiper.min.js'),
      path.resolve('bower_components', 'magnific-popup/dist/jquery.magnific-popup.min.js'),
      path.resolve('node_modules', 'aos/dist/aos.js'),
      path.resolve('bower_components', 'scrollMonitor/scrollMonitor.js'),
      path.resolve('bower_components', 'fullpage.js/vendors/scrolloverflow.js'),
      path.resolve('bower_components', 'fullpage.js/dist/jquery.fullpage.min.js'),
      path.resolve('bower_components', 'fullpage.js/dist/jquery.fullpage.extensions.min.js'),
      path.resolve('bower_components', 'jquery-validation/dist/jquery.validate.min.js'),
      path.resolve('bower_components', 'jquery-mask-plugin/dist/jquery.mask.min.js'),
      path.resolve('bower_components', 'jquery-selectric/public/jquery.selectric.min.js'),
      path.resolve('bower_components', 'barba.js/dist/barba.min.js'),
      path.resolve('bower_components', 'jquery-lazy/jquery.lazy.min.js'),
      path.resolve('bower_components', 'jquery-lazy/plugins/jquery.lazy.picture.min.js'),
      path.resolve('bower_components', 'sharer.js/sharer.min.js'),
      path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
      path.resolve('node_modules', 'gsap/src/minified/plugins/ScrollToPlugin.min.js'),
      config.src.js + '/vendor/**/*.js',
    ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('vendor.js'))
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('javascript:app', function() {
  return gulp
    .src([
      config.src.js + '/*.js',
      config.src.js + '/modules/**/*.js',
      config.src.components + '/**/*.js',
    ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('app.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      }),
    )
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('javascript', ['javascript:vendor', 'javascript:app']);

gulp.task('javascript:watch', function() {
  gulp.watch(config.src.js + '/vendor/**/*.js', ['javascript:vendor']);
  gulp.watch(
    [
      config.src.components + '/**/*.js',
      config.src.js + '/modules/**/*.js',
      config.src.js + '/*.js',
    ],
    ['javascript:app'],
  );
});
