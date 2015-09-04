'use strict';

import gulp from 'gulp';
import { watch as config } from '../config';

gulp.task('watch', ['build', 'browserSync'], () => {
  gulp.watch(config.js,     ['browserify']);
  gulp.watch(config.sass,   ['sass']);
  gulp.watch(config.html,   ['html']);
});
