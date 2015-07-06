var gulp = require('gulp');
var paths = require('../paths');
var electron = require('electron-connect').server.create();

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch-electron', ['build'], function () {
  // start browser process
  electron.start();

  // restart browser process
  gulp.watch('./app/index.js', electron.restart);

  // restart renderer process
  gulp.watch(paths.source, ['build-system', electron.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', electron.reload]).on('change', reportChange);
  gulp.watch(paths.sass, ['build-css', electron.reload]).on('change', reportChange);
});
