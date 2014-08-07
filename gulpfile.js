var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    replace    = require('gulp-replace'),
    uglify     = require('gulp-uglify');

// create task
function makeTask(taskname, filename) {
    gulp.task(taskname, function() {
        return gulp.src(taskname + '/' + filename)
            .pipe(uglify())
            .pipe(replace(/^!(.+);$/, 'javascript:void($1)'))
            .pipe(rename({basename: 'bookmarklet'}))
            .pipe(gulp.dest(taskname));
    });
}

makeTask('co-meeting', 'fullscreen.js');
makeTask('booklog', 'amazon.js');
makeTask('librize', 'amazon.js');

