var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// create task
function makeTask(taskname, filename) {
    gulp.task(taskname, function() {
        return gulp.src(taskname + '/' + filename)
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.uglify())
            .pipe($.replace(/^!(.+);$/, 'javascript:void($1)'))
            .pipe($.rename({basename: 'bookmarklet'}))
            .pipe(gulp.dest(taskname));
    });
}

makeTask('co-meeting', 'fullscreen.js');
makeTask('booklog', 'amazon.js');
makeTask('librize', 'amazon.js');
makeTask('twitter', 'tweet.js');

