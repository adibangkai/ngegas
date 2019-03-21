var socket = io();

socket.on('connect', () => {
  console.log('connected');
});

socket.on('disconnect',() => {
  console.log('dc from server');
});


socket.on('newMessage',function (message){
  console.log('newMessage',message);
  var li = jQuery('<li class="media"><a href="#" class="pull-left"><img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="rounded-circle"></a></li>');
  li.text(`${message.text}`);

  jQuery('#messages').prepend(li);
});


jQuery('#message-form').on('submit',function(e) {
  e.preventDefault();
  var messageTextbox = jQuery('[name=message]')
  socket.emit('createMessage', {
    text:messageTextbox.val()
  },function(){
    messageTextbox.val('')
  });
});
