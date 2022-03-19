var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to the mongoose
mongoose.connect(
  'mongodb://localhost/sampale',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

// Application
var app = express();

// middleware
app.use(logger('dev'));

// route
app.get('/', (req, res, next) => {
  res.send('Welcome');
});

// error
app.use((err, req, res, next) => {
  res.send(err);
});

// port
app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
