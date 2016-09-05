var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var port = Number(process.env.PORT || 3000);

var started = new Date();

app.get('/', function (req, res) {
  res.send({ started: started,
  			uptime: (Date.now() - Number(started)) / 1000
   });
});


app.listen(port, function() {
    console.log('bot server started at the port', port);
});
