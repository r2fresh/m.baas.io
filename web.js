var express = require('express');

var app = express.createServer(express.logger());

app.get('/',function(request, response){
	response.send('Hello World');
});

var port = process.env.PORT || 5000;
var node_env = process.env.NODE_ENV;
app.listen(port, function(){
	console.log("Node_env " + node_env);
	console.log("Listen on " + port);
})
