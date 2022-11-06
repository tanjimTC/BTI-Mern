var logFromConsole = require('./console.js');


logFromConsole.consoleLog('Hello World!');

var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! avciusafuowjf');
});

server.listen(3000, function() {
    console.log('Server listening on port 3000');
});