var socket = io();

socket.on('connect', () => {
  console.log('connected');

 
});

socket.on('disconnect',() => {
  console.log('dc from server');
});

socket.on('newMessage',function (message){
  console.log('newMessage',message);
})
