var express = require('express');
var mongoose = require('mongoose');

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

app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
