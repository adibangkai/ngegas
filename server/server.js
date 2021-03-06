const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage}=require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log("new user connected");
 
   socket.on('createMessage',(message,callback)=>{
      console.log('createMessage',message);
      io.emit('newMessage', generateMessage(message.text));
      callback('thist is from server');
   });

  socket.on('disconnect',() => {
    console.log('user disconenct');
  });
});

server.listen(port, () => {
  console.log(`Server is up port ${port}`)
});
