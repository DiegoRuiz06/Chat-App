const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg));
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});