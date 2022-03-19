var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: Number,
  favorites: [String],
  marks: [Number],
  address: {
    village: String,
    city: String,
    state: String,
    pin: number,
    user: Schema.Types.ObjectId,
  },
});
