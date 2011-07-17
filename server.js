var express = require('express');

var app = express.createServer();

app.configure(function() {
  app.use(express.static(__dirname + '/'));
});

app.listen(1337);

io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
  socket.on('msg', function(msg) {
    socket.broadcast.emit('msg', socket.id + ': ' + msg);
  });
});

console.log('Server started at http://localhost:1337');
