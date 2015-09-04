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
  // we tell the client to execute 'new message'
  var message = this.args[0];
  console.log('############ received!');
  console.log(this.args);
  console.log(arguments);
  this.broadcast.emit('increment', {});
  yield null;
});

app.listen(3000);
console.log('listening on port 3000');
