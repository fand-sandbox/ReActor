'use strict';

import koa from 'koa.io';
const app = koa();

import serve from 'koa-static';

// koa middleware
app.use(serve(__dirname + '/public'));

// socket middleware
app.io.use(function* (next) {
  console.log('>>>>>>> connected');
  yield* next;
  console.log('<<<<<<<<<<<<< disconnected');
});

// router for socket event
app.io.route('increment', function* () {
  this.broadcast.emit('increment', {});
  this.emit('increment', {});
});
app.io.route('decrement', function* () {
  this.broadcast.emit('decrement', {});
  this.emit('decrement', {});
});

app.listen(3000);
console.log('listening on port 3000');
