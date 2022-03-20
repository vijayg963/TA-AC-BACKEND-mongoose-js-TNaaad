var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
