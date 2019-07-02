const {task, src, dest, parallel} = require('gulp');
const glob = require('glob');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');

// create task
function createTask(name) {
  const task = () => src(`./${name}/src.js`)
    .pipe(uglify())
    .pipe(replace(/^!(.+);$/, 'javascript:void($1)'))
    .pipe(rename({basename: 'bookmarklet'}))
    .pipe(dest(name));
  task.displayName = name;
  return task;
}

const targets = glob.sync('./*/src.js')
  .map(filepath => filepath.split('/')[1]);

targets.map(createTask).map(task);
task('default', parallel(targets));
