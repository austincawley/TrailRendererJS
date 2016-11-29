/**
 * Created by austin on 11/28/16.
 */

const gulp = require('gulp');
const mochaPhantomJS = require('gulp-mocha-phantomjs');
const browserSync = require('browser-sync').create();

gulp.task('test', () => {
   return gulp.src('test/index.html')
       .pipe(mochaPhantomJS());
});

gulp.task('serve:test', () => {
        browserSync.init({
        notify: false,
        port: 8080,
        ui: false,
        server: {
            baseDir: 'test',
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});
