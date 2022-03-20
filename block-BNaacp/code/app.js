var express = require('express');
var mongoose = require('mongoose');
const { updateMany } = require('./modal/user');
const User = require('./modal/user');

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

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

// insert/create route for creating user
app.post('/user', (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});

// read or find route
app.get('/user', (req, res) => {
  User.find({}, (err, user) => {
    console.log(err, user);
    res.json({ users: user });
  });
});

app.get('/user', (req, res) => {
  User.findOne({ name: 'kushal' }, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});

app.get('/user/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});

// update route
app.put('/user/:id', (req, res) => {
  var id = req.params.id;
  console.log(req.body);
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

// delete route for deleting a user using id
app.delete('/user/id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send(`${user.name}user deleted`);
  });
});

app.listen(4000, () => {
  console.log('Port is listing for 4k');
});
