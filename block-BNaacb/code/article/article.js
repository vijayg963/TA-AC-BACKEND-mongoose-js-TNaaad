var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title: String,
  description: String,
  articleNumber: Number,
});
