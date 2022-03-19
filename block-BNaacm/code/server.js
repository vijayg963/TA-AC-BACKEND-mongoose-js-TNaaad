var express = require('express');
var mongoose = require('mongoose');

var user = require('User');

// connect to the mongoose
mongoose.connect(
  'mongodb://localhost/code',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

// Applications
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
