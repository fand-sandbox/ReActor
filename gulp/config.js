'use strict';

import path from 'path';

const BASE_DIR = __dirname + '/../';
const BASE = (p) => path.join(BASE_DIR, p);

export default {

  browserify : {
    src  : BASE('src/js/index.js'),
    dst  : BASE('public/js'),
    name : 'index.js',
  },

  sass : {
    src : BASE('src/scss/**/*.scss'),
    dst : BASE('public/css'),
  },

  html : {
    src : BASE('src/**/*.html'),
    dst : BASE('public'),
  },

  watch : {
    js   : BASE('src/js/**/*.js'),
    sass : BASE('src/scss/**/*.scss'),
    html : BASE('src/**/*.html'),
  },

  serve : {
    app : {
      name   : 'ReAkka',
      script : BASE('script/serve.sh'),
    }
  },

  browserSync : {
    proxy: 'localhost:3000',
  },

};
