var socket = io();

socket.on('connect', () => {
  console.log('connected');
});

socket.on('disconnect',() => {
  console.log('dc from server');
});


socket.on('newMessage',function (message){
  console.log('newMessage',message);
  var li = jQuery('<li></li>');
  li.text(` ${message.text}`);

  jQuery('#messages').append(li);
});

socket.emit('createMessage', {
  text:"test"
},function(data){
  console.log('got it',data);
});

jQuery('#message-form').on('submit',function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    text:jQuery('[name=message]').val()
  },function(){


  });
});
