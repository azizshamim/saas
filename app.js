var express = require('express')
var app = express()

app.get('/ping', function (req, res) {
  res.send('PONG!')
});

app.post('/sleep/:timer', function(req, res) {
  setTimeout( function () {
    res.status(200).send(req.body);
  } , req.params.timer);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
