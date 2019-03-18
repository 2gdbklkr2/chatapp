var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*Get home page*/
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/*Print out the chat message event*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

/*Set up a port for our app to listen to*/
http.listen(7000, function(){
  console.log('Server started running on port 7000.');
});