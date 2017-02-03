var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.get('/ping', function (req, res) {
  res.send('PONG!')
});

app.post('/sleep/:timer', function(req, res) {
  setTimeout( function () {
    console.log(req.body);
    res.status(200).json(req.body);
  } , req.params.timer);
});

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
