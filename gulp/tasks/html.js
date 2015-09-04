'use strict';

import gulp from 'gulp';
import { html as config } from '../config';

// HTML
export function html () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dst));
}
