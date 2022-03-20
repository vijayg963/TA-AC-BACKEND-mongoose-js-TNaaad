var express = require('express');
var mongoose = require('mongoose');

// Connect to the mongoose
mongoose.connect(
  'mongodb://localhost/code',
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

// Application
var app = express();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

// Port
app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
